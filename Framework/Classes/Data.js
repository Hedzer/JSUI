import getHandledType from 'Framework/Classes/Element/getHandledType';
import unhandled from 'Framework/Classes/General/Handlers/unhandled';

import $private from 'Framework/Constants/Symbols/private';
import on from 'Framework/Constants/Symbols/on';
import trigger from 'Framework/Constants/Symbols/trigger';

import On from 'Framework/Classes/Element/Handlers/On';
import Trigger from 'Framework/Classes/Element/Handlers/Trigger';
import constructor from 'Framework/Classes/Data/constructor';

class Data {
	constructor(values) {
		constructor.call(this, values);
	}
	[on](event, method) {
		let type = getHandledType(event);
		let action = On[type];
		return (action || unhandled).call(this, event, method);
	}
	[trigger](event, args) {
		let type = getHandledType(event);
		let action = Trigger[type];
		return (action || unhandled).call(this, event, args);
	}
	toJSON() {
		return this[$private].state;
	}
}

export default Data;