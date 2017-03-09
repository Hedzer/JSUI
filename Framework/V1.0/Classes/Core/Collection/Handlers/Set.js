
//Handlers
import _path from '/Framework/V1.0/Classes/Core/Collection/Handlers/Set/_path';
import _string from '/Framework/V1.0/Classes/Core/Collection/Handlers/Set/_string';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

let Set = {
	path: _path,
	string: _string,
};

export default Set;


exports(Set).as('/Framework/V1.0/Classes/Core/Collection/Handlers/Set');
