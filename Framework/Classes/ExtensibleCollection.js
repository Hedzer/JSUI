import Collection from 'Framework/Classes/Collection';

//Keys
import $private from 'Framework/Constants/Keys/General/private';
import state from 'Framework/Constants/Keys/General/state';
import destructor from 'Framework/Constants/Keys/General/destructor';

import on from 'Framework/Constants/Keys/Extensible/on';
import trigger from 'Framework/Constants/Keys/Extensible/trigger';
import add from 'Framework/Constants/Keys/Extensible/add';
import remove from 'Framework/Constants/Keys/Extensible/remove';

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