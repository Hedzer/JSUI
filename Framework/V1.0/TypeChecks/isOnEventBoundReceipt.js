
//Classes
import OnEventBoundReceipt from '/Framework/V1.0/Classes/Receipts/OnEventBound';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function isOnEventBoundReceipt(u) {
	return (u instanceof OnEventBoundReceipt);
}

exports(isOnEventBoundReceipt).as('/Framework/V1.0/TypeChecks/isOnEventBoundReceipt');
