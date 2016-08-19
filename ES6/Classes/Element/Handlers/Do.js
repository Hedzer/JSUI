import isFunction from '../../../TypeChecks/isFunction';
import isArray from '../../../TypeChecks/isArray';
import getWithContext from '../../../Utilities/Paths/getWithContext';

function element_handler_do_array(collection) {
	var results = [];
	collection.forEach((item) => {
		results.push(this.do(item));
	});
	return results;	
}
function element_handler_do_object(macro) {
	var results = {};
	Object.keys(macro).forEach((command) => {
		results[command] = this.do(command, macro[command]);
	});
	return results;
}
function element_handler_do_string(command, args) {
	if (isFunction(this[command])) {
		if (isArray(args)) {
			return this[command].apply(this, args);
		}
		return this[command](args);
	}
}
function element_handler_do_path(command, args) {
	var path = getWithContext(this, command);
	if (!path || !path.context || !path.property) {return; }
	var method = path.context[path.property];
	if (isFunction(method)) {
		if (isArray(args)) {
			return method.apply(path.context, args);
		}
		return method.call(path.context, args);
	}
}

var Do = {
	array: element_handler_do_array,
	object: element_handler_do_object,
	string: element_handler_do_string,
	path: element_handler_do_path
};

export default Do;