import Extensible from './Extensible';
import uid from '../Utilities/General/uid';

export default class Distinct extends Extensible {
	constructor() {
		super();
		this.uid = uid();
	}
}