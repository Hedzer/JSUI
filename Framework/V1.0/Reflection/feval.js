
//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function feval(code) {
	return (new Function(code))();
}

exports(feval).as('/Framework/V1.0/Reflection/feval');
