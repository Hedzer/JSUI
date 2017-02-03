import isFunction from '/Framework/V1.0/TypeChecks/isFunction';
import isElement from '/Framework/V1.0/TypeChecks/isElement';

function placeholder(){}
export default function nodeAttributes(node, callback) {
	if (!isFunction(callback)) {
		callback = placeholder;
	}
	if (!isElement(node)) { return; }
	let attributeList = node.attributes;
	let attributes = {};
	for (let i = attributeList.length - 1; i >= 0; i--) {
		let attribute = attributeList[i];
		let name = attribute.name;
		let value = attribute.value;
		attributes[name] = value;
		if (callback(name, value, attribute)) {break; }
	};
	return attributes;
}