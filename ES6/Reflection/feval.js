export function feval(code) {
	return (new Function(code))();
}