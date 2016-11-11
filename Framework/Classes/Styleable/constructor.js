import $private from 'Framework/Constants/Symbols/General/private';
export default function constructor() {
	this[$private].context = 'default';
	this[$private].style = {
		rules: {}
	};
}