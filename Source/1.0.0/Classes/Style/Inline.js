
//Classes
import Identity from 'JSUI/Source/1.0.0/Classes/Core/Identity';
import StyleRules from 'JSUI/Source/1.0.0/Classes/Style/Rules';

//Constants
import $private from 'JSUI/Source/1.0.0/Constants/Keys/General/private';

//TypeChecks
import isBehavior from 'JSUI/Source/1.0.0/TypeChecks/isBehavior';
import isElement from 'JSUI/Source/1.0.0/TypeChecks/isElement';
import isObject from 'JSUI/Source/1.0.0/TypeChecks/isObject';
import isString from 'JSUI/Source/1.0.0/TypeChecks/isString';

//Utilities
import exports from 'Parcello/exports';

const identity = new Identity({
	class: 'StyleInline',
	major: 1, minor: 0, patch: 0,
});

export default class StyleInline extends StyleRules {
	constructor(host) {
		super();

		this[$private].host = (host || false);

		let handler = (() => {});

		if (isElement(host)) {
			handler = (ev) => {
				if (this[$private].host && ev.property) {
					this[$private].host.element.style[ev.property] = ev.new;
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

	//methods
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

	//properties
	get host() {
		return this[$private].host;
	}
	set host(element) {
		if (isElement(element)) {
			this[$private].host = element.element;
		}
	}
}

exports(StyleInline).as('JSUI/Source/1.0.0/Classes/Style/Inline');
