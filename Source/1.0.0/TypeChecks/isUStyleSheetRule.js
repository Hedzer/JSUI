
//Classes
import StyleSheetRule from 'JSUI/Source/1.0.0/Classes/Style/SheetRule';

//Utilities
import exports from 'Parcello/exports';
import isUOfType from 'JSUI/Source/1.0.0/Utilities/TypeChecks/isUOfType';

export default function isUStyleSheetRule(u) {
	return isUOfType(u, StyleSheetRule);
}

exports(isUStyleSheetRule).as('JSUI/Source/1.0.0/TypeChecks/isUStyleSheetRule');
