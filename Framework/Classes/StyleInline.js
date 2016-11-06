import Identity from 'Framework/Classes/Identity';
import isJSUI from 'Framework/TypeChecks/isJSUI';
import isBehavior from 'Framework/TypeChecks/isBehavior';
import isObject from 'Framework/TypeChecks/isObject';
import isString from 'Framework/TypeChecks/isString';
import StyleRules from 'Framework/Classes/StyleRules';

const identity = new Identity({
	class: 'StyleInline',
	major: 1, minor: 0, patch: 0
});

export default class StyleInline extends StyleRules {
	constructor(host) {
		super();

		this.private.host = (host || false);

		let handler = (() => {});
		if (isJSUI(host)) {
			handler = (ev) => {
				if (this.private.host && ev.property) {
					this.private.host.element.style[ev.property] = ev.new;
				}				
			};
		}
		if (isBehavior(host)) {
			handler = (ev) => {
				host.hosts((jsui) => {
					jsui.element.style[ev.property] = ev.new;
				});
			};
		}

		this.on('styleChanged', handler);
		this.identity = identity;
	}
	get host() {
		return this.private.host;
	}
	set host(element) {
		if (isJSUI(element)) {
			this.private.host = element.element;
		}
	}
	set(name, value) {
		if (isObject(name)) {
			Object.keys(name).forEach((key) => {
				let value = name[key];
				this[key] = value;
			});
			return;
		}
		if (isString(name)) {
			if (arguments.length > 1) {
				if (isString(value)) {
					this[name] = value;
				}
				//there will be room here for functions and other stuff
			}
		}
	}
}