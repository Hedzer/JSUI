let hasSymbol = (typeof Symbol == 'function');

export default function symbolOrString(name) {
	return (hasSymbol ? Symbol('private') : 'Symbol(private)');
}