
//Mixins
import Enableable from 'JSUI/Source/1.0.0/Mixins/Enableable';
import Extensible from 'JSUI/Source/1.0.0/Mixins/Extensible';
import Privatelike from 'JSUI/Source/1.0.0/Mixins/Privatelike';
import Routable from 'JSUI/Source/1.0.0/Mixins/Routable';

//Utilities
import exports from 'Parcello/exports';

let Mixins = {
	Privatelike,
	Extensible,
	Enableable,
	Routable,
};

export default Mixins;

exports(Mixins).as('JSUI/Source/1.0.0/Entry/Mixins');