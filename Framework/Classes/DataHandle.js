
import isData from 'Framework/TypeChecks/isData';

//Keys
import $private from 'Framework/Constants/Keys/General/private';

//mixins
import Extensible from 'Framework/Classes/Extensible';

export default class DataHandle extends Extensible {
	constructor(data) {
		super();
		if (isData(data)) {
			this[$private] = data[$private];
		}
	}
}