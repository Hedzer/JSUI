
//TypeChecks
import isDOM from 'JSUI/Source/1.0.0/TypeChecks/isDOM';
import isFunction from 'JSUI/Source/1.0.0/TypeChecks/isFunction';

//Utilities
import exports from 'Parcello/exports';

function placeholder(){}
export default function nodeAttributes(node, callback) {
	if (!isFunction(callback)) {
		callback = placeholder;
	}
	if (!isDOM(node)) { return; }
	let attributeList = node.attributes;
	let attributes = {};
	for (let i = attributeList.length - 1; i >= 0; i--) {
		let attribute = attributeList[i];
		let name = attribute.name;
		let value = attribute.value;
		attributes[name] = value;
		if (callback(name, value, attribute)) {break; }
	};
	return attributes;
}

exports(nodeAttributes).as('JSUI/Source/1.0.0/Utilities/Elements/nodeAttributes');
