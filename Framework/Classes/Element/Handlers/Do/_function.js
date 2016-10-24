export default function _function(method, args) {
	method.call(this, args);
	return this;
}