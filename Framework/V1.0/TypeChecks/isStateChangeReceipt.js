
//Classes
import StateChangeReceipt from '/Framework/V1.0/Classes/Receipts/StateChange';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function isStateChangeReceipt(u) {
	return (u instanceof StateChangeReceipt);
}

exports(isStateChangeReceipt).as('/Framework/V1.0/TypeChecks/isStateChangeReceipt');
