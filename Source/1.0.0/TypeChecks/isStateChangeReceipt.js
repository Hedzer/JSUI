
//Classes
import StateChangeReceipt from '/JSUI/Source/1.0.0/Classes/Receipts/StateChange';

//Utilities
import exports from '/JSUI/Source/1.0.0/Utilities/Dependencies/exports';

export default function isStateChangeReceipt(u) {
	return (u instanceof StateChangeReceipt);
}

exports(isStateChangeReceipt).as('/JSUI/Source/1.0.0/TypeChecks/isStateChangeReceipt');
