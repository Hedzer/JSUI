import Styleable from './Styleable';

export default class Behavior extends Styleable {
	constructor(host) {
		super();
		this.private.host = host;
		this.context = 'behavior';
	}
	destructor() {
		super.destructor();
	}
}