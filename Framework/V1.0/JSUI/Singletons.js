
//Singletons
import Sheets from '/Framework/V1.0/Singletons/Style/Sheets';
import Variables from '/Framework/V1.0/Singletons/Style/Variables';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

let Singletons = {
	Style: {
		Sheets,
		Variables,
	},
};

export default Singletons;

exports(Singletons).as('/Framework/V1.0/JSUI/Singletons');
