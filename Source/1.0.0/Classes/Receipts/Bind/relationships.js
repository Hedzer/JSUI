
//Handlers
import eventfulToEventful from 'JSUI/Source/1.0.0/Classes/Receipts/Bind/Eventful/eventful';

//Utilities
import exports from 'Parcello/exports';

let defaultEventful = {
	data: eventfulToEventful,
	eventful: eventfulToEventful,
	element: eventfulToEventful,
};

let relationships = {
	data: Object.create(defaultEventful),
	eventful: Object.create(defaultEventful),
	element: Object.create(defaultEventful),
};

export default relationships;

exports(relationships).as('JSUI/Source/1.0.0/Classes/Receipts/Bind/relationships');