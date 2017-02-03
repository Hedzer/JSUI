import $private from '/Framework/V1.0/Constants/Keys/General/private';
import ElementAddedReceipt from '/Framework/V1.0/Classes/ElementAddedReceipt';

export default function _jsui(instance){
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