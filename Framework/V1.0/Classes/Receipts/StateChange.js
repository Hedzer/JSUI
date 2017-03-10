
//Classes
import Receipt from '/Framework/V1.0/Classes/Core/Receipt';

//Constants
import $private from '/Framework/V1.0/Constants/Keys/General/private';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default class StateChangeReceipt extends Receipt {
	constructor(changes = {}) {
		super();
		this[$private] = changes;
	}

	//properties
	get new() {
		return this[$private].new;
	}
	set new(v) {
		this[$private].new = v;
	}
	get old() {
		return this[$private].old;
	}
	set old(v) {
		this[$private].old = v;
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
}

exports(StateChangeReceipt).as('/Framework/V1.0/Classes/Receipts/StateChange');
