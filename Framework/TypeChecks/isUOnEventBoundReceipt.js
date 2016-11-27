import isUOfType from 'Framework/Utilities/TypeChecks/isUOfType';
import OnEventBoundReceipt from 'Framework/Classes/OnEventBoundReceipt';

export default function isUOnEventBoundReceipt(u) {
	return isUOfType(u, OnEventBoundReceipt);
}