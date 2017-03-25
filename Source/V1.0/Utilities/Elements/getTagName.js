
//TypeChecks
import isDOM from '/JSUI/Source/V1.0/TypeChecks/isDOM';

//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

export default function getTagName(el) {
	if (isDOM(el)) {
		return el.tagName.toLowerCase();
	}
	return 'none';
}

exports(getTagName).as('/JSUI/Source/V1.0/Utilities/Elements/getTagName');
