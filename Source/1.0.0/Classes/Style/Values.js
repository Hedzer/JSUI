
//Classes
import Class from 'JSUI/Source/1.0.0/Classes/Core/Class';
import Identity from 'JSUI/Source/1.0.0/Classes/Core/Identity';

//Constants
import $domain from 'JSUI/Source/1.0.0/Constants/Keys/StyleValues/domain';
import map from 'JSUI/Source/1.0.0/Constants/Keys/StyleValues/map';

//Mixins
import Privatelike from 'JSUI/Source/1.0.0/Mixins/Privatelike';
import Eventful from 'JSUI/Source/1.0.0/Mixins/Eventful';
import Extensible from 'JSUI/Source/1.0.0/Mixins/Extensible';
import Serializable from 'JSUI/Source/1.0.0/Mixins/Serializable';
import Stateful from 'JSUI/Source/1.0.0/Mixins/Stateful';

//Singletons
import Variables from 'JSUI/Source/1.0.0/Singletons/Style/Variables';

//TypeChecks
import isObject from 'JSUI/Source/1.0.0/TypeChecks/isObject';
import isString from 'JSUI/Source/1.0.0/TypeChecks/isString';

//Utilities
import exports from 'Parcello/exports';
import symbolish from 'JSUI/Source/1.0.0/Utilities/Properties/symbolish';

const identity = new Identity({
	class: 'StyleValues',
	major: 1, minor: 0, patch: 0
});

export default class StyleValues extends Class
	.implements(
		Privatelike,
		Stateful,
		Serializable,
		Eventful,
		Extensible
	) {

	constructor(domain, values) {
		super();
		this.identity = identity;
		this[$domain] = domain;
		this[map](domain, values);
	}
	get [$domain]() {
		return StyleValues.state(this, 'domain');
	}
	set [$domain](value) {
		return StyleValues.state(this, 'domain', value);
	}
	[map](domain, values, mapped, host) {
		
		if (!isString(domain) || !isObject(values)) {
			return false; //throw error
		}
		
		let root = this;

		mapped = (mapped || {});
		host = (host || this);

		for (let prop in values) {
			let value = values[prop];
			let location = `${domain}.${prop}`;

			if (isObject(value)) {
				let level = {};
				host[prop] = level;
				this[map](location, value, mapped, level);
				continue;
			}

			let store = symbolish(location);
			Object.defineProperty(host, prop, {
				get: function() {
					return root[store];
				},
				set: function(value) {
					let old = root[store];
					
					if (old === value) { return; }

					Variables.add(location, value);
					root[store] = value;
				},
			});
			host[prop] = value;
		}
	}
}

exports(StyleValues).as('JSUI/Source/1.0.0/Classes/Style/Values');
