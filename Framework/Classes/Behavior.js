import $private from 'Framework/Constants/Keys/General/private';
import Identity from 'Framework/Classes/Identity';
import Styleable from 'Framework/Classes/Styleable';
import isJSUI from 'Framework/TypeChecks/isJSUI';
import isFunction from 'Framework/TypeChecks/isFunction';

const identity = new Identity({
	class: 'Behavior',
	major: 1, minor: 0, patch: 0
});

export default class Behavior extends Styleable {
	constructor(host) {
		super();

		//create hosts container
		this[$private].hosts = {};
		if (host) {
			this.attach(host);
		}

		//setup new props
		this.identity = identity;
		this.Style.context = 'behavior';
	}
	attach(host) {
		if (isJSUI(host)) {
			let id = host.uid;
			let addAs = this.identity.class;
			if (this[$private].hosts[id]) { return; }
			this[$private].hosts[id] = host;
			host[addAs] = this;
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
	destructor() {
		super.destructor();
	}
}