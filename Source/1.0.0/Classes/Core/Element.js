
//Classes
import Identity from 'JSUI/Source/1.0.0/Classes/Core/Identity';
import Styleable from 'JSUI/Source/1.0.0/Classes/Core/Styleable';

//Handlers
import Add from 'JSUI/Source/1.0.0/Classes/Core/Element/Handlers/Add';
import AddTo from 'JSUI/Source/1.0.0/Classes/Core/Element/Handlers/AddTo';
import Attribute from 'JSUI/Source/1.0.0/Classes/Core/Element/Handlers/Attribute';
import Class from 'JSUI/Source/1.0.0/Classes/Core/Element/Handlers/Class';
import constructor from 'JSUI/Source/1.0.0/Classes/Core/Element/Handlers/Constructor';
import Do from 'JSUI/Source/1.0.0/Classes/Core/Element/Handlers/Do';
import Find from 'JSUI/Source/1.0.0/Classes/Core/Element/Handlers/Find';
import Get from 'JSUI/Source/1.0.0/Classes/Core/Element/Handlers/Get';
import getHandledType from 'JSUI/Source/1.0.0/Classes/Core/Element/getHandledType';
import On from 'JSUI/Source/1.0.0/Classes/Core/Element/Handlers/On';
import Remove from 'JSUI/Source/1.0.0/Classes/Core/Element/Handlers/Remove';
import Set from 'JSUI/Source/1.0.0/Classes/Core/Element/Handlers/Set';
import Text from 'JSUI/Source/1.0.0/Classes/Core/Element/Handlers/Text';
import Trigger from 'JSUI/Source/1.0.0/Classes/Core/Element/Handlers/Trigger';
import unhandled from 'JSUI/Source/1.0.0/Classes/Core/Handlers/unhandled';

//Constants
import $private from 'JSUI/Source/1.0.0/Constants/Keys/General/private';
import on from 'JSUI/Source/1.0.0/Constants/Keys/General/on';
import settings from 'JSUI/Source/1.0.0/Constants/settings';
import trigger from 'JSUI/Source/1.0.0/Constants/Keys/General/trigger';

//TypeChecks
import isArray from 'JSUI/Source/1.0.0/TypeChecks/isArray';
import isDOM from 'JSUI/Source/1.0.0/TypeChecks/isDOM';
import isEmptyString from 'JSUI/Source/1.0.0/TypeChecks/isEmptyString';
import isFunction from 'JSUI/Source/1.0.0/TypeChecks/isFunction';

//Utilities
import addClass from 'JSUI/Source/1.0.0/Utilities/Elements/addClass';
import exports from 'Parcello/exports';

const identity = new Identity({
	class: 'Element',
	major: 1, minor: 0, patch: 0,
});

export default class Element extends Styleable {

	constructor(tag){
		super(tag);
		this.identity = identity;
		//select the proper constructor action
		let type = getHandledType(tag);
		let action = constructor[type];
		tag = (action || function(){
			return constructor.string.call(this, 'div');
		}).call(this, tag);

		//set up ids
		this.element.uid = this.uid;

		//add references 
		let development = settings.Development;
		if (development.enabled && development.references) {
			this.element.JSUIElement = this;
		}

		this.construct(['structure', 'style', 'relationships']);
	}

	//methods
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
	attribute(name, value) {
		if (!isDOM(this.element) || isEmptyString(name)) { return; }
		let type = getHandledType(name);
		let isSet = (arguments.length > 1);
		let action = Attribute[(isSet ? 'Set' : 'Get')][type];
		return (action || unhandled).apply(this, [name, value]);
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
	class(name) {
		let type = getHandledType(name);
		let action = Class[type];
		return (action || unhandled).call(this, name);
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
			let _$parent = _parent[$private];
			if (_$parent && _$parent.children){
				delete _$parent.children[this.uid];
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
	do(method, args) {
		let type = getHandledType(method);
		let action = Do[type];
		return (action || unhandled).call(this, method, args);
	}
	find(what) {
		let type = getHandledType(what);
		let action = Find[type];
		return (action || unhandled([])).call(this, what);
	}
	get(property) {
		let type = getHandledType(property);
		let action = Get[type];
		return (action || unhandled).call(this, property);
	}
	on() {
		return this[on].apply(this, arguments);
	}
	remove(item) {
		let type = getHandledType(item);
		let action = Remove[type];
		return (action || unhandled).call(this, item);
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
	trigger() {
		return this[trigger].apply(this, arguments);
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

	//properties
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

	//auto-run
	construct_structure() {}
	construct_style() {}
	construct_relationships() {}

	//pre-defined events
	onStyleContextChanged() {
		//if not default, change the context of the child elements
		let context = this.Style.context;
		this.children((child) => {
			//allow context to only change once
			let childStyle = child.Style;
			childStyle.context = (childStyle.context === 'default' ? context : childStyle.context);
		});	
	}
}

exports(Element).as('JSUI/Source/1.0.0/Classes/Core/Element');