import isUOfType from '/Framework/V1.0/Utilities/TypeChecks/isUOfType';
import OnEventBoundReceipt from '/Framework/V1.0/Classes/OnEventBoundReceipt';

export default function isUOnEventBoundReceipt(u) {
	return isUOfType(u, OnEventBoundReceipt);
}