export default function rules(a, b) {
	var importance = a.importance - b.importance;
	var created = a.private.created - b.private.created;
	if (!importance) {
		return created;
	}
	return importance;
}