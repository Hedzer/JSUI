import uid from '/Framework/V1.0/Utilities/General/uid';
import $private from '/Framework/V1.0/Constants/Keys/General/private';
import $uid from '/Framework/V1.0/Constants/Keys/General/uid';
import define from '/Framework/V1.0/Utilities/Properties/addHiddenValue';

export default function constructor(values = {}) {
	define(this, $private, {
		events: {},
		dispatchers: {},
		state: values
	});
	define(this, $uid, uid());
}