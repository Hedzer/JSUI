
//Singletons
import Sheets from 'JSUI/Source/1.0.0/Singletons/Style/Sheets';
import Variables from 'JSUI/Source/1.0.0/Singletons/Style/Variables';

//Utilities
import exports from 'Parcello/exports';

let Singletons = {
	Style: {
		Sheets,
		Variables,
	},
};

export default Singletons;

exports(Singletons).as('JSUI/Source/1.0.0/Entry/Singletons');
