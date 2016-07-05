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
	var isArray = function(u) {
		return Array.isArray(u);
	};
	var isLight = function(u) {
		return (u instanceof element);
	};
	var isElement = function(u) {
		return (u instanceof Element);
	};
	var isRegex = function(u) {
		return (u instanceof RegExp);
	};
	var htmlRegex = /^<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)$/;
	var isHTML = function(u) {
		return htmlRegex.test(u);
	};
	var isPath = function(u) {
		return (u[0] === '@');
	};
	var unhandled = function(args){return args};
	var cacheable = function(name) {
		exported.Cache = (exported.Cache || {});
		exported.Cache[name] = (exported.Cache[name] || {});
	};
	var addClass = function(el, name) {
		if (!name || !el) {return; }
		if (el.classList && el.classList.add) {
			el.classList.add(name);
			return;
		}
		var classes = el.className.split(' ');
		if (~classes.indexOf(name)) {return; }
		classes.push(name);
		el.className = classes.join(' ');
	};


	var Classes = {
		fromTag:function(tag) {
			return this.create(tag, tag);
		},
		create:function(name, tag, inherits){
			var src = `
				(function(element, constructor) {
					function ${name}() {
						constructor.call(this, '${tag}');
						this.identity = '${tag}';
					}
					${name}.prototype = Object.create(element.prototype);
					${name}.constructor = ${name};
					return ${name};					
				})
			`;
			return eval.call(window, src)(inherits || element, Methods.constructor);
		}
	};

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
			},
			path:function(prop) {
				return Methods.Add.string.call(this, prop);
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
			object:function(assignments) {
				var results = {};
				Object.keys(assignments).forEach((name) => {
					var method = assignments[name];
					results[name] = this.on(name, method);
				});
				return results;
			},
			string:function(name, method) {
				if (!isFunction(method)) {return; }
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
			},
			path:function(name, method) {
				return Methods.On.string.call(this, name, method);
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
			light:function(instance) {
				if (instance.remove) {
					return instance.remove();
				}
			},
			undefined:function(){
				this.trigger('destructed');
				return this.destructor();
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
			object:function(assignments) {
				Object.keys(assignments).forEach((name) => {
					var args = assignments[name];
					this.trigger(name, args);
				});
			},
			string:function(name, args){
				if (!this.element){return false;}
				var event = new CustomEvent(name, {"detail": args});
				this.element.dispatchEvent(event);
				return true;
			},
			path:function(name, args) {
				return Methods.Trigger.string.call(this, name, args);
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
			path:function(query) {
				return Methods.Find.string.call(this, query);
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
		},
		Do:{
			array:function(collection){
				var results = [];
				collection.forEach((item) => {
					results.push(this.do(item));
				});
				return results;
			},
			object:function(macro) {
				var results = {};
				Object.keys(macro).forEach((command) => {
					results[command] = this.do(command, macro[command]);
				});
				return results;
			},
			string:function(command, args) {
				if (isFunction(this[command])) {
					if (isArray(args)) {
						return this[command].apply(this, args);
					}
					return this[command](args);
				}
			},
			path:function(command, args) {
				var path = Paths.getWithContext(this, command);
				if (!path || !path.context || !path.property) {return; }
				var method = path.context[path.property];
				if (isFunction(method)) {
					if (isArray(args)) {
						return method.apply(path.context, args);
					}
					return method.call(path.context, args);
				}
			}
		},
		Get:{
			array:function(collection) {
				var results = [];
				collection.forEach((item) => {
					results.push(this.get(item));
				});
				return results;
			},
			string:function(property) {
				if (!property) {return; }
				if (!this.hasOwnProperty(property)) {return; }
				return this[property];
			},
			path:function(path) {
				return Paths.get(this, path);
			}
		},
		Set:{
			object:function(assignments) {
				var results = {};
				Object.keys(assignments).forEach((command) => {
					results[command] = this.set(command, assignments[command]);
				});
				return results;
			},
			string:function(property, value) {
				if (!property) {return; }
				if (!this.hasOwnProperty(property)) {return; }
				this[property] = value;
				return value;
			},
			path:function(path, value) {
				return Paths.set(this, path, value);
			}
		},
		Text:{
			string:function(text) {
				if (this.private && this.element) {
					if (!this.private.text) {
						var text = document.createTextNode(text);
						this.private.text = text;
						this.element.appendChild(text);
						return true;
					}
					this.private.text.nodeValue = text;
					return true;
				}
				return false;
			},
			path:function(text) {
				return Methods.Text.string.call(this, text);
			}
		},
		DoToEach:{
			string:function(command, args) {
				var results = [];
				this.forEach((item) => {
					if (isFunction(item[command])) {
						results.push(item[command].apply(item, args));
						return;
					}
					results.push(undefined);
				});
				return results;
			},
			path:function(command, args) {
				//WIP
			}
		},
		Constructor:{
			element:function(el) {
				this.element = el;
				return el.tagName.toLowerCase();
			},
			string:function(tag) {
				tag = (tag || 'div');
				this.element = document.createElement(tag);
				return tag;
			}
		},
		constructor:function(tag) {
			//create private store
			this.private = {};
			this.private.Events = {};

			//select the proper constructor action
			var type = Utils.getType(tag);
			var action = Methods.Constructor[type];
			tag = (action || function(){
				return Methods.Constructor.string.call(this, 'div');
			}).call(this, tag);

			//set up ids
			this.uid = Utils.uid();
			this.element.uid = this.uid;

			//setup first identity+event
			Utils.addEventedProperty(this, 'identity');
			this.on('identityChanged', (e) => {
				if (e && e.detail && e.detail.new){
					if (this.element && e.detail.new){
						addClass(this.element, e.detail.new);
					}
				}
			});
			this.identity = tag;

			//add styling capabilities
			var inline = new CSS.inline(this);
			this.style = inline;

			//signal that this class has been built
			this.trigger('constructed');
			return this;
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
			var type = typeof u;
			var subtypes = Types[type];
			if (!subtypes) {
				return type;
			}
			for (var name in subtypes) {
				let subtype = subtypes[name];
				if (subtype(u)) {
					return name;
				}
			}
			return type;
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
		})(),
		getTextNodes:function(el, stopAtFirst){
			var nodes = [];
			for (var i = 0; i < el.childNodes.length; i++) {
				var node = el.childNodes[i];
				if (node.nodeName === "#text") {
					nodes.push(node);
					if (stopAtFirst) {
						break;
					}
				}
			}
			return nodes;
		}
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
							var me = '.'+type;
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
										if (isObject(mqSelectedStyles) && mqSelectedStyles.constructor !== Array){
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

	var Types = {
		object:{
			null:isNull,
			array:isArray,
			element:isElement,
			light:isLight,
			regex:isRegex
		},
		string:{
			html:isHTML,
			path:isPath
		}
	};

	var Paths = {
		getter:function(obj, prop) {
			if (!isObject(obj)) {return; }
			return obj[prop];
		},
		setter:function(obj, path, value) {
			var parts = path.substring(1).split('.');
			if (!parts.length) {return; }
			if (parts.length === 1) {
				obj[parts[0]] = value;
				return true;
			}
			var tail = parts.splice(parts.length - 1, 1);
			var reference = Paths.get(obj, parts);
			if (reference) {
				reference[tail[0]] = value;
				return true;
			}
			return false;
		},
		get:function(obj, path) {
			if (isString(path)) {
				return path.substring(1).split('.').reduce(Paths.getter, obj);
			}
			if (isArray(path)) {
				return path.reduce(Paths.getter, obj);
			}
		},
		set:function(obj, path, value) {
			return Paths.setter(obj, path, value);
		},
		getWithContext:function(obj, path) {
			var parts = path.substring(1).split('.');
			if (!parts.length) {return; }
			if (parts.length === 1) {
				return {
					context:obj,
					property:parts[0]
				};
			}
			var tail = parts.splice(parts.length - 1, 1);
			var reference = Paths.get(obj, parts);
			if (reference) {
				return {
					context:reference,
					property:tail[0]
				};
			}
			return false;
		}
	};

	var Parser = {
		Types:{
			default:function(node, source) {

			},
			template:function(node, source) {},
			class:function(node, source) {}
		},
		// :function(node){
		// 	var tag = node.tagName.toLowerCase();
		// 	cacheable('Classes');
		// 	if (exported.Cache.Classes) {}
		// 	var type = tag.split('-').reduce(Paths.getter, exported.Elements);
		// 	var instance = new type();
		// },
		parse:function(html, source) {
			var container = document.createElement('container');
			container.innerHTML = html;
			var root = container.firstChild;
			var tag = root.tagName.toLowerCase();
			var parser = Parser.Types[tag];
			return (action || Parser.default).call(this, root, (source || output.Elements));
		}
	};

	class collection extends Array {
		constructor(target) {
			super();
			if (isArray(target)) {
				target.forEach((item) => {
					this.push(item);
				});
			}
		}
		doToEach(method, args) {
			var type = Utils.getType(method);
			var action = Methods.DoToEach[type];
			return (action || unhandled).call(this, method, args);
		}
	}

	class elements extends collection {
		constructor() {
			super();
			return this.doToEach('constructor', arguments);
		}
		text() {
			return this.doToEach('text', arguments);
		}
		add() {
			return this.doToEach('add', arguments);
		}
		addTo() {
			return this.doToEach('addTo', arguments);
		}
		remove() {
			return this.doToEach('remove', arguments);
		}
		on() {
			return this.doToEach('on', arguments);
		}
		trigger() {
			return this.doToEach('trigger', arguments);
		}
		find() {
			return this.doToEach('find', arguments);
		}
		with() {
			return this.doToEach('with', arguments);
		}
		do() {
			return this.doToEach('do', arguments);
		}
		get() {
			return this.doToEach('get', arguments);
		}
		set() {
			return this.doToEach('set', arguments);
		}
		children() {
			return this.doToEach('children', arguments);
		}
		destructor() {
			return this.doToEach('destructor', arguments);
		}
	}

	class element {
		constructor(tag){
			Methods.constructor.call(this, tag);
		}
		add(item) {
			var type = Utils.getType(item);
			var action = Methods.Add[type];
			return (action || unhandled).call(this, item);
		}
		addTo(item) {
			var type = Utils.getType(item);
			var action = Methods.AddTo[type];
			return (action || unhandled).call(this, item);
		}
		remove(item) {
			var type = Utils.getType(item);
			var action = Methods.Remove[type];
			return (action || unhandled).call(this, item);
		}
		on(event, method) {
			var type = Utils.getType(event);
			var action = Methods.On[type];
			return (action || unhandled).call(this, event, method);
		}
		trigger(event, args) {
			var type = Utils.getType(event);
			var action = Methods.Trigger[type];
			return (action || unhandled).call(this, event, args);
		}
		find(what) {
			var type = Utils.getType(what);
			var action = Methods.Find[type];
			return (action || unhandled([])).call(this, what);
		}
		with(method) {
			var type = Utils.getType(method);
			var action = Methods.With[type];
			return (action || unhandled).call(this, method);
		}
		do(method, args) {
			var type = Utils.getType(method);
			var action = Methods.Do[type];
			return (action || unhandled).call(this, method, args);
		}
		get(property) {
			var type = Utils.getType(property);
			var action = Methods.Get[type];
			return (action || unhandled).call(this, property);
		}
		set(property, value) {
			var type = Utils.getType(property);
			var action = Methods.Set[type];
			return (action || unhandled).call(this, property, value);
		}
		text(text) {
			var type = Utils.getType(text);
			var action = Methods.Text[type];
			return (action || unhandled).call(this, text);
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
	}

	var exported = {
		element:element,
		Elements:{},
		Markup:{},
		Cache:{}
	};

	[
		'a', 'abbr', 'acronym', 'address', 'applet', 'area', 'article', 'aside', 'audio',
		'b', 'base', 'basefont', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button',
		'canvas', 'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'command',
		'datalist', 'dd', 'del', 'details', 'dfn', 'dir', 'div', 'dl', 'dt',
		'em', 'embed',
		'fieldset', 'figcaption', 'figure', 'footer', 'form',
		'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html',
		'i', 'iframe', 'img', 'input', 'ins',
		'kbd', 'keygen',
		'label', 'legend', 'li', 'link',
		'main', 'map', 'mark', 'menu', 'meta', 'meter',
		'nav', 'noscript',
		'object', 'ol', 'optgroup', 'option', 'output',
		'p', 'param', 'pre', 'progress',
		'q',
		'rp', 'rt', 'ruby',
		's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup',
		'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track',
		'u', 'ul',
		'video',
		'wbr'
	].forEach((tag) => {
		exported.Elements[tag] = Classes.fromTag(tag);
	});

	return exported
})();