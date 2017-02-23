import Endpoint from '/Framework/V1.0/Classes/Core/Endpoint';
import TypeChecks from '/Framework/V1.0/JSUI/TypeChecks';

function isEndpoint(u) {
	return (u instanceof Endpoint);
}

//registering manually to solve cyclic dependencies
TypeChecks.isEndpoint = isEndpoint;

export default isEndpoint;