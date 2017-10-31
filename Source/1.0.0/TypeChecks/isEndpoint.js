
//Classes
import Endpoint from 'JSUI/Source/1.0.0/Classes/Core/Endpoint';

//Utilities
import exports from 'Parcello/exports';

function isEndpoint(u) {
	return (u instanceof Endpoint);
}

export default isEndpoint;

exports(isEndpoint).as('JSUI/Source/1.0.0/TypeChecks/isEndpoint');
