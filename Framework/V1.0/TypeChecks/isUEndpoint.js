import Endpoint from '/Framework/V1.0/Classes/Core/Endpoint';
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';
import isUOfType from '/Framework/V1.0/Utilities/TypeChecks/isUOfType';

export default function isUEndpoint(u) {
	return isUOfType(u, Endpoint);
}

exports(isUEndpoint).as('/Framework/V1.0/TypeChecks/isUEndpoint');