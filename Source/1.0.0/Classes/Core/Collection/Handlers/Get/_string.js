
//Classes
import Collection from 'JSUI/Source/1.0.0/Classes/Core/Collection';

//TypeChecks
import isFunction from 'JSUI/Source/1.0.0/TypeChecks/isFunction';
import isJSUIFunction from 'JSUI/Source/1.0.0/TypeChecks/isJSUIFunction';

//Utilities
import exports from 'Parcello/exports';

export default function _string(property) {
	let results = new Collection();

	this.forEach((item) => {
		let value = item[property];
		results.push({ item, value });
	});
	
	return results;	
}

exports(_string).as('JSUI/Source/1.0.0/Classes/Core/Collection/Handlers/Get/_string');
