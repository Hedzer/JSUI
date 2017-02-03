
import isData from '/Framework/V1.0/TypeChecks/isData';

//Keys
import $private from '/Framework/V1.0/Constants/Keys/General/private';

//mixins
import Extensible from '/Framework/V1.0/Classes/Extensible';

export default class DataHandle extends Extensible {
	constructor(data) {
		super();
		if (isData(data)) {
			this[$private] = data[$private];
		}
	}
}