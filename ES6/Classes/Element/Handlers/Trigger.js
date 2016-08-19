function element_handler_trigger_array(collection, args){
	var results = [];
	collection.forEach((item) => {
		results.push(this.trigger(item, args));
	});
	return results;
}
function element_handler_trigger_object(assignments) {
	Object.keys(assignments).forEach((name) => {
		var args = assignments[name];
		this.trigger(name, args);
	});
}
function element_handler_trigger_string(name, args){
	if (!this.element){return false;}
	var event = new CustomEvent(name, {"detail": args});
	this.element.dispatchEvent(event);
	return true;
}
function element_handler_trigger_path(name, args) {
	return element_handler_trigger_string.call(this, name, args);
}

var Trigger = {
	array: element_handler_trigger_array,
	object: element_handler_trigger_object,
	string: element_handler_trigger_string,
	path: element_handler_trigger_path
};

export default Trigger;