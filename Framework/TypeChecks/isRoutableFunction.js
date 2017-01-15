import RoutableFunction from 'Framework/Classes/RoutableFunction';

export default function isRoutableFunction(u) {
	return (u instanceof RoutableFunction);
}