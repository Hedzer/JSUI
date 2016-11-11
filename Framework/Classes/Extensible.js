//symbols
import $private from 'Framework/Constants/Symbols/General/private';
import state from 'Framework/Constants/Symbols/General/state';
import destructor from 'Framework/Constants/Symbols/General/destructor';

import on from 'Framework/Constants/Symbols/Extensible/on';
import trigger from 'Framework/Constants/Symbols/Extensible/trigger';
import add from 'Framework/Constants/Symbols/Extensible/add';
import remove from 'Framework/Constants/Symbols/Extensible/remove';

//mixins
import ExtensibleMixin from 'Framework/Mixins/Extensible';

export default ExtensibleMixin(class Extensible {
	get private() {
		return this[$private];
	}
	state() {
		return this[state].apply(this, arguments);
	}
	on() {
		return this[on].apply(this, arguments);
	}
	trigger() {
		return this[trigger].apply(this, arguments);
	}
	add() {
		return this[add].apply(this, arguments);
	}
	remove() {
		return this[remove].apply(this, arguments);
	}
	destructor() {
		return this[destructor].apply(this, arguments);
	}
})