import isString from '/Framework/V1.0/TypeChecks/isString';
import isArray from '/Framework/V1.0/TypeChecks/isArray';
import isFunction from '/Framework/V1.0/TypeChecks/isFunction';
import $private from '/Framework/V1.0/Constants/Keys/General/private';
import Identity from '/Framework/V1.0/Classes/Identity';
import uid from '/Framework/V1.0/Utilities/General/uid';
import BindReceipt from '/Framework/V1.0/Classes/BindReceipt';

import Base from '/Framework/V1.0/Classes/Base';
import Enableable from '/Framework/V1.0/Mixins/Enableable';

const identity = new Identity({
	class: 'Relationship',
	major: 1, minor: 0, patch: 0
});

export default class Relationship extends Enableable(Base) {
	constructor() {
		super();
		this[$private] = {
			bindings: {},
			uid: uid()
		};
	}
	get uid() {
		return this[$private].uid;
	}
	bind(subject) {
		let binding = new BindReceipt(this, subject);
		this[$private].bindings[binding.uid] = binding;
		return binding;
	}
	remove(binding) {
		if (isArray(binding)) {
			return binding.forEach((b) => {
				this.remove(b);
			});
		}
		if (isString(binding)) {
			binding = this[$private].bindings[binding];
		}
		if (binding && isFunction(binding.remove)) {
			delete this[$private].bindings[binding.uid];
			binding.removeAll();
		}
	}
	removeAll() {
		this.remove(Object.values(this[$private].bindings));
	}
}

//(new Bond(data)).to(element).
/*
	(new Relationship()).bind(data).to(element).on({
		count:{'->':'length'}
	}).change();
*/

// (new Relationship()).bind(data).to(element).on({
// 	textChanged: {
// 		text: {'->': 'label'}
// 	}
// }).normalize({
// 	textChanged: {
// 		'text -> label': (value) => {return value.toUpperCase(); }
// 	}
// });
// (new Relationship()).bind(data).to(element).oneWay();
// (new Relationship()).bind(data).to(element).twoWay();