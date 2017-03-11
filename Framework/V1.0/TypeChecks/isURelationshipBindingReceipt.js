
//Classes
import RelationshipBindingReceipt from '/Framework/V1.0/Classes/Receipts/RelationshipBinding';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';
import isUOfType from '/Framework/V1.0/Utilities/TypeChecks/isUOfType';

export default function isURelationshipBindingReceipt(u) {
	return isUOfType(u, RelationshipBindingReceipt);
}

exports(isURelationshipBindingReceipt).as('/Framework/V1.0/TypeChecks/isURelationshipBindingReceipt');
