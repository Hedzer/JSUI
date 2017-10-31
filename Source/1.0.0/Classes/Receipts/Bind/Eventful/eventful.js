
//Classes
import RelationshipBindingReceipt from 'JSUI/Source/1.0.0/Classes/Receipts/RelationshipBinding';

//Constants
import $private from 'JSUI/Source/1.0.0/Constants/Keys/General/private';
import eventfulOn from 'JSUI/Source/1.0.0/Constants/Keys/Eventful/on';
import on from 'JSUI/Source/1.0.0/Constants/Keys/General/on';

//Handlers
import actions from 'JSUI/Source/1.0.0/Classes/Receipts/Bind/actions';

//TypeChecks
import isFunction from 'JSUI/Source/1.0.0/TypeChecks/isFunction';
import isStateChangeReceipt from 'JSUI/Source/1.0.0/TypeChecks/isStateChangeReceipt';

//Utilities
import exports from 'Parcello/exports';

let none = function(v){ return v; };

export default function eventfulToEventful(receipt, event, bind, arrow, to) {
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

	let dataHandleDestroyer = _private.to[eventfulOn]('destructed', function(e) {
		elementHandle.remove();
	});

	let binding = new RelationshipBindingReceipt({
		name: `${event}: ${bind} ${arrow} ${to}`,
		normalizer: none,
		subjectDestroyer: elementHandleDestroyer,
		subjectHandler: elementHandle,
		toDestroyer: dataHandleDestroyer,
		toHandler: false,
	});

	return binding;
}

exports(eventfulToEventful).as('JSUI/Source/1.0.0/Classes/Receipts/Bind/Eventful/eventful');