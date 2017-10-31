
//Utilities
import exports from 'Parcello/exports';

export default function feval(code) {
	return (new Function(code))();
}

exports(feval).as('JSUI/Source/1.0.0/Reflection/feval');
