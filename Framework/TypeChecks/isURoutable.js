import isStatic from 'Framework/Constants/Keys/Mixins/Routable/isStatic';

export default function isRoutable(u) {
	return !!u[isStatic];
}