
//TypeChecks
import isClass from '/Framework/V1.0/TypeChecks/isClass';
import isObject from '/Framework/V1.0/TypeChecks/isObject';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function extend(a) {
	if (!isObject(a)) { return a; }
	return {
		with: function(b) {
			if (!isObject(b) || isClass(b)) { return a; }
			Object.keys(b).forEach((key) => {
				if (isObject(b[key]) && !isClass(b[key])) {
					if (!isObject(a[key])) {
						a[key] = {};
					}
					a[key] = Object.create(a[key]);
					a[key] = extend(a[key]).with(b[key]);
					return;
				}
				a[key] = b[key];
			});
			return a;
		}
	};
}

exports(extend).as('/Framework/V1.0/Utilities/Objects/extend');
