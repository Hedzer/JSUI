//Keys
import state from '/Framework/V1.0/Constants/Keys/General/state';

//classes
import Base from '/Framework/V1.0/Classes/Core/Base';

//mixins
import Privatelike from '/Framework/V1.0/Mixins/Privatelike';
import StatefulMixin from '/Framework/V1.0/Mixins/Stateful';

export default class Stateful extends StatefulMixin(Privatelike(Base)) {
	state() {
		return this[state].apply(this, arguments);
	}
}