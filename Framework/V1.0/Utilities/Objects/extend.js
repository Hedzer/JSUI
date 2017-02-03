import isObject from '/Framework/V1.0/TypeChecks/isObject';

export default function extend(a) {
	if (!isObject(a)) { return a; }
	return {
		with: function(b) {
			if (!isObject(b)) { return a; }
			Object.keys(b).forEach((key) => {
				if (isObject(b[key])) {
					if (!isObject(a[key])) {
						a[key] = {};
					}
					a[key] = extend(a[key]).with(b[key]);
					return;
				}
				a[key] = b[key];
			});
			return a;
		}
	};
}