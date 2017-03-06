import isUOfType from '/Framework/V1.0/Utilities/TypeChecks/isUOfType';
import Router from '/Framework/V1.0/Classes/Core/Router';

export default function isURouter(u) {
	return isUOfType(u, Router);
}