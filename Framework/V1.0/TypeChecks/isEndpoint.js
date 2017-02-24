import Endpoint from '/Framework/V1.0/Classes/Core/Endpoint';

function isEndpoint(u) {
	return (u instanceof Endpoint);
}

export default isEndpoint;