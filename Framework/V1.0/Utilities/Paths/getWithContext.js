
//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';
import get from '/Framework/V1.0/Utilities/Paths/get';

export default function getWithContext(obj, path) {
	let parts = path.substring(1).split('.');
	if (!parts.length) { return; }
	if (parts.length === 1) {
		return {
			context: obj,
			property: parts[0],
		};
	}
	let tail = parts.splice(parts.length - 1, 1);
	let reference = get(obj, parts);
	if (reference) {
		return {
			context: reference,
			property: tail[0],
		};
	}
	return false;
}

exports(getWithContext).as('/Framework/V1.0/Utilities/Paths/getWithContext');
