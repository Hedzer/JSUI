
//TypeChecks
import isDOM from '/Framework/V1.0/TypeChecks/isDOM';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function getTagName(el) {
	if (isDOM(el)) {
		return el.tagName.toLowerCase();
	}
	return 'none';
}

exports(getTagName).as('/Framework/V1.0/Utilities/Elements/getTagName');
