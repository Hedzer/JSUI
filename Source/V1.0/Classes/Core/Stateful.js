
//Classes
import Class from '/JSUI/Source/V1.0/Classes/Core/Class';

//Constants
import state from '/JSUI/Source/V1.0/Constants/Keys/Stateful/state';

//Mixins
import Privatelike from '/JSUI/Source/V1.0/Mixins/Privatelike';
import Serializable from '/JSUI/Source/V1.0/Mixins/Serializable';
import StatefulMixin from '/JSUI/Source/V1.0/Mixins/Stateful';

//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

export default class Stateful extends Class
	.implements(
		Privatelike,
		StatefulMixin,
		Serializable
	) {

	//methods
	state() {
		return this[state].apply(this, arguments);
	}
}

exports(Stateful).as('/JSUI/Source/V1.0/Classes/Core/Stateful');
