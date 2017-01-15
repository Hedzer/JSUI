
export default function getHashRoutes(url) {
	let hash = (url || window.location.hash);
	let path = hash.replace(/#!|#/i, '');
	let routes = path.split('/');
	routes = routes.filter((route) => { return !!route.length; });
	if (!routes.length) { return false; }
	return routes;
}