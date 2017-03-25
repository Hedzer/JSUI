
//Classes
import Endpoint from '/JSUI/Source/V1.0/Classes/Core/Endpoint';

//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';
import isUOfType from '/JSUI/Source/V1.0/Utilities/TypeChecks/isUOfType';

export default function isUEndpoint(u) {
	return isUOfType(u, Endpoint);
}

exports(isUEndpoint).as('/JSUI/Source/V1.0/TypeChecks/isUEndpoint');
