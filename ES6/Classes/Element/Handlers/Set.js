import set from '../../../Utilities/Paths/set';
function element_handler_set_object(assignments) {
	var results = {};
	Object.keys(assignments).forEach((command) => {
		results[command] = this.set(command, assignments[command]);
	});
	return results;	
}
function element_handler_set_string(property, value) {
	if (!property) {return; }
	if (!this.hasOwnProperty(property)) {return; }
	this[property] = value;
	return value;	
}
function element_handler_set_path(path, value) {
	return set(this, path, value);
}
var Set = {
	object: element_handler_set_object,
	string: element_handler_set_string,
	path: element_handler_set_path
};

export default Set;