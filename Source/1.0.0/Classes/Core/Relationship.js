
//Classes
import Class from 'JSUI/Source/1.0.0/Classes/Core/Class';
import BindReceipt from 'JSUI/Source/1.0.0/Classes/Receipts/Bind';
import Identity from 'JSUI/Source/1.0.0/Classes/Core/Identity';

//Constants
import $private from 'JSUI/Source/1.0.0/Constants/Keys/General/private';

//Mixins
import Enableable from 'JSUI/Source/1.0.0/Mixins/Enableable';

//TypeChecks
import isArray from 'JSUI/Source/1.0.0/TypeChecks/isArray';
import isFunction from 'JSUI/Source/1.0.0/TypeChecks/isFunction';
import isString from 'JSUI/Source/1.0.0/TypeChecks/isString';

//Utilities
import exports from 'Parcello/exports';
import uid from 'JSUI/Source/1.0.0/Utilities/General/uid';

const identity = new Identity({
	class: 'Relationship',
	major: 1, minor: 0, patch: 0,
});

export default class Relationship extends Class
	.implements(Enableable) {
	
	constructor() {
		super();
		this[$private] = {
			bindings: {},
			uid: uid(),
		};
	}

	//methods
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

	//properties
	get uid() {
		return this[$private].uid;
	}
}

exports(Relationship).as('JSUI/Source/1.0.0/Classes/Core/Relationship');

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