export default function add(host, name, defaultValue){
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