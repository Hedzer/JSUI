export default function rules(a, b) {
	var importance = b.importance - a.importance;
	var created = b.private.created - a.private.created;
	if (!importance) {
		return created;
	}
	return importance;
}