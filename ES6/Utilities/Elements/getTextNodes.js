import isTextNode from '../../TypeChecks/isTextNode';

export default function getTextNodes(el, stopAtFirst){
	var nodes = [];
	for (var i = 0; i < el.childNodes.length; i++) {
		var node = el.childNodes[i];
		if (isTextNode(node)) {
			nodes.push(node);
			if (stopAtFirst) {
				break;
			}
		}
	}
	return nodes;
}