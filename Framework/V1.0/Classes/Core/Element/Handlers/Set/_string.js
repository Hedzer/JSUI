export default function _string(property, value) {
	if (!property) { return; }
	this[property] = value;
	return value;	
}