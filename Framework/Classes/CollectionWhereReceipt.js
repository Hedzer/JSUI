import $private from 'Framework/Constants/Keys/General/private';
import Receipt from 'Framework/Classes/Receipt';
import define from 'Framework/Utilities/Properties/addHiddenValue';
import Collection from 'Framework/Classes/Collection';

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