export default function removeAll() {
	Object.keys(this.pool).forEach((eid) => {
		delete this.pool[eid];
	});
}