function element_handler_text_string(text) {
	if (this.private && this.element) {
		if (!this.private.text) {
			var text = document.createTextNode(text);
			this.private.text = text;
			this.element.appendChild(text);
			return true;
		}
		this.private.text.nodeValue = text;
		return true;
	}
	return false;
}
function element_handler_text_path(text) {
	return element_handler_text_string.call(this, text);
}

var Text = {
	string: element_handler_text_string,
	path: element_handler_text_path
};

export default Text;