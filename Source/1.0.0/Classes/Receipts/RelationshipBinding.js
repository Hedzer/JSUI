
//Classes
import Receipt from 'JSUI/Source/1.0.0/Classes/Core/Receipt';

//Constants
import $private from 'JSUI/Source/1.0.0/Constants/Keys/General/private';

//Mixins
import Enableable from 'JSUI/Source/1.0.0/Mixins/Enableable';

//TypeChecks
import isOnEventBoundReceipt from 'JSUI/Source/1.0.0/TypeChecks/isOnEventBoundReceipt';

//Utilities
import exports from 'Parcello/exports';
import uid from 'JSUI/Source/1.0.0/Utilities/General/uid';

//local constants
const removable = [
	'subjectHandler',
	'toHandler',
	'subjectDestroyer',
	'toDestroyer',
	'normalizer',
	'name',
];

export default class RelationshipBindingReceipt extends Receipt
	.implements(Enableable) {
	
	constructor(bindings = {}) {
		super();
		this[$private] = bindings;
		bindings.uid = uid();
	}

	//methods
	remove() {
		this.handles.forEach((handle) => { handle.remove(); });
		removable.forEach((key) => {
			delete this[$private][key];
		});
		delete this[$private];
	}
	
	//properties
	get enabled() {
		return super.enabled;
	}
	set enabled(v) {
		let value = !!v;
		this.handles.forEach((handle) => { handle.enabled = value; });
		super.enabled = value;
	}
	get handles() {
		let handles = Object.values(this[$private]).filter(isOnEventBoundReceipt);
		return handles;
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
	get subjectHandler() {
		return this[$private].subjectHandler;
	}
	set subjectHandler(v) {
		this[$private].subjectHandler = v;
	}
	get toDestroyer() {
		return this[$private].toDestroyer;
	}
	set toDestroyer(v) {
		this[$private].toDestroyer = v;
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
	get uid() {
		return this[$private].uid;
	}
	set uid(v) {
		this[$private].uid = v;
	}
}

exports(RelationshipBindingReceipt).as('JSUI/Source/1.0.0/Classes/Receipts/RelationshipBinding');
