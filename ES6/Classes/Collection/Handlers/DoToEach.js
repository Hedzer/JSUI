import isFunction from '../../../TypeChecks/isFunction';

function element_handler_dotoeach_string(command, args) {
	var results = [];
	this.forEach((item) => {
		if (isFunction(item[command])) {
			results.push(item[command].apply(item, args));
			return;
		}
		results.push(undefined);
	});
	return results;	
}
function element_handler_dotoeach_path(command, args) {
	//WIP
}

var DoToEach = {
	string: element_handler_dotoeach_string,
	path: element_handler_dotoeach_path
};

export default DoToEach;