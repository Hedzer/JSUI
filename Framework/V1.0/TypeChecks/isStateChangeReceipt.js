import StateChangeReceipt from '/Framework/V1.0/Classes/StateChangeReceipt';

export default function isStateChangeReceipt(u) {
	return (u instanceof StateChangeReceipt);
}