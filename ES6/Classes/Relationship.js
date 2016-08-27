import { default as uid } from '../Utilities/General/uid';

export default class Relationship {
	constructor(subject) {
		this.private = {
			subject: subject
		};
		this.uid = uid();
	}
	bind(subject) {
		this.private.subject = subject;
		return this;
	}
	to(subject) {

		return this;
	}

}

//(new Bond(data)).to(element).
/*
	(new Relationship()).bind(data).to(element).on({
		count:{'>':'length'}
	});
*/
(new Relationship()).bind(data).to(element).on({
	textChanged: {
		text: {'>': 'label'}
	}
});
(new Relationship()).bind(data).to(element).oneWay();
(new Relationship()).bind(data).to(element).twoWay();