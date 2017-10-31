
//TypeChecks
import isDOM from 'JSUI/Source/1.0.0/TypeChecks/isDOM';

//Utilities
import exports from 'Parcello/exports';

export default function getTagName(el) {
	if (isDOM(el)) {
		return el.tagName.toLowerCase();
	}
	return 'none';
}

exports(getTagName).as('JSUI/Source/1.0.0/Utilities/Elements/getTagName');
