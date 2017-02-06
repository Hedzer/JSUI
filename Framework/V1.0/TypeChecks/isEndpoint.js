import Endpoint from '/Framework/V1.0/Classes/Core/Endpoint';

export default function isEndpoint(u) {
	return (u instanceof Endpoint);
}