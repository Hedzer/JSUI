
//symbols
import $private from '/Framework/V1.0/Constants/Keys/General/private';

//classes
import Base from '/Framework/V1.0/Classes/Core/Base';

//mixins
import ExtensibleMixin from '/Framework/V1.0/Mixins/Extensible';

class Data extends ExtensibleMixin(Base) {
	constructor(values) {
		super();
		this[$private].state = values;
	}
}

export default Data;