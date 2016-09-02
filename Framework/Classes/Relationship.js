import { default as uid } from '/Framework/Utilities/General/uid';
import { default as Binding } from '/Framework/Classes/Relationship/Bind';

export default class Relationship {
	constructor() {
		this.private = {
			bindings: {}
		};
		this.uid = uid();
	}
	bind(subject) {
		var state = {
			subject: subject
		};
		return Binding.bind.call(this, state);
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