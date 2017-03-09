
//Constants
import $private from '/Framework/V1.0/Constants/Keys/General/private';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function _string(text) {
	if (this[$private] && this.element) {
		if (!this[$private].text) {
			let textNode = document.createTextNode(text);
			this[$private].text = textNode;
			this.element.appendChild(textNode);
			return true;
		}
		this[$private].text.nodeValue = text;
		return true;
	}
	return false;
}

exports(_string).as('/Framework/V1.0/Classes/Core/Element/Handlers/Text/_string');
