
//Classes
import Endpoint from 'JSUI/Source/1.0.0/Classes/Core/Endpoint';

//Utilities
import exports from 'Parcello/exports';
import isUOfType from 'JSUI/Source/1.0.0/Utilities/TypeChecks/isUOfType';

export default function isUEndpoint(u) {
	return isUOfType(u, Endpoint);
}

exports(isUEndpoint).as('JSUI/Source/1.0.0/TypeChecks/isUEndpoint');
