
//Classes
import Page from '/Framework/V1.0/Classes/Core/Page';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';
import isUOfType from '/Framework/V1.0/Utilities/TypeChecks/isUOfType';

export default function isUPage(u) {
	return isUOfType(u, Page);
}

exports(isUPage).as('/Framework/V1.0/TypeChecks/isUPage');
