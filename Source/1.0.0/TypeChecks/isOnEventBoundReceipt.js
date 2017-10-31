
//Classes
import OnEventBoundReceipt from 'JSUI/Source/1.0.0/Classes/Receipts/OnEventBound';

//Utilities
import exports from 'Parcello/exports';

export default function isOnEventBoundReceipt(u) {
	return (u instanceof OnEventBoundReceipt);
}

exports(isOnEventBoundReceipt).as('JSUI/Source/1.0.0/TypeChecks/isOnEventBoundReceipt');
