import eventfulToEventful from '/Framework/V1.0/Classes/Receipts/Bind/Eventful/eventful';

let defaultEventful = {
	jsui: eventfulToEventful,
	data: eventfulToEventful,
	eventful: eventfulToEventful
};

let relationships = {
	data: Object.create(defaultEventful),
	jsui: Object.create(defaultEventful),
	eventful: Object.create(defaultEventful)
};

export default relationships;