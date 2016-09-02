export default function isTextNode(u) {
	return !!(u && u.nodeName === "#text");
}