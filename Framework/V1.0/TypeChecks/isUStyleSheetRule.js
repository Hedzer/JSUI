
//Classes
import StyleSheetRule from '/Framework/V1.0/Classes/Style/SheetRule';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';
import isUOfType from '/Framework/V1.0/Utilities/TypeChecks/isUOfType';

export default function isUStyleSheetRule(u) {
	return isUOfType(u, StyleSheetRule);
}

exports(isUStyleSheetRule).as('/Framework/V1.0/TypeChecks/isUStyleSheetRule');
