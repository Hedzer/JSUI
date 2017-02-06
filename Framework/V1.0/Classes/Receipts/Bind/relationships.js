import extensibleToExtensible from '/Framework/V1.0/Classes/Receipts/Bind/Extensible/extensible';

let defaultExtensible = {
	jsui: extensibleToExtensible,
	data: extensibleToExtensible,
	extensible: extensibleToExtensible
};

let relationships = {
	data: Object.create(defaultExtensible),
	jsui: Object.create(defaultExtensible),
	extensible: Object.create(defaultExtensible)
};

export default relationships;