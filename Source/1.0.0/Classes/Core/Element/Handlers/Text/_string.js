
//Constants
import $private from 'JSUI/Source/1.0.0/Constants/Keys/General/private';

//Utilities
import exports from 'Parcello/exports';

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

exports(_string).as('JSUI/Source/1.0.0/Classes/Core/Element/Handlers/Text/_string');
