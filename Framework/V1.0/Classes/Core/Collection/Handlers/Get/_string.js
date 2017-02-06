import isFunction from '/Framework/V1.0/TypeChecks/isFunction';
import isJSUIFunction from '/Framework/V1.0/TypeChecks/isJSUIFunction';
import Collection from '/Framework/V1.0/Classes/Core/Collection';

export default function _string(property) {
	let results = new Collection();
	this.forEach((item) => {
		let value = item[property];
		results.push({item, value});
	});
	return results;	
}