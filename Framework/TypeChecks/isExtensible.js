import isInstance from 'Framework/Constants/Keys/Mixins/Extensible/isInstance';

export default function isExtensible(u) {
	return !!u[isInstance];
}