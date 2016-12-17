import $private from 'Framework/Constants/Keys/General/private';
import Receipt from 'Framework/Classes/Receipt';

export default class StateChangeReceipt extends Receipt {
	constructor(changes = {}) {
		super();
		this[$private] = changes;
	}
	get owner() {
		return this[$private].owner;
	}
	set owner(v) {
		this[$private].owner = v;
	}
	get property() {
		return this[$private].property;
	}
	set property(v) {
		this[$private].property = v;
	}
	get old() {
		return this[$private].old;
	}
	set old(v) {
		this[$private].old = v;
	}
	get new() {
		return this[$private].new;
	}
	set new(v) {
		this[$private].new = v;
	}
}