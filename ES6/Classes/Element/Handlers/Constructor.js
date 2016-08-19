import getTagName from '../../../Utilities/Elements/getTagName';

function element_handler_constructor_element(el) {
	this.element = el;
	return getTagName(el);
}
function element_handler_constructor_string(tag) {
	tag = (tag || 'div');
	this.element = document.createElement(tag);
	return tag;
}

var Constructor = {
	element: element_handler_constructor_element,
	string: element_handler_constructor_string
};

export default Constructor;