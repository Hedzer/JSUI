export default function rules(a, b) {
	let importance = b.importance - a.importance;
	let created = b.private.created - a.private.created;
	if (!importance) {
		return created;
	}
	return importance;
}