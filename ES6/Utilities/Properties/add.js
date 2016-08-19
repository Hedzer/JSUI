export function add(host, name, defaultValue){
	var value = defaultValue;
	Object.defineProperty(host, name, {
		get:function(){
			return value;
		},
		set:function(v){
			var old = value;
			value = v;
			if (old !== v){
				var data = {
					owner: this,
					property: name,
					old: old,
					new: value
				};
				if (this.trigger){
					this.trigger(`${name}Changed`, data);
					this.trigger('Changed', data);
				}
			}
		},
		configurable:true,
		enumerable:true
	});
}