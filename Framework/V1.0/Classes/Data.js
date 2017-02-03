import constructor from '/Framework/V1.0/Classes/Data/constructor';

//classes
import Base from '/Framework/V1.0/Classes/Base';

//mixins
import ExtensibleMixin from '/Framework/V1.0/Mixins/Extensible';

class Data extends ExtensibleMixin(Base) {
	constructor(values) {
		super();
		constructor.call(this, values);
	}
}

export default Data;