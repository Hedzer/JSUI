
//Classes
import Collection from 'JSUI/Source/1.0.0/Classes/Core/Collection';

//TypeChecks
import isFunction from 'JSUI/Source/1.0.0/TypeChecks/isFunction';
import isJSUIFunction from 'JSUI/Source/1.0.0/TypeChecks/isJSUIFunction';

//Utilities
import exports from 'Parcello/exports';

export default function _string(property, value) {
	let results = new Collection();
	this.forEach((item) => {
		let old = item[property];
		item[property] = value;
		results.push({ item, property, old, value });
	});
	return results;	
}

exports(_string).as('JSUI/Source/1.0.0/Classes/Core/Collection/Handlers/Set/_string');
