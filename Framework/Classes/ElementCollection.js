import Collection from 'Framework/Classes/Collection';

class ElementCollection extends Collection {
	constructor(target) {
		super(target);
	}
	add() {
		return this.do('add', arguments);
	}
	addTo() {
		return this.do('addTo', arguments);
	}
	remove() {
		return this.do('remove', arguments);
	}
	on() {
		return this.do('on', arguments);
	}
	trigger() {
		return this.do('trigger', arguments);
	}
	find() {
		return this.do('find', arguments);
	}
	do() {
		return this.do('do', arguments);
	}
	get() {
		return this.do('get', arguments);
	}
	set() {
		return this.do('set', arguments);
	}
	text() {
		return this.do('text', arguments);
	}
	attribute() {
		return this.do('attribute', arguments);
	}
	class() {
		return this.do('class', arguments);
	}
	children() {
		return this.do('children', arguments);
	}
	destructor() {
		return this.do('destructor', arguments);
	}
}

export default ElementCollection;