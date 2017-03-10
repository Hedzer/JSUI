
//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

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

exports(defaults).as('/Framework/V1.0/Constants/JSUI/defaults');