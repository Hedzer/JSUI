
//Classes
import Class from '/Framework/V1.0/Classes/Core/Class';
import Identity from '/Framework/V1.0/Classes/Core/Identity';

//Constants
import $domain from '/Framework/V1.0/Constants/Keys/StyleValues/domain';
import map from '/Framework/V1.0/Constants/Keys/StyleValues/map';

//Mixins
import Privatelike from '/Framework/V1.0/Mixins/Privatelike';
import Eventful from '/Framework/V1.0/Mixins/Eventful';
import Extensible from '/Framework/V1.0/Mixins/Extensible';
import Serializable from '/Framework/V1.0/Mixins/Serializable';
import Stateful from '/Framework/V1.0/Mixins/Stateful';

//Singletons
import Variables from '/Framework/V1.0/Singletons/Style/Variables';

//TypeChecks
import isObject from '/Framework/V1.0/TypeChecks/isObject';
import isString from '/Framework/V1.0/TypeChecks/isString';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';
import symbolish from '/Framework/V1.0/Utilities/Properties/symbolish';

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
		Extensible,
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

exports(StyleValues).as('/Framework/V1.0/Classes/Style/Values');
