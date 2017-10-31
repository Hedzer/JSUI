
//Classes
import Receipt from 'JSUI/Source/1.0.0/Classes/Core/Receipt';

//Constants
import $private from 'JSUI/Source/1.0.0/Constants/Keys/General/private';

//Mixins
import Enableable from 'JSUI/Source/1.0.0/Mixins/Enableable';

//Utilities
import exports from 'Parcello/exports';
import remove from 'JSUI/Source/1.0.0/Utilities/Events/remove';
import removeAll from 'JSUI/Source/1.0.0/Utilities/Events/removeAll';
import uid from 'JSUI/Source/1.0.0/Utilities/General/uid';

export default class OnEventBoundReceipt extends Receipt
	.implements(Enableable) {
	
	constructor(pool) {
		super();
		this[$private] = {
			uid: uid(),
		};
		this[$private].pool = pool;
	}

	//methods
	debounce(time) {
		let method = this.pool[this.uid];
		method.debounce(time);
		return this;
	}
	limit(count) {
		let method = this.pool[this.uid];
		method.limit = count;
		return this;
	}
	once() {
		return this.limit(1);
	}
	remove() {
		return remove.call(this);
	}
	removeAll() {
		return removeAll.call(this);
	}
	throttle(time) {
		let method = this.pool[this.uid];
		method.throttle(time);
		return this;
	}

	//properties
	get enabled() {
		let method = this.pool[this.uid];
		return method.enabled;
	}
	set enabled(v) {
		let method = this.pool[this.uid];
		method.enabled = !!v;
	}
	get pool() {
		return this[$private].pool;
	}
	set pool(v) {
		this[$private].pool = v;
	}
	get uid() {
		return this[$private].uid;
	}
	set uid(id) {
		this[$private].uid = id;
	}
}

exports(OnEventBoundReceipt).as('JSUI/Source/1.0.0/Classes/Receipts/OnEventBound');