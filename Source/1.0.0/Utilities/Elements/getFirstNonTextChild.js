
//Typechecks
import isDOM from 'JSUI/Source/1.0.0/TypeChecks/isDOM';
import isTextNode from 'JSUI/Source/1.0.0/TypeChecks/isTextNode';

//Utilities
import childNodes from 'JSUI/Source/1.0.0/Utilities/Elements/childNodes';
import exports from 'Parcello/exports';

export default function getFirstNonTextChild(node) {
	if (isDOM(node)) {
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

exports(getFirstNonTextChild).as('JSUI/Source/1.0.0/Utilities/Elements/getFirstNonTextChild');
