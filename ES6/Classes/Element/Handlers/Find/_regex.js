export default function _regex(expression) {
	var results = [];
	this.children(function(child) {
		if (child.element) {
			var element = child.element;
			var text = (element.innerText || element.textContent || '');
			if (expression.test(text)) {
				results.push(child);
			}
		}
	});
	return results;
}