import get from './get';

export function setter(obj, path, value) {
	var parts = path.substring(1).split('.');
	if (!parts.length) {return; }
	if (parts.length === 1) {
		obj[parts[0]] = value;
		return true;
	}
	var tail = parts.splice(parts.length - 1, 1);
	var reference = get(obj, parts);
	if (reference) {
		reference[tail[0]] = value;
		return true;
	}
	return false;
}