import RelationshipBindingReceipt from '/Framework/V1.0/Classes/Receipts/RelationshipBinding';

export default function isRelationshipBindingReceipt(u) {
	return (u instanceof RelationshipBindingReceipt);
}