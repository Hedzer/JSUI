//Keys
import $private from '/Framework/V1.0/Constants/Keys/General/private';
import instanceTypeCheck from '/Framework/V1.0/Constants/Keys/TypeChecks/Behaviorlike/isInstance';
import staticTypeCheck from '/Framework/V1.0/Constants/Keys/TypeChecks/Behaviorlike/isStatic';
import define from '/Framework/V1.0/Utilities/Properties/addHiddenValue';

let Behaviorlike = (descendant) => class BehaviorlikeMixin extends descendant {
	constructor(host) {
		super();

		//create hosts container
		this[$private].hosts = {};
		if (host) {
			this.attach(host);
		}
	}
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
	get namespace() {
		return 'DefaultBehavior';
	}
	destructor() {
		super.destructor();
	}
	get [instanceTypeCheck]() {
		return true;
	}
	static get [staticTypeCheck]() {
		return true;
	}
};

export default Behaviorlike;