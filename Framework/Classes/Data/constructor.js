import { default as uid } from 'Framework/Utilities/General/uid';
import { default as $private } from 'Framework/Constants/Symbols/General/private';
import { default as $uid } from 'Framework/Constants/Symbols/General/uid';
import { default as define } from 'Framework/Utilities/Properties/addHiddenValue';

export default function constructor(values = {}) {
	define(this, $private, {
		events: {},
		hooks: {},
		state: values
	});
	define(this, $uid, uid());
}