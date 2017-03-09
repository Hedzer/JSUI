
//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';
import get from '/Framework/V1.0/Utilities/Paths/get';

export default function _path(path) {
	let results = new Collection();
	this.forEach((item) => {
		let value = get(item, path);
		results.push({item, value});
	});
	return results;
}

exports(_path).as('/Framework/V1.0/Classes/Core/Collection/Handlers/Get/_path');
