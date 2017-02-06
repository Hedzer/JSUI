import isFunction from '/Framework/V1.0/TypeChecks/isFunction';
import isElement from '/Framework/V1.0/TypeChecks/isElement';
import Collection from '/Framework/V1.0/Classes/Core/Collection';

function placeholder(){}
export default function childNodes(node, callback) {
	if (!isFunction(callback)) {
		callback = placeholder;
	}
	if (!isElement(node)) {
		return;
	}
	let children = new Collection();
	let count = node.childNodes.length;
	for (let i = 0; i < count; i++) {
		let child = node.childNodes[i];
		children.push(child);
		if (callback(child)) {break; }
	}
	return children;
}