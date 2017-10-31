
//Utilities
import exports from 'Parcello/exports';

let settings = {
	namespace: 'JSUI',
	Development: {
		enabled: false,
		haltOnErrors: true,
		references: true,
		traceErrors: true,
	},
	Production: {},
};

export default settings;

exports(settings).as('JSUI/Source/1.0.0/Constants/settings');