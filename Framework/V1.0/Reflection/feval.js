export default function feval(code) {
	return (new Function(code))();
}