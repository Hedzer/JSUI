
//Handlers
import eventfulToEventful from '/Framework/V1.0/Classes/Receipts/Bind/Eventful/eventful';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

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

exports(relationships).as('/Framework/V1.0/Classes/Receipts/Bind/relationships');