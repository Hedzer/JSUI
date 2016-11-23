import $private from 'Framework/Constants/Keys/General/private';
import Receipt from 'Framework/Classes/Receipt';
import define from 'Framework/Utilities/Properties/addHiddenValue';
import uid from 'Framework/Utilities/General/uid';

export default class RelationshipBindingReceipt extends Receipt {
	constructor(bindings = {}) {
		super();
		define(this, $private, bindings);
		bindings.uid = uid();
	}
	get uid() {
		return this[$private].uid;
	}
	set uid(v) {
		this[$private].uid = v;
	}
	get subjectHandler() {
		return this[$private].subjectHandler;
	}
	set subjectHandler(v) {
		this[$private].subjectHandler = v;
	}
	get toHandler() {
		return this[$private].toHandler;
	}
	set toHandler(v) {
		this[$private].toHandler = v;
	}
	get subjectDestroyer() {
		return this[$private].subjectDestroyer;
	}
	set subjectDestroyer(v) {
		this[$private].subjectDestroyer = v;
	}
	get toDestroyer() {
		return this[$private].toDestroyer;
	}
	set toDestroyer(v) {
		this[$private].toDestroyer = v;
	}
	get name() {
		return this[$private].name;
	}
	set name(v) {
		this[$private].name = v;
	}
	get normalizer() {
		return this[$private].normalizer;
	}
	set normalizer(v) {
		this[$private].normalizer = v;
	}
}