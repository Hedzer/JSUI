import $private from 'Framework/Constants/Keys/General/private';
import Receipt from 'Framework/Classes/Receipt';
import uid from 'Framework/Utilities/General/uid';
import define from 'Framework/Utilities/Properties/addHiddenValue';
import Enableable from 'Framework/Mixins/Enableable';

export default class BindReceipt extends Enableable(Receipt) {
	constructor(relationship, subject) {
		define(this, $private, {
			uid: uid(),
			relationship: relationship,
			subject: subject
		});
	}
	get uid() {
		return this[$private].uid;
	}
	set uid(id) {
		this[$private].uid = id;
	}
	to(subject) {
		let to = this[$private].to;
		if (!to) {
			this[$private].to = subject;
		}
		return this;
	}
	on(events) {
		return this;
	}
	oneWay() {
		return this;
	}
	twoWay() {
		return this;
	}
	normalize(rules) {
		return this;
	}
}