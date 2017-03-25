
//Singletons
import Sheets from '/JSUI/Source/V1.0/Singletons/Style/Sheets';
import Variables from '/JSUI/Source/V1.0/Singletons/Style/Variables';

//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

let Singletons = {
	Style: {
		Sheets,
		Variables,
	},
};

export default Singletons;

exports(Singletons).as('/JSUI/Source/V1.0/JSUI/Singletons');
