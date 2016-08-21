import addClass from '../../../../Utilities/Elements/addClass';

export default function _jsui(instance){
	if (this.element && instance.element){
		this.element.appendChild(instance.element);
		this.private.children = (this.private.children || {});
		this.private.children[instance.uid] = instance;
		instance.private.parent = this;
	}
	var options = {
		as:(function(name){
			if (name){
				this[name] = instance;
				instance.private.mapped = (instance.private.mapped || {});
				var map = instance.private.mapped;
				map[this.uid] = (map[this.uid] || []);
				map[this.uid].push(name);
				instance.attribute('as', name);
				addClass(instance.element, name);
			}
			return instance;
		}).bind(this)
	};
	return options;
}