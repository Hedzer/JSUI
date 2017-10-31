
//Utilities
import exports from 'Parcello/exports';

let prefix = '';
let current = 0;
let max = Number.MAX_SAFE_INTEGER - 1;			
export default function uid(){
	if (current > max){
		prefix += current;
		current = 0;
	}
	return prefix + current++;
}

exports(uid).as('JSUI/Source/1.0.0/Utilities/General/uid');
