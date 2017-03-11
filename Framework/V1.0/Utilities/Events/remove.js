
//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function remove() {
	delete this.pool[this.id];
}

exports(remove).as('/Framework/V1.0/Utilities/Events/remove');
