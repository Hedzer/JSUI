
//Classes
import Base from '/Framework/V1.0/Classes/Core/Base';

//Constants
import state from '/Framework/V1.0/Constants/Keys/Stateful/state';

//Mixins
import Privatelike from '/Framework/V1.0/Mixins/Privatelike';
import Serializable from '/Framework/V1.0/Mixins/Serializable';
import StatefulMixin from '/Framework/V1.0/Mixins/Stateful';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default class Stateful extends Base
	.implements(
		Privatelike,
		StatefulMixin,
		Serializable,
	) {

	//methods
	state() {
		return this[state].apply(this, arguments);
	}
}

exports(Stateful).as('/Framework/V1.0/Classes/Core/Stateful');
