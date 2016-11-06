import isElement from 'Framework/TypeChecks/isElement';
import isTextNode from 'Framework/TypeChecks/isTextNode';
import childNodes from 'Framework/Utilities/Elements/childNodes';

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