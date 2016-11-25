import isFunction from 'Framework/TypeChecks/isFunction';
import isJSUIFunction from 'Framework/TypeChecks/isJSUIFunction';
import Collection from 'Framework/Classes/Collection';

export default function _string(command, args) {
	let results = new Collection();
	this.forEach((item) => {
		let method = item[command];
		if (isFunction(method) || isJSUIFunction(method)) {
			results.push({
				item: item,
				value: method.apply(item, args)
			});
			return;
		}
		results.push(undefined);
	});
	return results;	
}