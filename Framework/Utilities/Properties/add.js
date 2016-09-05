export default function add(host, name, defaultValue){
	Object.defineProperty(host, name, {
		get:function(){
			var value = (this.private.state.hasOwnProperty(name) ? this.private.state[name] : defaultValue);
			return value;
		},
		set:function(v){
			var value = (this.private.state.hasOwnProperty(name) ? this.private.state[name] : defaultValue);
			var old = value;
			value = v;
			if (old !== v){
				var data = {
					owner: this,
					property: name,
					old: old,
					new: value
				};
				var trigger = (this.trigger || this.$trigger).bind(this);
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