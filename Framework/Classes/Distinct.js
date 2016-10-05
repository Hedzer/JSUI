import Extensible from 'Framework/Classes/Extensible';
import uid from 'Framework/Utilities/General/uid';
import constructor from 'Framework/Classes/Distinct/constructor';

const version = Object.freeze({
	major: 1,
	minor: 0,
	patch: 0
});

export default class Distinct extends Extensible {
	constructor() {
		super();
		constructor.call(this);
	}
	get uid() {
		return this.private.uid;
	}
	get name() {
		return this.state('name');
	}
	set name(name) {
		this.state('name', name);
		if (!this.private.Is[name]) {
			this.private.Is[name] = true;
		}
	}
	get version() {
		return version;
	}
	get Is() {
		return this.private.Is;
	}
}