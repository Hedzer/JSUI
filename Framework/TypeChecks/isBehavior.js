import { default as Behavior } from 'Framework/Classes/Behavior';

export default function isBehavior(u) {
	return (u instanceof Behavior);
}