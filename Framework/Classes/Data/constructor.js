import { default as uid } from 'Framework/Utilities/General/uid';
import { default as $private } from 'Framework/Constants/Keys/General/private';
import { default as $uid } from 'Framework/Constants/Keys/General/uid';
import { default as define } from 'Framework/Utilities/Properties/addHiddenValue';

export default function constructor(values = {}) {
	define(this, $private, {
		events: {},
		dispatchers: {},
		state: values
	});
	define(this, $uid, uid());
}