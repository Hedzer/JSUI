import isString from '/Framework/V1.0/TypeChecks/isString';
import isObject from '/Framework/V1.0/TypeChecks/isObject';
import isArray from '/Framework/V1.0/TypeChecks/isArray';
import isRoutable from '/Framework/V1.0/TypeChecks/isRoutable';
import isURoutable from '/Framework/V1.0/TypeChecks/isURoutable';
import isUEndpoint from '/Framework/V1.0/TypeChecks/isUEndpoint';
import isData from '/Framework/V1.0/TypeChecks/isData';
import Router from '/Framework/V1.0/Singletons/Navigation/Router';
import NavigationItem from '/Framework/V1.0/DataTypes/NavigationItem';

export default function map(routable, prefix = '', items) {
	if ((!isRoutable(routable) && !isURoutable(routable))) { return false; }
	if (isRoutable(routable)) {
		routable = routable.constructor;
	}
	if (!isArray(routable.subroutes)) { return; }
	prefix = (!items ? routable.route : prefix);
	items = (items || []);

	routable.subroutes.forEach((subroute) => {
		if (!isURoutable(subroute)) { return; }
		let route = subroute.route;
		let path = `${prefix}/${route}`;
		if (isUEndpoint(subroute)) {
			let placard = subroute.placard;
			if (!isObject(placard) || !isData(placard)) {
				placard = {};
			}
			let hashpath = `#/${path}`;
			placard.path = path;
			placard.hashpath = hashpath;
			placard.shortpath = Router.shortcutOf(hashpath);
			items.push(new NavigationItem(placard));
			return;
		}
		map(subroute, path, items);
	});
	return items;
}