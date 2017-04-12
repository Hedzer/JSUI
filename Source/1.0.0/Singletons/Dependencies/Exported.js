
const namespace = 'JSUI.Style.Exported';

if (!(namespace in window)) {
	Object.defineProperty(window, namespace, {
		configurable:true,
		enumerable:false,
		writable: true,
		value: {},
	});
}
const Exported = window[namespace];

export default Exported;
