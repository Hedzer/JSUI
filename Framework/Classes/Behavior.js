import Styleable from 'Framework/Classes/Styleable';
import isJSUI from 'Framework/TypeChecks/isJSUI';

var version = Object.freeze({
	major: 1,
	minor: 0,
	patch: 0
});

export default class Behavior extends Styleable {
	constructor(host) {
		super();

		//create hosts container
		this.private.hosts = {};
		if (host) {
			this.attach(host);
		}

		//setup new props
		this.name = 'behavior';
		this.context = 'behavior';
	}
	attach(host) {
		if (isJSUI(host)) {
			let id = host.uid;
			if (this.private.hosts[id]) {return; }
			this.private.hosts[id] = host;
			this.trigger('attach', host);
			return;
		}
	}
	detach(host) {
		let id;
		if (isJSUI(host)) {
			id = host.uid;
		}
		host = this.private.hosts[id];
		delete this.private.hosts[id];
		this.trigger('detach', host);
	}
	destructor() {
		super.destructor();
	}
}