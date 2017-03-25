
//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

export default function feval(code) {
	return (new Function(code))();
}

exports(feval).as('/JSUI/Source/V1.0/Reflection/feval');
