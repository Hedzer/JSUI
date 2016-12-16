import $private from 'Framework/Constants/Keys/General/private';

export default function constructor() {
	this[$private] = {
		events: {},
		dispatchers: {},
		state: {}
	};
}