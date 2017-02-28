//Keys
import on from '/Framework/V1.0/Constants/Keys/Eventful/on';
import trigger from '/Framework/V1.0/Constants/Keys/Eventful/trigger';

//classes
import Base from '/Framework/V1.0/Classes/Core/Base';

//mixins
import Stateful from '/Framework/V1.0/Classes/Core/Stateful';
import EventfulMixin from '/Framework/V1.0/Mixins/Eventful';

export default class Eventful extends EventfulMixin(Stateful) {
	on() {
		return this[on].apply(this, arguments);
	}
	trigger() {
		return this[trigger].apply(this, arguments);
	}
}