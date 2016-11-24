import isObject from 'Framework/TypeChecks/isObject';
import isFunction from 'Framework/TypeChecks/isFunction';
import isJSUIFunction from 'Framework/TypeChecks/isJSUIFunction';

import $private from 'Framework/Constants/Keys/General/private';
import Receipt from 'Framework/Classes/Receipt';
import uid from 'Framework/Utilities/General/uid';
import define from 'Framework/Utilities/Properties/addHiddenValue';
import Enableable from 'Framework/Mixins/Enableable';

//keys
import to from 'Framework/Constants/Keys/BindReceipt/to';
import on from 'Framework/Constants/Keys/BindReceipt/on';
import normalize from 'Framework/Constants/Keys/BindReceipt/normalize';

import relationships from 'Framework/Classes/BindReceipt/relationships';
import getHandledType from 'Framework/Classes/BindReceipt/getHandledType';

export default class BindReceipt extends Enableable(Receipt) {
	constructor(relationship, subject) {
		super();
		define(this, $private, {
			uid: uid(),
			relationship: relationship,
			subject: subject,
			Handles: {
				byID: {},
				byName: {}
			}
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
			this.on = this[on];
			this.normalize = this[normalize];
			delete this.to;
		}
		return this;
	}
	[on](events) {
		
		if (isObject(events)) {
			Object.keys(events).forEach((event) => {
				let tie = events[event];
				if (isObject(tie)) {
					Object.keys(tie).forEach((bind) => {
						let direction = tie[bind];
						if (isObject(direction)) {
							Object.keys(direction).forEach((arrow) => {
								let _private = this[$private];
								let to = direction[arrow];
								let subjectType = getHandledType(_private.subject);
								let toType = getHandledType(_private.to);
								let relationshipTo = relationships[subjectType];
								let handle = relationshipTo[toType](this, event, bind, arrow, to);
								_private.Handles.byID[handle.uid] = handle;
								_private.Handles.byName[handle.name] = handle;
							});
						}
					});	
				}
			});
			delete this.on;
		}

		return this;
	}
	[normalize](rules) {

		if (isObject(rules)) {
			Object.keys(rules).forEach((event) => {
				let relationships = rules[event];
				if (isObject(relationships)) {
					Object.keys(relationships).forEach((relationship) => {
						let normalizer = relationships[relationship];
						let key = `${event}: ${relationship}`;
						if (isFunction(normalizer) || isJSUIFunction(normalizer)) {
							let handle = this[$private].Handles.byName[key];
							if (handle) {
								handle.normalizer = normalizer;
							}
						}
					});
				}
			});
		}

		return this;
	}
}