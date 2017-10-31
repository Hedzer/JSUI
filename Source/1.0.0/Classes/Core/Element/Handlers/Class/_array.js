
//Classes
import Collection from 'JSUI/Source/1.0.0/Classes/Core/Collection';
import ElementClassReceipt from 'JSUI/Source/1.0.0/Classes/Receipts/ElementClass';

//Utilities
import exports from 'Parcello/exports';

export default function _array(collection) {
	return new ElementClassReceipt(this.element, collection);
}

exports(_array).as('JSUI/Source/1.0.0/Classes/Core/Element/Handlers/Class/_array');
