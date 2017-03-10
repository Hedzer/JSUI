import isInstance from '/Framework/V1.0/Constants/Keys/TypeChecks/Routable/isInstance';

export default function isRoutable(u) {
	return !!u[isInstance];
}