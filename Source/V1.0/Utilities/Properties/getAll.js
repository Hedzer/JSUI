
//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

let ObjectPrototype = Object.getPrototypeOf({});
export default function getAll(obj) {
	//code modified from airportyh, http://stackoverflow.com/questions/8024149/is-it-possible-to-get-the-non-enumerable-inherited-property-names-of-an-object
	let props = [];
	do {
		Object.getOwnPropertyNames(obj).forEach((prop) => {
			if (!props.includes(prop)) {
				props.push(prop);
			}
		});
	} while ((obj = Object.getPrototypeOf(obj)) && obj !== ObjectPrototype);
	return props;
}

exports(getAll).as('/JSUI/Source/V1.0/Utilities/Properties/getAll');
