import Identity from 'Framework/Classes/Identity';
import Distinct from 'Framework/Classes/Distinct';

const identity = new Identity({
	class: 'Role',
	major: 1, minor: 0, patch: 0
});

export default class Role extends Distinct {
	constructor(){
		super();
		this.identity = identity;
	}
}