
//Singletons
import Sheets from '/Framework/V1.0/Singletons/Style/Sheets';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

let Singletons = {
	Style: {
		Sheets: Sheets,
	},
};

export default Singletons;

exports(Singletons).as('/Framework/V1.0/JSUI/Singletons');
