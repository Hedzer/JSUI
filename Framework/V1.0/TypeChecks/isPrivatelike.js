import isInstance from '/Framework/V1.0/Constants/Keys/Mixins/Privatelike/isInstance';

export default function isPrivatelike(u) {
	return !!u[isInstance];
}