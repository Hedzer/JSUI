
//Handlers
import _path from '/Framework/V1.0/Classes/Core/Collection/Handlers/Get/_path';
import _string from '/Framework/V1.0/Classes/Core/Collection/Handlers/Get/_string';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

let Get = {
	path: _path,
	string: _string,
};

export default Get;

exports(Get).as('/Framework/V1.0/Classes/Core/Collection/Handlers/Get');
