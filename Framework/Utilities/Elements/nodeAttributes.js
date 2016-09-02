import isFunction from '/Framework/TypeChecks/isFunction';
import isElement from '/Framework/TypeChecks/isElement';

export default function nodeAttributes(node, callback) {
	if (!isFunction(callback)) {
		return;
	}
	if (isElement(node)) {
		var attributes = node.attributes;
		for (var i = attributes.length - 1; i >= 0; i--) {
			var attribute = attributes[i];
			var name = attribute.name;
			var value = attribute.value;
			callback(name, value, attribute);
		};
	}
}