import isUOfType from '/Framework/V1.0/Utilities/TypeChecks/isUOfType';
import StateChangeReceipt from '/Framework/V1.0/Classes/StateChangeReceipt';

export default function isUStateChangeReceipt(u) {
	return isUOfType(u, StateChangeReceipt);
}