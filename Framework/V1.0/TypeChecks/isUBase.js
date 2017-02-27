import isUOfType from '/Framework/V1.0/Utilities/TypeChecks/isUOfType';
import Base from '/Framework/V1.0/Classes/Core/Base';

export default function isUBase(u) {
	return isUOfType(u, Base);
}