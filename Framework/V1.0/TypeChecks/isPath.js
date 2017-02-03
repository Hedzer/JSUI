export default function isPath(u) {
	return (typeof u === 'string' && u.length > 0 && u[0] === '@');
}