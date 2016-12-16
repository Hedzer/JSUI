import Identity from 'Framework/Classes/Identity';
import Distinct from 'Framework/Classes/Distinct';

const identity = new Identity({
	class: 'Feature',
	major: 1, minor: 0, patch: 0
});

export default class Feature extends Distinct {
	constructor(){
		super();
		this.identity = identity;
	}
}