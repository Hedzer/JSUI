import uid from 'Framework/Utilities/General/uid';
let hasSymbol = (typeof Symbol == 'function');

export default function symbolOrString(name) {
	let id = uid();
	return (hasSymbol ? Symbol(name) : `Symbol(${name})@${id}`);
}