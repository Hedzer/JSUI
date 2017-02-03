import getHandledType from '/Framework/V1.0/Classes/Element/getHandledType';
import unhandled from '/Framework/V1.0/Classes/General/Handlers/unhandled';
import isFunction from '/Framework/V1.0/TypeChecks/isFunction';
import isArray from '/Framework/V1.0/TypeChecks/isArray';
import isElement from '/Framework/V1.0/TypeChecks/isElement';
import isEmptyString from '/Framework/V1.0/TypeChecks/isEmptyString';
import addClass from '/Framework/V1.0/Utilities/Elements/addClass';

//handlers
import Add from '/Framework/V1.0/Classes/Element/Handlers/Add';
import AddTo from '/Framework/V1.0/Classes/Element/Handlers/AddTo';
import Remove from '/Framework/V1.0/Classes/Element/Handlers/Remove';
import On from '/Framework/V1.0/Classes/Element/Handlers/On';
import Trigger from '/Framework/V1.0/Classes/Element/Handlers/Trigger';
import Find from '/Framework/V1.0/Classes/Element/Handlers/Find';
import Do from '/Framework/V1.0/Classes/Element/Handlers/Do';
import Get from '/Framework/V1.0/Classes/Element/Handlers/Get';
import Set from '/Framework/V1.0/Classes/Element/Handlers/Set';
import Text from '/Framework/V1.0/Classes/Element/Handlers/Text';
import Attribute from '/Framework/V1.0/Classes/Element/Handlers/Attribute';
import Class from '/Framework/V1.0/Classes/Element/Handlers/Class';

//classes
import Identity from '/Framework/V1.0/Classes/Identity';
import Styleable from '/Framework/V1.0/Classes/Styleable';

//Keys
import $private from '/Framework/V1.0/Constants/Keys/General/private';
import on from '/Framework/V1.0/Constants/Keys/General/on';
import trigger from '/Framework/V1.0/Constants/Keys/General/trigger';

import settings from '/Framework/V1.0/Constants/JSUI/settings';
import conHandler from '/Framework/V1.0/Classes/Element/Handlers/Constructor';

const identity = new Identity({
	class: 'Element',
	major: 1, minor: 0, patch: 0
});

export default class Element extends Styleable {
	constructor(tag){
		super(tag);
		this.identity = identity;
		//select the proper constructor action
		let type = getHandledType(tag);
		let action = conHandler[type];
		tag = (action || function(){
			return conHandler.string.call(this, 'div');
		}).call(this, tag);

		//set up ids
		this.element.uid = this.uid;

		//add references 
		let development = settings.Development;
		if (development.enabled && development.references) {
			this.element.JSUI = this;
		}
		this.on('Style.contextChanged', () => {
			//if not default, change the context of the child elements
			let context = this.Style.context;
			this.children((child) => {
				//allow context to only change once
				let childStyle = child.Style;
				childStyle.context = (childStyle.context === 'default' ? context : childStyle.context);
			});			
		});
	}
	[on](event, method) {
		let type = getHandledType(event);
		let action = On[type];
		return (action || unhandled).call(this, event, method);
	}
	[trigger](event, args) {
		let type = getHandledType(event);
		let action = Trigger[type];
		return (action || unhandled).call(this, event, args);
	}
	get identity() {
		return super.identity;
	}
	set identity(identity) {
		super.identity = identity;
		if (identity.namespace) {
			addClass(this.element, identity.namespace);
		}
		// else {} throw error here later
		if (identity.class) {
			addClass(this.element, identity.class);
		}
		// else {} also throw one here later
	}
	add(item) {
		let type = getHandledType(item);
		let action = Add[type];
		return (action || super.add || unhandled).call(this, item);
	}
	addTo(item) {
		let type = getHandledType(item);
		let action = AddTo[type];
		return (action || unhandled).call(this, item);
	}
	remove(item) {
		let type = getHandledType(item);
		let action = Remove[type];
		return (action || unhandled).call(this, item);
	}
	on() {
		return this[on].apply(this, arguments);
	}
	trigger() {
		return this[trigger].apply(this, arguments);
	}
	find(what) {
		let type = getHandledType(what);
		let action = Find[type];
		return (action || unhandled([])).call(this, what);
	}
	do(method, args) {
		let type = getHandledType(method);
		let action = Do[type];
		return (action || unhandled).call(this, method, args);
	}
	get(property) {
		let type = getHandledType(property);
		let action = Get[type];
		return (action || unhandled).call(this, property);
	}
	set(property, value) {
		let type = getHandledType(property);
		let action = Set[type];
		return (action || unhandled).call(this, property, value);
	}
	text(text) {
		let type = getHandledType(text);
		let action = Text[type];
		return (action || unhandled).call(this, text);
	}
	attribute(name, value) {
		if (!isElement(this.element) || isEmptyString(name)) { return; }
		let type = getHandledType(name);
		let isSet = (arguments.length > 1);
		let action = Attribute[(isSet ? 'Set' : 'Get')][type];
		return (action || unhandled).apply(this, [name, value]);
	}
	class(name) {
		let type = getHandledType(name);
		let action = Class[type];
		return (action || unhandled).call(this, name);
	}
	children(callback = () => { return true; }) {
		let results = [];
		if (this[$private] && this[$private].children){
			let children = this[$private].children;
			Object.keys(children).forEach((id) => {
				let child = children[id];
				if (child){
					if(callback(child, id)) {
						results.push(child);
					}
				}
			});
		}
		return results;
	}
	destructor() {
		let _element = this.element;
		let _private = this[$private];
		if (_element){
			let parent = _element.parentNode;
			if (isFunction(_element.remove)){
				_element.remove();
			} else if (parent && isFunction(parent.removeChild)){
				parent.removeChild(_element);
			}
		}
		let _style = this.style;
		if (_style && _style.Host){
			delete _style.Host;
		}
		let _parent = _private.parent;
		if (_parent){
			if (_private && _private.mapped){
				let map = _private.mapped[_parent.uid];
				if (isArray(map)){
					map.forEach((name) => {
						delete _parent[name];
					});
				}
			}
			if (_parent.children){
				delete _parent.children[this.uid];
			}
		}
		let _children = _private.children;
		if (_children){
			Object.keys(_children).forEach((key) => {
				let child = _children[key];
				if (!child){return;}
				if (isFunction(child.remove)){
					child.remove();
				}
				delete _children[key];
			});
		}

		//ensure GC picks em' up
		_element = null;
		_private = null;
		_parent = null;
		_children = null;
		return super.destructor();
	}
}