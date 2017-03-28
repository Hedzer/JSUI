
//Utilities
import exports from '/JSUI/Source/1.0.0/Utilities/Dependencies/exports';

let defaults = {
	namespace: 'JSUI',
	Development: {
		enabled: false,
		haltOnErrors: true,
		references: true,
		traceErrors: true,
	},
	Production: {},
};

export default defaults;

exports(defaults).as('/JSUI/Source/1.0.0/Constants/JSUI/defaults');