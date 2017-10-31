
//TypeChecks
import isDOM from 'JSUI/Source/1.0.0/TypeChecks/isDOM';
import isString from 'JSUI/Source/1.0.0/TypeChecks/isString';

//Utilities
import exports from 'Parcello/exports';

export default function addClass(el, name) {
	if (!isString(name) || !isDOM(el)) { return; }
	if (el.classList && el.classList.add) {
		el.classList.add.apply(el.classList, name.split(' '));
		return;
	}
	let classes = el.className.split(' ');
	if (classes.includes(name)) { return; }
	classes.push(name);
	el.className = classes.join(' ');
}

exports(addClass).as('JSUI/Source/1.0.0/Utilities/Elements/addClass');
