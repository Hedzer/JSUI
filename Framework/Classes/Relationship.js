import isString from 'Framework/TypeChecks/isString';
import isArray from 'Framework/TypeChecks/isArray';
import isFunction from 'Framework/TypeChecks/isFunction';
import $private from 'Framework/Constants/Keys/General/private';
import Identity from 'Framework/Classes/Identity';
import uid from 'Framework/Utilities/General/uid';
import BindReceipt from 'Framework/Classes/BindReceipt';

import Base from 'Framework/Classes/Base';
import Enableable from 'Framework/Mixins/Enableable';

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