import dataToElement from 'Framework/Classes/BindReceipt/Data/jsui';
import elementToData from 'Framework/Classes/BindReceipt/JSUI/data';

let relationships = {
	data: {
		jsui: dataToElement
	},
	jsui: {
		data: elementToData
	}
};

export default relationships;