export default function _string(tag) {
	tag = (tag || 'div');
	this.element = document.createElement(tag);
	return tag;
}