
//Mixins
import Enableable from '/JSUI/Source/V1.0/Mixins/Enableable';
import Extensible from '/JSUI/Source/V1.0/Mixins/Extensible';
import Privatelike from '/JSUI/Source/V1.0/Mixins/Privatelike';
import Routable from '/JSUI/Source/V1.0/Mixins/Routable';

//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

let Mixins = {
	Privatelike,
	Extensible,
	Enableable,
	Routable,
};

export default Mixins;

exports(Mixins).as('/JSUI/Source/V1.0/JSUI/Mixins');