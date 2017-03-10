
//Classes
import Receipt from '/Framework/V1.0/Classes/Core/Receipt';

//Constants
import $private from '/Framework/V1.0/Constants/Keys/General/private';

//TypeChecks
import isString from '/Framework/V1.0/TypeChecks/isString';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default class RouteShortenReceipt extends Receipt {
	constructor(router, url) {
		super();
		this[$private] = {
			router: router,
			url: url,
			shortcut: false,
		};
	}

	//methods
	to(shortcut) {
		let _private = this[$private];
		_private.shortcut = shortcut;
		let router = _private.router;
		let url = _private.url;
		if (!isString(shortcut) || !isString(url)) {
			//warn
			return false;
		}
		url = url.trim();
		shortcut = shortcut.trim();
		let shortened = router.shortened;
		let lengthened = router.lengthened;
		if (shortened.hasOwnProperty(shortcut) && shortened[shortcut] !== url) {
			//throw warning regarding duplicates & console.trace
		}
		let shortKey = (shortcut[0] !== '/' ? '/' : '') + shortcut;
		let longValue = (url[0] !== '/' ? '/' : '') + url;
		shortened[shortKey] = longValue;
		lengthened[longValue] = shortKey;
	}
}

exports(RouteShortenReceipt).as('/Framework/V1.0/Classes/Receipts/RouteShorten');
