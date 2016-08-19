import isElement from '../../TypeChecks/isElement';
import isTextNode from '../../TypeChecks/isTextNode';
import childNodes from './childNodes';

export function getFirstNonTextChild(node) {
	if (isElement(node)) {
		var root;
		childNodes(node, (child) => {
			if (!isTextNode(child)) {
				root = child;
				return true;
			}			
		});
		return root;
	}
}