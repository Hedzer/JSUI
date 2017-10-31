//Constants
import $private from 'JSUI/Source/1.0.0/Constants/Keys/General/private';
import add from 'JSUI/Source/1.0.0/Constants/Keys/Extensible/add';
import destructor from 'JSUI/Source/1.0.0/Constants/Keys/General/destructor';
import remove from 'JSUI/Source/1.0.0/Constants/Keys/Extensible/remove';
import state from 'JSUI/Source/1.0.0/Constants/Keys/Stateful/state';

//Mixins
import Eventful from 'JSUI/Source/1.0.0/Classes/Core/Eventful';
import ExtensibleMixin from 'JSUI/Source/1.0.0/Mixins/Extensible';

//Utilities
import exports from 'Parcello/exports';

export default class Extensible extends Eventful
	.implements(ExtensibleMixin) {
	
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

exports(Extensible).as('JSUI/Source/1.0.0/Classes/Core/Extensible');
