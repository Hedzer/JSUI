export default function subconstructor(name, namespace, Subclasses) {
	let self = this;
	Object.defineProperty(this, '$name', {
		configurable:true,
		enumerable:false,
		writable: true,
		value: `${name}`
	});
	Object.defineProperty(this, '$uid', {
		configurable:true,
		enumerable:false,
		writable: true,
		value: `${namespace}`
	});
	Object.keys(Subclasses).forEach(function(key) {
		let subclass = new Subclasses[key]();
		Object.defineProperty(subclass, '$parent', {
			configurable:true,
			enumerable:false,
			writable: true,
			value: self
		});
		self[key] = subclass;
		subclass.$on('Changed', function(e) {
			e.name = self.$name;
			e.namespace = self.$namespace;
			self.$trigger('Changed', e);
		});
	});
}