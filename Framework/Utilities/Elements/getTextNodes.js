import isTextNode from 'Framework/TypeChecks/isTextNode';
import Collection from 'Framework/Classes/Collection';

export default function getTextNodes(el, stopAtFirst){
	let nodes = new Collection();
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