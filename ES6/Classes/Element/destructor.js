import isFunction from '../../TypeChecks/isFunction';
import isArray from '../../TypeChecks/isArray';

export function destructor() {
	var _element = this.element;
	var _private = this.private;
	if (_element){
		var parent = _element.parentNode;
		if (isFunction(_element.remove)){
			_element.remove();
			return;
		}
		if (parent && isFunction(parent.removeChild)){
			parent.removeChild(_element);
			return;
		}
	}
	var _style = this.style;
	if (_style && _style.Host){
		delete _style.Host;
	}
	Object.keys(this).forEach((key) => {
		delete this[key];
	});
	var _parent = _private.parent;
	if (_parent){
		if (_private && _private.mapped){
			var map = _private.mapped[_parent.uid];
			if (map && isArray(map)){
				map.forEach((name) => {
					delete _parent[name];
				});
			}
		}
		if (_parent.children){
			delete _parent.children[this.uid];
		}
	}
	var _children = _private.children;
	if (_children){
		Object.keys(_children).forEach((key) => {
			var child = _children[key];
			if (!child){return;}
			if (isFunction(child.remove)){
				child.remove();
			}
			delete _children[key];
		});
	}
	//ensure GC picks em' up
	_element = null;
	_private = null;
	_parent = null;
	_children = null;
	return true;
}