
//TypeChecks
import isArray from '/Framework/V1.0/TypeChecks/isArray';
import isFunction from '/Framework/V1.0/TypeChecks/isFunction';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';
import getWithContext from '/Framework/V1.0/Utilities/Paths/getWithContext';

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

exports(_path).as('/Framework/V1.0/Core/Collection/Handlers/Do/_path');
