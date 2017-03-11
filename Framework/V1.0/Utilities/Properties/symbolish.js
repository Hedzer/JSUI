
//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';
import uid from '/Framework/V1.0/Utilities/General/uid';

let hasSymbol = (typeof Symbol == 'function');
export default function symbolish(name) {
	let id = uid();
	return (hasSymbol ? Symbol(name) : `Symbol(${name})@${id}`);
}

exports(symbolish).as('/Framework/V1.0/Utilities/Properties/symbolish');
