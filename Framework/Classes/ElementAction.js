export default class ElementAction {
	constructor(element) {
		this.private = {
			element: (element || false)
		};
	}
	get element() {
		return this.private.element;
	}
	set element(element) {
		this.private.element = element;
	}
}