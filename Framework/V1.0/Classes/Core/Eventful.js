
//Classes
import Base from '/Framework/V1.0/Classes/Core/Base';

//Constants
import on from '/Framework/V1.0/Constants/Keys/Eventful/on';
import trigger from '/Framework/V1.0/Constants/Keys/Eventful/trigger';

//Mixins
import EventfulMixin from '/Framework/V1.0/Mixins/Eventful';
import Stateful from '/Framework/V1.0/Classes/Core/Stateful';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default class Eventful extends EventfulMixin(Stateful) {
	on() {
		return this[on].apply(this, arguments);
	}
	trigger() {
		return this[trigger].apply(this, arguments);
	}
}

exports(Eventful).as('/Framework/V1.0/Classes/Core/Eventful');
