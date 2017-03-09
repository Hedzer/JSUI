
//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function _element(element){
	if (element){
		element.appendChild(this.element);
	}
}

exports(_element).as('/Framework/V1.0/Classes/Core/Element/Handlers/AddTo/_element');