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
	let children = [];
	let count = node.childNodes.length;
	for (let i = 0; i < count; i++) {
		let child = node.childNodes[i];
		children.push(child);
		if (callback(child)) {break; }
	}
	return children;
}