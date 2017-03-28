
//Classes
import RelationshipBindingReceipt from '/JSUI/Source/1.0.0/Classes/Receipts/RelationshipBinding';

//Utilities
import exports from '/JSUI/Source/1.0.0/Utilities/Dependencies/exports';
import isUOfType from '/JSUI/Source/1.0.0/Utilities/TypeChecks/isUOfType';

export default function isURelationshipBindingReceipt(u) {
	return isUOfType(u, RelationshipBindingReceipt);
}

exports(isURelationshipBindingReceipt).as('/JSUI/Source/1.0.0/TypeChecks/isURelationshipBindingReceipt');
