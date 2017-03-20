
//Classes
import ElementAddedReceipt from '/Framework/V1.0/Classes/Receipts/ElementAdded';

//Constants
import $private from '/Framework/V1.0/Constants/Keys/General/private';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function _element(instance){
	if (this.element && instance.element){
		this.element.appendChild(instance.element);
		this[$private].children = (this[$private].children || {});
		this[$private].children[instance.uid] = instance;
		instance[$private].parent = this;

		let Style = instance.Style;
		Style.context = (Style.context === 'default' ? this.Style.context : Style.context);
	}
	let receipt = new ElementAddedReceipt(this, instance);
	return receipt;
}

exports(_element).as('/Framework/V1.0/Classes/Core/Element/Handlers/Add/_element');