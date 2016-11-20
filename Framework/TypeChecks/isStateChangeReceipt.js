import StateChangeReceipt from 'Framework/Classes/StateChangeReceipt';

export default function isStateChangeReceipt(u) {
	return (u instanceof StateChangeReceipt);
}