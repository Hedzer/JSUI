import Identity from 'Framework/Classes/Identity';
import Disinct from 'Framework/Classes/Disinct';

const identity = new Identity({
	class: 'Feature',
	major: 1, minor: 0, patch: 0
});

export default class Feature extends Disinct {
	constructor(){
		super();
		this.identity = identity;
	}
	static get name() {
		return 'FeatureName';
	}
}