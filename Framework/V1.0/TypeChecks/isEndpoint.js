
//Classes
import Endpoint from '/Framework/V1.0/Classes/Core/Endpoint';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

function isEndpoint(u) {
	return (u instanceof Endpoint);
}

export default isEndpoint;

exports(isEndpoint).as('/Framework/V1.0/TypeChecks/isEndpoint');
