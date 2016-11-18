export default function getHandledType(types, u){
	let type = typeof u;
	let subtypes = types[type];
	if (!subtypes) {
		return type;
	}
	for (let name in subtypes) {
		let subtype = subtypes[name];
		if (subtype(u)) {
			return name;
		}
	}
	return type;
};