import getHandledType from 'Framework/Classes/Element/getHandledType';
import unhandled from 'Framework/Classes/General/Handlers/unhandled';

import $private from 'Framework/Constants/Keys/General/private';
import on from 'Framework/Constants/Keys/General/on';
import trigger from 'Framework/Constants/Keys/General/trigger';

import On from 'Framework/Classes/Element/Handlers/On';
import Trigger from 'Framework/Classes/Element/Handlers/Trigger';
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