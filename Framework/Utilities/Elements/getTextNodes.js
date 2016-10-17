import isTextNode from 'Framework/TypeChecks/isTextNode';

export default function getTextNodes(el, stopAtFirst){
	let nodes = [];
	for (let i = 0; i < el.childNodes.length; i++) {
		let node = el.childNodes[i];
		if (isTextNode(node)) {
			nodes.push(node);
			if (stopAtFirst) {
				break;
			}
		}
	}
	return nodes;
}