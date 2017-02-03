import Collection from '/Framework/V1.0/Classes/Collection';

//Keys
import $private from '/Framework/V1.0/Constants/Keys/General/private';
import state from '/Framework/V1.0/Constants/Keys/General/state';
import destructor from '/Framework/V1.0/Constants/Keys/General/destructor';

import on from '/Framework/V1.0/Constants/Keys/Extensible/on';
import trigger from '/Framework/V1.0/Constants/Keys/Extensible/trigger';
import add from '/Framework/V1.0/Constants/Keys/Extensible/add';
import remove from '/Framework/V1.0/Constants/Keys/Extensible/remove';

export default class ExtensibleCollection extends Collection {
	get private() {
		return this.get($private);
	}
	state() {
		return this.do(state, arguments);
	}
	on() {
		return this.on(on, arguments);
	}
	trigger() {
		return this.trigger(trigger, arguments);
	}
	add() {
		return this.add(add, arguments);
	}
	remove() {
		return this.do(remove, arguments);
	}
	destructor() {
		return this.do(destructor, arguments);
	}
}