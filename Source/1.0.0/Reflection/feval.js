
//Utilities
import exports from '/JSUI/Source/1.0.0/Utilities/Dependencies/exports';

export default function feval(code) {
	return (new Function(code))();
}

exports(feval).as('/JSUI/Source/1.0.0/Reflection/feval');
