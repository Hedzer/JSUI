var prefix = '';
var current = 0;
var max = Number.MAX_SAFE_INTEGER - 1;			
export default function uid(){
	return function uid(){
		if (current > max){
			prefix += current;
			current = 0;
		}
		return prefix + current++;
	}				
}