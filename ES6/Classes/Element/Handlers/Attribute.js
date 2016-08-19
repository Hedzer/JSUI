import nodeAttributes from '../../../Utilities/Elements/nodeAttributes';
import isUndefined from '../../../TypeChecks/isUndefined';
import isNull from '../../../TypeChecks/isNull';
import isObject from '../../../TypeChecks/isObject';

//Get
function element_handler_attribute_get_undefined() {
	var results = {};
	nodeAttributes(this.element, (attribute, value, ref) => {
		results[attribute] = value;
	});
	return results;
}
function element_handler_attribute_get_string(name) {
	return this.element.getAttribute(name);
}
function element_handler_attribute_get_path() {
	return element_handler_attribute_get_string.apply(this, arguments);
}
function element_handler_attribute_get_array(collection) {
	var results = {};
	collection.forEach((attribute) => {
		results[attribute] = this.attribute(attribute);
	});
	return results;
}
function element_handler_attribute_get_object(macro){
	return element_handler_attribute_set_object.call(this, macro);
}

//Set
function element_handler_attribute_set_string(name, value) {
	if (isUndefined(value) || isNull(value)) {
		this.element.removeAttribute(name);
		return true;
	}
	this.element.setAttribute(name, value);
	return true;
}
function element_handler_attribute_set_path() {
	return element_handler_attribute_set_string.apply(this, arguments);
}
function element_handler_attribute_set_array(collection, value) {
	var results = [];
	collection.forEach((attribute) => {
		results.push(this.attribute(attribute, value));
	});
	return results;
}
function element_handler_attribute_set_object(macro, value){
	var result = (isObject(value) ? value : {});
	Object.keys(macro).forEach((attribute) => {
		results[attribute] = this.attribute(attribute, macro[attribute]);
	});
	return results;
}

var Attribute = {
	Get:{
		undefined: element_handler_attribute_get_undefined,
		string: element_handler_attribute_get_string,
		path: element_handler_attribute_get_path,
		array: element_handler_attribute_get_array,
		object: element_handler_attribute_get_object
	},
	Set:{
		string: element_handler_attribute_set_string,
		path: element_handler_attribute_set_path,
		array: element_handler_attribute_set_array,
		object: element_handler_attribute_set_object
	}
};

export default Attribute;