import get from '../../../Utilities/Paths/get';

function element_handler_get_array(collection) {
	var results = [];
	collection.forEach((item) => {
		results.push(this.get(item));
	});
	return results;	
}
function element_handler_get_string(property) {
	if (!property) {return; }
	if (!this.hasOwnProperty(property)) {return; }
	return this[property];	
}
function element_handler_get_path(path) {
	return get(this, path);
}

var Get = {
	array: element_handler_get_array,
	string: element_handler_get_string,
	path: element_handler_get_path
};

export default Get;