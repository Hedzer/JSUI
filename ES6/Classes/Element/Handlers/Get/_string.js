export default function _string(property) {
	if (!property) {return; }
	if (!this.hasOwnProperty(property)) {return; }
	return this[property];	
}