var Light = (function() {
	'use strict';
	//sugary checks
	var isFunction = function(u) {
		return typeof u === 'function';
	};
	var isString = function(u) {
		return typeof u === 'string';
	};
	var isObject = function(u) {
		return typeof u === 'object';
	};
	var isNull = function(u) {
		return u === null;
	};
	var inaction = function(args){return args};

	var Methods = {
		Add:{
			element:function(element){
				if (this.element){
					this.element.appendChild(element);
				}
			},
			light:function(instance){
				if (this.element && instance.element){
					this.element.appendChild(instance.element);
					this.private.children = (this.private.children || {});
					this.private.children[instance.uid] = instance;
					instance.private.parent = this;
				}
				var options = {
					as:function(name){
						if (name){
							this[name] = instance;
							instance.private.mapped = (instance.private.mapped || {});
							var map = instance.private.mapped;
							map[this.uid] = (map[this.uid] || []);
							map[this.uid].push(name);
						}
						return instance;
					}
				};
				return options;
			},
			array:function(collection){
				var results = [];
				collection.forEach((item) => {
					results.push(this.add(item));
				});
				return results;
			},
			string:function(prop){
				Utils.addEventedProperty(this, prop);
			},
			html:function(markup){
				if (this.element && this.element.appendChild){
					var fragment = document.createDocumentFragment();
					var root = document.createElement('div');
					root.innerHTML = markup;
					while (root.firstChild) {
						fragment.appendChild(root.firstChild);
					}
					this.element.appendChild(fragment);			
				}
			}
		},
		AddTo:{
			element:function(element){
				if (element){
					element.appendChild(this.element);
				}
			},
			light:function(instance){
				return instance.add(this);
			},
			array:function(collection){
				var results = [];
				collection.forEach((item) => {
					results.push(this.addTo(item));
				});
				return results;
			}
		},
		On:{
			array:function(collection, method){
				var results = [];
				collection.forEach((item) => {
					results.push(this.on(item, method));
				});
				return results;
			},
			string:function(name, method){
				var events = ((this.private || {}).Events || {});
				var pool = events[name];
				var self = this;
				if (!pool){
					events[name] = {};
					pool = events[name];
					var hook = function() {
						var args = arguments;
						Object.keys(pool).forEach(function(id) {
							var method = pool[id];
							method.apply(self, args);
						});
					};
					this.element.addEventListener(name, hook, false);
				}
				if (typeof method === 'function'){
					var eid = Utils.uid();
					pool[eid] = method;
				}
				var handle = {
					id:eid,
					pool:pool,
					remove:Events.remove,
					removeAll:Events.removeAll
				};
				return handle;
			}
		},
		Remove:{
			array:function(collection){
				var results = [];
				collection.forEach((item) => {
					results.push(this.remove(item));
				});
				return results;
			},
			undefined:function(){
				this.trigger('destructed');
				Syrup.Destructors.standard.call(this);
			}
		},
		Trigger:{
			array:function(collection, args){
				var results = [];
				collection.forEach((item) => {
					results.push(this.trigger(item, args));
				});
				return results;
			},
			string:function(name, args){
				if (!this.element){return false;}
				var event = new CustomEvent(name, {"detail": args});
				this.element.dispatchEvent(event);
				return true;
			}
		},
		Find:{
			array:function(collection){
				var results = [];
				collection.forEach((item) => {
					results.push(this.find(item));
				});
				return results;
			},
			function:function(method){
				var results = [];
				var isLight = element.isPrototypeOf(method.prototype);
				if (isLight){
					var proto = method.prototype;
					this.children(function(child){
						if (proto.isPrototypeOf(child)){
							results.push(child);
						}								
					});
				}
				return results;
			},
			light:function(proto){
				var results = [];
				this.children(function(child){
					if (child instanceof proto){
						results.push(child);
					}
				});
				return results;
			},
			regex:function(expression){
				var results = [];
				this.children(function(child){
					if (child.element){
						var element = child.element;
						var text = (element.innerText || element.textContent || '');
						if (expression.test(text)){
							results.push(child);
						}
					}
				});
				return results;
			},
			string:function(query){
				var results = null;
				results = this.element.querySelectorAll(query);
				results = (!results || results === null ? [] : results);
				return results;
			},
			undefined:function(){
				var results = [];
				this.children(function(child){
					results.push(child);
				});
				return results;
			}
		},
		With:{
			array:function(collection){
				var results = [];
				collection.forEach((item) => {
					results.push(this.with(item));
				});
				return results;
			},
			function:function(method){
				method.call(this);
				return this;
			}
		}
	};
	var Utils = {
		uid:(function(){
			var prefix = '';
			var current = 0;
			var max = Number.MAX_SAFE_INTEGER - 5;
			return function uid(){
				if (current > max){
					prefix += current;
					current = 0;
				}
				return prefix + current++;
			}				
		})(),
		getType:function(u){
			var t = typeof u;
			if (t === 'object'){
				if (u === null){return 'null'}
				if (u.constructor === Array){return 'array'}
				if (u instanceof Element){return 'element'}
				if (u instanceof light){return 'light'}
				if (u instanceof RegExp){return 'regex'}
			}
			if (t === 'string'){
				var rHTML = /^<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)$/;
				if (rHTML.test(u)){
					return 'html';
				}
			}
			return t;
		},
		addEventedProperty:function(host, name, defaultValue){
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
							owner:this,
							property:name,
							old:old,
							new:value
						};
						if (this.trigger){
							this.trigger(name+'Changed', data);
							this.trigger('Changed', data);
						}
					}
				},
				configurable:true,
				enumerable:true
			});
		},
		getAllPropertyNames:(function(){
			var oProto = Object.getPrototypeOf({});
			return function getAllPropertyNames(obj) {
				//code modified from airportyh, http://stackoverflow.com/questions/8024149/is-it-possible-to-get-the-non-enumerable-inherited-property-names-of-an-object
				var props = [];
				do {
					Object.getOwnPropertyNames(obj).forEach(function(prop) {
						if (props.indexOf(prop) === -1) {
							props.push(prop);
						}
					});
				} while ((obj = Object.getPrototypeOf(obj)) && obj !== oProto);
				return props;
			};
		})()
	};

	var Events = {
		remove:function(){
			delete this.pool[this.id];
		},
		removeAll:function(){
			Object.keys(this.pool).forEach((eid) => {
				delete this.pool[eid];
			});
		}
	};

	var CSS = {
		inline:(function(){
			var equivalent = {};
			var capitalized = function(style){return style.charAt(0).toUpperCase() + style.slice(1);};
			var uncapitalized = function(style){return style.charAt(0).toLowerCase() + style.slice(1);};
			var vendors = [
				'webkit',
				'moz',
				'ms',
				'o'
			];
			class inline {
				constructor(host) {
					this.private = {};
					this.Host = host;
				}
			}
			function addInlineStyleProperty(key, name){
				Object.defineProperty(inline.prototype, (name || key), {
					get:function(){
						if (this.Host && this.Host.element && this.Host.element.style){
							var element = this.Host.element;
							return element.style[key];
						}
						return null;
					},
					set:function(value){
						if (this.Host && this.Host.element){
							var old = this.Host.element.style[key];
							var host = this.Host;
							host.element.style[key] = value;
							if (old !== value){
								var data = {
									owner:host,
									property:key,
									old:old,
									new:value
								};
								if (host.trigger){
									host.trigger(key+'StyleChanged', data);
									host.trigger('StyleChanged', data);
								}
							}							
						}
					},
					configurable:true,
					enumerable:true
				});
			}
			var faux = document.createElement('faux');
			Object.getOwnPropertyNames(faux.style).forEach(function(key){
				faux.style[key] = 'inherit';
				var name = (faux.getAttribute('style') || '').split(':')[0];
				equivalent[key] = name;
				faux.setAttribute('style', '');
				addInlineStyleProperty(key);
				addInlineStyleProperty(key, name);
				vendors.forEach(function(vendor){
					var prefix = '-'+vendor+'-';
					if (~name.indexOf(prefix)){
						var w3cKey = key;
						w3cKey = uncapitalized(w3cKey.replace(vendor, ''));
						equivalent[w3cKey] = name;
						equivalent[name.replace(prefix,'')] = name;
						addInlineStyleProperty(key, w3cKey);
					}
				});
			});
			Object.defineProperty(inline.prototype, 'sheet', {
				get:function(){
					var host = this.Host;
					if (host && host.identity && host.element){
						var type = host.identity;
						var element = host.element;
						var sheet = document.querySelector('#'+type+'-stylesheet');
						if (sheet){
							sheet = sheet.ocss;
						}
						return sheet;
					}
					return null;
				},
				set:function(value){
					if (typeof value !== 'object'){return;}
					var host = this.Host;
					var priv = this.Host.private;
					if (host && host.identity && host.element){
						var type = host.identity;
						var element = host.element;
						var sheet = document.querySelector('#'+type+'-stylesheet');
						var isNew = false;
						var createRule = function(selector, styles){
							var added = '';
							Utils.getAllPropertyNames(styles).forEach(function(style){
								var val = styles[style];
								added += (equivalent[style] || style)+':'+val+';';
							});
							var me = '['+type+']';
							var rule = selector.replace(/\[this\]/g, me)+'{'+added+'}';
							return rule;
						};
						var setStyles = function(){
							Utils.getAllPropertyNames(value).forEach(function(selector){
								var styles = value[selector];
								var added = '\n';
								var mediaQuery = '';
								if (selector.trim()[0] === '@'){
									mediaQuery = selector;
									Utils.getAllPropertyNames(styles).forEach(function(mqSelector){
										var mqSelectedStyles = styles[mqSelector];
										if (typeof mqSelectedStyles === 'object' && mqSelectedStyles.constructor !== Array){
											var rule = createRule(mqSelector, mqSelectedStyles);
											added+='\t'+rule+'\n';
										}
									});
									var mqRule = selector+'{'+added+'}';
									if (sheet.sheet && sheet.sheet.insertRule){
										sheet.sheet.insertRule(mqRule, 0);
									}
									return;
								} else {
									var rule = createRule(selector, styles);
									if (sheet.sheet && sheet.sheet.insertRule){
										sheet.sheet.insertRule(rule, 0);
									}
									return;
								}
							});	
						};
						var createSheet = function(){
							sheet = document.createElement('style');
							sheet.id = type+'-stylesheet';
							sheet.appendChild(document.createTextNode(''));
							sheet.setAttribute('data-use-count', '0');
							sheet.ocss = value;
							(document.head || document.body).appendChild(sheet);								
						};
						var increaseCount = function(){
							priv.style = (priv.style || {});
							priv.style.sheet = (priv.style.sheet || {});
							if (priv.style.sheet.counted){return;}
							var count = sheet.getAttribute('data-use-count');
							count = (parseInt(count) || 0);
							count++;
							sheet.setAttribute('data-use-count', count+'');
							priv.style.sheet.counted = true;
							host.on('destructed', function(){
								decreaseCount();
							});			
						};
						var decreaseCount = function(){
							var sheet = document.querySelector('#'+type+'-stylesheet');
							if (sheet){
								priv.style = (priv.style || {});
								priv.style.sheet = (priv.style.sheet || {});
								var count = sheet.getAttribute('data-use-count');
								count = (parseInt(count) || 0);
								count--;
								sheet.setAttribute('data-use-count', count+'');
								if (!count){
									destroySheet();
								}									
							}
						};
						var destroySheet = function(){
							if (typeof sheet.remove == 'function'){
								sheet.remove();
							} else {
								if (sheet.parentNode){
									sheet.parentNode.removeChild(sheet);
								}
							}
						};
						var checkForChange = function(){
							if (sheet && sheet.ocss && sheet.ocss !== value){
								var count = sheet.getAttribute('data-use-count');
								count = (parseInt(count) || 0);
								destroySheet();
								createSheet();
								setStyles();
								sheet.setAttribute('data-use-count', count+'');
							}
						};
						checkForChange();
						if (!sheet){
							isNew = true;
							createSheet();
							setStyles();								
						}
						increaseCount();
						return value;
					}
				},
				configurable:true
			});
			Object.defineProperty(inline.prototype, 'inline', {
				set:function(value){
					if (typeof value === 'object' && value.constructor !== Array){
						Utils.getAllPropertyNames(value).forEach((style) => {
							var val = value[style];
							this[style] = val;
						});
					}
				},
				configurable:true
			});
			return inline;
		})()
	};

	class element {
		constructor(tag){
			tag = (isString(tag) ? tag : 'div');
			this.uid = Utils.uid();
			this.element = document.createElement(tag);
			this.element.uid = this.uid;
			this.private = {};
			this.private.Events = {};
			Utils.addEventedProperty(this, 'identity');
			this.on('identityChanged', (e) => {
				if (e && e.detail && e.detail.new){
					if (this.element){
						this.element.classList.add(e.detail.new);
					}
				}
			});
			this.identity = tag;
			var inline = new CSS.inline(this);
			this.style = inline;
			this.trigger('constructed');
		}
		add(item) {
			var type = Utils.getType(item);
			var action = Methods.Add[type];
			return (action || inaction).call(this, item);
		}
		addTo(item) {
			var type = Utils.getType(item);
			var action = Methods.AddTo[type];
			return (action || inaction).call(this, item);
		}
		remove(item) {
			var type = Utils.getType(item);
			var action = Methods.Remove[type];
			return (action || inaction).call(this, item);
		}
		on(event, method) {
			var type = Utils.getType(event);
			var action = Methods.On[type];
			return (action || inaction).call(this, event, method);
		}
		trigger(event, args) {
			var type = Utils.getType(event);
			var action = Methods.Trigger[type];
			return (action || inaction).call(this, event, args);
		}
		find(what) {
			var type = Utils.getType(item);
			var action = Methods.Find[type];
			return (action || inaction([])).call(this, what);
		}
		with(method) {
			var type = Utils.getType(method);
			var action = Methods.Remove[type];
			return (action || inaction).call(this, method);
		}
		children(callback) {
			var results = [];
			if (isFunction(callback) && self.private && self.private.children){
				var children = self.private.children;
				Object.keys(children).forEach((id) => {
					var child = children[id];
					if (child){
						results.push(callback(child, id));
					}
				});
			}
			return results;
		}
		destructor() {
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
					if (map && map.constructor === Array){
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
		}
	}
	return {
		element:element,
		Elements:{},
		Markup:{} //parse, coalesce
	};
})();