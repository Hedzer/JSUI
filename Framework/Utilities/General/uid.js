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