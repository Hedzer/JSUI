import isStatic from '/Framework/V1.0/Constants/Keys/Mixins/Extensible/isStatic';

export default function isUExtensible(u) {
	return !!u[isStatic];
}