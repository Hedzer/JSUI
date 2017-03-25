
//Classes
import RelationshipBindingReceipt from '/JSUI/Source/V1.0/Classes/Receipts/RelationshipBinding';

//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

export default function isRelationshipBindingReceipt(u) {
	return (u instanceof RelationshipBindingReceipt);
}

exports(isRelationshipBindingReceipt).as('/JSUI/Source/V1.0/TypeChecks/isRelationshipBindingReceipt');
