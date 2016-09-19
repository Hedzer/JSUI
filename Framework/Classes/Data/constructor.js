import { default as uid } from 'Framework/Utilities/General/uid';

export default function constructor() {
	Object.defineProperty(this, '$private', {
		configurable:true,
		enumerable:false,
		writable: true,
		value: {
			events: {},
			hooks: {},
			state: {}
		}
	});
	Object.defineProperty(this, '$uid', {
		configurable:true,
		enumerable:false,
		writable: true,
		value: uid()
	});
}