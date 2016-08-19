var ObjectPrototype = Object.getPrototypeOf({});
export function getAll(obj) {
	//code modified from airportyh, http://stackoverflow.com/questions/8024149/is-it-possible-to-get-the-non-enumerable-inherited-property-names-of-an-object
	var props = [];
	do {
		Object.getOwnPropertyNames(obj).forEach(function(prop) {
			if (props.indexOf(prop) === -1) {
				props.push(prop);
			}
		});
	} while ((obj = Object.getPrototypeOf(obj)) && obj !== ObjectPrototype);
	return props;
}