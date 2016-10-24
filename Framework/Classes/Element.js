import getHandledType from 'Framework/Classes/Element/getHandledType';
import unhandled from 'Framework/Classes/General/Handlers/unhandled';
import isFunction from 'Framework/TypeChecks/isFunction';
import isArray from 'Framework/TypeChecks/isArray';
import isElement from 'Framework/TypeChecks/isElement';
import isEmptyString from 'Framework/TypeChecks/isEmptyString';
import addClass from 'Framework/Utilities/Elements/addClass';

//constructor & destructor
import constructor from 'Framework/Classes/Element/constructor';
import destructor from 'Framework/Classes/Element/destructor';

//handlers
import Add from 'Framework/Classes/Element/Handlers/Add';
import AddTo from 'Framework/Classes/Element/Handlers/AddTo';
import Remove from 'Framework/Classes/Element/Handlers/Remove';
import On from 'Framework/Classes/Element/Handlers/On';
import Trigger from 'Framework/Classes/Element/Handlers/Trigger';
import Find from 'Framework/Classes/Element/Handlers/Find';
import With from 'Framework/Classes/Element/Handlers/With';
import Do from 'Framework/Classes/Element/Handlers/Do';
import Get from 'Framework/Classes/Element/Handlers/Get';
import Set from 'Framework/Classes/Element/Handlers/Set';
import Text from 'Framework/Classes/Element/Handlers/Text';
import Attribute from 'Framework/Classes/Element/Handlers/Attribute';
import Class from 'Framework/Classes/Element/Handlers/Class';

//classes
import Identity from 'Framework/Classes/Identity';
import Styleable from 'Framework/Classes/Styleable';

const identity = new Identity({
	class: 'Element',
	major: 1, minor: 0, patch: 0
});

export default class Element extends Styleable {
	constructor(tag){
		super(tag);
		constructor.call(this, tag);
		this.identity = identity;
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
	on(event, method) {
		let type = getHandledType(event);
		let action = On[type];
		return (action || unhandled).call(this, event, method);
	}
	trigger(event, args) {
		let type = getHandledType(event);
		let action = Trigger[type];
		super.trigger(event, args);
		return (action || unhandled).call(this, event, args);
	}
	find(what) {
		let type = getHandledType(what);
		let action = Find[type];
		return (action || unhandled([])).call(this, what);
	}
	with(method, args) {
		let type = getHandledType(method);
		let action = With[type];
		return (action || unhandled).call(this, method, args);
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
		if (this.private && this.private.children){
			let children = this.private.children;
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
		destructor.call(this);
	}
}