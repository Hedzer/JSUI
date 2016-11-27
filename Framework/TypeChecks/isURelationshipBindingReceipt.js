import isUOfType from 'Framework/Utilities/TypeChecks/isUOfType';
import RelationshipBindingReceipt from 'Framework/Classes/RelationshipBindingReceipt';

export default function isURelationshipBindingReceipt(u) {
	return isUOfType(u, RelationshipBindingReceipt);
}