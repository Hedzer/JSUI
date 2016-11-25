import isFunction from 'Framework/TypeChecks/isFunction';
import isJSUIFunction from 'Framework/TypeChecks/isJSUIFunction';
import Collection from 'Framework/Classes/Collection';

export default function _string(property) {
	let results = new Collection();
	this.forEach((item) => {
		let value = item[property];
		results.push({item, value});
	});
	return results;	
}