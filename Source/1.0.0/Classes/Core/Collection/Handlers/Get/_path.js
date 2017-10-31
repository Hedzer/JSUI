
//Utilities
import exports from 'Parcello/exports';
import get from 'JSUI/Source/1.0.0/Utilities/Paths/get';

export default function _path(path) {
	let results = new Collection();
	
	this.forEach((item) => {
		let value = get(item, path);
		results.push({ item, value });
	});
	
	return results;
}

exports(_path).as('JSUI/Source/1.0.0/Classes/Core/Collection/Handlers/Get/_path');
