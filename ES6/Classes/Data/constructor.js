import { default as uid } from '../../Utilities/General/uid';

export default function constructor() {
	Object.defineProperty(this, '$private', {
		configurable:true,
		enumerable:false,
		writable: true,
		value: {
			Events: {},
			Hooks: {},
			State: {}
		}
	});
	Object.defineProperty(this, '$uid', {
		configurable:true,
		enumerable:false,
		writable: true,
		value: uid()
	});
}