import isStatic from '/Framework/V1.0/Constants/Keys/TypeChecks/Routable/isStatic';

export default function isRoutable(u) {
	return !!u[isStatic];
}