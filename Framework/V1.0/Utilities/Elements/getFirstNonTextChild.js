
//Typechecks
import isDOM from '/Framework/V1.0/TypeChecks/isDOM';
import isTextNode from '/Framework/V1.0/TypeChecks/isTextNode';

//Utilities
import childNodes from '/Framework/V1.0/Utilities/Elements/childNodes';
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

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

exports(getFirstNonTextChild).as('/Framework/V1.0/Utilities/Elements/getFirstNonTextChild');
