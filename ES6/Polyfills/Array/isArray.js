var hasIsArray = !!Array.isArray;
if (!hasIsArray) {
	Array.isArray = function(arg) {
		return Object.prototype.toString.call(arg) === '[object Array]';
	};
}

export default !hasIsArray;