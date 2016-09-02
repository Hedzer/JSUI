import Extensible from '/Framework/Classes/Extensible';
import uid from '/Framework/Utilities/General/uid';

export default class Distinct extends Extensible {
	constructor() {
		super();
		this.uid = uid();
	}
}