export default function _string(text) {
	if (this.private && this.element) {
		if (!this.private.text) {
			let textNode = document.createTextNode(text);
			this.private.text = textNode;
			this.element.appendChild(textNode);
			return true;
		}
		this.private.text.nodeValue = text;
		return true;
	}
	return false;
}