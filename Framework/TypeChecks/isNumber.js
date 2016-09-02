export default function isNumber(u) {
	return (!isNaN(u) && typeof u === 'number');
}