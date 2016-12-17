import isInstance from 'Framework/Constants/Keys/Mixins/Privatelike/isInstance';

export default function isPrivatelike(u) {
	return !!u[isInstance];
}