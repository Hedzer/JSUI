
//Classes
import Collection from '/JSUI/Source/V1.0/Classes/Core/Collection';

//TypeChecks
import isFunction from '/JSUI/Source/V1.0/TypeChecks/isFunction';
import isJSUIFunction from '/JSUI/Source/V1.0/TypeChecks/isJSUIFunction';

//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

export default function _string(property) {
	let results = new Collection();

	this.forEach((item) => {
		let value = item[property];
		results.push({ item, value });
	});
	
	return results;	
}

exports(_string).as('/JSUI/Source/V1.0/Classes/Core/Collection/Handlers/Get/_string');
