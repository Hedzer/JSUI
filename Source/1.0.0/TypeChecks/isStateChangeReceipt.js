
//Classes
import StateChangeReceipt from 'JSUI/Source/1.0.0/Classes/Receipts/StateChange';

//Utilities
import exports from 'Parcello/exports';

export default function isStateChangeReceipt(u) {
	return (u instanceof StateChangeReceipt);
}

exports(isStateChangeReceipt).as('JSUI/Source/1.0.0/TypeChecks/isStateChangeReceipt');
