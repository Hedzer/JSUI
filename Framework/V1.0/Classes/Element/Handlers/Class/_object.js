import isString from '/Framework/V1.0/TypeChecks/isString';

export default function _object(classes) {
	let className = '';
	Object.keys(classes).forEach((name) => {
		if (classes[name]) {
			className += name;
		}
	});
	this.element.className = className;
	return className;
}