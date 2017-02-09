import isInstance from '/Framework/V1.0/Constants/Keys/Mixins/Eventful/isInstance';

export default function isExtensible(u) {
	return !!u[isInstance];
}