
//Classes
import StateChangeReceipt from '/Framework/V1.0/Classes/Receipts/StateChange';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';
import isUOfType from '/Framework/V1.0/Utilities/TypeChecks/isUOfType';

export default function isUStateChangeReceipt(u) {
	return isUOfType(u, StateChangeReceipt);
}

exports(isUStateChangeReceipt).as('/Framework/V1.0/TypeChecks/isUStateChangeReceipt');
