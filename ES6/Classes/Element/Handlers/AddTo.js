function element_handler_addTo_element(element){
	if (element){
		element.appendChild(this.element);
	}
}
function element_handler_addTo_jsui(instance){
	return instance.add(this);
}
function element_handler_addTo_array(collection){
	var results = [];
	collection.forEach((item) => {
		results.push(this.addTo(item));
	});
	return results;
}

var AddTo = {
	element: element_handler_addTo_element,
	jsui: element_handler_addTo_jsui,
	array: element_handler_addTo_array
};

export default AddTo;