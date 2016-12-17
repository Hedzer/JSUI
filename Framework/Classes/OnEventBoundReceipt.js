import $private from 'Framework/Constants/Keys/General/private';
import uid from 'Framework/Utilities/General/uid';
import remove from 'Framework/Utilities/Events/remove';
import removeAll from 'Framework/Utilities/Events/removeAll';
import Receipt from 'Framework/Classes/Receipt';
import Enableable from 'Framework/Mixins/Enableable';

export default class OnEventBoundReceipt extends Enableable(Receipt) {
	constructor(pool) {
		super();
		this[$private] = {
			uid: uid()
		};
		this[$private].pool = pool;
	}
	get uid() {
		return this[$private].uid;
	}
	set uid(id) {
		this[$private].uid = id;
	}
	get pool() {
		return this[$private].pool;
	}
	set pool(v) {
		this[$private].pool = v;
	}
	remove() {
		return remove.call(this);
	}
	removeAll() {
		return removeAll.call(this);
	}
	debounce(time) {
		let method = this.pool[this.uid];
		method.debounce(time);
		return this;
	}
	throttle(time) {
		let method = this.pool[this.uid];
		method.throttle(time);
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
	get enabled() {
		let method = this.pool[this.uid];
		return method.enabled;
	}
	set enabled(v) {
		let method = this.pool[this.uid];
		method.enabled = !!v;
	}
}