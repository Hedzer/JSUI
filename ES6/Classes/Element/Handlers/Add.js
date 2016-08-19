import addClass from '../../../Utilities/Elements/addClass';
import { add as addProperty } from '../../../Utilities/Properties/add';
import isUJSUI from '../../../TypeChecks/isUJSUI';

function element_handler_add_element(element){
	if (this.element){
		this.element.appendChild(element);
	}
}
function element_handler_add_jsui(instance){
	if (this.element && instance.element){
		this.element.appendChild(instance.element);
		this.private.children = (this.private.children || {});
		this.private.children[instance.uid] = instance;
		instance.private.parent = this;
	}
	var options = {
		as:(function(name){
			if (name){
				this[name] = instance;
				instance.private.mapped = (instance.private.mapped || {});
				var map = instance.private.mapped;
				map[this.uid] = (map[this.uid] || []);
				map[this.uid].push(name);
				instance.attribute('as', name);
				addClass(instance.element, name);
			}
			return instance;
		}).bind(this)
	};
	return options;
}
function element_handler_add_array(collection){
	var results = [];
	collection.forEach((item) => {
		results.push(this.add(item));
	});
	return results;
}
function element_handler_add_string(prop){
	addProperty(this, prop);
}
function element_handler_add_html(markup){
	if (this.element && this.element.appendChild){
		var fragment = document.createDocumentFragment();
		var root = document.createElement('div');
		root.innerHTML = markup;
		while (root.firstChild) {
			fragment.appendChild(root.firstChild);
		}
		this.element.appendChild(fragment);			
	}
}
function element_handler_add_path(prop) {
	return element_handler_add_string.call(this, prop);
}
function element_handler_add_function(method) {
	if (isUJSUI(method)) {
		return this.add(new method());
	}
}

var Add = {
	element: element_handler_add_element,
	jsui: element_handler_add_jsui,
	array: element_handler_add_array,
	string: element_handler_add_string,
	html: element_handler_add_html,
	path: element_handler_add_path,
	function: element_handler_add_function
};

export default Add;