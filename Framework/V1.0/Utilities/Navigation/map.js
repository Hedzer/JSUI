import isString from '/Framework/V1.0/TypeChecks/isString';
import isObject from '/Framework/V1.0/TypeChecks/isObject';
import isArray from '/Framework/V1.0/TypeChecks/isArray';
import isRoutable from '/Framework/V1.0/TypeChecks/isRoutable';
import isURoutable from '/Framework/V1.0/TypeChecks/isURoutable';
import isUEndpoint from '/Framework/V1.0/TypeChecks/isUEndpoint';
import isData from '/Framework/V1.0/TypeChecks/isData';
import Router from '/Framework/V1.0/Singletons/Navigation/Router';
import getIdentifiedType from '/Framework/V1.0/Classes/Core/Router/getIdentifiedType';
import extend from '/Framework/V1.0/Utilities/Objects/extend';
import NavigationItem from '/Framework/V1.0/DataTypes/NavigationItem';

export default function map(routable, prefix = '', items, history = {}) {
	if ((!isRoutable(routable) && !isURoutable(routable))) { return false; }
	if (isRoutable(routable)) {
		routable = routable.constructor;
	}
	if (!isArray(routable.subroutes)) { return; }
	prefix = (!items ? routable.route : prefix);
	items = (items || []);
	history = Object.create(history);
	let type = getIdentifiedType(routable);
	history[type] = routable.placard;

	routable.subroutes.forEach((subroute) => {
		if (!isURoutable(subroute)) { return; }
		let route = subroute.route;
		let path = `${prefix}/${route}`;
		if (isUEndpoint(subroute)) {
			let placard = subroute.placard;
			history.Endpoint = extend({}).with(placard);
			if (!isObject(placard) && !isData(placard)) {
				placard = {};
			}
			let hashpath = `#!/${path}`;
			let shortpath = Router.shortcutOf(hashpath);
			extend(placard).with({
				//paths
				path: path,
				hashpath: hashpath,
				shortpath: shortpath,
				url: `#!${shortpath}`,
				//history
				Application: history.Application,
				Role: history.Role,
				Feature: history.Feature,
				Page: history.Page,
				Endpoint: history.Endpoint
			});
			items.push(new NavigationItem(placard));
			return;
		}
		map(subroute, path, items, history);
	});
	return items;
}