export default function _string(name, args){
	if (!this.element){return false;}
	let event = new CustomEvent(name, {"detail": args});
	this.element.dispatchEvent(event);
	return true;
}