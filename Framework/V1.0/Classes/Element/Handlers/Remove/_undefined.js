export default function _undefined() {
	this.trigger('destructed');
	return this.destructor();	
}