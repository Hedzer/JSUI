import isUOfType from '/Framework/V1.0/Utilities/TypeChecks/isUOfType';
import Data from '/Framework/V1.0/Classes/Data';

export default function isUData(u) {
	return isUOfType(u, Data);
}