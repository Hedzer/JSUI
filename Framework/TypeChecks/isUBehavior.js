import Behavior from 'Framework/Classes/Behavior';

export default function isUBehavior(u) {
	return !!(u && u.prototype && (u.prototype instanceof Behavior || u === Behavior) );
}