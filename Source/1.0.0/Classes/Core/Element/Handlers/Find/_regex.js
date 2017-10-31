
//Utilities
import exports from 'Parcello/exports';

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

exports(_regex).as('JSUI/Source/1.0.0/Classes/Core/Element/Handlers/Find/_regex');
