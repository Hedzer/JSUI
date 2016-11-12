import isUOfType from 'Framework/Utilities/TypeChecks/isUOfType';
import Data from 'Framework/Classes/Data';

export default function isUData(u) {
	return isUOfType(u, Data);
}