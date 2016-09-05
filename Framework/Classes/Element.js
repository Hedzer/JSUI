import getHandledType from '/Framework/Classes/Element/getHandledType';
import unhandled from '/Framework/Classes/General/Handlers/unhandled';
import isFunction from '/Framework/TypeChecks/isFunction';
import isArray from '/Framework/TypeChecks/isArray';
import isElement from '/Framework/TypeChecks/isElement';
import isEmptyString from '/Framework/TypeChecks/isEmptyString';

//constructor & destructor
import constructor from '/Framework/Classes/Element/constructor';
import destructor from '/Framework/Classes/Element/destructor';

//handlers
import Add from '/Framework/Classes/Element/Handlers/Add';
import AddTo from '/Framework/Classes/Element/Handlers/AddTo';
import Remove from '/Framework/Classes/Element/Handlers/Remove';
import On from '/Framework/Classes/Element/Handlers/On';
import Trigger from '/Framework/Classes/Element/Handlers/Trigger';
import Find from '/Framework/Classes/Element/Handlers/Find';
import With from '/Framework/Classes/Element/Handlers/With';
import Do from '/Framework/Classes/Element/Handlers/Do';
import Get from '/Framework/Classes/Element/Handlers/Get';
import Set from '/Framework/Classes/Element/Handlers/Set';
import Text from '/Framework/Classes/Element/Handlers/Text';
import Attribute from '/Framework/Classes/Element/Handlers/Attribute';
import Class from '/Framework/Classes/Element/Handlers/Class';

//classes
import Styleable from '/Framework/Classes/Styleable';

export default class Element extends Styleable {
	constructor(tag){
		super(tag);
		constructor.call(this, tag);
		
		//if not default, change the context of the child elements
		this.on('contextChanged', () => {
			this.children((child) => {
				//allow context to only change once
				child.context = (child.context === 'default' ? this.context : child.context);
			});
		});
	}
	add(item) {
		var type = getHandledType(item);
		var action = Add[type];
		return (action || super.add || unhandled).call(this, item);
	}
	addTo(item) {
		var type = getHandledType(item);
		var action = AddTo[type];
		return (action || unhandled).call(this, item);
	}
	remove(item) {
		var type = getHandledType(item);
		var action = Remove[type];
		return (action || unhandled).call(this, item);
	}
	on(event, method) {
		var type = getHandledType(event);
		var action = On[type];
		return (action || unhandled).call(this, event, method);
	}
	trigger(event, args) {
		var type = getHandledType(event);
		var action = Trigger[type];
		super.trigger(event, args);
		return (action || unhandled).call(this, event, args);
	}
	find(what) {
		var type = getHandledType(what);
		var action = Find[type];
		return (action || unhandled([])).call(this, what);
	}
	with(method) {
		var type = getHandledType(method);
		var action = With[type];
		return (action || unhandled).call(this, method);
	}
	do(method, args) {
		var type = getHandledType(method);
		var action = Do[type];
		return (action || unhandled).call(this, method, args);
	}
	get(property) {
		var type = getHandledType(property);
		var action = Get[type];
		return (action || unhandled).call(this, property);
	}
	set(property, value) {
		var type = getHandledType(property);
		var action = Set[type];
		return (action || unhandled).call(this, property, value);
	}
	text(text) {
		var type = getHandledType(text);
		var action = Text[type];
		return (action || unhandled).call(this, text);
	}
	attribute(name, value) {
		if (!isElement(this.element) || isEmptyString(name)) {return; }
		var type = getHandledType(name);
		var isSet = (arguments.length > 1);
		var action = Attribute[(isSet ? 'Set' : 'Get')][type];
		return (action || unhandled).apply(this, [name, value]);
	}
	class(name) {
		var type = getHandledType(name);
		var action = Class[type];
		return (action || unhandled).call(this, name);
	}
	children(callback) {
		var results = [];
		if (isFunction(callback) && self.private && self.private.children){
			var children = self.private.children;
			Object.keys(children).forEach((id) => {
				var child = children[id];
				if (child){
					results.push(callback(child, id));
				}
			});
		}
		return results;
	}
	destructor() {
		destructor.call(this);
	}
}