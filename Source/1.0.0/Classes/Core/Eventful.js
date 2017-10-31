
//Constants
import on from 'JSUI/Source/1.0.0/Constants/Keys/Eventful/on';
import trigger from 'JSUI/Source/1.0.0/Constants/Keys/Eventful/trigger';

//Mixins
import EventfulMixin from 'JSUI/Source/1.0.0/Mixins/Eventful';
import Stateful from 'JSUI/Source/1.0.0/Classes/Core/Stateful';

//Utilities
import exports from 'Parcello/exports';

export default class Eventful extends Stateful
	.implements(EventfulMixin) {
	
	//methods
	on() {
		return this[on].apply(this, arguments);
	}
	trigger() {
		return this[trigger].apply(this, arguments);
	}
}

exports(Eventful).as('JSUI/Source/1.0.0/Classes/Core/Eventful');
