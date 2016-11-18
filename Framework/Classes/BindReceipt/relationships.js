import dataToElement from 'Framework/Classes/BindReceipt/Data/element';
import elementToData from 'Framework/Classes/BindReceipt/Element/data';

let relationships = {
	data: {
		element: dataToElement
	},
	element: {
		data: elementToData
	}
};

export default relationships;