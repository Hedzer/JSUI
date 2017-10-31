
//TypeChecks
import isArray from 'JSUI/Source/1.0.0/TypeChecks/isArray';
import isFunction from 'JSUI/Source/1.0.0/TypeChecks/isFunction';

//Utilities
import exports from 'Parcello/exports';
import getWithContext from 'JSUI/Source/1.0.0/Utilities/Paths/getWithContext';

export default function _path(command, args) {
	let results = new Collection();
	this.forEach((item) => {
		let path = getWithContext(this, command);
		if (!path || !path.context || !path.property) { return; }

		let method = path.context[path.property];
		if (isFunction(method)) {
			let value = (isArray(args) ? method.apply(path.context, args) : method.call(path.context, args));
			results.push({ item, value });
		}
		
	});
}

exports(_path).as('JSUI/Source/1.0.0/Core/Collection/Handlers/Do/_path');
