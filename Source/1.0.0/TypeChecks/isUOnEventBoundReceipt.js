
//Classes
import OnEventBoundReceipt from 'JSUI/Source/1.0.0/Classes/Receipts/OnEventBound';

//Utilities
import exports from 'Parcello/exports';
import isUOfType from 'JSUI/Source/1.0.0/Utilities/TypeChecks/isUOfType';

export default function isUOnEventBoundReceipt(u) {
	return isUOfType(u, OnEventBoundReceipt);
}

exports(isUOnEventBoundReceipt).as('JSUI/Source/1.0.0/TypeChecks/isUOnEventBoundReceipt');
