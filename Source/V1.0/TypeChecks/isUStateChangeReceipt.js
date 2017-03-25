
//Classes
import StateChangeReceipt from '/JSUI/Source/V1.0/Classes/Receipts/StateChange';

//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';
import isUOfType from '/JSUI/Source/V1.0/Utilities/TypeChecks/isUOfType';

export default function isUStateChangeReceipt(u) {
	return isUOfType(u, StateChangeReceipt);
}

exports(isUStateChangeReceipt).as('/JSUI/Source/V1.0/TypeChecks/isUStateChangeReceipt');
