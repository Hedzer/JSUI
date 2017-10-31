
//Utilities
import exports from 'Parcello/exports';

export default function _dom(element){
	if (element){
		element.appendChild(this.element);
	}
}

exports(_dom).as('JSUI/Source/1.0.0/Classes/Core/Element/Handlers/AddTo/_dom');