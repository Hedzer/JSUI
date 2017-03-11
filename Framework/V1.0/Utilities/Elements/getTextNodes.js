
//Classes
import Collection from '/Framework/V1.0/Classes/Core/Collection';

//TypeChecks
import isTextNode from '/Framework/V1.0/TypeChecks/isTextNode';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

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

exports(getTextNodes).as('/Framework/V1.0/Utilities/Elements/getTextNodes');
