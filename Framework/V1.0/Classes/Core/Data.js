
//symbols
import $private from '/Framework/V1.0/Constants/Keys/General/private';
import state from '/Framework/V1.0/Constants/Keys/General/state';

//classes
import Base from '/Framework/V1.0/Classes/Core/Base';

//mixins
import Extensible from '/Framework/V1.0/Mixins/Extensible';
import Eventful from '/Framework/V1.0/Mixins/Eventful';
import Stateful from '/Framework/V1.0/Mixins/Stateful';

//utilities
import extend from '/Framework/V1.0/Utilities/Objects/extend';

//typechecks
import isString from '/Framework/V1.0/TypeChecks/isString';
import isUndefined from '/Framework/V1.0/TypeChecks/isUndefined';
import isObject from '/Framework/V1.0/TypeChecks/isObject';

class Data extends Extensible(Eventful(Stateful(Base))) {
	constructor(values) {
		super();
		let defaults = this.constructor.defaults;
		defaults = (isObject(defaults) ? defaults : {});
		if (isObject(values)) {
			defaults = extend(defaults).with(values);
		}
		this[$private].state = defaults;
	}
	static get defaults() {
		return {};
	}
}

export default Data;