//Keys
import $private from 'Framework/Constants/Keys/General/private';
import state from 'Framework/Constants/Keys/General/state';
import destructor from 'Framework/Constants/Keys/General/destructor';

import on from 'Framework/Constants/Keys/Extensible/on';
import trigger from 'Framework/Constants/Keys/Extensible/trigger';
import add from 'Framework/Constants/Keys/Extensible/add';
import remove from 'Framework/Constants/Keys/Extensible/remove';

//classes
import Base from 'Framework/Classes/Base';

//mixins
import Privatelike from 'Framework/Mixins/Privatelike';
import ExtensibleMixin from 'Framework/Mixins/Extensible';

export default class Extensible extends ExtensibleMixin(Privatelike(Base)) {
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
}