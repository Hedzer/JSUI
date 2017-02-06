import uid from '/Framework/V1.0/Utilities/General/uid';
let hasSymbol = (typeof Symbol == 'function');

export default function symbolish(name) {
	let id = uid();
	return (hasSymbol ? Symbol(name) : `Symbol(${name})@${id}`);
}