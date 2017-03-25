
//Classes
import StyleSheetRule from '/JSUI/Source/V1.0/Classes/Style/SheetRule';

//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';
import isUOfType from '/JSUI/Source/V1.0/Utilities/TypeChecks/isUOfType';

export default function isUStyleSheetRule(u) {
	return isUOfType(u, StyleSheetRule);
}

exports(isUStyleSheetRule).as('/JSUI/Source/V1.0/TypeChecks/isUStyleSheetRule');
