
//Classes
import OnEventBoundReceipt from '/JSUI/Source/V1.0/Classes/Receipts/OnEventBound';

//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

export default function isOnEventBoundReceipt(u) {
	return (u instanceof OnEventBoundReceipt);
}

exports(isOnEventBoundReceipt).as('/JSUI/Source/V1.0/TypeChecks/isOnEventBoundReceipt');
