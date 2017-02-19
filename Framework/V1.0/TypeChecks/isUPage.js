import isUOfType from '/Framework/V1.0/Utilities/TypeChecks/isUOfType';
import Page from '/Framework/V1.0/Classes/Core/Page';

export default function isUPage(u) {
	return isUOfType(u, Page);
}