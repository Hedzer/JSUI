import StateChangeReceipt from '/Framework/V1.0/Classes/Receipts/StateChange';

export default function isStateChangeReceipt(u) {
	return (u instanceof StateChangeReceipt);
}