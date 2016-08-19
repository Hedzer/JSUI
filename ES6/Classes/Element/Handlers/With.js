function element_handler_with_array(collection) {
	var results = [];
	collection.forEach((item) => {
		results.push(this.with(item));
	});
	return results;	
}
function element_handler_with_function(method) {
	method.call(this);
	return this;	
}

var With = {
	array: element_handler_with_array,
	function: element_handler_with_function
};

export default With;