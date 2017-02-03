import isFunction from '/Framework/V1.0/TypeChecks/isFunction';
import isStateChangeReceipt from '/Framework/V1.0/TypeChecks/isStateChangeReceipt';
import $private from '/Framework/V1.0/Constants/Keys/General/private';
import on from '/Framework/V1.0/Constants/Keys/General/on';
import extensibleOn from '/Framework/V1.0/Constants/Keys/Extensible/on';
import actions from '/Framework/V1.0/Classes/BindReceipt/actions';
import RelationshipBindingReceipt from '/Framework/V1.0/Classes/RelationshipBindingReceipt';
let none = function(v){ return v; };

export default function extensibleToExtensible(receipt, event, bind, arrow, to) {
	let _private = receipt[$private];
	let action = (isFunction(actions[arrow]) ? actions[arrow] : false);
	if (!action) { return false; }

	//create the relationship
	let elementHandle = _private.subject[on](event, function(e) {
		let normalizer = binding.normalizer;
		let data = (e && isStateChangeReceipt(e.detail) ? e.detail.new : e);
		action(_private.subject, bind, _private.to, to, data, normalizer);
	});

	//destroy the relationship if either one dies
	let elementHandleDestroyer = _private.subject[on]('destructed', function(e) {
		elementHandle.remove();
	});

	let dataHandleDestroyer = _private.to[extensibleOn]('destructed', function(e) {
		elementHandle.remove();
	});

	let binding = new RelationshipBindingReceipt({
		name: `${event}: ${bind} ${arrow} ${to}`,
		subjectHandler: elementHandle,
		toHandler: false,
		subjectDestroyer: elementHandleDestroyer,
		toDestroyer: dataHandleDestroyer,
		normalizer: none
	});

	return binding;
}