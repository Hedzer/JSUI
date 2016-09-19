import isFunction from 'Framework/TypeChecks/isFunction';

export default function _string(command, args) {
	var results = [];
	this.forEach((item) => {
		if (isFunction(item[command])) {
			results.push(item[command].apply(item, args));
			return;
		}
		results.push(undefined);
	});
	return results;	
}