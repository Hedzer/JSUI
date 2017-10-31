
//Classes
import Receipt from 'JSUI/Source/1.0.0/Classes/Core/Receipt';

//Constants
import $private from 'JSUI/Source/1.0.0/Constants/Keys/General/private';
import normalize from 'JSUI/Source/1.0.0/Constants/Keys/BindReceipt/normalize';
import on from 'JSUI/Source/1.0.0/Constants/Keys/BindReceipt/on';
import remove from 'JSUI/Source/1.0.0/Constants/Keys/BindReceipt/remove';
import removeAll from 'JSUI/Source/1.0.0/Constants/Keys/BindReceipt/removeAll';
import to from 'JSUI/Source/1.0.0/Constants/Keys/BindReceipt/to';

//Handlers
import getHandledType from 'JSUI/Source/1.0.0/Classes/Receipts/Bind/getHandledType';
import relationships from 'JSUI/Source/1.0.0/Classes/Receipts/Bind/relationships';

//Mixins
import Enableable from 'JSUI/Source/1.0.0/Mixins/Enableable';

//TypeChecks
import isArray from 'JSUI/Source/1.0.0/TypeChecks/isArray';
import isFunction from 'JSUI/Source/1.0.0/TypeChecks/isFunction';
import isJSUIFunction from 'JSUI/Source/1.0.0/TypeChecks/isJSUIFunction';
import isObject from 'JSUI/Source/1.0.0/TypeChecks/isObject';
import isRelationshipBindingReceipt from 'JSUI/Source/1.0.0/TypeChecks/isRelationshipBindingReceipt';
import isString from 'JSUI/Source/1.0.0/TypeChecks/isString';

//Utilities
import define from 'JSUI/Source/1.0.0/Utilities/Properties/addHiddenValue';
import exports from 'Parcello/exports';
import uid from 'JSUI/Source/1.0.0/Utilities/General/uid';

export default class BindReceipt extends Receipt
	.implements(Enableable) {

	constructor(relationship, subject) {
		super();
		this[$private] = {
			uid: uid(),
			Handles: {
				byID: {},
				byName: {},
			}
		};
		this[$private].relationship = relationship;
		this[$private].subject = subject;

		if (subject) {
			this.to = this[to];
		}
	}

	//methods
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

	//properties
	get enabled() {
		return super.enabled;
	}
	set enabled(v) {
		let value = !!v;
		this.handles.forEach((handle) => { handle.enabled = value; });
		super.enabled = value;
	}
	get handles() {
		let Handles = this[$private].Handles;
		return Object.values(Handles.byID);
	}
	get uid() {
		return this[$private].uid;
	}
	set uid(id) {
		this[$private].uid = id;
	}
}

exports(BindReceipt).as('JSUI/Source/1.0.0/Classes/Receipts/Bind');