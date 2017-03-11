
//Classes
import StyleSheetRule from '/Framework/V1.0/Classes/Style/SheetRule';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function isStyleSheetRule(u) {
	return (u instanceof StyleSheetRule);
}

exports(isStyleSheetRule).as('/Framework/V1.0/TypeChecks/isStyleSheetRule');
