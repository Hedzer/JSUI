import isElement from '/Framework/TypeChecks/isElement';

export default function addClass(el, name) {
	if (!name || !isElement(el)) {return; }
	if (el.classList && el.classList.add) {
		el.classList.add(name);
		return;
	}
	var classes = el.className.split(' ');
	if (~classes.indexOf(name)) {return; }
	classes.push(name);
	el.className = classes.join(' ');
}