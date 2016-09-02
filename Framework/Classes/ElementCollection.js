import Collection from '/Framework/Classes/Collection';

class ElementCollection extends Collection {
	constructor(target) {
		super(target);
		return this.doToEach('constructor', arguments);
	}
	add() {
		return this.doToEach('add', arguments);
	}
	addTo() {
		return this.doToEach('addTo', arguments);
	}
	remove() {
		return this.doToEach('remove', arguments);
	}
	on() {
		return this.doToEach('on', arguments);
	}
	trigger() {
		return this.doToEach('trigger', arguments);
	}
	find() {
		return this.doToEach('find', arguments);
	}
	with() {
		return this.doToEach('with', arguments);
	}
	do() {
		return this.doToEach('do', arguments);
	}
	get() {
		return this.doToEach('get', arguments);
	}
	set() {
		return this.doToEach('set', arguments);
	}
	text() {
		return this.doToEach('text', arguments);
	}
	attribute() {
		return this.doToEach('attribute', arguments);
	}
	class() {
		return this.doToEach('class', arguments);
	}
	children() {
		return this.doToEach('children', arguments);
	}
	destructor() {
		return this.doToEach('destructor', arguments);
	}
}

export default ElementCollection;