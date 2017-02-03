import get from '/Framework/V1.0/Utilities/Paths/get';

export default function setter(obj, path, value) {
	let parts = path.substring(1).split('.');
	if (!parts.length) { return; }
	if (parts.length === 1) {
		obj[parts[0]] = value;
		return true;
	}
	let tail = parts.splice(parts.length - 1, 1);
	let reference = get(obj, parts);
	if (reference) {
		reference[tail[0]] = value;
		return true;
	}
	return false;
}