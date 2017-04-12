
//Utilities
import exports from '/JSUI/Source/1.0.0/Utilities/Dependencies/exports';

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

exports(settings).as('/JSUI/Source/1.0.0/Constants/JSUI/settings');