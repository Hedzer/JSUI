
//Classes
import OnEventBoundReceipt from '/Framework/V1.0/Classes/Receipts/OnEventBound';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';
import isUOfType from '/Framework/V1.0/Utilities/TypeChecks/isUOfType';

export default function isUOnEventBoundReceipt(u) {
	return isUOfType(u, OnEventBoundReceipt);
}

exports(isUOnEventBoundReceipt).as('/Framework/V1.0/TypeChecks/isUOnEventBoundReceipt');
