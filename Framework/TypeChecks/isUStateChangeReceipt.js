import isUOfType from 'Framework/Utilities/TypeChecks/isUOfType';
import StateChangeReceipt from 'Framework/Classes/StateChangeReceipt';

export default function isUStateChangeReceipt(u) {
	return isUOfType(u, StateChangeReceipt);
}