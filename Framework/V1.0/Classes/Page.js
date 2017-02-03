import Identity from '/Framework/V1.0/Classes/Identity';
import Main from '/Framework/V1.0/Classes/Elements/Main';
import Routable from '/Framework/V1.0/Mixins/Routable';

const identity = new Identity({
	class: 'Page',
	major: 1, minor: 0, patch: 0
});

export default class Page extends Routable(Main) {
	constructor(){
		super();
		this.identity = identity;
	}
	static get route() {
		return 'Page';
	}
}