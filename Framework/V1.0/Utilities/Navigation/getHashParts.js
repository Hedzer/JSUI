
import getUrlParams from '/Framework/V1.0/Utilities/Navigation/getUrlParams';

export default function getHashParts(url) {
	let hash = (url || window.location.hash);
	let params = getUrlParams(url);
	if (url.includes('?')) {
		hash = hash.split('?')[0];
	}
	let path = hash.replace(/#!|#/i, '');
	let routes = path.split('/');
	routes = routes.filter((route) => { return !!route.length; });
	if (!routes.length) { return false; }
	let result = {
		routes: routes,
		parameters: params
	};
	return result;
}