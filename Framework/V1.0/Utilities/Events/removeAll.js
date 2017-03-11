
//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function removeAll() {
	Object.keys(this.pool).forEach((eid) => {
		delete this.pool[eid];
	});
}

exports(removeAll).as('/Framework/V1.0/Utilities/Events/removeAll');
