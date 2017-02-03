import isElement from '/Framework/V1.0/TypeChecks/isElement';
import isTextNode from '/Framework/V1.0/TypeChecks/isTextNode';
import childNodes from '/Framework/V1.0/Utilities/Elements/childNodes';

export default function getFirstNonTextChild(node) {
	if (isElement(node)) {
		let root;
		childNodes(node, (child) => {
			if (!isTextNode(child)) {
				root = child;
				return true;
			}			
		});
		return root;
	}
}