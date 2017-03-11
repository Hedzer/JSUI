
//Constants
import $private from '/Framework/V1.0/Constants/Keys/General/private';
import isClass from '/Framework/V1.0/Constants/Keys/TypeChecks/Behaviorlike/isStatic';
import isInstance from '/Framework/V1.0/Constants/Keys/TypeChecks/Behaviorlike/isInstance';

//Utilities
import define from '/Framework/V1.0/Utilities/Properties/addHiddenValue';
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

let Behaviorlike = (descendant) => class BehaviorlikeMixin extends descendant {
	constructor(host) {
		super();

		//create hosts container
		this[$private].hosts = {};
		if (host) {
			this.attach(host);
		}
	}
	
	//methods
	attach(host) {
		if (isJSUI(host)) {
			let id = host.uid;
			if (this[$private].hosts[id]) { return; }
			this[$private].hosts[id] = host;
			let addAs = this.namespace;
			if (addAs) {
				define(host, addAs, this);
			}
			this.trigger('attach', host);
			return {
				as: (function(name) {
					delete host[addAs];
					host[name] = this;
				}).bind(this)
			};
		}
	}
	destructor() {
		super.destructor();
	}
	detach(host) {
		let id;
		if (isJSUI(host)) {
			id = host.uid;
		}
		host = this[$private].hosts[id];
		delete this[$private].hosts[id];
		this.trigger('detach', host);
	}
	hosts(each) {
		let results = [];
		let hasTask = isFunction(each);
		let hosts = this[$private].hosts;
		Object.keys(hosts).forEach((id) => {
			let host = hosts[id]
			if (hasTask) {
				each(host);
			}
			results.push(host);
		});
		return results;
	}

	//properties
	get namespace() {
		return 'DefaultBehavior';
	}

	//type checks
	static get [isClass]() {
		return true;
	}
	get [isInstance]() {
		return true;
	}
};

export default Behaviorlike;

exports(Behaviorlike).as('/Framework/V1.0/Mixins/Behaviorlike');