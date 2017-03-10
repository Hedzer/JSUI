
//Classes
import Collection from '/Framework/V1.0/Classes/Core/Collection';
import Receipt from '/Framework/V1.0/Classes/Core/Receipt';

//Constants
import $private from '/Framework/V1.0/Constants/Keys/General/private';

//Utilities
import define from '/Framework/V1.0/Utilities/Properties/addHiddenValue';
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default class CollectionWhereReceipt extends Receipt {
	constructor() {
		super();
		this[$private] = {
			selected: new Collection(),
			rejected: new Collection(),
		};
	}

	//properties
	get selected() {
		return this[$private].selected;
	}
	get rejected() {
		return this[$private].rejected;
	}
}

exports(CollectionWhereReceipt).as('/Framework/V1.0/Classes/Receipts/CollectionWhere');