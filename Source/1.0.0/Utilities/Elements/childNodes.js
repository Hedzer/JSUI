
//Classes
import Collection from 'JSUI/Source/1.0.0/Classes/Core/Collection';

//TypeChecks
import isDOM from 'JSUI/Source/1.0.0/TypeChecks/isDOM';
import isFunction from 'JSUI/Source/1.0.0/TypeChecks/isFunction';

//Utilities
import exports from 'Parcello/exports';

function placeholder(){}
export default function childNodes(node, callback) {
	if (!isFunction(callback)) {
		callback = placeholder;
	}
	if (!isDOM(node)) {
		return;
	}
	let children = new Collection();
	let count = node.childNodes.length;
	for (let i = 0; i < count; i++) {
		let child = node.childNodes[i];
		children.push(child);
		if (callback(child)) {break; }
	}
	return children;
}

exports(childNodes).as('JSUI/Source/1.0.0/Utilities/Elements/childNodes');
