import $private from 'Framework/Constants/Symbols/General/private';
import Identity from 'Framework/Classes/Identity';
import { default as uid } from 'Framework/Utilities/General/uid';
import { default as Binding } from 'Framework/Classes/Relationship/Bind';

const identity = new Identity({
	class: 'Relationship',
	major: 1, minor: 0, patch: 0
});

export default class Relationship {
	constructor() {
		this[$private] = {
			bindings: {}
		};
		this.uid = uid();
	}
	bind(subject) {
		let state = {};
		return Binding.bind.call(this, state, subject);
	}
	release(subject) {

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