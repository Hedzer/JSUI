
//Classes
import Endpoint from '/JSUI/Source/V1.0/Classes/Core/Endpoint';

//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

function isEndpoint(u) {
	return (u instanceof Endpoint);
}

export default isEndpoint;

exports(isEndpoint).as('/JSUI/Source/V1.0/TypeChecks/isEndpoint');
