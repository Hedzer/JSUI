
//Classes
import OnEventBoundReceipt from '/JSUI/Source/V1.0/Classes/Receipts/OnEventBound';

//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';
import isUOfType from '/JSUI/Source/V1.0/Utilities/TypeChecks/isUOfType';

export default function isUOnEventBoundReceipt(u) {
	return isUOfType(u, OnEventBoundReceipt);
}

exports(isUOnEventBoundReceipt).as('/JSUI/Source/V1.0/TypeChecks/isUOnEventBoundReceipt');
