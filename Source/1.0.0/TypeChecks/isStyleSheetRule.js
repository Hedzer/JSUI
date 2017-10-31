
//Classes
import StyleSheetRule from 'JSUI/Source/1.0.0/Classes/Style/SheetRule';

//Utilities
import exports from 'Parcello/exports';

export default function isStyleSheetRule(u) {
	return (u instanceof StyleSheetRule);
}

exports(isStyleSheetRule).as('JSUI/Source/1.0.0/TypeChecks/isStyleSheetRule');
