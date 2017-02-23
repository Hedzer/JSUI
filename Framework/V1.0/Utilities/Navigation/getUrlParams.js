
export default function getUrlParams() {
	let result = {};
	let index = location.href.indexOf('?');
	if(!~index) return {};
	let query = location.href.substr(index + 1);

	query.split('&').forEach((part) => {
		if(!part) { return; }
		part = part.split('+').join(' '); // replace every + with space, regexp-free version
		let sign = part.indexOf('=');
		let signed = !!~sign;
		let key = (signed ? part.substr(0, sign) : part);
		let val = (signed ? decodeURIComponent(part.substr(sign + 1)) : '');
		let from = key.indexOf('[');

		if(!~from) {
			result[decodeURIComponent(key)] = val;
			return;
		}

		let to = key.indexOf(']');
		let index = decodeURIComponent(key.substring(from + 1, to));
		key = decodeURIComponent(key.substring(0, from));
		if(!result[key]) { result[key] = []; };
		if(!index) { 
			result[key].push(val); 
			return;
		};
		result[key][index] = val;
	});

	return result;
}