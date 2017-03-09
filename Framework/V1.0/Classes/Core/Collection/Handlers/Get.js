
//Handlers
import _string from '/Framework/V1.0/Classes/Core/Collection/Handlers/Get/_string';
import _path from '/Framework/V1.0/Classes/Core/Collection/Handlers/Get/_path';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

let Get = {
	string: _string,
	path: _path
};

export default Get;

exports(Get).as('/Framework/V1.0/Classes/Core/Collection/Handlers/Get');
