import isPrototype from 'Framework/Constants/Keys/Mixins/Extensible/isPrototype';

export default function isUExtensible(u) {
	return !!u[isPrototype];
}