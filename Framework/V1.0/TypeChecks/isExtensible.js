import isInstance from '/Framework/V1.0/Constants/Keys/TypeChecks/Extensible/isInstance';

export default function isExtensible(u) {
	return !!u[isInstance];
}