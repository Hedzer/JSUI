import constructor from 'Framework/Classes/Data/constructor';

//classes
import Base from 'Framework/Classes/Base';

//mixins
import ExtensibleMixin from 'Framework/Mixins/Extensible';

class Data extends ExtensibleMixin(Base) {
	constructor(values) {
		super();
		constructor.call(this, values);
	}
}

export default Data;