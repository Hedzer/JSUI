
//Classes
import StateChangeReceipt from '/JSUI/Source/1.0.0/Classes/Receipts/StateChange';

//Utilities
import exports from '/JSUI/Source/1.0.0/Utilities/Dependencies/exports';
import isUOfType from '/JSUI/Source/1.0.0/Utilities/TypeChecks/isUOfType';

export default function isUStateChangeReceipt(u) {
	return isUOfType(u, StateChangeReceipt);
}

exports(isUStateChangeReceipt).as('/JSUI/Source/1.0.0/TypeChecks/isUStateChangeReceipt');
