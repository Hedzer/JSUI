
//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';
import get from '/Framework/V1.0/Utilities/Paths/get';
import set from '/Framework/V1.0/Utilities/Paths/set';

export default function _path(path) {
	let results = new Collection();
	this.forEach((item) => {
		let value = get(item, path);
		set(item, path, value);
		results.push({item, path, old, value});
	});
	return results;
}

exports(_path).as('/Framework/V1.0/Classes/Core/Collection/Handlers/Set/_path');
