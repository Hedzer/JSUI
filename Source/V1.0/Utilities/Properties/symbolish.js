
//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';
import uid from '/JSUI/Source/V1.0/Utilities/General/uid';

let hasSymbol = (typeof Symbol == 'function');
export default function symbolish(name) {
	let id = uid();
	return (hasSymbol ? Symbol(name) : `Symbol(${name})@${id}`);
}

exports(symbolish).as('/JSUI/Source/V1.0/Utilities/Properties/symbolish');
