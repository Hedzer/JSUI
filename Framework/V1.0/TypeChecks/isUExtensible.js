import isPrototype from '/Framework/V1.0/Constants/Keys/Mixins/Extensible/isPrototype';

export default function isUExtensible(u) {
	return !!u[isPrototype];
}