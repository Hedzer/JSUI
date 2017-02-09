//Keys
import on from '/Framework/V1.0/Constants/Keys/Eventful/on';
import trigger from '/Framework/V1.0/Constants/Keys/Eventful/trigger';

//classes
import Base from '/Framework/V1.0/Classes/Core/Base';

//mixins
import Privatelike from '/Framework/V1.0/Mixins/Privatelike';
import EventfulMixin from '/Framework/V1.0/Mixins/Eventful';

export default class Eventful extends EventfulMixin(Privatelike(Base)) {
	on() {
		return this[on].apply(this, arguments);
	}
	trigger() {
		return this[trigger].apply(this, arguments);
	}
}