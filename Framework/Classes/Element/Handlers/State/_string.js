export default function _string(property, value) {
	var old = this.private.state[property];
	var hasChanged = (old !== value);
	var self = this;

	if (hasChanged) {
		this.private.state[property] = value;
		var data = {
			property: property,
			old: old,
			new: value
		};
		self.trigger(`${property}Changed`, data);
		self.trigger(`Changed`, data);
	}

	return hasChanged;	
}
