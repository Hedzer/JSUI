
//Handlers
import _path from '/Framework/V1.0/Classes/Core/Collection/Handlers/Do/_path';
import _string from '/Framework/V1.0/Classes/Core/Collection/Handlers/Do/_string';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

let Do = {
	path: _path,
	string: _string
};

export default Do;

exports(Do).as('/Framework/V1.0/Classes/Core/Collection/Handlers/Do');
