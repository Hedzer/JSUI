import $private from '/Framework/V1.0/Constants/Keys/General/private';
import Receipt from '/Framework/V1.0/Classes/Core/Receipt';
import define from '/Framework/V1.0/Utilities/Properties/addHiddenValue';
import Collection from '/Framework/V1.0/Classes/Core/Collection';

export default class CollectionWhereReceipt extends Receipt {
	constructor() {
		super();
		this[$private] = {
			selected: new Collection(),
			rejected: new Collection()
		};
	}
	get selected() {
		return this[$private].selected;
	}
	get rejected() {
		return this[$private].rejected;
	}
}