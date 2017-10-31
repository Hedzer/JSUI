
//Classes
import Collection from 'JSUI/Source/1.0.0/Classes/Core/Collection';

//Utilities
import exports from 'Parcello/exports';

export default class ElementCollection extends Collection {
	constructor(target) {
		super(target);
	}
	add() {
		return this.do('add', arguments);
	}
	addTo() {
		return this.do('addTo', arguments);
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
	do() {
		return this.do('do', arguments);
	}
	find() {
		return this.do('find', arguments);
	}
	get() {
		return this.do('get', arguments);
	}
	remove() {
		return this.do('remove', arguments);
	}
	on() {
		return this.do('on', arguments);
	}
	set() {
		return this.do('set', arguments);
	}
	text() {
		return this.do('text', arguments);
	}
	trigger() {
		return this.do('trigger', arguments);
	}
}

exports(ElementCollection).as('JSUI/Source/1.0.0/Classes/Collections/Element');
