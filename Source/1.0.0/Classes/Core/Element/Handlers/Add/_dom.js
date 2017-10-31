
//Utilities
import exports from 'Parcello/exports';

export default function _dom(element){
	if (this.element){
		this.element.appendChild(element);
	}
}

exports(_dom).as('JSUI/Source/1.0.0/Classes/Core/Element/Handlers/Add/_dom');
