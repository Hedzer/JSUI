import $private from 'Framework/Constants/Keys/General/private';
import { default as define } from 'Framework/Utilities/Properties/addHiddenValue';

export default function constructor() {
	define(this, $private, {
		events: {},
		dispatchers: {},
		state: {}
	});
}