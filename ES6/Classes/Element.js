import getHandledType from './Element/getHandledType';
import unhandled from '../TypeChecks/unhandled';
import isFunction from '../TypeChecks/isFunction';
import isArray from '../TypeChecks/isArray';
import isElement from '../TypeChecks/isElement';
import isEmptyString from '../TypeChecks/isEmptyString';

//constructor & destructor
import constructor from './Element/constructor';
import destructor from './Element/destructor';

//handlers
import Add from './Element/Handlers/Add';
import AddTo from './Element/Handlers/AddTo';
import Remove from './Element/Handlers/Remove';
import On from './Element/Handlers/On';
import Trigger from './Element/Handlers/Trigger';
import Find from './Element/Handlers/Find';
import With from './Element/Handlers/With';
import Do from './Element/Handlers/Do';
import Get from './Element/Handlers/Get';
import Set from './Element/Handlers/Set';
import Text from './Element/Handlers/Text';
import Attribute from './Element/Handlers/Attribute';

//classes
import Styleable from './Styleable';

export default class Element extends Styleable {
	constructor(tag){
		super(tag);
		constructor.call(this, tag);
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