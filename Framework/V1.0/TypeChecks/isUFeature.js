import isUOfType from '/Framework/V1.0/Utilities/TypeChecks/isUOfType';
import Feature from '/Framework/V1.0/Classes/Core/Feature';

export default function isUFeature(u) {
	return isUOfType(u, Feature);
}