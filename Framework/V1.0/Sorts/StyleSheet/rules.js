import $private from '/Framework/V1.0/Constants/Keys/General/private';

export default function rules(a, b) {
	let importance = b.importance - a.importance;
	let created = b[$private].created - a[$private].created;
	if (!importance) {
		return created;
	}
	return importance;
}