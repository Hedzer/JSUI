//Constants
import $private from '/Framework/V1.0/Constants/Keys/General/private';
import add from '/Framework/V1.0/Constants/Keys/Extensible/add';
import destructor from '/Framework/V1.0/Constants/Keys/General/destructor';
import remove from '/Framework/V1.0/Constants/Keys/Extensible/remove';
import state from '/Framework/V1.0/Constants/Keys/Stateful/state';

//Classes
import Base from '/Framework/V1.0/Classes/Core/Base';

//Mixins
import Eventful from '/Framework/V1.0/Classes/Core/Eventful';
import ExtensibleMixin from '/Framework/V1.0/Mixins/Extensible';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default class Extensible extends ExtensibleMixin(Eventful) {
	
	//methods
	add() {
		return this[add].apply(this, arguments);
	}
	destructor() {
		return this[destructor].apply(this, arguments);
	}
	remove() {
		return this[remove].apply(this, arguments);
	}
	state() {
		return this[state].apply(this, arguments);
	}

	//properties
	get private() {
		return this[$private];
	}
}

exports(Extensible).as('/Framework/V1.0/Classes/Core/Extensible');
