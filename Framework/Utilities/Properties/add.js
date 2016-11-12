import $private from 'Framework/Constants/Keys/General/private';

export default function add(host, name, defaultValue){
	Object.defineProperty(host, name, {
		get:function(){
			let value = (this[$private].state.hasOwnProperty(name) ? this[$private].state[name] : defaultValue);
			return value;
		},
		set:function(v){
			let value = (this[$private].state.hasOwnProperty(name) ? this[$private].state[name] : defaultValue);
			let old = value;
			value = v;
			if (old !== v){
				this[$private].state[name] = value;
				let data = {
					owner: this,
					property: name,
					old: old,
					new: value
				};
				let trigger = (this.trigger || this.$trigger).bind(this);
				if (trigger){
					trigger(`${name}Changed`, data);
					trigger('Changed', data);
				}
			}
		},
		configurable:true,
		enumerable:true
	});
}