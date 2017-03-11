
//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function dispatch(context, pool) {
	Array.prototype.splice.call(arguments, 0, 2);
	Object.keys(pool).forEach((uid) => {
		let method = pool[uid];
		method.apply(context, arguments);
	});
}

exports(dispatch).as('/Framework/V1.0/Utilities/Events/dispatch');
