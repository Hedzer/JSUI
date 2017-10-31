
//Utilities
import exports from 'Parcello/exports';
import uid from 'JSUI/Source/1.0.0/Utilities/General/uid';

let hasSymbol = (typeof Symbol == 'function');
export default function symbolish(name) {
	let id = uid();
	return (hasSymbol ? Symbol(name) : `Symbol(${name})@${id}`);
}

exports(symbolish).as('JSUI/Source/1.0.0/Utilities/Properties/symbolish');
