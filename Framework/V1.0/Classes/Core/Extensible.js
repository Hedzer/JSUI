//Keys
import $private from '/Framework/V1.0/Constants/Keys/General/private';
import state from '/Framework/V1.0/Constants/Keys/General/state';
import destructor from '/Framework/V1.0/Constants/Keys/General/destructor';

import on from '/Framework/V1.0/Constants/Keys/Extensible/on';
import trigger from '/Framework/V1.0/Constants/Keys/Extensible/trigger';
import add from '/Framework/V1.0/Constants/Keys/Extensible/add';
import remove from '/Framework/V1.0/Constants/Keys/Extensible/remove';

//classes
import Base from '/Framework/V1.0/Classes/Core/Base';

//mixins
import Privatelike from '/Framework/V1.0/Mixins/Privatelike';
import ExtensibleMixin from '/Framework/V1.0/Mixins/Extensible';

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