var JSUI = (function () {
'use strict';

function isArray(u) {
	return Array.isArray(u);
}

function isElement(u) {
	return (u instanceof Element);
}

function isEmptyString(u) {
	return (u === "");
}

function isFunction$1(u) {
	return (typeof u === 'function');
}

let htmlRegex = /^<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)$/;
function isHTML(u) {
	return htmlRegex.test(u);
}

function isNull(u) {
	return (u === null);
}

function isRegex(u) {
	return (u instanceof RegExp);
}

function isPath(u) {
	return (typeof u === 'string' && u.length > 0 && u[0] === '@');
}

let defaults = {
	namespace: 'JSUI',
	Development: {
		enabled: false,
		traceErrors: true,
		haltOnErrors: true,
		references: true
	},
	Production: {}
};

function isObject(u) {
	return (typeof u === 'object');
}

function isString(u) {
	return (typeof u === 'string');
}

let namespace = defaults.namespace;

class Identity {
	constructor(identity) {

		let defaults$$1 = {
			namespace: namespace,
			class: 'NoClass',
			major: 0, minor: 0, patch: 0
		};

		if (isObject(identity)) {
			defaults$$1.namespace = (identity.namespace || defaults$$1.namespace);
			defaults$$1.class = (identity.class || defaults$$1.class);
			defaults$$1.major = (identity.major || defaults$$1.major);
			defaults$$1.minor = (identity.minor || defaults$$1.minor);
			defaults$$1.patch = (identity.patch || defaults$$1.patch);
		}

		if (isString(identity)) {
			defaults$$1.class = identity;
		}

		Object.defineProperty(this, 'private', {
			value: defaults$$1,
			enumerable: false
		});

		Object.freeze(this.private);
	}
	get namespace() {
		return this.private.namespace;
	}
	get class() {
		return this.private.class;
	}
	get major() {
		return this.private.major;
	}
	get minor() {
		return this.private.minor;
	}
	get patch() {
		return this.private.patch;
	}
}

function isNumber(u) {
	return (!isNaN(u) && typeof u === 'number');
}

let Sheets$1 = {};

function uncapitalize(text){
	return text.charAt(0).toLowerCase() + text.slice(1);
}

let vendors = [
	'webkit',
	'moz',
	'ms',
	'o'
];

//not a real constant, since it is generated
let equivalents = {};
let example = document.createElement('div');
for (let key in example.style) {
	try{
		example.style[key] = 'inherit';
		let name = (example.getAttribute('style') || '').split(':')[0];
		equivalents[key] = name;
		example.setAttribute('style', '');
		vendors.forEach((vendor) => {
			let prefix = '-'+vendor+'-';
			if (~name.indexOf(prefix)){
				let w3cKey = key;
				w3cKey = uncapitalize(w3cKey.replace(vendor, ''));
				equivalents[w3cKey] = name;
				equivalents[name.replace(prefix,'')] = name;
			}
		});
	} catch (e) {}
}

function add(host, name, defaultValue){
	Object.defineProperty(host, name, {
		get:function(){
			let value = (this.private.state.hasOwnProperty(name) ? this.private.state[name] : defaultValue);
			return value;
		},
		set:function(v){
			let value = (this.private.state.hasOwnProperty(name) ? this.private.state[name] : defaultValue);
			let old = value;
			value = v;
			if (old !== v){
				this.private.state[name] = value;
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

function remove() {
	delete this.pool[this.id];
}

function removeAll() {
	Object.keys(this.pool).forEach((eid) => {
		delete this.pool[eid];
	});
}

let prefix = '';
let current = 0;
let max = Number.MAX_SAFE_INTEGER - 1;			
function uid(){
	if (current > max){
		prefix += current;
		current = 0;
	}
	return prefix + current++;
}

function constructor() {
	this.private = {
		state: {},
		events: {},
		hooks: {}
	};
}

class Extensible {
	constructor() {
		constructor.call(this);
	}
	add(item, value) {
		if (isString(item)) {
			add(this, item);
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
	state(property, value, defaultValue) {
		let old = this.private.state[property];
		if (arguments.length === 1) {
			if (this.private.state.hasOwnProperty(property)) {
				return defaultValue;
			}
			return old;
		}

		let hasChanged = (old !== value);

		if (hasChanged) {
			this.private.state[property] = value;
			let data = {
				property: property,
				old: old,
				new: value
			};
			this.trigger([`${property}Changed`, 'Changed'], data);
		}

		return hasChanged;	
	}
	on(name, method) {
		if (isString(name) && isFunction$1(method)) {
			let events = this.private.events;
			let hooks = this.private.hooks;
			let pool = events[name];
			let self = this;
			if (!pool){
				events[name] = {};
				pool = events[name];
				function hook() {
					let args = arguments;
					Object.keys(pool).forEach(function(id) {
						let method = pool[id];
						method.apply(self, args);
					});
				}
				hooks[name] = hook;
			}
			let eid = uid();
			if (typeof method === 'function'){
				pool[eid] = method;
			}
			let handle = {
				id: eid,
				pool: pool,
				remove: remove,
				removeAll: removeAll
			};
			return handle;
		}
	}
	trigger(event, args) {

		if (isArray(event)) {
			let results = [];
			event.forEach((e) => {
				results.push(this.trigger(e, args));
			});
			return results;
		}

		let hooks = this.private.hooks;
		let hook = hooks[event];
		if (isFunction$1(hook)) {
			hook(args);
		}
	}
	destructor() {
		for (let key in this) {
			delete this[key];
		}
	}
}

function constructor$1() {
	this.private.uid = uid();
	this.private.Is = {};
}

const identity$5 = new Identity({
	class: 'Distinct',
	major: 1, minor: 0, patch: 0
});

class Distinct extends Extensible {
	constructor() {
		super();
		constructor$1.call(this);

		//basics
		this.identity = identity$5;
	}
	get uid() {
		return this.private.uid;
	}
	get identity() {
		return this.state('identity');
	}
	set identity(identity) {
		this.state('identity', identity);
		if (!this.private.Is[identity]) {
			this.private.Is[identity.class] = identity;
		}
	}
	get Is() {
		return this.private.Is;
	}
}

const identity$4 = new Identity({
	class: 'StyleRules',
	major: 1, minor: 0, patch: 0
});

class StyleRules extends Distinct {
	constructor() {
		super();
		this.private.styles = {};
		this.identity = identity$4;
	}
}

//add all the style keys as properties
Object.keys(equivalents).forEach((key) => {
	Object.defineProperty(StyleRules.prototype, key, {
		get:function(){
			return this.private.styles[key];
		},
		set:function(value){
			let old = this.private.styles[key];
			this.private.styles[key] = value;
			if (isNull(value)) {
				delete this.private.styles[key];
			}
			if (old !== value){
				let data = {
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

function isUStyleSheetRule(u) {
	return !!(u && u.prototype && (u.prototype instanceof StyleSheetRule || u === StyleSheetRule));
}

function rules(a, b) {
	let importance = b.importance - a.importance;
	let created = b.private.created - a.private.created;
	if (!importance) {
		return created;
	}
	return importance;
}

const identity$6 = new Identity({
	class: 'StyleSheet',
	major: 1, minor: 0, patch: 0
});

class StyleSheet extends Distinct {
	constructor(context) {
		super();
		context = (context || 'default');

		this.private.rules = {};
		this.private.timer = false;
		this.private.element = false;
		this.private.context = context;

		let contextSheet = Sheets$1[context];
		if (contextSheet) {
			this.private = contextSheet.private;
			return this;
		}

		let element = document.createElement('style');
		element.appendChild(document.createTextNode(""));
		element.setAttribute('id', `style-${context}`);
		document.head.appendChild(element);
		this.private.element = element;
		Sheets$1[context] = this;

		this.identity = identity$6;
	}
	add(rule) {
		if (isStyleSheetRule(rule)) {
			let rules$$1 = this.private.rules;
			if (!rules$$1[rule.uid]) {
				rules$$1[rule.uid] = {
					references: 1,
					rule: rule
				};
				return this.render(10);
			}
			rules$$1[rule.uid].references++;
			return true;
		}
		if (isUStyleSheetRule(rule)) {
			return this.add(new rule(this.context));
		}
	}
	remove(rule) {
		let rules$$1 = this.private.rules;
		if (isString(rule)) {
			let entry = rules$$1[rule];
			if (entry) {
				entry.references--;
				if (entry.references < 1) {
					delete rules$$1[rule];
					this.render(10);					
				}
			}
			return;
		}
		if (isStyleSheetRule(rule)) {
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
		return rules;
	}
	set sorter(method) {
		if (isFunction$1(method)) {
			this.private.sorter = method;
		}
	}
	render(timeout) {
		let entries = this.private.rules;
		clearTimeout(this.private.timer);
		if (isNumber(timeout)) {
			this.private.timer = setTimeout(this.render.bind(this), timeout);
			return;
		}

		let entryList = Object.keys(entries);
		//check to see if there are any entries
		if (!entryList.length) {
			document.head.removeChild(this.private.element);
			return;
		}

		//create the stylesheet and disable it
		let element = document.createElement('style');
		element.setAttribute('id', `style-${this.context}`);
		element.appendChild(document.createTextNode(""));
		document.head.appendChild(element);
		element.sheet.disabled = true;

		//fetch all the entries and organize them
		let articles = [];
		entryList.forEach((uid) => {
			let entry = entries[uid];
			articles.push(entry.rule);
		});
		articles.sort(this.sorter);

		//render each rule
		articles.forEach((rule) => {
			let value = rule.render(this.context);
			element.sheet.insertRule(value, 0);
		});
		
		//enable the new stylesheet and remove the old one
		element.sheet.disabled = false;
		document.head.removeChild(this.private.element);
		this.private.element = element;
		this.trigger('rendered');
	}
}

const identity$3 = new Identity({
	class: 'StyleSheetRule',
	major: 1, minor: 0, patch: 0
});

class StyleSheetRule extends StyleRules {
	constructor(selector, properties) {
		super();
		this.identity = identity$3;
		this.private.importance = 0;
		this.private.created = new Date().valueOf();
		this.private.isSwitchable = false;
		this.private.isOnByDefault = true;
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
		let self = this;
		let changed = () => {
			let old = this.private.selector;
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
		let self = this;
		let changed = () => {
			let old = this.private.media;
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
		let old = this.private.importance;
		if (isNumber(zindex)) {
			if (old === zindex) { return; }
			this.private.importance = zindex;
		}
		this.trigger('importanceChanged', {old: old, new: zindex});
	}
	get context() {
		return (this.private.context || 'default');
	}
	set context(context) {
		let old = this.private.context;
		if (old === context) { return; }
		this.private.context = context;
		this.trigger('contextChanged', {old: old, new: context});
	}
	set(name, value) {
		if (isObject(name)) {
			Object.keys(name).forEach((key) => {
				let value = name[key];
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
		context = (context || this.private.context || 'default');
		let sheet = Sheets$1[context] || new StyleSheet(context);
		if (!sheet.private.rules[this.uid]) {
			sheet.add(this);
			return;
		}

		if (!this.selector) {
			let error = new JSUIError();
			error.throw();
		}
		let styles = [];
		let rendered = '';
		Object.keys(this.private.styles).forEach((key) => {
			let name = equivalents[key];
			let value = this.private.styles[key];
			//needs handlers for values
			styles.push(`${name}: ${value};`);
		});
		let selector = this.selector;
		let media = this.media;
		let tab = (media ? '\t' : '');
		//needs handers for selectors
		let styleText = styles.join(`\n\t${tab}`);
		rendered = `${tab}${selector} {\n\t${tab}${styleText}\n${tab}}`;
		if (media) {
			rendered = `${media} {\n${rendered}\n}`;
		}
		return rendered;
	}
	get isSwitchable() {
		return this.private.isSwitchable;
	}
	set isSwitchable(bool) {
		let old = this.private.isSwitchable;
		if (old === bool) { return; }
		this.private.isSwitchable = bool;
		this.trigger('isSwitchableChanged', {old: old, new: bool});
	}
	get isOnByDefault() {
		return this.private.isOnByDefault;
	}
	set isOnByDefault(bool) {
		let old = this.private.isOnByDefault;
		if (old === bool) { return; }
		this.private.isOnByDefault = bool;
		this.trigger('isOnByDefaultChanged', {old: old, new: bool});
	}
	get class() {
		return this.private.class;
	}
	set class(className) {
		let old = this.private.class;
		if (old === className) { return; }
		this.private.class = className;
		this.trigger('classChanged', {old: old, new: className});
	}
	_on(JSUIElement) {
		if (!this.isSwitchable || !this.class) { return; }
		if (isJSUI(JSUIElement)) {
			JSUIElement.class(this.class).add();
		}
	}
	_off(JSUIElement) {
		if (!this.isSwitchable || !this.class) { return; }
		if (isJSUI(JSUIElement)) {
			JSUIElement.class(this.class).remove();
		}
	}
}

function isStyleSheetRule(u) {
	return (u instanceof StyleSheetRule);
}

const identity$8 = new Identity({
	class: 'StyleInline',
	major: 1, minor: 0, patch: 0
});

class StyleInline extends StyleRules {
	constructor(host) {
		super();

		this.private.host = (host || false);

		let handler = (() => {});
		if (isJSUI(host)) {
			handler = (ev) => {
				if (this.private.host && ev.property) {
					this.private.host.element.style[ev.property] = ev.new;
				}				
			};
		}
		if (isBehavior(host)) {
			handler = (ev) => {
				host.hosts((jsui) => {
					jsui.element.style[ev.property] = ev.new;
				});
			};
		}

		this.on('styleChanged', handler);
		this.identity = identity$8;
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
				let value = name[key];
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

const identity$7 = new Identity({
	class: 'StyleableHost',
	major: 1, minor: 0, patch: 0
});

class StyleableHost extends Distinct {
	constructor(host) {
		super();
		this.private.host = host;
		this.identity = identity$7;
	}
	get Inline() {
		if (!this.private.Inline) {
			this.private.Inline = new StyleInline(this.private.host);
		}
		return this.private.Inline;
	}
	get context() {
		return this.private.context;
	}
	set context(context) {
		let host = this.private.host;
		let old = this.private.context;

		if (old === context) {
			return;
		}

		this.private.context = context;
		Object.keys(host.private.style.rules).forEach((uid) => {
			let entry = host.private.style.rules[uid];
			Sheets[old].remove(entry.rule);
			entry.rule.render(this.private.context);
		});

		host.trigger('Style.contextChanged', {
			old: old,
			new: context
		});
	}
	switch(style) {
		if (isStyleSheetRule(style)) {
			let styleActions = this.private.styleActions = (this.private.styleActions || {});
			let host = this.private.host;

			let action = (styleActions[style.uid] || {
				on: style._on.bind(style, host),
				off: style._off.bind(style, host)
			});
			
			return action;
		}
	}
}

function constructor$2() {
	this.private.context = 'default';
	this.private.style = {
		rules: {}
	};
}

const identity$2 = new Identity({
	class: 'Styleable',
	major: 1, minor: 0, patch: 0
});

class Styleable extends Distinct {
	constructor() {
		super();
		constructor$2.call(this);
		this.identity = identity$2;
	}
	get Style() {
		if (!this.private.Style) {
			this.private.Style = new StyleableHost(this);
		}
		return this.private.Style;
	}
	add(style) {
		if (isStyleSheetRule(style)) {
			let rules = this.private.style.rules;
			let entry = rules[style.uid];
			let Style = this.Style;
			if (!entry) {
				entry = {
					rule: style,
					context: Style.context
				};
				rules[style.uid] = entry;
				style.render(Style.context);
				return;
			}
			if (entry.context !== Style.context) {
				let sheet = Sheets$1[entry.context];
				if (sheet) {
					sheet.remove(style);
					style.render(Style.context);
				}
				return;
			}
		}
	}
}

const identity$1 = new Identity({
	class: 'Behavior',
	major: 1, minor: 0, patch: 0
});

class Behavior extends Styleable {
	constructor(host) {
		super();

		//create hosts container
		this.private.hosts = {};
		if (host) {
			this.attach(host);
		}

		//setup new props
		this.identity = identity$1;
		this.Style.context = 'behavior';
	}
	attach(host) {
		if (isJSUI(host)) {
			let id = host.uid;
			let addAs = this.identity.class;
			if (this.private.hosts[id]) { return; }
			this.private.hosts[id] = host;
			host[addAs] = this;
			this.trigger('attach', host);
			return {
				as: (function(name) {
					delete host[addAs];
					host[name] = this;
				}).bind(this)
			};
		}
	}
	detach(host) {
		let id;
		if (isJSUI(host)) {
			id = host.uid;
		}
		host = this.private.hosts[id];
		delete this.private.hosts[id];
		this.trigger('detach', host);
	}
	hosts(each) {
		let results = [];
		let hasTask = isFunction$1(each);
		let hosts = this.private.hosts;
		Object.keys(hosts).forEach((id) => {
			let host = hosts[id]
			if (hasTask) {
				each(host);
			}
			results.push(host);
		});
		return results;
	}
	destructor() {
		super.destructor();
	}
}

function isBehavior(u) {
	return (u instanceof Behavior);
}

let Types = {
	object: {
		null: isNull,
		array: isArray,
		element: isElement,
		jsui: isJSUI,
		regex: isRegex,
		behavior: isBehavior
	},
	string: {
		html: isHTML,
		path: isPath
	}
};

var getHandledType$1 = (function getHandledType(u){
	let type = typeof u;
	let subtypes = Types[type];
	if (!subtypes) {
		return type;
	}
	for (let name in subtypes) {
		let subtype = subtypes[name];
		if (subtype(u)) {
			return name;
		}
	}
	return type;
});

function unhandled(args){return args}

function addClass(el, name) {
	if (!isString(name) || !isElement(el)) { return; }
	if (el.classList && el.classList.add) {
		el.classList.add.apply(el.classList, name.split(' '));
		return;
	}
	let classes = el.className.split(' ');
	if (~classes.indexOf(name)) { return; }
	classes.push(name);
	el.className = classes.join(' ');
}

function getTagName(el) {
	if (isElement(el)) {
		return el.tagName.toLowerCase();
	}
	return 'none';
}

function _element(el) {
	this.element = el;
	return getTagName(el);
}

function _string$1(tag) {
	tag = (tag || 'div');
	this.element = document.createElement(tag);
	return tag;
}

let Constructor = {
	element: _element,
	string: _string$1
};

function constructor$3(tag) {
	//select the proper constructor action
	let type = getHandledType$1(tag);
	let action = Constructor[type];
	tag = (action || function(){
		return Constructor.string.call(this, 'div');
	}).call(this, tag);

	//set up ids
	this.element.uid = this.uid;

	//add references 
	let development = defaults.Development;
	if (development.enabled && development.references) {
		this.element.JSUI = this;
	}

	return this;
}

var destructor$1 = (function destructor() {
	let _element = this.element;
	let _private = this.private;
	if (_element){
		let parent = _element.parentNode;
		if (isFunction$1(_element.remove)){
			_element.remove();
			return;
		}
		if (parent && isFunction$1(parent.removeChild)){
			parent.removeChild(_element);
			return;
		}
	}
	let _style = this.style;
	if (_style && _style.Host){
		delete _style.Host;
	}
	Object.keys(this).forEach((key) => {
		delete this[key];
	});
	let _parent = _private.parent;
	if (_parent){
		if (_private && _private.mapped){
			let map = _private.mapped[_parent.uid];
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
	let _children = _private.children;
	if (_children){
		Object.keys(_children).forEach((key) => {
			let child = _children[key];
			if (!child){return;}
			if (isFunction$1(child.remove)){
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
});

function _element$1(element){
	if (this.element){
		this.element.appendChild(element);
	}
}

function _jsui(instance){
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

function _array(collection){
	let results = [];
	collection.forEach((item) => {
		results.push(this.add(item));
	});
	return results;
}

function _string$2(prop){
	add(this, prop);
}

function _html(markup){
	if (this.element && this.element.appendChild){
		let fragment = document.createDocumentFragment();
		let root = document.createElement('div');
		root.innerHTML = markup;
		while (root.firstChild) {
			fragment.appendChild(root.firstChild);
		}
		this.element.appendChild(fragment);			
	}
}

function _path(prop) {
	return _string$2.call(this, prop);
}

function isUJSUI(u) {
	return !!(u && u.prototype && (u.prototype instanceof Element$1 || u === Element$1) );
}

function isUBehavior(u) {
	return !!(u && u.prototype && (u.prototype instanceof Behavior || u === Behavior) );
}

function _function(method) {
	if (isUJSUI(method)) {
		return this.add(new method());
	}
	if (isUBehavior(method)) {
		return this.add(new method());
	}
}

function _behavior(instance){
	return instance.attach(this);
}

let Add = {
	element: _element$1,
	jsui: _jsui,
	array: _array,
	string: _string$2,
	html: _html,
	path: _path,
	function: _function,
	behavior: _behavior
};

function _element$2(element){
	if (element){
		element.appendChild(this.element);
	}
}

function _jsui$1(instance){
	return instance.add(this);
}

function _array$1(collection){
	let results = [];
	collection.forEach((item) => {
		results.push(this.addTo(item));
	});
	return results;
}

let AddTo = {
	element: _element$2,
	jsui: _jsui$1,
	array: _array$1
};

function _array$2(collection){
	let results = [];
	collection.forEach((item) => {
		results.push(this.remove(item));
	});
	return results;
}

function _jsui$2(instance) {
	if (instance.remove) {
		return instance.remove();
	}
}

function _undefined() {
	this.trigger('destructed');
	return this.destructor();	
}

let Remove = {
	array: _array$2,
	jsui: _jsui$2,
	undefined: _undefined
};

function _array$3(collection, method){
	let results = [];
	collection.forEach((item) => {
		results.push(this.on(item, method));
	});
	return results;
}

function _object(assignments) {
	let results = {};
	Object.keys(assignments).forEach((name) => {
		let method = assignments[name];
		results[name] = this.on(name, method);
	});
	return results;
}

function on(name, method) {
	if (!isFunction$1(method)) { return; }
	let events = this.private.events;
	let pool = events[name];
	let self = this;
	if (!pool){
		events[name] = {};
		pool = events[name];
		function dispatcher() {
			let args = arguments;
			Object.keys(pool).forEach((id) => {
				let method = pool[id];
				method.apply(this, args);
			});
		}
		let element = this.element;
		if (isElement(element)) {
			element.addEventListener(name, dispatcher, false);
		}
	}
	let eid = uid();
	if (isFunction$1(method)){
		pool[eid] = method;
	}
	let handle = {
		id: eid,
		pool: pool,
		remove: remove,
		removeAll: removeAll
	};
	return handle;
}

function _string$3(name, method) {
	return on.call(this, name, method);
}

function _path$1(name, method) {
	return _string$3.call(this, name, method);
}

let On = {
	array: _array$3,
	object: _object,
	string: _string$3,
	path: _path$1
};

function _array$4(collection, args){
	let results = [];
	collection.forEach((item) => {
		results.push(this.trigger(item, args));
	});
	return results;
}

function _object$1(assignments) {
	Object.keys(assignments).forEach((name) => {
		let args = assignments[name];
		this.trigger(name, args);
	});
}

function _string$4(name, args){
	if (!this.element){return false;}
	let event = new CustomEvent(name, {"detail": args});
	this.element.dispatchEvent(event);
	return true;
}

function _path$2(name, args) {
	return _string$4.call(this, name, args);
}

let Trigger = {
	array: _array$4,
	object: _object$1,
	string: _string$4,
	path: _path$2
};

function _array$5(collection) {
	let results = [];
	collection.forEach((item) => {
		results.push(this.find(item));
	});
	return results;
}

function _function$1(method) {
	let results = [];
	let isJSUI = Element$1.isPrototypeOf(method.prototype);
	if (isJSUI) {
		let proto = method.prototype;
		this.children(function(child) {
			if (proto.isPrototypeOf(child)) {
				results.push(child);
			}
		});
	}
	return results;
}

function _jsui$3(proto) {
	let results = [];
	this.children(function(child) {
		if (child instanceof proto) {
			results.push(child);
		}
	});
	return results;
}

function _regex(expression) {
	let results = [];
	this.children(function(child) {
		if (child.element) {
			let element = child.element;
			let text = (element.innerText || element.textContent || '');
			if (expression.test(text)) {
				results.push(child);
			}
		}
	});
	return results;
}

function _string$5(query) {
	let results = null;
	results = this.element.querySelectorAll(query);
	results = (!results || results === null ? [] : results);
	return results;
}

function _path$3(query) {
	return _string$5.call(this, query);
}

function _undefined$1() {
	let results = [];
	this.children(function(child) {
		results.push(child);
	});
	return results;
}

let Find = {
	array: _array$5,
	function: _function$1,
	jsui: _jsui$3,
	regex: _regex,
	string: _string$5,
	path: _path$3,
	undefined: _undefined$1
};

function _array$6(collection) {
	let results = [];
	collection.forEach((item) => {
		results.push(this.with(item));
	});
	return results;	
}

function _function$2(method) {
	method.call(this);
	return this;	
}

let With = {
	array: _array$6,
	function: _function$2
};

function _array$7(collection) {
	let results = [];
	collection.forEach((item) => {
		results.push(this.do(item));
	});
	return results;	
}

function _object$2(macro) {
	let results = {};
	Object.keys(macro).forEach((command) => {
		results[command] = this.do(command, macro[command]);
	});
	return results;
}

function _string$6(command, args) {
	if (isFunction$1(this[command])) {
		if (isArray(args)) {
			return this[command].apply(this, args);
		}
		return this[command](args);
	}
}

function getter(obj, prop) {
	if (!isObject(obj)) { return; }
	return obj[prop];
}

function get(obj, path) {
	if (isString(path)) {
		return path.substring(1).split('.').reduce(getter, obj);
	}
	if (isArray(path)) {
		return path.reduce(getter, obj);
	}
}

function getWithContext(obj, path) {
	let parts = path.substring(1).split('.');
	if (!parts.length) { return; }
	if (parts.length === 1) {
		return {
			context: obj,
			property: parts[0]
		};
	}
	let tail = parts.splice(parts.length - 1, 1);
	let reference = get(obj, parts);
	if (reference) {
		return {
			context: reference,
			property: tail[0]
		};
	}
	return false;
}

function _path$4(command, args) {
	let path = getWithContext(this, command);
	if (!path || !path.context || !path.property) { return; }
	let method = path.context[path.property];
	if (isFunction$1(method)) {
		if (isArray(args)) {
			return method.apply(path.context, args);
		}
		return method.call(path.context, args);
	}
}

let Do = {
	array: _array$7,
	object: _object$2,
	string: _string$6,
	path: _path$4
};

function _array$8(collection) {
	let results = [];
	collection.forEach((item) => {
		results.push(this.get(item));
	});
	return results;	
}

function _string$7(property) {
	if (!property) { return; }
	return this[property];	
}

function _path$5(path) {
	return get(this, path);
}

let Get = {
	array: _array$8,
	string: _string$7,
	path: _path$5
};

function _object$3(assignments) {
	let results = {};
	Object.keys(assignments).forEach((command) => {
		results[command] = this.set(command, assignments[command]);
	});
	return results;	
}

function _string$8(property, value) {
	if (!property) { return; }
	this[property] = value;
	return value;	
}

function setter(obj, path, value) {
	let parts = path.substring(1).split('.');
	if (!parts.length) { return; }
	if (parts.length === 1) {
		obj[parts[0]] = value;
		return true;
	}
	let tail = parts.splice(parts.length - 1, 1);
	let reference = get(obj, parts);
	if (reference) {
		reference[tail[0]] = value;
		return true;
	}
	return false;
}

function set(obj, path, value) {
	return setter(obj, path, value);
}

function _path$6(path, value) {
	return set(this, path, value);
}

let Set = {
	object: _object$3,
	string: _string$8,
	path: _path$6
};

function _string$9(text) {
	if (this.private && this.element) {
		if (!this.private.text) {
			let textNode = document.createTextNode(text);
			this.private.text = textNode;
			this.element.appendChild(textNode);
			return true;
		}
		this.private.text.nodeValue = text;
		return true;
	}
	return false;
}

function _path$7(text) {
	return _string.call(this, text);
}

let Text = {
	string: _string$9,
	path: _path$7
};

function placeholder(){}
function nodeAttributes(node, callback) {
	if (!isFunction$1(callback)) {
		callback = placeholder;
	}
	if (!isElement(node)) { return; }
	let attributeList = node.attributes;
	let attributes = {};
	for (let i = attributeList.length - 1; i >= 0; i--) {
		let attribute = attributeList[i];
		let name = attribute.name;
		let value = attribute.value;
		attributes[name] = value;
		if (callback(name, value, attribute)) {break; }
	}
	return attributes;
}

function _undefined$2() {
	let results = {};
	nodeAttributes(this.element, (attribute, value, ref) => {
		results[attribute] = value;
	});
	return results;
}

function _get_string(name) {
	return this.element.getAttribute(name);
}

function _get_path() {
	return _get_string.apply(this, arguments);
}

function _get_array(collection) {
	let results = {};
	collection.forEach((attribute) => {
		results[attribute] = this.attribute(attribute);
	});
	return results;
}

function _object$4(macro, value){
	let result = (isObject(value) ? value : {});
	Object.keys(macro).forEach((attribute) => {
		results[attribute] = this.attribute(attribute, macro[attribute]);
	});
	return results;
}

function _get_object(macro){
	return _object$4.call(this, macro);
}

function isUndefined(u) {
	return (typeof u === 'undefined');
}

function _set_string(name, value) {
	if (isUndefined(value) || isNull(value)) {
		this.element.removeAttribute(name);
		return true;
	}
	this.element.setAttribute(name, value);
	return true;
}

function _set_path() {
	return _set_string.apply(this, arguments);
}

function _array$9(collection, value) {
	let results = [];
	collection.forEach((attribute) => {
		results.push(this.attribute(attribute, value));
	});
	return results;
}

//Get
//Set
let Attribute = {
	Get:{
		undefined: _undefined$2,
		string: _get_string,
		path: _get_path,
		array: _get_array,
		object: _get_object
	},
	Set:{
		string: _set_string,
		path: _set_path,
		array: _array$9,
		object: _object$4
	}
};

function _array$10(collection) {
	let results = [];
	collection.forEach((item) => {
		results.push(this.class(item));
	});
	return results;
}

function _object$5(classes) {
	let className = '';
	Object.keys(classes).forEach((name) => {
		if (classes[name]) {
			className += name;
		}
	});
	this.element.className = className;
	return className;
}

class ElementAction {
	constructor(element) {
		this.private = {
			element: (element || false)
		};
	}
	get element() {
		return this.private.element;
	}
	set element(element) {
		this.private.element = element;
	}
}

function getClasses(el) {
	if (!isElement(el)) { return; }
	let classes = {};
	if (isString(el.className)) {
		let list = el.className.split(' ');
		if (isArray(list)) {
			list.forEach((name) => {
				classes[name] = true;
			});
		}
	}
	return classes;
}

class ElementClassAction extends ElementAction {
	constructor(element, className) {
		super(element);
		this.element = element;
		this.private.classes = className.split(' ');
	}
	add() {
		let existing = (getClasses(this.element) || {});
		this.private.classes.forEach((name) => {
			existing[name] = true;
		});
		this.element.className = Object.keys(existing).join(' ');
		return existing;
	}
	remove() {
		let existing = (getClasses(this.element) || {});
		this.private.classes.forEach((name) => {
			delete existing[name];
		});
		this.element.className = Object.keys(existing).join(' ');
		return existing;
	}
	toggle() {
		let existing = (getClasses(this.element) || {});
		this.private.classes.forEach((name) => {
			if (existing[name]) {
				delete existing[name];
				return;
			}
			existing[name] = true;
		});
		this.element.className = Object.keys(existing).join(' ');
		return existing;
	}
	exists() {
		let existing = (getClasses(this.element) || {});
		let classes = this.private.classes;
		let count = classes.length;
		for (let i = 0; i < count; i++) {
			let name = classes[i];
			if (!existing[name]) {
				return false;
			}
		}
		return true; 
	}
}

function _string$10(name) {
	if (isEmptyString(name)) { return; }
	return new ElementClassAction(this.element, name);
}

function _path$8() {
	return _string$10.apply(this, arguments);
}

function _undefined$3() {
	return getClasses(this.element);
}

let Class = {
	array: _array$10,
	object: _object$5,
	string: _string$10,
	path: _path$8,
	undefined: _undefined$3
};

//constructor & destructor
//handlers
//classes
const identity = new Identity({
	class: 'Element',
	major: 1, minor: 0, patch: 0
});

class Element$1 extends Styleable {
	constructor(tag){
		super(tag);
		constructor$3.call(this, tag);
		this.identity = identity;
		this.on('Style.contextChanged', () => {
			//if not default, change the context of the child elements
			let context = this.Style.context;
			this.children((child) => {
				//allow context to only change once
				let childStyle = child.Style;
				childStyle.context = (childStyle.context === 'default' ? context : childStyle.context);
			});			
		});
	}
	get identity() {
		return super.identity;
	}
	set identity(identity) {
		super.identity = identity;
		if (identity.namespace) {
			addClass(this.element, identity.namespace);
		}
		// else {} throw error here later
		if (identity.class) {
			addClass(this.element, identity.class);
		}
		// else {} also throw one here later
	}
	add(item) {
		let type = getHandledType$1(item);
		let action = Add[type];
		return (action || super.add || unhandled).call(this, item);
	}
	addTo(item) {
		let type = getHandledType$1(item);
		let action = AddTo[type];
		return (action || unhandled).call(this, item);
	}
	remove(item) {
		let type = getHandledType$1(item);
		let action = Remove[type];
		return (action || unhandled).call(this, item);
	}
	on(event, method) {
		let type = getHandledType$1(event);
		let action = On[type];
		return (action || unhandled).call(this, event, method);
	}
	trigger(event, args) {
		let type = getHandledType$1(event);
		let action = Trigger[type];
		super.trigger(event, args);
		return (action || unhandled).call(this, event, args);
	}
	find(what) {
		let type = getHandledType$1(what);
		let action = Find[type];
		return (action || unhandled([])).call(this, what);
	}
	with(method) {
		let type = getHandledType$1(method);
		let action = With[type];
		return (action || unhandled).call(this, method);
	}
	do(method, args) {
		let type = getHandledType$1(method);
		let action = Do[type];
		return (action || unhandled).call(this, method, args);
	}
	get(property) {
		let type = getHandledType$1(property);
		let action = Get[type];
		return (action || unhandled).call(this, property);
	}
	set(property, value) {
		let type = getHandledType$1(property);
		let action = Set[type];
		return (action || unhandled).call(this, property, value);
	}
	text(text) {
		let type = getHandledType$1(text);
		let action = Text[type];
		return (action || unhandled).call(this, text);
	}
	attribute(name, value) {
		if (!isElement(this.element) || isEmptyString(name)) { return; }
		let type = getHandledType$1(name);
		let isSet = (arguments.length > 1);
		let action = Attribute[(isSet ? 'Set' : 'Get')][type];
		return (action || unhandled).apply(this, [name, value]);
	}
	class(name) {
		let type = getHandledType$1(name);
		let action = Class[type];
		return (action || unhandled).call(this, name);
	}
	children(callback) {
		let results = [];
		if (isFunction$1(callback) && self.private && self.private.children){
			let children = self.private.children;
			Object.keys(children).forEach((id) => {
				let child = children[id];
				if (child){
					results.push(callback(child, id));
				}
			});
		}
		return results;
	}
	destructor() {
		destructor$1.call(this);
	}
}

function isJSUI(u) {
	return (u instanceof Element$1);
}

let tags = [
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
];

let Natives = {};
tags.forEach((tag) => {
	Natives[tag] = true;
});

function isNativeTag(u) {
	return !!Natives[u];
}

function isTextNode(u) {
	return !!(u && u.nodeName === "#text");
}

function constructor$4() {
	Object.defineProperty(this, '$private', {
		configurable:true,
		enumerable:false,
		writable: true,
		value: {
			events: {},
			hooks: {},
			state: {}
		}
	});
	Object.defineProperty(this, '$uid', {
		configurable:true,
		enumerable:false,
		writable: true,
		value: uid()
	});
}

class Data {
	constructor() {
		constructor$4.call(this);
	}
}

function $define(name, value) {
	Object.defineProperty(Data.prototype, name, {
		configurable:true,
		enumerable:false,
		writable: true,
		value: value
	});
}

$define('$on', function $on(name, method) {
	if (isString(name) && isFunction$1(method)) {
		let events = this.$private.events;
		let hooks = this.$private.hooks;
		let pool = events[name];
		let self = this;
		if (!pool){
			events[name] = {};
			pool = events[name];
			function hook() {
				let args = arguments;
				Object.keys(pool).forEach(function(id) {
					let method = pool[id];
					method.apply(self, args);
				});
			}
			hooks[name] = hook;
		}
		if (isFunction$1(method)){
			let eid = uid();
			pool[eid] = method;
		}
		let handle = {
			id: eid,
			pool: pool,
			remove: remove,
			removeAll: removeAll
		};
		return handle;
	}
});
$define('$trigger', function $trigger(event, args) {
	let hooks = this.$private.hooks;
	let hook = hooks[event];
	if (isFunction$1(hook)) {
		hook(args);
	}
});
$define('$destructor', function $destructor() {
	for (let key in this) {
		delete this[key];
	}
});
$define('$bind', function $bind(event) {

});

function isData(u) {
	return (u instanceof Data);
}

function isUData(u) {
	return !!(u && u.prototype  && (u.prototype instanceof Data || u === Data));
}

let TypeChecks = {
	isArray: isArray,
	isElement: isElement,
	isEmptyString: isEmptyString,
	isFunction: isFunction$1,
	isHTML: isHTML,
	isJSUI: isJSUI,
	isNativeTag: isNativeTag,
	isNull: isNull,
	isNumber: isNumber,
	isObject: isObject,
	isPath: isPath,
	isRegex: isRegex,
	isString: isString,
	isStyleSheetRule: isStyleSheetRule,
	isTextNode: isTextNode,
	isUJSUI: isUJSUI,
	isUndefined: isUndefined,
	isUStyleSheetRule: isUStyleSheetRule,
	isData: isData,
	isUData: isUData
};

function _string$11(command, args) {
	let results = [];
	this.forEach((item) => {
		if (isFunction$1(item[command])) {
			results.push(item[command].apply(item, args));
			return;
		}
		results.push(undefined);
	});
	return results;	
}

function _path$9(command, args) {
	//WIP
}

let DoToEach = {
	string: _string$11,
	path: _path$9
};

class Collection extends Array {
	constructor(target) {
		super();
		if (isArray(target)) {
			target.forEach((item) => {
				this.push(item);
			});
		}
	}
	doToEach(method, args) {
		let type = getHandledType$1(method);
		let action = DoToEach[type];
		return (action || unhandled).call(this, method, args);
	}
}

class ElementCollection extends Collection {
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
	class() {
		return this.doToEach('class', arguments);
	}
	children() {
		return this.doToEach('children', arguments);
	}
	destructor() {
		return this.doToEach('destructor', arguments);
	}
}

function constructor$5() {
	constructor.apply(this, arguments);
	constructor$1.apply(this, arguments);
	constructor$2.apply(this, arguments);
	constructor$3.apply(this, arguments);
}

/*
	Code Pulled/Modified From: http://stackoverflow.com/questions/19669849/is-there-a-javascript-library-to-slugify-strings-into-valid-css-class-names
	Answer By: sqykly
*/
function cleanName(dirty) {
    let cleaned = dirty.replace(/^[^-_a-zA-Z]+/, '_').replace(/^-(?:[-0-9]+)/, '_');
    let result = cleaned && cleaned.replace(/[^-_a-zA-Z0-9]+/g, '_');
    return result;
}

function feval(code) {
	return (new Function(code))();
}

var classCreate = (function create(name, tag, inherits, constructor) {
	name = cleanName(name);
	tag = tag.toLowerCase();
	let inherit = (inherits || Element$1);
	let construct = (constructor || constructor$5);
	let identity = new Identity({
		class: name,
		major: 1, minor: 0, patch: 0
	});
	let src = `
		return (function(element, constructor, identity) {
			function ${name}() {
				constructor.call(this, '${tag}');
				this.identity = identity;
			}
			${name}.prototype = Object.create(element.prototype);
			${name}.constructor = ${name};
			return ${name};					
		})
	`;
	return feval.call(window, src)(inherit, construct, identity);
});

function capitalize(text){
	return text.charAt(0).toUpperCase() + text.slice(1);
}

let Elements = {};
tags.forEach((tag) => {
	let name = capitalize(tag);
	try {
		Elements[name] = classCreate(name, tag);
	} catch(e) {
		Elements[name] = classCreate(tag, tag);
	}
});

const identity$9 = new Identity({
	class: 'StyleVariables',
	major: 1, minor: 0, patch: 0
});

class StyleVariables extends Distinct {
	constructor() {
		super();
		this.identity = identity$9;
	}
	add(name, value) {
		if (isString(name)) {
			add(this, name, value);
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

let Classes = {
	Behavior: Behavior,
	Collection: Collection,
	Distinct: Distinct,
	ElementAction: ElementAction,
	ElementClassAction: ElementClassAction,
	Element: Element$1,
	ElementCollection: ElementCollection,
	Extensible: Extensible,
	JSUIError: JSUIError,
	Styleable: Styleable,
	StyleInline: StyleInline,
	StyleRules: StyleRules,
	StyleSheet: StyleSheet,
	StyleSheetRule: StyleSheetRule,
	StyleVariables: StyleVariables,
	Data: Data,
	Identity: Identity
};

let Constants = {
	CSS: {
		equivalents: equivalents,
		vendors: vendors
	},
	HTML: {
		tags: tags
	}
};

let Singletons = {
	Style: {
		Sheets: Sheets$1
	}
};

function placeholder$1(){}
function childNodes(node, callback) {
	if (!isFunction$1(callback)) {
		callback = placeholder$1;
	}
	if (!isElement(node)) {
		return;
	}
	let children = [];
	let count = node.childNodes.length;
	for (let i = 0; i < count; i++) {
		let child = node.childNodes[i];
		children.push(child);
		if (callback(child)) {break; }
	}
	return children;
}

function getFirstNonTextChild(node) {
	if (isElement(node)) {
		let root;
		childNodes(node, (child) => {
			if (!isTextNode(child)) {
				root = child;
				return true;
			}			
		});
		return root;
	}
}

function getTextNodes(el, stopAtFirst){
	let nodes = [];
	for (let i = 0; i < el.childNodes.length; i++) {
		let node = el.childNodes[i];
		if (isTextNode(node)) {
			nodes.push(node);
			if (stopAtFirst) {
				break;
			}
		}
	}
	return nodes;
}

function debounce(fn, time) {
	if (isFunction$1(fn)) {
		let dbcTimer;
		return function() {
			clearTimeout(dbcTimer);
			dbcTimer = setTimeout(fn, time);
		};
	}
}

function doOrSet(obj, prop, value) {
	if (obj.hasOwnProperty(prop)) {
		if (isFunction$1(obj[prop])) {
			obj[prop].apply(obj, value);
			return true;
		}
		obj[prop] = value;
		return true;
	}
	return false;
}

let ObjectPrototype = Object.getPrototypeOf({});
function getAll(obj) {
	//code modified from airportyh, http://stackoverflow.com/questions/8024149/is-it-possible-to-get-the-non-enumerable-inherited-property-names-of-an-object
	let props = [];
	do {
		Object.getOwnPropertyNames(obj).forEach(function(prop) {
			if (props.indexOf(prop) === -1) {
				props.push(prop);
			}
		});
	} while ((obj = Object.getPrototypeOf(obj)) && obj !== ObjectPrototype);
	return props;
}

//Elements
//Events
//Functions
//General
//Paths
//Properties
//Strings
let Utilities = {
	Elements: {
		addClass: addClass,
		getClasses: getClasses,
		childNodes: childNodes,
		getFirstNonTextChild: getFirstNonTextChild,
		getTagName: getTagName,
		getTextNodes: getTextNodes,
		nodeAttributes: nodeAttributes
	},
	Events: {
		on: on,
		remove: remove,
		removeAll: removeAll
	},
	Functions: {
		debounce: debounce
	},
	General: {
		uid: uid
	},
	Paths: {
		get: get,
		getter: getter,
		set: set,
		setter: setter,
		getWithContext: getWithContext
	},
	Properties: {
		add: add,
		doOrSet: doOrSet,
		getAll: getAll
	},
	Strings: {
		capitalize: capitalize,
		uncapitalize: uncapitalize
	}
};

let Sorts = {
	StyleSheet: {
		rules: rules
	}
};

function subconstructor(name, namespace, Subclasses) {
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

function create$1(name, json, namespace) {
	name = cleanName(name);
	namespace = (namespace || name);
	let Subclasses = {};
	let src = `
		return (function(name, namespace, structure, Data, Subclasses, constructor, subconstructor) {
			function ${name}() {
				constructor.call(this);
				subconstructor.call(this, name, namespace, Subclasses);
			}
			${name}.prototype = Object.create(Data.prototype);
			${name}.constructor = ${name};
			${name}.prototype.toJSON = function toJSON() {
				let self = this;
				let copy = {};
				Object.keys(structure).forEach(function(key) {
					console.log(key)
					copy[key] = self[key];
				});
				console.log(copy);
				return copy;
			};
			return ${name};
		})
	`;
	let DataClass = feval.call(window, src)(name, namespace, json, Data, Subclasses, constructor$4, subconstructor);
	Object.keys(json).forEach((key) => {
		let value = json[key];
		if (isObject(value)) {
			Subclasses[key] = create$1(key, value, `${name}.${key}`);
			return;
		}
		Object.defineProperty(DataClass.prototype, key, {
			get:function() {
				let state = this.$private.state;
				if (!state.hasOwnProperty(key)) {
					return value;
				}
				return this.$private.state[key];
			},
			set:function(v) {
				let state = this.$private.state;
				if (state) {
					let old = state[key];
					state[key] = v;
					if (old !== v){

						let data = {
							owner: this,
							property: key,
							old: old,
							new: v
						};

						let trigger = state.$trigger;
						if (!trigger) {
							trigger = this.$trigger.bind(this);
							state.$trigger = trigger;
						}
						
						if (trigger){
							trigger(`${key}Changed`, data);
							trigger('Changed', data);
						}
					}
					return;				
				}
			},
			configurable:true,
			enumerable:true
		});
	});
	return DataClass;
}

function onParsedElementChanged(ev) {
	let data = (ev ? ev.detail : false);
	if (data) {
		let owner = data.owner;
		let attribute = data.property;
		let value = data.new;
		if (owner && owner.element && isFunction$1(owner.element.getAttribute)) {
			owner.element.getAttribute(attribute, (isObject(value) ? JSON.stringify(value) : value));
		}							
	}
}

function _default(node, classes, container) {
	let tag = getTagName(node);
	let type = tag.split('-').reduce(getter, classes);
	if (!type) {
		//WARN
		return undefined;
	}
	let instance = new type();
	let attributes = node.attributes;
	let isNative = isNativeTag(tag);
	for (let i = attributes.length - 1; i >= 0; i--) {
		let attribute = attributes[i];
		let name = attribute.name;
		let value = attribute.value;
		instance.element.setAttribute(name, value);
		if (instance.hasOwnProperty(name)) {
			doOrSet(instance, name, value);
			continue;
		}
		instance.add(name);
		instance.on(`${name}Changed`, onParsedElementChanged);
		instance[name] = value;
	}
	let textNodes = [];
	childNodes(node, (child) => {
		if (isTextNode(child)) {
			let node = document.createTextNode("");
			instance.element.appendChild(node);
			instance.private.text = node;
			textNodes.push({node:node, value:child.nodeValue});
			return;
		}
		let as = child.getAttribute('as');
		let handle = instance.add(_default(child, classes));
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
}

function htmlToInstructions(node, classes, state) {
	let isRoot = false;
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
	let tag = getTagName(node);
	let directory = state.map[tag];
	let alias;
	if (!directory) {
		let type = tag.split('-').reduce(getter, classes);
		if (!isUJSUI(type)) { return; }
		alias = 'element'+state.Counts.element;
		state.Counts.element++;
		directory = {
			type:type,
			alias:alias
		};
		state.map[tag] = directory;
		state.aliases[alias] = directory;
	}
	if (!alias) {alias = directory.alias}
	let as = node.getAttribute('as');
	let name = 'instance'+state.Counts.instance;
	state.Counts.instance++;
	let comments = "\t\/\/ "+(as || 'Anonymous Element');
	let instantiation = `\tlet ${name} = ` + (isRoot ? 'this' :  `new ${alias}();`);

	let assignments = [];
	let instructions = [];
	let texts = [];
	childNodes(node, (child) => {
		if (isTextNode(child)) {
			let textName = 'text'+state.Counts.text;
			instructions.push(`\tlet ${textName} = document.createTextNode('');`);
			instructions.push(`\t${name}.element.appendChild(${textName});`);
			assignments.push({
				name:textName,
				value:child.nodeValue
			});
			state.Counts.text++;
			return;
		}
		instructions.push('\n');
		let instruction = htmlToInstructions(child, classes, state);
		let childName = instruction.name;
		instructions.push(instruction.code);
		instructions.push('\n\t\/\/ Adding Children');
		instructions.push(`\t${name}.add(${childName})`+(as ? `.as('${as}')` : '')+';');
		instructions.push('\n\t\/\/ Text Node Assignments');
		texts.push(instruction.text);
		return;
	});
	//add the last text as primary
	let lastText = assignments[assignments.length - 1];
	let lastTextName = lastText.name;
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

function _class(node, classes, container) {
	let children = node.childNodes;
	let count = children.length;
	let root = getFirstNonTextChild(node);
	if (!root) { return; }
	let tag = getTagName(root);
	let name = (container.getAttribute('name') || 'Anonymous'+uid());
	let inherits = container.getAttribute('inherits');
	let asTag = (container.getAttribute('tag') || tag);
	let parent;
	if (inherits) {
		parent = inherits.split('-').reduce(getter, classes);
	}
	parent = (parent || element);
	let instruction = htmlToInstructions(root, classes);
	let aliases = Object.keys(instruction.state.aliases);
	//build headers
	let header = ['\n\t\/\/ Imports'];
	aliases.forEach((alias) => {
		header.push(`\tlet ${alias} = classes.${alias}.type;`);
	});
	header.push('\n');
	//build text
	let texts = {};
	let textNodes = [];
	instruction.text.forEach((text) => {
		let name = text.name;
		let value = text.value;
		texts[name] = value;
		textNodes.push(`\t${name}.nodeValue = texts.${name};`);
	});
	let built = 
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
		`});`;
	let compiled = feval.call(window, built)(
		Element$1,
		constructor$3,
		instruction.state.aliases,
		texts,
		parent
	);
	return compiled;
}

let Tag = {
	default: _default,
	class: _class
};

function parse(html, classes) {
	let container;
	if (isString(html)) {
		container = document.createElement('container');
		container.innerHTML = html;				
	}
	if (isElement(html)) {
		container = html;
	}
	if (!container) { return; }
	let root = getFirstNonTextChild(container);
	let tag = getTagName(root);
	let parser = Tag[tag];
	return (parser || Tag.default).call(this, root, (classes || Elements), root);
}

let Reflection = {
	Class: {
		create: classCreate
	},
	XML: {
		parse: parse
	},
	Data: {
		create: create$1
	},
	feval: feval
};

let Data$2 = {
	fromJSON: create$1
};

let JSUI = {
	Settings: defaults,
	Behavior: Classes.Behavior,
	Element: Classes.Element,
	Identity: Classes.Identity,
	Elements: Elements,
	Style: {
		Sheet: Classes.StyleSheet,
		Rule: Classes.StyleSheetRule,
		Inline: Classes.StyleInline,
		Sheets: Singletons.Style.Sheets
	},
	Classes: Classes,
	Constants: Constants,
	Singletons: Singletons,
	TypeChecks: TypeChecks,
	Utilities: Utilities,
	Sorts: Sorts,
	Reflection: Reflection,
	Data: Data$2
};

window.JSUI = JSUI;

return JSUI;

}());

//# sourceMappingURL=JSUI.ES6.js.map
