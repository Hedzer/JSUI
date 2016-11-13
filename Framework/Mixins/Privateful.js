//Keys
import $private from 'Framework/Constants/Keys/General/private';
import define from 'Framework/Utilities/Properties/addHiddenValue';

let Privateful = (descendant) => class PrivatefulMixin extends descendant {  
	constructor() {
		super();
		if (!this.hasOwnProperty($private)) {
			define(this, $private, {});
		}
	}
};

export default Privateful;