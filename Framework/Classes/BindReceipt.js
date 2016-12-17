import isString from 'Framework/TypeChecks/isString';
import isObject from 'Framework/TypeChecks/isObject';
import isArray from 'Framework/TypeChecks/isArray';
import isFunction from 'Framework/TypeChecks/isFunction';
import isJSUIFunction from 'Framework/TypeChecks/isJSUIFunction';
import isRelationshipBindingReceipt from 'Framework/TypeChecks/isRelationshipBindingReceipt';

import $private from 'Framework/Constants/Keys/General/private';
import Receipt from 'Framework/Classes/Receipt';
import uid from 'Framework/Utilities/General/uid';
import define from 'Framework/Utilities/Properties/addHiddenValue';
import Enableable from 'Framework/Mixins/Enableable';

//keys
import to from 'Framework/Constants/Keys/BindReceipt/to';
import on from 'Framework/Constants/Keys/BindReceipt/on';
import normalize from 'Framework/Constants/Keys/BindReceipt/normalize';
import remove from 'Framework/Constants/Keys/BindReceipt/remove';
import removeAll from 'Framework/Constants/Keys/BindReceipt/removeAll';

import relationships from 'Framework/Classes/BindReceipt/relationships';
import getHandledType from 'Framework/Classes/BindReceipt/getHandledType';

export default class BindReceipt extends Enableable(Receipt) {
	constructor(relationship, subject) {
		super();
		this[$private] = {
			uid: uid(),
			Handles: {
				byID: {},
				byName: {}
			}
		};
		this[$private].relationship = relationship;
		this[$private].subject = subject;

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
			this.remove = this[remove];
			this.removeAll = this[removeAll];
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
	[remove](handle) {

		if (isArray(handle)) {
			return handle.forEach((h) => { this[remove](h); });
		}
		let success = false;
		let Handles = this[$private].Handles;
		if (isString(handle)) {
			handle = (Handles.byName[handle] || Handles.byID[handle]);
		}
		if (isRelationshipBindingReceipt(handle)) {
			let name = handle.name;
			let id = handle.id;
			handle.remove();
			delete Handles.byName[name];
			delete Handles.byID[id];
			success = true;
		}
		return success;

	}
	[removeAll]() {

		let Handles = this[$private].Handles;
		this[remove](Object.values(Handles.byID));

	}
	get handles() {
		let Handles = this[$private].Handles;
		return Object.values(Handles.byID);
	}
	get enabled() {
		return super.enabled;
	}
	set enabled(v) {
		let value = !!v;
		this.handles.forEach((handle) => { handle.enabled = value; });
		super.enabled = value;
	}
}