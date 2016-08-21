export default function _string(text) {
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