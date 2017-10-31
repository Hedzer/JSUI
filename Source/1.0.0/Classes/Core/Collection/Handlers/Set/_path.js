
//Utilities
import exports from 'Parcello/exports';
import get from 'JSUI/Source/1.0.0/Utilities/Paths/get';
import set from 'JSUI/Source/1.0.0/Utilities/Paths/set';

export default function _path(path) {
	let results = new Collection();

	this.forEach((item) => {
		let value = get(item, path);
		set(item, path, value);
		results.push({ item, path, old, value });
	});

	return results;
}

exports(_path).as('JSUI/Source/1.0.0/Classes/Core/Collection/Handlers/Set/_path');
