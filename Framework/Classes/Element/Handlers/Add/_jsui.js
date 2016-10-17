import addClass from 'Framework/Utilities/Elements/addClass';

export default function _jsui(instance){
	if (this.element && instance.element){
		this.element.appendChild(instance.element);
		this.private.children = (this.private.children || {});
		this.private.children[instance.uid] = instance;
		instance.private.parent = this;

		let Style = instance.Style;
		Style.context = (Style.context === 'default' ? this.Style.context : Style.context);
	}
	let options = {
		as:(function(name){
			if (name){
				this[name] = instance;
				instance.private.mapped = (instance.private.mapped || {});
				let map = instance.private.mapped;
				map[this.uid] = (map[this.uid] || []);
				map[this.uid].push(name);
				instance.attribute('as', name);
				addClass(instance.element, `as-${name}`);
			}
			return instance;
		}).bind(this)
	};
	return options;
}