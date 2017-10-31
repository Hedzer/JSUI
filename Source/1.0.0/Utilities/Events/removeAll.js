
//Utilities
import exports from 'Parcello/exports';

export default function removeAll() {
	Object.keys(this.pool).forEach((eid) => {
		delete this.pool[eid];
	});
}

exports(removeAll).as('JSUI/Source/1.0.0/Utilities/Events/removeAll');
