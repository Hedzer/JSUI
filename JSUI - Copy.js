define(function(require, exports, module) {
	var JSUI = (function() {
		'use strict';

		//sugary checks
		function isFunction(u) {
			return (typeof u === 'function');
		};
		function isString(u) {
			return (typeof u === 'string');
		};
		function isNumber(u) {
			return (typeof u === 'number');
		};
		function isEmptyString(u) {
			return (u === "");
		};
		function isObject(u) {
			return (typeof u === 'object');
		};
		function isNull(u) {
			return (u === null);
		};
		function isUndefined(u) {
			return (typeof u === 'undefined');
		};
		function isArray(u) {
			return Array.isArray(u);
		};
		function isJSUI(u) {
			return (u instanceof element);
		};
		function isUJSUI(u) {
			return (u.prototype instanceof element);
		};
		function isStyleRule(u) {
			return (u instanceof styleSheetRule);
		};
		function isUStyleRule(u) {
			return (u.prototype instanceof styleSheetRule);
		};
		function isElement(u) {
			return (u instanceof Element);
		};
		function isRegex(u) {
			return (u instanceof RegExp);
		};
		var htmlRegex = /^<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)$/;
		function isHTML(u) {
			return htmlRegex.test(u);
		};
		function isPath(u) {
			return (u[0] === '@');
		};
		var Natives = {};
		function isNativeTag(u) {
			return Natives[u];
		};
		function isTextNode(u) {
	 		return (u && u.nodeName === "#text");
		};
		function unhandled(args){return args};
		function cacheable(name) {
			exported.Cache = (exported.Cache || {});
			exported.Cache[name] = (exported.Cache[name] || {});
		};
		function addClass(el, name) {
			if (!name || !isElement(el)) {return; }
			if (el.classList && el.classList.add) {
				el.classList.add(name);
				return;
			}
			var classes = el.className.split(' ');
			if (~classes.indexOf(name)) {return; }
			classes.push(name);
			el.className = classes.join(' ');
		};
		function getTagName(el) {
			return el.tagName.toLowerCase();
		};
		function doOrSet(obj, prop, value) {
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
		function debounce(fn, time) {
			if (isFunction(fn)) {
				var dbcTimer;
				return function() {
					clearTimeout(dbcTimer);
					dbcTimer = setTimeout(fn, time);
				};
			}
		};
		function capitalize(style){
			return style.charAt(0).toUpperCase() + style.slice(1);
		};
		function uncapitalize(style){
			return style.charAt(0).toLowerCase() + style.slice(1);
		};
		function feval(code) {
			return (new Function(code))();
		};

		function childNodes(node, callback) {
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
		function nodeAttributes(node, callback) {
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
							this.type = '${tag}';
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
								instance.attribute('as', name);
								addClass(instance.element, name);
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
				},
				function:function(method) {
					if (isUJSUI(method)) {
						return this.add(new method());
					}
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
						function hook() {
							var args = arguments;
							Object.keys(pool).forEach(function(id) {
								var method = pool[id];
								method.apply(self, args);
							});
						};
						if (this.element) {
							this.element.addEventListener(name, hook, false);
						}
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
				//select the proper constructor action
				var type = Tools.getType(tag);
				var action = Methods.Constructor[type];
				tag = (action || function(){
					return Methods.Constructor.string.call(this, 'div');
				}).call(this, tag);

				//set up ids
				this.element.uid = this.uid;

				//setup first type+event
				Tools.addEventedProperty(this, 'type');
				this.on('typeChanged', (e) => {
					if (e && e.detail && e.detail.new){
						if (this.element && e.detail.new){
							var name = e.detail.new;
							if (!name) {return; }
							addClass(this.element, name);
						}
					}
				});
				this.type = tag;

				//add styling capabilities
				this.style = new styleInline(this);

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

		var Sorters = {
			styleSheetRule:function(a, b) {
				var importance = b.importance - a.importance;
				var created = b.private.created - a.private.created;
				if (!importance) {
					return created;
				}
				return importance;
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

		var Style = {
			Sheets: {}
		};

		class extendible {
			constructor() {
				this.private = {
					Events:{},
					Hooks:{}
				};
			}
			add(item, value) {
				if (isString(item)) {
					Tools.addEventedProperty(this, item);
					return;
				}
				if (isArray(item)) {
					item.forEach((key) => {
						this.add(key, value);
					});
					return;
				}
				if (isObject(item)) {
					Object.keys(item).forEach((key) => {
						this.add(key, item[key]);
					});
				}
			}
			remove(item) {
				if (isString(item)) {
					delete this[item];
					return;
				}
				if (isArray(item)) {
					item.forEach((value) => {
						this.remove(value);
					});
				}
			}
			on(name, method) {
				if (isString(name) && isFunction(method)) {
					var events = ((this.private || {}).Events || {});
					var hooks = ((this.private || {}).Hooks || {});
					var pool = events[name];
					var self = this;
					if (!pool){
						events[name] = {};
						pool = events[name];
						function hook() {
							var args = arguments;
							Object.keys(pool).forEach(function(id) {
								var method = pool[id];
								method.apply(self, args);
							});
						};
						hooks[name] = hook;
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
				}
			}
			trigger(event, args) {
				var hooks = ((this.private || {}).Hooks || {});
				var hook = hooks[event];
				if (isFunction(hook)) {
					hook(args);
				}
			}
			destructor() {
				Object.keys(this).forEach((key) => {
					delete this[key];
				});
			}
		}

		class distinct extends extendible {
			constructor() {
				super();
				this.uid = Tools.uid();
			}
		}

		class styleSheet extends distinct {
			constructor(context) {
				super();
				context = (context || 'page');

				this.private.rules = {};
				this.private.timer = false;
				this.private.element = false;
				this.private.context = context;

				var contextSheet = Style.Sheets[context];
				if (contextSheet) {
					this.private = contextSheet.private;
					return this;
				}

				var element = document.createElement('style');
				element.appendChild(document.createTextNode(""));
				element.setAttribute('id', `style-${context}`);
				document.head.appendChild(element);
				this.private.element = element;
				Style.Sheets[context] = this;
			}
			add(rule) {
				if (isStyleRule(rule)) {
					var rules = this.private.rules;
					if (!rules[rule.uid]) {
						rules[rule.uid] = rule;
						return this.render(50);
					}
					return true;
				}
				if (isUStyleRule(rule)) {
					return this.add(new rule(this.context));
				}
			}
			remove(rule) {
				var rules = this.private.rules;
				if (isString(rule)) {
					if (rules[rule]) {
						delete rules[rule];
						this.render(50);
					}
					return;
				}
				if (isStyleRule(rule)) {
					this.remove(rule.uid);
				}
			}
			get context() {
				return this.private.context;
			}
			get variables() {}
			set variables(vars) {}
			get sorter() {
				if (this.private.sorter) {
					return this.private.sorter;
				}
				return Sorters.styleSheetRule;
			}
			set sorter(method) {
				if (isFunction(method)) {
					this.private.sorter = method;
				}
			}
			render(timeout) {
				var rules = this.private.rules;
				clearTimeout(this.private.timer);
				if (isNumber(timeout)) {
					this.private.timer = setTimeout(this.render.bind(this), timeout);
					return;
				}

				//create the stylesheet and disable it
				var element = document.createElement('style');
				element.setAttribute('id', `style-${this.context}`);
				element.appendChild(document.createTextNode(""));
				document.head.appendChild(element);
				element.sheet.disabled = true;

				//fetch all the rules and organize them
				var articles = [];
				Object.keys(rules).forEach((uid) => {
					var rule = rules[uid];
					articles.push(rule);
				});
				articles.sort(this.sorter);

				//render each rule
				articles.forEach((rule) => {
					var value = rule.render(this.context);
					element.sheet.insertRule(value, rule.importance);
				});
				
				//enable the new stylesheet and remove the old one
				element.sheet.disabled = false;
				document.head.removeChild(this.private.element);
				this.private.element = element;
				this.trigger('rendered');
			}
		}

		class styleRules extends distinct {
			constructor() {
				super();
				this.private.styles = {};
			}
		}

		class styleable extends distinct {
			constructor() {
				super();
				this.private.context = 'page';
				this.private.style = {
					rules: {}
				};
				//re-render css if context changes
				this.on('contextChanged', () => {
					Object.keys(this.private.style.rules).forEach((uid) => {
						var rule = this.private.style.rules[uid];
						rule.render(this.private.context);
					});
				});
			}
			get context() {
				return this.private.context;
			}
			set context(context) {
				var old = this.private.context;
				if (old === context) {
					return;
				}
				this.private.context = context; 
				this.trigger('contextChanged');
			}
			add(style) {
				if (isStyleRule(style)) {
					this.private.style.rules[style.uid] = style;
					style.render(this.context);
				}
				return super.add(style);
			}
		}

		class styleSheetRule extends styleRules {
			constructor(selector, properties) {
				super();
				this.private.importance = 0;
				this.private.created = new Date().valueOf();
				if (selector) {
					this.selector = selector;
				}
				if (isObject(properties)) {
					this.set(properties);
				}
			}
			get selector() {
				return this.private.selector;
			}
			set selector(selector) {
				var self = this;
				var changed = () => {
					var old = this.private.selector;
					this.trigger('selectorChanged', {
						owner: self,
						old: old,
						new: selector
					});					
				};

				if (isString(selector)) {
					this.private.selector = selector;
					changed();
					return;
				}
				//will need array and object
			}
			get media() {
				return this.private.media;
			}
			set media(media) {
				var self = this;
				var changed = () => {
					var old = this.private.media;
					this.trigger('mediaChanged', {
						owner: self,
						old: old,
						new: media
					});					
				};

				if (isString(media)) {
					this.private.media = media;
					changed();
					return;
				}
				//will need array and object
			}
			get importance() {
				return (this.private.importance || 0);
			}
			set importance(zindex) {
				if (isNumber(zindex)) {
					this.private.importance = zindex;
				}
				this.trigger('importanceChanged');
			}
			get context() {
				return (this.private.context || 'page');
			}
			set context(context) {
				this.private.context = context;
				this.trigger('contextChanged');
			}
			set(name, value) {
				if (isObject(name)) {
					Object.keys(name).forEach((key) => {
						var value = name[key];
						this[key] = value;
					});
					return;
				}
				if (isString(name)) {
					if (arguments.length > 1) {
						if (isString(value)) {
							this[name] = value;
						}
						//there will be room here for functions and other stuff
					}
				}
			}
			render(context) {
				context = (context || this.private.context || 'page');
				var sheet = Style.Sheets[context] || new styleSheet(context);
				if (!sheet.private.rules[this.uid]) {
					sheet.add(this);
					return;
				}

				if (!this.selector) {
					var error = new JSUIError();
					error.throw();
				}
				var styles = [];
				var rendered = '';
				Object.keys(this.private.styles).forEach((key) => {
					var name = CSS.equivalents[key];
					var value = this.private.styles[key];
					//needs handlers for values
					styles.push(`${name}: ${value};`);
				});
				var selector = this.selector;
				var media = this.media;
				var tab = (media ? '\t' : '');
				//needs handers for selectors
				var styleText = styles.join(`\n\t${tab}`);
				rendered = `${tab}${selector} {\n\t${tab}${styleText}\n${tab}}`;
				if (media) {
					rendered = `${media} {\n${rendered}\n}`;
				}
				return rendered;
			}
		}

		class styleInline extends styleRules {
			constructor(host) {
				super();
				this.private.host = (host || false);
				this.on('styleChanged', (ev) => {
					if (this.private.host && ev.property) {
						this.private.host.element.style[ev.property] = ev.new;
					}
				});
			}
			get host() {
				return this.private.host;
			}
			set host(element) {
				if (isJSUI(element)) {
					this.private.host = element.element;
				}
			}
			set(name, value) {
				if (isObject(name)) {
					Object.keys(name).forEach((key) => {
						var value = name[key];
						this[key] = value;
					});
					return;
				}
				if (isString(name)) {
					if (arguments.length > 1) {
						if (isString(value)) {
							this[name] = value;
						}
						//there will be room here for functions and other stuff
					}
				}
			}
		}

		class styleVariables extends distinct {
			constructor() {
				super();
			}
			add(name, value) {
				if (isString(name)) {
					Tools.addEventedProperty(this, name, value);
					this.trigger('variableAdded', {
						name: name,
						value: value
					});
					return;
				}
				if (isObject(name)) {
					Object.keys(name).forEach((key) => {
						this.add(key, name[key]);
					});
				}
			}
			remove(name) {
				if (isString(name)) {
					if (this[name]) {
						delete this[name];
						trigger('variableRemoved', name);
						return true;
					}
					return false;
				}
				if (isArray(name)) {
					name.forEach((key) => {
						this.remove(key);
					});
					return true;
				}
			}
		}

		var CSS = {
			/*
				Stylesheet types
					1. Reset
					2. Application
					3. Page 
			*/
			vendors: [
				'webkit',
				'moz',
				'ms',
				'o'
			],
			equivalents: {}
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
						if (!isUJSUI(type)) {return; }
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
								`\tthis.type = '${name}'; \n\n` +
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

		class JSUIError extends Error {
			constructor(title, message, severity) {
				super();
			}
			throw(title, message, severity) {
				if (window.console && window.console.trace) {
					console.trace(title || '');
				}
			}
		}

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

		class element extends styleable {
			constructor(tag){
				super(tag);
				Methods.constructor.call(this, tag);
			}
			add(item) {
				var type = Tools.getType(item);
				var action = Methods.Add[type];
				return (action || super.add).call(this, item);
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
				return (action || unhandled).apply(this, [name, value]);
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

		class behavior extends styleable {
			constructor(host) {
				super();
				this.private.host = host;
				this.context = 'behavior';
			}
			destructor() {}
		}

		[
			{
				constructs: 'CSS Map',
				construct: function() {
					var example = document.createElement('div');
					Object.getOwnPropertyNames(example.style).forEach((key) => {
						example.style[key] = 'inherit';
						var name = (example.getAttribute('style') || '').split(':')[0];
						CSS.equivalents[key] = name;
						example.setAttribute('style', '');
						CSS.vendors.forEach((vendor) => {
							var prefix = '-'+vendor+'-';
							if (~name.indexOf(prefix)){
								var w3cKey = key;
								w3cKey = uncapitalize(w3cKey.replace(vendor, ''));
								CSS.equivalents[w3cKey] = name;
								CSS.equivalents[name.replace(prefix,'')] = name;
							}
						});
					});
				}
			},
			{
				constructs: 'Style Rules',
				construct:function() {
					Object.keys(CSS.equivalents).forEach((key) => {
						Object.defineProperty(styleRules.prototype, key, {
							get:function(){
								return this.private.styles[key];
							},
							set:function(value){
								var old = this.private.styles[key];
								this.private.styles[key] = value;
								if (isNull(value)) {
									delete this.private.styles[key];
								}
								if (old !== value){
									var data = {
										owner:this,
										property:key,
										old:old,
										new:value
									};
									if (this.trigger){
										this.trigger(`${key}Changed`, data);
										this.trigger('styleChanged', data);
									}
								}

							},
							configurable:true,
							enumerable:true
						});
					});
				}
			}
		].forEach((protoconstructor) => {
			protoconstructor.construct();
		});

		var exported = {
			Settings:{
				Development: {
					enabled: false,
					traceErrors: true,
					haltOnErrors: true
				},
				Production: {}
			},
			element: element,
			Elements: {},
			behavior: behavior,
			Behaviors: {},
			Markup: {
				parse: Parser.parse
			},
			Style:{
				sheet: styleSheet,
				rule: styleSheetRule,
				inline: styleInline
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
	return JSUI;
});
