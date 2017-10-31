
//Classes
import RelationshipBindingReceipt from 'JSUI/Source/1.0.0/Classes/Receipts/RelationshipBinding';

//Utilities
import exports from 'Parcello/exports';

export default function isRelationshipBindingReceipt(u) {
	return (u instanceof RelationshipBindingReceipt);
}

exports(isRelationshipBindingReceipt).as('JSUI/Source/1.0.0/TypeChecks/isRelationshipBindingReceipt');
