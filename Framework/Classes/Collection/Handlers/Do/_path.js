import isFunction from 'Framework/TypeChecks/isFunction';
import isArray from 'Framework/TypeChecks/isArray';
import getWithContext from 'Framework/Utilities/Paths/getWithContext';

export default function _path(command, args) {
	let results = new Collection();
	this.forEach((item) => {
		let path = getWithContext(this, command);
		if (!path || !path.context || !path.property) { return; }
		let method = path.context[path.property];
		if (isFunction(method)) {
			let value = (isArray(args) ? method.apply(path.context, args) : method.call(path.context, args));
			results.push({item, value});
		}
	});
}