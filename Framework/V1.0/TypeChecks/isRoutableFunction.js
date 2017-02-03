import RoutableFunction from '/Framework/V1.0/Classes/RoutableFunction';

export default function isRoutableFunction(u) {
	return (u instanceof RoutableFunction);
}