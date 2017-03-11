
//DataTypes
import NavigationItem from '/Framework/V1.0/DataTypes/NavigationItem';

//Handlers
import getIdentifiedType from '/Framework/V1.0/Classes/Core/Router/getIdentifiedType';

//Singletons
import Router from '/Framework/V1.0/Singletons/Navigation/Router';

//TypeChecks
import isArray from '/Framework/V1.0/TypeChecks/isArray';
import isData from '/Framework/V1.0/TypeChecks/isData';
import isObject from '/Framework/V1.0/TypeChecks/isObject';
import isRoutable from '/Framework/V1.0/TypeChecks/isRoutable';
import isString from '/Framework/V1.0/TypeChecks/isString';
import isUEndpoint from '/Framework/V1.0/TypeChecks/isUEndpoint';
import isURoutable from '/Framework/V1.0/TypeChecks/isURoutable';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';
import extend from '/Framework/V1.0/Utilities/Objects/extend';

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
				hashpath: hashpath,
				path: path,
				shortpath: shortpath,
				url: `#!${shortpath}`,
				//history
				Application: history.Application,
				Endpoint: history.Endpoint,
				Feature: history.Feature,
				Page: history.Page,
				Role: history.Role,
			});
			items.push(new NavigationItem(placard));
			return;
		}
		map(subroute, path, items, history);
	});
	return items;
}

exports(map).as('/Framework/V1.0/Utilities/Navigation/map');
