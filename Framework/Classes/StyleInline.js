import Identity from 'Framework/Classes/Identity';
import isJSUI from 'Framework/TypeChecks/isJSUI';
import isObject from 'Framework/TypeChecks/isObject';
import isString from 'Framework/TypeChecks/isString';
import StyleRules from 'Framework/Classes/StyleRules';

const identity = new Identity({
	class: 'StyleInline',
	major: 1,
	minor: 0,
	patch: 0
});

export default class StyleInline extends StyleRules {
	constructor(host) {
		super();
		this.private.host = (host || false);
		this.on('styleChanged', (ev) => {
			if (this.private.host && ev.property) {
				this.private.host.element.style[ev.property] = ev.new;
			}
		});
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
				var value = name[key];
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