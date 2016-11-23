import Extensible from 'Framework/Mixins/Extensible';

export default function isExtensible(u) {
	return (u instanceof Extensible);
}