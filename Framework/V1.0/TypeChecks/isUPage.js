import Page from '/Framework/V1.0/Classes/Core/Page';
import isUOfType from '/Framework/V1.0/Utilities/TypeChecks/isUOfType';
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function isUPage(u) {
	return isUOfType(u, Page);
}

exports(isUPage).as('/Framework/V1.0/TypeChecks/isUPage');