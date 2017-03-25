
//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

export default function _regex(expression) {
	let results = [];
	this.children(function(child) {
		if (child.element) {
			let element = child.element;
			let text = (element.innerText || element.textContent || '');
			if (expression.test(text)) {
				results.push(child);
			}
		}
	});
	return results;
}

exports(_regex).as('/JSUI/Source/V1.0/Classes/Core/Element/Handlers/Find/_regex');
