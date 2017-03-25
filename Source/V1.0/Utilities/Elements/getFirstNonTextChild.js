
//Typechecks
import isDOM from '/JSUI/Source/V1.0/TypeChecks/isDOM';
import isTextNode from '/JSUI/Source/V1.0/TypeChecks/isTextNode';

//Utilities
import childNodes from '/JSUI/Source/V1.0/Utilities/Elements/childNodes';
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

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

exports(getFirstNonTextChild).as('/JSUI/Source/V1.0/Utilities/Elements/getFirstNonTextChild');
