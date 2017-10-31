
//Classes
import Class from 'JSUI/Source/1.0.0/Classes/Core/Class';

//Constants
import $private from 'JSUI/Source/1.0.0/Constants/Keys/General/private';
import state from 'JSUI/Source/1.0.0/Constants/Keys/Stateful/state';

//Mixins
import Privatelike from 'JSUI/Source/1.0.0/Mixins/Privatelike';
import Eventful from 'JSUI/Source/1.0.0/Mixins/Eventful';
import Extensible from 'JSUI/Source/1.0.0/Mixins/Extensible';
import Serializable from 'JSUI/Source/1.0.0/Mixins/Serializable';
import Stateful from 'JSUI/Source/1.0.0/Mixins/Stateful';

//TypeChecks
import isObject from 'JSUI/Source/1.0.0/TypeChecks/isObject';
import isString from 'JSUI/Source/1.0.0/TypeChecks/isString';
import isUndefined from 'JSUI/Source/1.0.0/TypeChecks/isUndefined';

//Utilities
import exports from 'Parcello/exports';
import extend from 'JSUI/Source/1.0.0/Utilities/Objects/extend';

class Data extends Class
	.implements(
		Privatelike,
		Stateful,
		Serializable,
		Eventful,
		Extensible
	) {

	constructor(values) {
		super();
		let defaults = this.constructor.defaults;
		defaults = (isObject(defaults) ? defaults : {});
		if (isObject(values)) {
			defaults = extend(defaults).with(values);
		}
		this[$private].state = defaults;
	}

	//default values
	static get defaults() {
		return {};
	}
}

export default Data;

exports(Data).as('JSUI/Source/1.0.0/Classes/Core/Data');
