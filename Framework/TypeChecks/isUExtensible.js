import isUOfType from 'Framework/Utilities/TypeChecks/isUOfType';
import Extensible from 'Framework/Mixins/Extensible';

export default function isUExtensible(u) {
	return isUOfType(u, Extensible);
}