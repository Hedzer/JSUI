export default function _string(property, value) {
	if (!property) {return; }
	if (!this.hasOwnProperty(property)) {return; }
	this[property] = value;
	return value;	
}