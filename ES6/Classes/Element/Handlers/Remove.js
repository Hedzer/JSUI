function element_handler_remove_array(collection){
	var results = [];
	collection.forEach((item) => {
		results.push(this.remove(item));
	});
	return results;
}
function element_handler_remove_jsui(instance) {
	if (instance.remove) {
		return instance.remove();
	}
}
function element_handler_remove_undefined() {
	this.trigger('destructed');
	return this.destructor();	
}

var Remove = {
	array: element_handler_remove_array,
	jsui: element_handler_remove_jsui,
	undefined: element_handler_remove_undefined
};

export default Remove;