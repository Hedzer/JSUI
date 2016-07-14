var JSUI = (function() {
	'use strict';

	//sugary checks
	var isFunction = function(u) {
		return (typeof u === 'function');
	};
	var isString = function(u) {
		return (typeof u === 'string');
	};
	var isEmptyString = function(u) {
		return (u === "");
	};
	var isObject = function(u) {
		return (typeof u === 'object');
	};
	var isNull = function(u) {
		return (u === null);
	};
	var isUndefined = function(u) {
		return (typeof u === 'undefined');
	};
	var isArray = function(u) {
		return Array.isArray(u);
	};
	var isJSUI = function(u) {
		return (u instanceof element);
	};
	var isUninstancedJSUI = function(u) {
		return (u.prototype instanceof element);
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
	var Natives = {};
	var isNativeTag = function(u) {
		return Natives[u];
	};
	var isTextNode = function(u) {
 		return (u && u.nodeName === "#text");
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
	var getTagName = function(el) {
		return el.tagName.toLowerCase();
	};
	var doOrSet = function(obj, prop, value) {
		if (obj.hasOwnProperty(prop)) {
			if (isFunction(obj[prop])) {
				obj[prop].apply(obj, value);
				return true;
			}
			obj[prop] = value;
			return true;
		}
		return false;
	};
	var debounce = function(fn, time) {
		if (isFunction(fn)) {
			var dbcTimer;
			return function() {
				clearTimeout(dbcTimer);
				dbcTimer = setTimeout(fn, time);
			};
		}
	};
	var capitalize = function(style){return style.charAt(0).toUpperCase() + style.slice(1);};
	var uncapitalize = function(style){return style.charAt(0).toLowerCase() + style.slice(1);};
	var feval = function(code) {
		return (new Function(code))();
	};

	var childNodes = function(node, callback) {
		if (!isFunction(callback)) {
			return;
		}
		if (isElement(node)) {
			var count = node.childNodes.length;
			for (var i = 0; i < count; i++) {
				var child = node.childNodes[i];
				if (callback(child)) {break; }
			}
		}
	};
	var nodeAttributes = function(node, callback) {
		if (!isFunction(callback)) {
			return;
		}
		if (isElement(node)) {
			var attributes = node.attributes;
			for (var i = attributes.length - 1; i >= 0; i--) {
				var attribute = attributes[i];
				var name = attribute.name;
				var value = attribute.value;
				callback(name, value, attribute);
			};
		}
	};

	var Classes = {
		fromTag:function(tag) {
			return this.create(tag, tag);
		},
		create:function(name, tag, inherits, constructor){
			var inherit = (inherits || element);
			var construct = (constructor || Methods.constructor);
			var src = `
				return (function(element, constructor) {
					function ${name}() {
						constructor.call(this, '${tag}');
						this.identity = '${tag}';
					}
					${name}.prototype = Object.create(element.prototype);
					${name}.constructor = ${name};
					return ${name};					
				})
			`;
			return feval.call(window, src)(inherit, construct);
		}
	};

	var Methods = {
		Add:{
			element:function(element){
				if (this.element){
					this.element.appendChild(element);
				}
			},
			jsui:function(instance){
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
						}
						return instance;
					}).bind(this)
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
				Tools.addEventedProperty(this, prop);
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
			jsui:function(instance){
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
					var eid = Tools.uid();
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
			jsui:function(instance) {
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
				var isJSUI = element.isPrototypeOf(method.prototype);
				if (isJSUI){
					var proto = method.prototype;
					this.children(function(child){
						if (proto.isPrototypeOf(child)){
							results.push(child);
						}								
					});
				}
				return results;
			},
			jsui:function(proto){
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
		Attribute:{
			Get:{
				undefined:function() {
					var results = {};
					nodeAttributes(this.element, (attribute, value, ref) => {
						results[attribute] = value;
					});
					return results;
				},
				string:function(name) {
					return this.element.getAttribute(name);
				},
				path:function() {
					return Methods.Attribute.string.apply(this, arguments);
				},
				array:function(collection) {
					var results = {};
					collection.forEach((attribute) => {
						results[attribute] = this.attribute(attribute);
					});
					return results;
				},
				object:function(macro){
					return Methods.Attribute.Set.object.call(this, macro);
				}
			},
			Set:{
				string:function(name, value) {
					if (isUndefined(value) || isNull(value)) {
						this.element.removeAttribute(name);
						return true;
					}
					this.element.setAttribute(name, value);
					return true;
				},
				path:function() {
					return Methods.Attribute.string.apply(this, arguments);
				},
				array:function(collection, value) {
					var results = [];
					collection.forEach((attribute) => {
						results.push(this.attribute(attribute, value));
					});
					return results;
				},
				object:function(macro, value){
					var result = (isObject(value) ? value : {});
					Object.keys(macro).forEach((attribute) => {
						results[attribute] = this.attribute(attribute, macro[attribute]);
					});
					return results;
				}
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
				return getTagName(el);
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
			var type = Tools.getType(tag);
			var action = Methods.Constructor[type];
			tag = (action || function(){
				return Methods.Constructor.string.call(this, 'div');
			}).call(this, tag);

			//set up ids
			this.uid = Tools.uid();
			this.element.uid = this.uid;

			//setup first identity+event
			Tools.addEventedProperty(this, 'identity');
			this.on('identityChanged', (e) => {
				if (e && e.detail && e.detail.new){
					if (this.element && e.detail.new){
						var name = e.detail.new;
						if (!name) {return; }
						addClass(this.element, name);
					}
				}
			});
			this.identity = tag;

			//add styling capabilities
			var styler = new CSS.styler(this);
			this.style = styler;

			//signal that this class has been built
			this.trigger('constructed');
			return this;
		}
	};

	var Tools = {
		uid:(function(){
			var prefix = '';
			var current = 0;
			var max = Number.MAX_SAFE_INTEGER - 1;
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
							this.trigger(`${name}Changed`, data);
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
				if (isTextNode(node)) {
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
		styler:(function(){
			var equivalent = {};
			var vendors = [
				'webkit',
				'moz',
				'ms',
				'o'
			];

			var addInlineStyleProperty = function(key, name){
				Object.defineProperty(styler.prototype, (name || key), {
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
			};
			var createRule = function(selector, type, styles){
				var added = '';
				Tools.getAllPropertyNames(styles).forEach(function(style){
					var val = styles[style];
					added += (equivalent[style] || style)+':'+val+';';
				});
				var me = '.'+type;
				var rule = selector.replace(/\[this\]/g, me)+'{'+added+'}';
				return rule;
			};
			var setStyles = function(sheet, type, value, host, _private){
				Tools.getAllPropertyNames(value).forEach(function(selector){
					var styles = value[selector];
					var added = '\n';
					var mediaQuery = '';
					if (selector.trim()[0] === '@'){
						mediaQuery = selector;
						Tools.getAllPropertyNames(styles).forEach(function(mqSelector){
							var mqSelectedStyles = styles[mqSelector];
							if (isObject(mqSelectedStyles) && mqSelectedStyles.constructor !== Array){
								var rule = createRule(mqSelector, type, mqSelectedStyles);
								added+='\t'+rule+'\n';
							}
						});
						var mqRule = selector+'{'+added+'}';
						if (sheet.sheet && sheet.sheet.insertRule){
							sheet.sheet.insertRule(mqRule, 0);
						}
						return;
					} else {
						var rule = createRule(selector, type, styles);
						if (sheet.sheet && sheet.sheet.insertRule){
							sheet.sheet.insertRule(rule, 0);
						}
						return;
					}
				});	
			};
			var createSheet = function(sheet, type, value, host, _private){
				sheet = document.createElement('style');
				sheet.id = type+'-stylesheet';
				sheet.appendChild(document.createTextNode(''));
				sheet.setAttribute('data-use-count', '0');
				sheet.ocss = value;
				(document.head || document.body).appendChild(sheet);
				return sheet;								
			};
			var increaseCount = function(sheet, type, value, host, _private){
				_private.style = (_private.style || {});
				_private.style.sheet = (_private.style.sheet || {});
				if (_private.style.sheet.counted){return;}
				var count = sheet.getAttribute('data-use-count');
				count = (parseInt(count) || 0);
				count++;
				sheet.setAttribute('data-use-count', count+'');
				_private.style.sheet.counted = true;
				host.on('destructed', function(){
					decreaseCount(sheet, type, value, host, _private);
				});			
			};
			var decreaseCount = function(sheet, type, value, host, _private){
				var sheet = document.querySelector('#'+type+'-stylesheet');
				if (sheet){
					_private.style = (_private.style || {});
					_private.style.sheet = (_private.style.sheet || {});
					var count = sheet.getAttribute('data-use-count');
					count = (parseInt(count) || 0);
					count--;
					sheet.setAttribute('data-use-count', count+'');
					if (!count){
						destroySheet(sheet, type, value, host, _private);
					}
				}
			};
			var destroySheet = function(sheet, type, value, host, _private){
				if (typeof sheet.remove == 'function'){
					sheet.remove();
				} else {
					if (sheet.parentNode){
						sheet.parentNode.removeChild(sheet);
					}
				}
			};
			var checkForChange = function(sheet, type, value, host, _private){
				if (sheet && sheet.ocss && sheet.ocss !== value){
					var count = sheet.getAttribute('data-use-count');
					count = (parseInt(count) || 0);
					destroySheet(sheet, type, value, host, _private);
					createSheet(sheet, type, value, host, _private);
					setStyles(sheet, type, value, host, _private);
					sheet.setAttribute('data-use-count', count+'');
				}
			};
			class styler {
				constructor(host) {
					this.private = {};
					this.Host = host;
				}
			}


			var example = document.createElement('div');
			Object.getOwnPropertyNames(example.style).forEach(function(key){
				example.style[key] = 'inherit';
				var name = (example.getAttribute('style') || '').split(':')[0];
				equivalent[key] = name;
				example.setAttribute('style', '');
				addInlineStyleProperty(key);
				addInlineStyleProperty(key, name);
				vendors.forEach(function(vendor){
					var prefix = '-'+vendor+'-';
					if (~name.indexOf(prefix)){
						var w3cKey = key;
						w3cKey = uncapitalize(w3cKey.replace(vendor, ''));
						equivalent[w3cKey] = name;
						equivalent[name.replace(prefix,'')] = name;
						addInlineStyleProperty(key, w3cKey);
					}
				});
			});
			Object.defineProperty(styler.prototype, 'sheet', {
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
					if (!isObject(value)){return;}
					var host = this.Host;
					var _private = this.Host.private;
					if (host && host.identity && host.element){
						var type = host.identity;
						var element = host.element;
						var sheet = document.querySelector('#'+type+'-stylesheet');
						var isNew = false;
						checkForChange(value, type, value, host, _private);
						if (!sheet){
							isNew = true;
							sheet = createSheet(value, type, value, host, _private);
							setStyles(sheet, type, value, host, _private);
						}
						increaseCount(sheet, type, value, host, _private);
						return value;
					}
				},
				configurable:true
			});
			Object.defineProperty(styler.prototype, 'inline', {
				set:function(value){
					if (isObject(value) && !isArray(value)){
						Tools.getAllPropertyNames(value).forEach((style) => {
							var val = value[style];
							this[style] = val;
						});
					}
				},
				configurable:true
			});

			return styler;
		})()
	};

	var Types = {
		object:{
			null:isNull,
			array:isArray,
			element:isElement,
			jsui:isJSUI,
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
		Tools:{
			getFirstNonTextChild: function(node) {
				if (isElement(node)) {
					var root;
					childNodes(node, (child) => {
						if (!isTextNode(child)) {
							root = child;
							return true;
						}			
					});
					return root;
				}
			},
			htmlToInstructions: function(node, classes, state) {
				var isRoot = false;
				if (!state) {
					state = {
						map:{},
						aliases:{},
						Counts:{
							element:0,
							instance:0,
							text:0
						}
					};
					isRoot = true;				
				}
				var tag = getTagName(node);
				var directory = state.map[tag];
				var alias;
				if (!directory) {
					var type = tag.split('-').reduce(Paths.getter, classes);
					if (!isUninstancedJSUI(type)) {return; }
					alias = 'element'+state.Counts.element;
					state.Counts.element++;
					directory = {
						type:type,
						alias:alias
					};
					state.map[tag] = directory;
					state.aliases[alias] = directory;
				}
				if (!alias) {alias = directory.alias};
				var as = node.getAttribute('as');
				var name = 'instance'+state.Counts.instance;
				state.Counts.instance++;
				var comments = "\t\/\/ "+(as || 'Anonymous Element');
				var instantiation = `\tvar ${name} = ` + (isRoot ? 'this' :  `new ${alias}();`);

				var assignments = [];
				var instructions = [];
				var texts = [];
				childNodes(node, (child) => {
					if (isTextNode(child)) {
						var textName = 'text'+state.Counts.text;
						instructions.push(`\tvar ${textName} = document.createTextNode('');`);
						instructions.push(`\t${name}.element.appendChild(${textName});`);
						assignments.push({
							name:textName,
							value:child.nodeValue
						});
						state.Counts.text++;
						return;
					}
					instructions.push('\n');
					var instruction = Parser.Tools.htmlToInstructions(child, classes, state);
					var childName = instruction.name;
					instructions.push(instruction.code);
					instructions.push('\n\t\/\/ Adding Children');
					instructions.push(`\t${name}.add(${childName})`+(as ? `.as('${as}')` : '')+';');
					instructions.push('\n\t\/\/ Text Node Assignments');
					texts.push(instruction.text);
					return;
				});
				//add the last text as primary
				var lastText = assignments[assignments.length - 1];
				var lastTextName = lastText.name;
				instructions.push(`\t${name}.private.text = ${lastTextName};`);
				assignments = Array.prototype.concat.apply(assignments, texts);
				instructions = instructions.join('\n');
				return {
					tag:tag,
					directory:directory,
					name:name,
					code:[comments, instantiation, instructions].join('\n'),
					as:as,
					text:assignments,
					state:state
				};	
			}
		},
		Events:{
			onParsedElementChanged: function(ev) {
				var data = (ev ? ev.detail : false);
				if (data) {
					var owner = data.owner;
					var attribute = data.property;
					var value = data.new;
					if (owner && owner.element && isFunction(owner.element.getAttribute)) {
						owner.element.getAttribute(attribute, (isObject(value) ? JSON.stringify(value) : value));
					}							
				}
			}
		},
		Types:{
			default:function(node, classes, container) {
				var tag = getTagName(node);
				var type = tag.split('-').reduce(Paths.getter, classes);
				if (!type) {
					//WARN
					return undefined;
				}
				var instance = new type();
				var attributes = node.attributes;
				var isNative = isNativeTag(tag);
				for (var i = attributes.length - 1; i >= 0; i--) {
					var attribute = attributes[i];
					var name = attribute.name;
					var value = attribute.value;
					instance.element.setAttribute(name, value);
					if (instance.hasOwnProperty(name)) {
						doOrSet(instance, name, value);
						continue;
					}
					instance.add(name);
					instance.on(`${name}Changed`, Parser.Events.onParsedElementChanged);
					instance[name] = value;
				};
				var textNodes = [];
				childNodes(node, (child) => {
					if (isTextNode(child)) {
						var node = document.createTextNode("");
						instance.element.appendChild(node);
						instance.private.text = node;
						textNodes.push({node:node, value:child.nodeValue});
						return;
					}
					var as = child.getAttribute('as');
					var handle = instance.add(Parser.Types.default(child, classes));
					if (as) {
						if (handle && isFunction(handle.as)) {
							handle.as(as);
						}						
					}
					return;
				});
				//for some reason, text nodes need to be set at the end
				textNodes.forEach((textNode) => {
					textNode.node.nodeValue = textNode.value;
				});
				return instance;
			},
			class:function(node, classes, container) {
				var children = node.childNodes;
				var count = children.length;
				var root = Parser.Tools.getFirstNonTextChild(node);
				if (!root) {return; }
				var tag = getTagName(root);
				var name = (container.getAttribute('name') || 'Anonymous'+Tools.uid());
				var inherits = container.getAttribute('inherits');
				var asTag = (container.getAttribute('tag') || tag);
				var parent;
				if (inherits) {
					parent = inherits.split('-').reduce(Paths.getter, classes);
				}
				parent = (parent || element);
				var instruction = Parser.Tools.htmlToInstructions(root, classes);
				var aliases = Object.keys(instruction.state.aliases);
				//build headers
				var header = ['\n\t\/\/ Imports'];
				aliases.forEach((alias) => {
					header.push(`\tvar ${alias} = classes.${alias}.type;`);
				});
				header.push('\n');
				//build text
				var texts = {};
				var textNodes = [];
				instruction.text.forEach((text) => {
					var name = text.name;
					var value = text.value;
					texts[name] = value;
					textNodes.push(`\t${name}.nodeValue = texts.${name};`);
				});
				var built = 
					`\n return (function compile(element, constructor, classes, texts, inherits) {\n` +
						header.join('\n') +
						`\n\tfunction ${name}() { \n` +
							`\tconstructor = (inherits === element ? constructor : inherits.constructor);\n` +
							`\tconstructor.call(this, '${asTag}'); \n` +
							`\tthis.identity = '${name}'; \n\n` +
							`\t\/\/ Generated \n` +
							instruction.code + '\n\n' +
							`\t\/\/ Assign Text Values \n` +
							textNodes.join('\n') + 
						`\n}\n` +
						`\n\t${name}.prototype = Object.create(inherits.prototype);\n` +
						`\n\t${name}.constructor = ${name};\n` +
						`\t return ${name};\n` +
					`});`
				;
				var compiled = feval.call(window, built)(
					element,
					Methods.constructor,
					instruction.state.aliases,
					texts,
					parent
				);
				return compiled;
			}
		},
		parse:function(html, classes) {
			var container;
			if (isString(html)) {
				container = document.createElement('container');
				container.innerHTML = html;				
			}
			if (isElement(html)) {
				container = html;
			}
			if (!container) {return; }
			var root = Parser.Tools.getFirstNonTextChild(container);
			var tag = getTagName(root);
			var parser = Parser.Types[tag];
			return (parser || Parser.Types.default).call(this, root, (classes || exported.Elements), root);
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
			var type = Tools.getType(method);
			var action = Methods.DoToEach[type];
			return (action || unhandled).call(this, method, args);
		}
	}

	class elements extends collection {
		constructor(target) {
			super(target);
			return this.doToEach('constructor', arguments);
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
		text() {
			return this.doToEach('text', arguments);
		}
		attribute() {
			return this.doToEach('attribute', arguments);
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
			var type = Tools.getType(item);
			var action = Methods.Add[type];
			return (action || unhandled).call(this, item);
		}
		addTo(item) {
			var type = Tools.getType(item);
			var action = Methods.AddTo[type];
			return (action || unhandled).call(this, item);
		}
		remove(item) {
			var type = Tools.getType(item);
			var action = Methods.Remove[type];
			return (action || unhandled).call(this, item);
		}
		on(event, method) {
			var type = Tools.getType(event);
			var action = Methods.On[type];
			return (action || unhandled).call(this, event, method);
		}
		trigger(event, args) {
			var type = Tools.getType(event);
			var action = Methods.Trigger[type];
			return (action || unhandled).call(this, event, args);
		}
		find(what) {
			var type = Tools.getType(what);
			var action = Methods.Find[type];
			return (action || unhandled([])).call(this, what);
		}
		with(method) {
			var type = Tools.getType(method);
			var action = Methods.With[type];
			return (action || unhandled).call(this, method);
		}
		do(method, args) {
			var type = Tools.getType(method);
			var action = Methods.Do[type];
			return (action || unhandled).call(this, method, args);
		}
		get(property) {
			var type = Tools.getType(property);
			var action = Methods.Get[type];
			return (action || unhandled).call(this, property);
		}
		set(property, value) {
			var type = Tools.getType(property);
			var action = Methods.Set[type];
			return (action || unhandled).call(this, property, value);
		}
		text(text) {
			var type = Tools.getType(text);
			var action = Methods.Text[type];
			return (action || unhandled).call(this, text);
		}
		attribute(name, value) {
			if (!isElement(this.element) || isEmptyString(name)) {return; }
			var type = Tools.getType(name);
			var isSet = (arguments.length > 1);
			var action = Methods.Attribute[(isSet ? 'Set' : 'Get')][type];
			return (action || unhandled).apply(this, name, value);
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
			var _behaviors = _this.behaviors
			//ensure GC picks em' up
			_element = null;
			_private = null;
			_parent = null;
			_children = null;
			return true;
		}
	}

	class behavior {
		static attach(to) {}
		static detach(from) {}
	}
	behavior.identity = 'none';

	var exported = {
		element:element,
		Elements:{},
		behavior:behavior,
		Behaviors:{},
		Markup:{
			parse:Parser.parse
		},
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
		Natives[tag] = true;
		var primary = Classes.fromTag(tag);
		exported.Elements[tag] = primary;
	});

	return exported
})();