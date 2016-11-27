import Identity from 'Framework/Classes/Identity';
import Disinct from 'Framework/Classes/Disinct';

const identity = new Identity({
	class: 'Role',
	major: 1, minor: 0, patch: 0
});

export default class Role extends Disinct {
	constructor(){
		super();
		this.identity = identity;
	}
	static get name() {
		return 'RoleName';
	}
}