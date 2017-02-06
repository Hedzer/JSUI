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