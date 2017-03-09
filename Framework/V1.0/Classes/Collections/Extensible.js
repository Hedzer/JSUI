//Classes
import Collection from '/Framework/V1.0/Classes/Core/Collection';

//Constants
import $private from '/Framework/V1.0/Constants/Keys/General/private';
import add from '/Framework/V1.0/Constants/Keys/Extensible/add';
import destructor from '/Framework/V1.0/Constants/Keys/General/destructor';
import on from '/Framework/V1.0/Constants/Keys/Extensible/on';
import remove from '/Framework/V1.0/Constants/Keys/Extensible/remove';
import state from '/Framework/V1.0/Constants/Keys/General/state';
import trigger from '/Framework/V1.0/Constants/Keys/Extensible/trigger';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default class ExtensibleCollection extends Collection {
	get private() {
		return this.get($private);
	}
	add() {
		return this.add(add, arguments);
	}
	destructor() {
		return this.do(destructor, arguments);
	}
	on() {
		return this.on(on, arguments);
	}
	remove() {
		return this.do(remove, arguments);
	}
	state() {
		return this.do(state, arguments);
	}
	trigger() {
		return this.trigger(trigger, arguments);
	}
}
exports(ExtensibleCollection).as('/Framework/V1.0/Classes/Collections/Extensible');