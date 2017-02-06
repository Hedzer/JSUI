import isUOfType from '/Framework/V1.0/Utilities/TypeChecks/isUOfType';
import RelationshipBindingReceipt from '/Framework/V1.0/Classes/Receipts/RelationshipBinding';

export default function isURelationshipBindingReceipt(u) {
	return isUOfType(u, RelationshipBindingReceipt);
}