//Classes
import Collection from 'JSUI/Source/1.0.0/Classes/Core/Collection';

//Constants
import $private from 'JSUI/Source/1.0.0/Constants/Keys/General/private';
import add from 'JSUI/Source/1.0.0/Constants/Keys/Extensible/add';
import destructor from 'JSUI/Source/1.0.0/Constants/Keys/General/destructor';
import on from 'JSUI/Source/1.0.0/Constants/Keys/Extensible/on';
import remove from 'JSUI/Source/1.0.0/Constants/Keys/Extensible/remove';
import state from 'JSUI/Source/1.0.0/Constants/Keys/Stateful/state';
import trigger from 'JSUI/Source/1.0.0/Constants/Keys/Extensible/trigger';

//Utilities
import exports from 'Parcello/exports';

export default class ExtensibleCollection extends Collection {
	add() {
		return this.do(add, arguments);
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
		return this.do(trigger, arguments);
	}
}
exports(ExtensibleCollection).as('JSUI/Source/1.0.0/Classes/Collections/Extensible');