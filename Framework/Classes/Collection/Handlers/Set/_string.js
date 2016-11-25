import isFunction from 'Framework/TypeChecks/isFunction';
import isJSUIFunction from 'Framework/TypeChecks/isJSUIFunction';
import Collection from 'Framework/Classes/Collection';

export default function _string(property, value) {
	let results = new Collection();
	this.forEach((item) => {
		let old = item[property];
		item[property] = value;
		results.push({item, property, old, value});
	});
	return results;	
}