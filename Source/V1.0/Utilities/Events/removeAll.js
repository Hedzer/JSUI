
//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

export default function removeAll() {
	Object.keys(this.pool).forEach((eid) => {
		delete this.pool[eid];
	});
}

exports(removeAll).as('/JSUI/Source/V1.0/Utilities/Events/removeAll');
