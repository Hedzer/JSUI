import Identity from 'Framework/Classes/Identity';
import Main from 'Framework/Classes/Elements/Main';
import Routable from 'Framework/Mixins/Routable';

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