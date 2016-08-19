import get from './get';

export function getWithContext(obj, path) {
	var parts = path.substring(1).split('.');
	if (!parts.length) {return; }
	if (parts.length === 1) {
		return {
			context: obj,
			property: parts[0]
		};
	}
	var tail = parts.splice(parts.length - 1, 1);
	var reference = get(obj, parts);
	if (reference) {
		return {
			context: reference,
			property: tail[0]
		};
	}
	return false;
}