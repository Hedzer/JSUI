import $private from 'Framework/Constants/Keys/General/private';
import Identity from 'Framework/Classes/Identity';
import uid from 'Framework/Utilities/General/uid';
import BindReceipt from 'Framework/Classes/BindReceipt';
import define from 'Framework/Utilities/Properties/addHiddenValue';

import Base from 'Framework/Classes/Base';
import Enableable from 'Framework/Mixins/Enableable';

const identity = new Identity({
	class: 'Relationship',
	major: 1, minor: 0, patch: 0
});

export default class Relationship extends Enableable(Base) {
	constructor() {
		define(this, $private, {
			bindings: {},
			uid: uid()
		});
	}
	get uid() {
		return this[$private].uid;
	}
	bind(subject) {
		let binding = new BindReceipt(this, subject);
		this[$private].bindings[binding.uid] = binding;
		return binding;
	}
	release(binding) {

	}
	releaseAll() {

	}
}

//(new Bond(data)).to(element).
/*
	(new Relationship()).bind(data).to(element).on({
		count:{'->':'length'}
	}).change();
*/

(new Relationship()).bind(data).to(element).on({
	textChanged: {
		text: {'->': 'label'}
	}
}).normalize({
	textChanged: {
		'text -> label': (value) => {return value.toUpperCase(); }
	}
});
(new Relationship()).bind(data).to(element).oneWay();
(new Relationship()).bind(data).to(element).twoWay();