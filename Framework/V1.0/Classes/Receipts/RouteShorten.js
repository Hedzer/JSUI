import $private from '/Framework/V1.0/Constants/Keys/General/private';
import Receipt from '/Framework/V1.0/Classes/Core/Receipt';
import isString from '/Framework/V1.0/TypeChecks/isString';

export default class RouteShortenReceipt extends Receipt {
	constructor(router, url) {
		super();
		this[$private] = {
			router: router,
			url: url,
			shortcut: false
		};
	}
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
		if (shortened.hasOwnProperty(shortcut) && shortened[shortcut] !== url) {
			//throw warning regarding duplicates & console.trace
		}
		shortened[(shortcut[0] !== '/' ? '/' : '') + shortcut] = (url[0] !== '/' ? '/' : '') + url;
	}
}