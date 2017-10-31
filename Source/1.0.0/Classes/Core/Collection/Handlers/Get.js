
//Handlers
import _path from 'JSUI/Source/1.0.0/Classes/Core/Collection/Handlers/Get/_path';
import _string from 'JSUI/Source/1.0.0/Classes/Core/Collection/Handlers/Get/_string';

//Utilities
import exports from 'Parcello/exports';

let Get = {
	path: _path,
	string: _string,
};

export default Get;

exports(Get).as('JSUI/Source/1.0.0/Classes/Core/Collection/Handlers/Get');
