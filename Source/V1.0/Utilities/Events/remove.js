
//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

export default function remove() {
	delete this.pool[this.id];
}

exports(remove).as('/JSUI/Source/V1.0/Utilities/Events/remove');
