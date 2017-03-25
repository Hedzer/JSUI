
//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

export default function _dom(element){
	if (this.element){
		this.element.appendChild(element);
	}
}

exports(_dom).as('/JSUI/Source/V1.0/Classes/Core/Element/Handlers/Add/_dom');
