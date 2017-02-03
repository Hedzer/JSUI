import isString from '/Framework/V1.0/TypeChecks/isString';
import isElement from '/Framework/V1.0/TypeChecks/isElement';

export default function addClass(el, name) {
	if (!isString(name) || !isElement(el)) { return; }
	if (el.classList && el.classList.add) {
		el.classList.add.apply(el.classList, name.split(' '));
		return;
	}
	let classes = el.className.split(' ');
	if (~classes.indexOf(name)) { return; }
	classes.push(name);
	el.className = classes.join(' ');
}