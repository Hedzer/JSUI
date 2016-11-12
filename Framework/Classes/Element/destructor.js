import $private from 'Framework/Constants/Keys/General/private';
import isFunction from 'Framework/TypeChecks/isFunction';
import isArray from 'Framework/TypeChecks/isArray';

export default function destructor() {
	let _element = this.element;
	let _private = this[$private];
	if (_element){
		let parent = _element.parentNode;
		if (isFunction(_element.remove)){
			_element.remove();
		} else if (parent && isFunction(parent.removeChild)){
			parent.removeChild(_element);
		}
	}
	let _style = this.style;
	if (_style && _style.Host){
		delete _style.Host;
	}
	let _parent = _private.parent;
	if (_parent){
		if (_private && _private.mapped){
			let map = _private.mapped[_parent.uid];
			if (isArray(map)){
				map.forEach((name) => {
					delete _parent[name];
				});
			}
		}
		if (_parent.children){
			delete _parent.children[this.uid];
		}
	}
	let _children = _private.children;
	if (_children){
		Object.keys(_children).forEach((key) => {
			let child = _children[key];
			if (!child){return;}
			if (isFunction(child.remove)){
				child.remove();
			}
			delete _children[key];
		});
	}

	Object.keys(this).forEach((key) => {
		delete this[key];
	});

	//ensure GC picks em' up
	_element = null;
	_private = null;
	_parent = null;
	_children = null;
	return true;
};