
//Classes
import RelationshipBindingReceipt from '/Framework/V1.0/Classes/Receipts/RelationshipBinding';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function isRelationshipBindingReceipt(u) {
	return (u instanceof RelationshipBindingReceipt);
}

exports(isRelationshipBindingReceipt).as('/Framework/V1.0/TypeChecks/isRelationshipBindingReceipt');
