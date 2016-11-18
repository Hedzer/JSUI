import isObject from 'Framework/TypeChecks/isObject';

import $private from 'Framework/Constants/Keys/General/private';
import Receipt from 'Framework/Classes/Receipt';
import uid from 'Framework/Utilities/General/uid';
import define from 'Framework/Utilities/Properties/addHiddenValue';
import Enableable from 'Framework/Mixins/Enableable';

//keys
import to from 'Framework/Constants/Keys/BindReceipt/to';
import on from 'Framework/Constants/Keys/BindReceipt/on';
import oneWay from 'Framework/Constants/Keys/BindReceipt/oneWay';
import twoWay from 'Framework/Constants/Keys/BindReceipt/twoWay';
import normalize from 'Framework/Constants/Keys/BindReceipt/normalize';

import relationships from 'Framework/Classes/BindReceipt/relationships';
import getHandledType from 'Framework/Classes/BindReceipt/getHandledType';

export default class BindReceipt extends Enableable(Receipt) {
	constructor(relationship, subject) {
		super();
		define(this, $private, {
			uid: uid(),
			relationship: relationship,
			subject: subject
		});

		if (subject) {
			this.to = this[to];
		}
	}
	get uid() {
		return this[$private].uid;
	}
	set uid(id) {
		this[$private].uid = id;
	}
	[to](subject) {
		let to = this[$private].to;
		if (!to) {
			this[$private].to = subject;
			delete this.to;

			//allow on, oneWay, twoWay, normalize
			this.on = this[on];
			this.oneWay = this[oneWay];
			this.twoWay = this[twoWay];
			this.normalize = this[normalize];
		}
		return this;
	}
	[on](events) {
		
		if (isObject(events)) {
			Object.keys(events).forEach((event) => {
				let tie = events[event];
				Object.keys(tie).forEach((bind) => {
					let direction = tie[bind];
					Object.keys(direction).forEach((arrow) => {
						let priv = this[$private];
						let to = direction[arrow];
						let subjectType = getHandledType(priv.subject);
						let toType = getHandledType(priv.to);
						let relationshipTo = relationships[subjectType];
						relationshipTo[toType](priv, this);
					});
				});
			});
		}

		delete this.on;
		delete this.oneWay;
		delete this.twoWay;

		//do the things

		return this;
	}
	[oneWay]() {
		delete this.on;
		delete this.oneWay;
		delete this.twoWay;

		//do the things

		return this;
	}
	[twoWay]() {
		delete this.on;
		delete this.oneWay;
		delete this.twoWay;

		//do the things

		return this;
	}
	[normalize](rules) {
		return this;
	}
}