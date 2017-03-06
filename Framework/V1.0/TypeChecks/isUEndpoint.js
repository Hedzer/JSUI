import isUOfType from '/Framework/V1.0/Utilities/TypeChecks/isUOfType';
import Endpoint from '/Framework/V1.0/Classes/Core/Endpoint';

export default function isUEndpoint(u) {
	return isUOfType(u, Endpoint);
}