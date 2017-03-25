
//Classes
import Page from '/JSUI/Source/V1.0/Classes/Core/Page';

//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';
import isUOfType from '/JSUI/Source/V1.0/Utilities/TypeChecks/isUOfType';

export default function isUPage(u) {
	return isUOfType(u, Page);
}

exports(isUPage).as('/JSUI/Source/V1.0/TypeChecks/isUPage');
