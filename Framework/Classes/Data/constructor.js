import uid from 'Framework/Utilities/General/uid';
import $private from 'Framework/Constants/Keys/General/private';
import $uid from 'Framework/Constants/Keys/General/uid';
import define from 'Framework/Utilities/Properties/addHiddenValue';

export default function constructor(values = {}) {
	define(this, $private, {
		events: {},
		dispatchers: {},
		state: values
	});
	define(this, $uid, uid());
}