
//Mixins
import Enableable from '/Framework/V1.0/Mixins/Enableable';
import Extensible from '/Framework/V1.0/Mixins/Extensible';
import Privatelike from '/Framework/V1.0/Mixins/Privatelike';
import Routable from '/Framework/V1.0/Mixins/Routable';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

let Mixins = {
	Privatelike,
	Extensible,
	Enableable,
	Routable,
};

export default Mixins;

exports(Mixins).as('/Framework/V1.0/JSUI/Mixins');