import Element from '../../Element';

function element_handler_find_array(collection) {
	var results = [];
	collection.forEach((item) => {
		results.push(this.find(item));
	});
	return results;
}
function element_handler_find_function(method) {
	var results = [];
	var isJSUI = Element.isPrototypeOf(method.prototype);
	if (isJSUI) {
		var proto = method.prototype;
		this.children(function(child) {
			if (proto.isPrototypeOf(child)) {
				results.push(child);
			}
		});
	}
	return results;
}
function element_handler_find_jsui(proto) {
	var results = [];
	this.children(function(child) {
		if (child instanceof proto) {
			results.push(child);
		}
	});
	return results;
}
function element_handler_find_regex(expression) {
	var results = [];
	this.children(function(child) {
		if (child.element) {
			var element = child.element;
			var text = (element.innerText || element.textContent || '');
			if (expression.test(text)) {
				results.push(child);
			}
		}
	});
	return results;
}
function element_handler_find_string(query) {
	var results = null;
	results = this.element.querySelectorAll(query);
	results = (!results || results === null ? [] : results);
	return results;
}
function element_handler_find_path(query) {
	return element_handler_find_string.call(this, query);
}
function element_handler_find_undefined() {
	var results = [];
	this.children(function(child) {
		results.push(child);
	});
	return results;
}

var Find = {
	array: element_handler_find_array,
	function: element_handler_find_function,
	jsui: element_handler_find_jsui,
	regex: element_handler_find_regex,
	string: element_handler_find_string,
	path: element_handler_find_path,
	undefined: element_handler_find_undefined
};

export default Find;