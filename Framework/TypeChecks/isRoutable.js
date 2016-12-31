import isInstance from 'Framework/Constants/Keys/Mixins/Routable/isInstance';

export default function isRoutable(u) {
	return !!u[isInstance];
}