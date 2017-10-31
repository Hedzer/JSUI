
//Classes
import Collection from 'JSUI/Source/1.0.0/Classes/Core/Collection';
import Receipt from 'JSUI/Source/1.0.0/Classes/Core/Receipt';

//Constants
import $private from 'JSUI/Source/1.0.0/Constants/Keys/General/private';

//Utilities
import define from 'JSUI/Source/1.0.0/Utilities/Properties/addHiddenValue';
import exports from 'Parcello/exports';

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

exports(CollectionWhereReceipt).as('JSUI/Source/1.0.0/Classes/Receipts/CollectionWhere');