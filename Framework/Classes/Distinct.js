import Extensible from 'Framework/Classes/Extensible';
import uid from 'Framework/Utilities/General/uid';
import constructor from 'Framework/Classes/Distinct/constructor';

export default class Distinct extends Extensible {
	constructor() {
		super();
		constructor.call(this);
	}
}