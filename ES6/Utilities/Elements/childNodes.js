import isFunction from '../../TypeChecks/isFunction';

export function childNodes(node, callback) {
	if (!isFunction(callback)) {
		return;
	}
	if (isElement(node)) {
		var count = node.childNodes.length;
		for (var i = 0; i < count; i++) {
			var child = node.childNodes[i];
			if (callback(child)) {break; }
		}
	}
}