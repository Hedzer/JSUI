import get from 'Framework/Utilities/Paths/get';

export default function _path(path) {
	let results = new Collection();
	this.forEach((item) => {
		let value = get(item, path);
		results.push({item, value});
	});
	return results;
}