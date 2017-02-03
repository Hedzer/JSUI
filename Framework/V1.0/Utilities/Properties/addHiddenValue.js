export default function addHiddenValue(obj, prop, value) {
	Object.defineProperty(obj, prop, {
		configurable:true,
		enumerable:false,
		writable: true,
		value: value
	});
}