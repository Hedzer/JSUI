
//symbols
import $private from '/Framework/V1.0/Constants/Keys/General/private';
import state from '/Framework/V1.0/Constants/Keys/General/state';

//classes
import Base from '/Framework/V1.0/Classes/Core/Base';

//mixins
import Extensible from '/Framework/V1.0/Mixins/Extensible';
import Eventful from '/Framework/V1.0/Mixins/Eventful';

//typechecks
import isString from '/Framework/V1.0/TypeChecks/isString';
import isUndefined from '/Framework/V1.0/TypeChecks/isUndefined';
import isObject from '/Framework/V1.0/TypeChecks/isObject';

class Data extends Extensible(Eventful(Base)) {
	constructor(values) {
		super();
		this[$private].state = (isObject(values) ? values : {});
	}
}

export default Data;