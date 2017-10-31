
//Utilities
import exports from 'Parcello/exports';

export default function dispatch(context, pool) {
	Array.prototype.splice.call(arguments, 0, 2);
	Object.keys(pool).forEach((uid) => {
		let method = pool[uid];
		method.apply(context, arguments);
	});
}

exports(dispatch).as('JSUI/Source/1.0.0/Utilities/Events/dispatch');
