import Styleable from './Styleable';

export default class Behavior extends Styleable {
	constructor(host) {
		super();
		this.private.host = host;
		this.context = 'behavior';
	}
	get host() {
		return this.private.host;
	}
	set host(jsui) {
		this.private.host = jsui;
	}
	destructor() {
		super.destructor();
	}
}