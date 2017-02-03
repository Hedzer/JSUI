import isOnEventBoundReceipt from '/Framework/V1.0/TypeChecks/isOnEventBoundReceipt';
import $private from '/Framework/V1.0/Constants/Keys/General/private';
import Receipt from '/Framework/V1.0/Classes/Receipt';
import define from '/Framework/V1.0/Utilities/Properties/addHiddenValue';
import uid from '/Framework/V1.0/Utilities/General/uid';
import Enableable from '/Framework/V1.0/Mixins/Enableable';

export default class RelationshipBindingReceipt extends Enableable(Receipt) {
	constructor(bindings = {}) {
		super();
		this[$private] = bindings;
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
	get handles() {
		let handles = Object.values(this[$private]).filter(isOnEventBoundReceipt);
		return handles;
	}
	remove() {
		this.handles.forEach((handle) => { handle.remove(); });
		[
			'subjectHandler',
			'toHandler',
			'subjectDestroyer',
			'toDestroyer',
			'normalizer',
			'name'
		].forEach((key) => {
			delete this[$private][key];
		});
		delete this[$private];
	}
	get enabled() {
		return super.enabled;
	}
	set enabled(v) {
		let value = !!v;
		this.handles.forEach((handle) => { handle.enabled = value; });
		super.enabled = value;
	}
}