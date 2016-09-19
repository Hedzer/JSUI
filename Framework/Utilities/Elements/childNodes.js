import isFunction from 'Framework/TypeChecks/isFunction';
import isElement from 'Framework/TypeChecks/isElement';

function placeholder(){}
export default function childNodes(node, callback) {
	if (!isFunction(callback)) {
		callback = placeholder;
	}
	if (!isElement(node)) {
		return;
	}
	var children = [];
	var count = node.childNodes.length;
	for (var i = 0; i < count; i++) {
		var child = node.childNodes[i];
		children.push(child);
		if (callback(child)) {break; }
	}
	return children;
}