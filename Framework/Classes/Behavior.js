import Styleable from 'Framework/Classes/Styleable';

export default class Behavior extends Styleable {
	constructor(host) {
		super();
		this.private.host = host;
		this.context = 'behavior';
	}
	get host() {
		return this.private.host;
	}
	set host(element) {
		this.private.host = element;
	}
	destructor() {
		super.destructor();
	}
}