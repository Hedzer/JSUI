
//Utilities
import exports from 'Parcello/exports';

export default function _undefined() {
	let results = [];
	this.children(function(child) {
		results.push(child);
	});
	return results;
}

exports(_undefined).as('JSUI/Source/1.0.0/Classes/Core/Element/Handlers/Find/_undefined');
