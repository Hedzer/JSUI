
//Classes
import Base from '/Framework/V1.0/Classes/Core/Base';

//Constants
import $private from '/Framework/V1.0/Constants/Keys/General/private';
import state from '/Framework/V1.0/Constants/Keys/General/state';

//Mixins
import Eventful from '/Framework/V1.0/Mixins/Eventful';
import Extensible from '/Framework/V1.0/Mixins/Extensible';
import Stateful from '/Framework/V1.0/Mixins/Stateful';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';
import extend from '/Framework/V1.0/Utilities/Objects/extend';

//TypeChecks
import isObject from '/Framework/V1.0/TypeChecks/isObject';
import isString from '/Framework/V1.0/TypeChecks/isString';
import isUndefined from '/Framework/V1.0/TypeChecks/isUndefined';

class Data extends Base
	.implements(Stateful, Eventful, Extensible) {

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

exports(Data).as('/Framework/V1.0/Classes/Core/Data');
