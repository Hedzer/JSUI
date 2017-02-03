import isInstance from '/Framework/V1.0/Constants/Keys/Mixins/Routable/isInstance';

export default function isRoutable(u) {
	return !!u[isInstance];
}