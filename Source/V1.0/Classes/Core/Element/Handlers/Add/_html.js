
//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

export default function _html(markup){
	if (this.element && this.element.appendChild){

		let fragment = document.createDocumentFragment();
		let root = document.createElement('div');
		root.innerHTML = markup;

		while (root.firstChild) {
			fragment.appendChild(root.firstChild);
		}
		
		this.element.appendChild(fragment);			
	}
}

exports(_html).as('/JSUI/Source/V1.0/Classes/Core/Element/Handlers/Add/_html');
