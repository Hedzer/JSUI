(function () {
'use strict';

function isArray$1(u) {
	return Array.isArray(u);
}

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

describe("Framework/TypeChecks/isArray", function () {
	it("should return false if argument is a function", function () {
		expect(isArray$1(function () {})).toBe(false);
	});
	it("should return false if argument is an arrow function", function () {
		expect(isArray$1(function () {})).toBe(false);
	});
	it("should return false if argument is a class", function () {
		expect(isArray$1(function A() {
			classCallCheck(this, A);
		})).toBe(false);
	});
	it("should return false if argument is a string", function () {
		expect(isArray$1("")).toBe(false);
	});
	it("should return false if argument is a number = 1", function () {
		expect(isArray$1(1)).toBe(false);
	});
	it("should return false if argument is a number = 0", function () {
		expect(isArray$1(0)).toBe(false);
	});
	it("should return false if argument is a number = NaN", function () {
		expect(isArray$1(NaN)).toBe(false);
	});
	it("should return false if argument is a number = Infinity", function () {
		expect(isArray$1(Infinity)).toBe(false);
	});
	it("should return false if argument is a number = -Infinity", function () {
		expect(isArray$1(-Infinity)).toBe(false);
	});
	it("should return false if argument is a number = -1", function () {
		expect(isArray$1(-1)).toBe(false);
	});
	it("should return false if argument is object", function () {
		expect(isArray$1({})).toBe(false);
	});
	it("should return true if argument is array", function () {
		expect(isArray$1([])).toBe(true);
	});
	it("should return false if argument is null", function () {
		expect(isArray$1(null)).toBe(false);
	});
	it("should return false if argument is undefined", function () {
		expect(isArray$1(undefined)).toBe(false);
	});
	it("should return false if argument is boolean/false", function () {
		expect(isArray$1(false)).toBe(false);
	});
	it("should return false if argument is boolean/true", function () {
		expect(isArray$1(true)).toBe(false);
	});
});

function isElement$1(u) {
	return u instanceof Element;
}

describe("Framework/TypeChecks/isElement", function () {
	it("should return true if argument is a DOM element", function () {
		expect(isElement$1(document.createElement('div'))).toBe(true);
	});
	it("should return false if argument is a function", function () {
		expect(isElement$1(function () {})).toBe(false);
	});
	it("should return false if argument is an arrow function", function () {
		expect(isElement$1(function () {})).toBe(false);
	});
	it("should return false if argument is a class", function () {
		expect(isElement$1(function A() {
			classCallCheck(this, A);
		})).toBe(false);
	});
	it("should return false if argument is a string", function () {
		expect(isElement$1("")).toBe(false);
	});
	it("should return false if argument is a number = 1", function () {
		expect(isElement$1(1)).toBe(false);
	});
	it("should return false if argument is a number = 0", function () {
		expect(isElement$1(0)).toBe(false);
	});
	it("should return false if argument is a number = NaN", function () {
		expect(isElement$1(NaN)).toBe(false);
	});
	it("should return false if argument is a number = Infinity", function () {
		expect(isElement$1(Infinity)).toBe(false);
	});
	it("should return false if argument is a number = -Infinity", function () {
		expect(isElement$1(-Infinity)).toBe(false);
	});
	it("should return false if argument is a number = -1", function () {
		expect(isElement$1(-1)).toBe(false);
	});
	it("should return false if argument is object", function () {
		expect(isElement$1({})).toBe(false);
	});
	it("should return false if argument is array", function () {
		expect(isElement$1([])).toBe(false);
	});
	it("should return false if argument is null", function () {
		expect(isElement$1(null)).toBe(false);
	});
	it("should return false if argument is undefined", function () {
		expect(isElement$1(undefined)).toBe(false);
	});
	it("should return false if argument is boolean/false", function () {
		expect(isElement$1(false)).toBe(false);
	});
	it("should return false if argument is boolean/true", function () {
		expect(isElement$1(true)).toBe(false);
	});
});

function isEmptyString$1(u) {
	return u === "";
}

describe("Framework/TypeChecks/isEmptyString", function () {
	//TRUE
	it("should return true if argument is an empty string", function () {
		expect(isEmptyString$1("")).toBe(true);
	});
	//FALSE
	it("should return false if argument is a function", function () {
		expect(isEmptyString$1(function () {})).toBe(false);
	});
	it("should return false if argument is an arrow function", function () {
		expect(isEmptyString$1(function () {})).toBe(false);
	});
	it("should return false if argument is a class", function () {
		expect(isEmptyString$1(function A() {
			classCallCheck(this, A);
		})).toBe(false);
	});
	it("should return false if argument is a string with a value of '0'", function () {
		expect(isEmptyString$1("0")).toBe(false);
	});
	it("should return false if argument is a string with a value of '1'", function () {
		expect(isEmptyString$1("1")).toBe(false);
	});
	it("should return false if argument is a number = 1", function () {
		expect(isEmptyString$1(1)).toBe(false);
	});
	it("should return false if argument is a number = 0", function () {
		expect(isEmptyString$1(0)).toBe(false);
	});
	it("should return false if argument is a number = NaN", function () {
		expect(isEmptyString$1(NaN)).toBe(false);
	});
	it("should return false if argument is a number = Infinity", function () {
		expect(isEmptyString$1(Infinity)).toBe(false);
	});
	it("should return false if argument is a number = -Infinity", function () {
		expect(isEmptyString$1(-Infinity)).toBe(false);
	});
	it("should return false if argument is a number = -1", function () {
		expect(isEmptyString$1(-1)).toBe(false);
	});
	it("should return false if argument is object", function () {
		expect(isEmptyString$1({})).toBe(false);
	});
	it("should return false if argument is array", function () {
		expect(isEmptyString$1([])).toBe(false);
	});
	it("should return false if argument is null", function () {
		expect(isEmptyString$1(null)).toBe(false);
	});
	it("should return false if argument is undefined", function () {
		expect(isEmptyString$1(undefined)).toBe(false);
	});
	it("should return false if argument is boolean/false", function () {
		expect(isEmptyString$1(false)).toBe(false);
	});
	it("should return false if argument is boolean/true", function () {
		expect(isEmptyString$1(true)).toBe(false);
	});
});

function isFunction$1(u) {
	return typeof u === 'function';
}

describe("Framework/TypeChecks/isFunction", function () {
	it("should return true if argument is a function", function () {
		expect(isFunction$1(function () {})).toBe(true);
	});
	it("should return true if argument is an arrow function", function () {
		expect(isFunction$1(function () {})).toBe(true);
	});
	it("should return true if argument is a class", function () {
		expect(isFunction$1(function A() {
			classCallCheck(this, A);
		})).toBe(true);
	});
	it("should return false if argument is a string", function () {
		expect(isFunction$1("")).toBe(false);
	});
	it("should return false if argument is a number = 1", function () {
		expect(isFunction$1(1)).toBe(false);
	});
	it("should return false if argument is a number = 0", function () {
		expect(isFunction$1(0)).toBe(false);
	});
	it("should return false if argument is a number = NaN", function () {
		expect(isFunction$1(NaN)).toBe(false);
	});
	it("should return false if argument is a number = Infinity", function () {
		expect(isFunction$1(Infinity)).toBe(false);
	});
	it("should return false if argument is a number = -Infinity", function () {
		expect(isFunction$1(-Infinity)).toBe(false);
	});
	it("should return false if argument is a number = -1", function () {
		expect(isFunction$1(-1)).toBe(false);
	});
	it("should return false if argument is object", function () {
		expect(isFunction$1({})).toBe(false);
	});
	it("should return false if argument is array", function () {
		expect(isFunction$1([])).toBe(false);
	});
	it("should return false if argument is null", function () {
		expect(isFunction$1(null)).toBe(false);
	});
	it("should return false if argument is undefined", function () {
		expect(isFunction$1(undefined)).toBe(false);
	});
	it("should return false if argument is boolean/false", function () {
		expect(isFunction$1(false)).toBe(false);
	});
	it("should return false if argument is boolean/true", function () {
		expect(isFunction$1(true)).toBe(false);
	});
});

var htmlRegex = /^<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)$/;
function isHTML$1(u) {
	return htmlRegex.test(u);
}

describe("Framework/TypeChecks/isHTML", function () {
	//TRUE
	it("should return true if argument is an HTML string", function () {
		expect(isHTML$1("<div></div>")).toBe(true);
	});
	//FALSE
	it("should return false if argument is a function", function () {
		expect(isHTML$1(function () {})).toBe(false);
	});
	it("should return false if argument is an arrow function", function () {
		expect(isHTML$1(function () {})).toBe(false);
	});
	it("should return false if argument is a class", function () {
		expect(isHTML$1(function A() {
			classCallCheck(this, A);
		})).toBe(false);
	});
	it("should return false if argument is a string", function () {
		expect(isHTML$1("")).toBe(false);
	});
	it("should return false if argument is a valid HTML string", function () {
		expect(isHTML$1("<div>")).toBe(false);
	});
	it("should return false if argument is a number = 1", function () {
		expect(isHTML$1(1)).toBe(false);
	});
	it("should return false if argument is a number = 0", function () {
		expect(isHTML$1(0)).toBe(false);
	});
	it("should return false if argument is a number = NaN", function () {
		expect(isHTML$1(NaN)).toBe(false);
	});
	it("should return false if argument is a number = Infinity", function () {
		expect(isHTML$1(Infinity)).toBe(false);
	});
	it("should return false if argument is a number = -Infinity", function () {
		expect(isHTML$1(-Infinity)).toBe(false);
	});
	it("should return false if argument is a number = -1", function () {
		expect(isHTML$1(-1)).toBe(false);
	});
	it("should return false if argument is object", function () {
		expect(isHTML$1({})).toBe(false);
	});
	it("should return false if argument is array", function () {
		expect(isHTML$1([])).toBe(false);
	});
	it("should return false if argument is null", function () {
		expect(isHTML$1(null)).toBe(false);
	});
	it("should return false if argument is undefined", function () {
		expect(isHTML$1(undefined)).toBe(false);
	});
	it("should return false if argument is boolean = false", function () {
		expect(isHTML$1(false)).toBe(false);
	});
	it("should return false if argument is boolean = true", function () {
		expect(isHTML$1(true)).toBe(false);
	});
});

function isNull(u) {
	return u === null;
}

function isJSUI$1(u) {
	return u instanceof Element$1;
}

function isRegex(u) {
	return u instanceof RegExp;
}

function isPath(u) {
	return typeof u === 'string' && u.length > 0 && u[0] === '@';
}

var Types = {
	object: {
		null: isNull,
		array: isArray$1,
		element: isElement$1,
		jsui: isJSUI$1,
		regex: isRegex
	},
	string: {
		html: isHTML$1,
		path: isPath
	}
};

var getHandledType = (function getHandledType(u) {
	var type = typeof u === 'undefined' ? 'undefined' : _typeof(u);
	var subtypes = Types[type];
	if (!subtypes) {
		return type;
	}
	for (var name in subtypes) {
		var subtype = subtypes[name];
		if (subtype(u)) {
			return name;
		}
	}
	return type;
});

function unhandled(args) {
  return args;
}

function add(host, name, defaultValue) {
	var value = defaultValue;
	Object.defineProperty(host, name, {
		get: function get() {
			return value;
		},
		set: function set(v) {
			var old = value;
			value = v;
			if (old !== v) {
				var data = {
					owner: this,
					property: name,
					old: old,
					new: value
				};
				var trigger = (this.trigger || this.$trigger).bind(this);
				if (trigger) {
					trigger(name + 'Changed', data);
					trigger('Changed', data);
				}
			}
		},
		configurable: true,
		enumerable: true
	});
}

function addClass(el, name) {
	if (!name || !isElement$1(el)) {
		return;
	}
	if (el.classList && el.classList.add) {
		el.classList.add(name);
		return;
	}
	var classes = el.className.split(' ');
	if (~classes.indexOf(name)) {
		return;
	}
	classes.push(name);
	el.className = classes.join(' ');
}

var defaults$1 = {
	Development: {
		enabled: false,
		traceErrors: true,
		haltOnErrors: true,
		references: true
	},
	Production: {}
};

function isObject(u) {
	return (typeof u === 'undefined' ? 'undefined' : _typeof(u)) === 'object';
}

function isString(u) {
	return typeof u === 'string';
}

var vendors = ['webkit', 'moz', 'ms', 'o'];

function uncapitalize(text) {
	return text.charAt(0).toLowerCase() + text.slice(1);
}

//not a real constant, since it is generated
var equivalents = {};
var example = document.createElement('div');
for (var key in example.style) {
	try {
		example.style[key] = 'inherit';
		var name = (example.getAttribute('style') || '').split(':')[0];
		equivalents[key] = name;
		example.setAttribute('style', '');
		vendors.forEach(function (vendor) {
			var prefix = '-' + vendor + '-';
			if (~name.indexOf(prefix)) {
				var w3cKey = key;
				w3cKey = uncapitalize(w3cKey.replace(vendor, ''));
				equivalents[w3cKey] = name;
				equivalents[name.replace(prefix, '')] = name;
			}
		});
	} catch (e) {}
}

function remove() {
	delete this.pool[this.id];
}

function removeAll() {
	var _this = this;

	Object.keys(this.pool).forEach(function (eid) {
		delete _this.pool[eid];
	});
}

var prefix = '';
var current = 0;
var max = Number.MAX_SAFE_INTEGER - 1;
function uid() {
	if (current > max) {
		prefix += current;
		current = 0;
	}
	return prefix + current++;
}

var Extensible = function () {
	function Extensible() {
		classCallCheck(this, Extensible);

		this.private = {
			events: {},
			hooks: {}
		};
	}

	createClass(Extensible, [{
		key: 'add',
		value: function add$$(item, value) {
			var _this = this;

			if (isString(item)) {
				add(this, item);
				return;
			}
			if (isArray$1(item)) {
				item.forEach(function (key) {
					_this.add(key, value);
				});
				return;
			}
			if (isObject(item)) {
				Object.keys(item).forEach(function (key) {
					_this.add(key, item[key]);
				});
			}
		}
	}, {
		key: 'remove',
		value: function remove(item) {
			var _this2 = this;

			if (isString(item)) {
				delete this[item];
				return;
			}
			if (isArray$1(item)) {
				item.forEach(function (value) {
					_this2.remove(value);
				});
			}
		}
	}, {
		key: 'on',
		value: function on(name, method) {
			if (isString(name) && isFunction$1(method)) {
				var events = this.private.events;
				var hooks = this.private.hooks;
				var pool = events[name];
				var self = this;
				if (!pool) {
					var hook = function hook() {
						var args = arguments;
						Object.keys(pool).forEach(function (id) {
							var method = pool[id];
							method.apply(self, args);
						});
					};

					events[name] = {};
					pool = events[name];
					;
					hooks[name] = hook;
				}
				if (typeof method === 'function') {
					var eid = uid();
					pool[eid] = method;
				}
				var handle = {
					id: eid,
					pool: pool,
					remove: remove,
					removeAll: removeAll
				};
				return handle;
			}
		}
	}, {
		key: 'trigger',
		value: function trigger(event, args) {
			var hooks = this.private.hooks;
			var hook = hooks[event];
			if (isFunction$1(hook)) {
				hook(args);
			}
		}
	}, {
		key: 'destructor',
		value: function destructor() {
			for (var key in this) {
				delete this[key];
			}
		}
	}]);
	return Extensible;
}();

var Distinct = function (_Extensible) {
	inherits(Distinct, _Extensible);

	function Distinct() {
		classCallCheck(this, Distinct);

		var _this = possibleConstructorReturn(this, Object.getPrototypeOf(Distinct).call(this));

		_this.uid = uid();
		return _this;
	}

	return Distinct;
}(Extensible);

var StyleRules = function (_Distinct) {
	inherits(StyleRules, _Distinct);

	function StyleRules() {
		classCallCheck(this, StyleRules);

		var _this = possibleConstructorReturn(this, Object.getPrototypeOf(StyleRules).call(this));

		_this.private.styles = {};
		return _this;
	}

	return StyleRules;
}(Distinct);

//add all the style keys as properties


Object.keys(equivalents).forEach(function (key) {
	Object.defineProperty(StyleRules.prototype, key, {
		get: function get() {
			return this.private.styles[key];
		},
		set: function set(value) {
			var old = this.private.styles[key];
			this.private.styles[key] = value;
			if (isNull(value)) {
				delete this.private.styles[key];
			}
			if (old !== value) {
				var data = {
					owner: this,
					property: key,
					old: old,
					new: value
				};
				if (this.trigger) {
					this.trigger(key + 'Changed', data);
					this.trigger('styleChanged', data);
				}
			}
		},
		configurable: true,
		enumerable: true
	});
});

var StyleInline = function (_StyleRules) {
	inherits(StyleInline, _StyleRules);

	function StyleInline(host) {
		classCallCheck(this, StyleInline);

		var _this = possibleConstructorReturn(this, Object.getPrototypeOf(StyleInline).call(this));

		_this.private.host = host || false;
		_this.on('styleChanged', function (ev) {
			if (_this.private.host && ev.property) {
				_this.private.host.element.style[ev.property] = ev.new;
			}
		});
		return _this;
	}

	createClass(StyleInline, [{
		key: 'set',
		value: function set(name, value) {
			var _this2 = this;

			if (isObject(name)) {
				Object.keys(name).forEach(function (key) {
					var value = name[key];
					_this2[key] = value;
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
	}, {
		key: 'host',
		get: function get() {
			return this.private.host;
		},
		set: function set(element) {
			if (isJSUI$1(element)) {
				this.private.host = element.element;
			}
		}
	}]);
	return StyleInline;
}(StyleRules);

function getTagName(el) {
	if (isElement$1(el)) {
		return el.tagName.toLowerCase();
	}
	return 'none';
}

function _element(el) {
	this.element = el;
	return getTagName(el);
}

function _string$1(tag) {
	tag = tag || 'div';
	this.element = document.createElement(tag);
	return tag;
}

var Constructor = {
	element: _element,
	string: _string$1
};

function constructor(tag) {
	var _this = this;

	//select the proper constructor action
	var type = getHandledType(tag);
	var action = Constructor[type];
	tag = (action || function () {
		return Constructor.string.call(this, 'div');
	}).call(this, tag);

	//set up ids
	this.element.uid = this.uid;

	//add references 
	var development = defaults$1.Development;
	if (development.enabled && development.references) {
		this.element.JSUI = this;
	}

	//setup first type+event
	add(this, 'type');
	this.on('typeChanged', function (e) {
		if (e && e.detail && e.detail.new) {
			if (_this.element && e.detail.new) {
				var name = e.detail.new;
				if (!name) {
					return;
				}
				addClass(_this.element, name);
			}
		}
	});
	this.type = tag;

	//add styling capabilities
	this.style = new StyleInline(this);

	//signal that this class has been built
	this.trigger('constructed');
	return this;
}

var _destructor = (function destructor() {
	var _this = this;

	var _element = this.element;
	var _private = this.private;
	if (_element) {
		var parent = _element.parentNode;
		if (isFunction$1(_element.remove)) {
			_element.remove();
			return;
		}
		if (parent && isFunction$1(parent.removeChild)) {
			parent.removeChild(_element);
			return;
		}
	}
	var _style = this.style;
	if (_style && _style.Host) {
		delete _style.Host;
	}
	Object.keys(this).forEach(function (key) {
		delete _this[key];
	});
	var _parent = _private.parent;
	if (_parent) {
		if (_private && _private.mapped) {
			var map = _private.mapped[_parent.uid];
			if (map && isArray$1(map)) {
				map.forEach(function (name) {
					delete _parent[name];
				});
			}
		}
		if (_parent.children) {
			delete _parent.children[this.uid];
		}
	}
	var _children = _private.children;
	if (_children) {
		Object.keys(_children).forEach(function (key) {
			var child = _children[key];
			if (!child) {
				return;
			}
			if (isFunction$1(child.remove)) {
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

function _element$1(element) {
	if (this.element) {
		this.element.appendChild(element);
	}
}

function _jsui(instance) {
	if (this.element && instance.element) {
		this.element.appendChild(instance.element);
		this.private.children = this.private.children || {};
		this.private.children[instance.uid] = instance;
		instance.private.parent = this;
		instance.context = instance.context === 'default' ? this.context : instance.context;
	}
	var options = {
		as: function (name) {
			if (name) {
				this[name] = instance;
				instance.private.mapped = instance.private.mapped || {};
				var map = instance.private.mapped;
				map[this.uid] = map[this.uid] || [];
				map[this.uid].push(name);
				instance.attribute('as', name);
				addClass(instance.element, 'as-' + name);
			}
			return instance;
		}.bind(this)
	};
	return options;
}

function _array(collection) {
	var _this = this;

	var results = [];
	collection.forEach(function (item) {
		results.push(_this.add(item));
	});
	return results;
}

function _string$2(prop) {
	add(this, prop);
}

function _html(markup) {
	if (this.element && this.element.appendChild) {
		var fragment = document.createDocumentFragment();
		var root = document.createElement('div');
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
	return !!(u && u.prototype && (u.prototype instanceof Element$1 || u === Element$1));
}

function _function(method) {
	if (isUJSUI(method)) {
		return this.add(new method());
	}
}

var Add = {
	element: _element$1,
	jsui: _jsui,
	array: _array,
	string: _string$2,
	html: _html,
	path: _path,
	function: _function
};

function _element$2(element) {
	if (element) {
		element.appendChild(this.element);
	}
}

function _jsui$1(instance) {
	return instance.add(this);
}

function _array$1(collection) {
	var _this = this;

	var results = [];
	collection.forEach(function (item) {
		results.push(_this.addTo(item));
	});
	return results;
}

var AddTo = {
	element: _element$2,
	jsui: _jsui$1,
	array: _array$1
};

function _array$2(collection) {
	var _this = this;

	var results = [];
	collection.forEach(function (item) {
		results.push(_this.remove(item));
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

var Remove = {
	array: _array$2,
	jsui: _jsui$2,
	undefined: _undefined
};

function _array$3(collection, method) {
	var _this = this;

	var results = [];
	collection.forEach(function (item) {
		results.push(_this.on(item, method));
	});
	return results;
}

function _object(assignments) {
	var _this = this;

	var results = {};
	Object.keys(assignments).forEach(function (name) {
		var method = assignments[name];
		results[name] = _this.on(name, method);
	});
	return results;
}

function hook(pool) {
	var _this = this;

	var args = arguments;
	Object.keys(pool).forEach(function (id) {
		var method = pool[id];
		method.apply(_this, args);
	});
};

function on(name, method) {
	if (!isFunction$1(method)) {
		return;
	}
	var events = this.private.events;
	var pool = events[name];
	var self = this;
	if (!pool) {
		events[name] = {};
		pool = events[name];
		var dispatcher = hook.bind(this, pool);
		var element = this.element;
		if (isElement$1(element)) {
			element.addEventListener(name, dispatcher, false);
		}
	}
	if (isFunction$1(method)) {
		var eid = uid();
		pool[eid] = method;
	}
	var handle = {
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

var On = {
	array: _array$3,
	object: _object,
	string: _string$3,
	path: _path$1
};

function _array$4(collection, args) {
	var _this = this;

	var results = [];
	collection.forEach(function (item) {
		results.push(_this.trigger(item, args));
	});
	return results;
}

function _object$1(assignments) {
	var _this = this;

	Object.keys(assignments).forEach(function (name) {
		var args = assignments[name];
		_this.trigger(name, args);
	});
}

function _string$4(name, args) {
	if (!this.element) {
		return false;
	}
	var event = new CustomEvent(name, { "detail": args });
	this.element.dispatchEvent(event);
	return true;
}

function _path$2(name, args) {
	return _string$4.call(this, name, args);
}

var Trigger = {
	array: _array$4,
	object: _object$1,
	string: _string$4,
	path: _path$2
};

function _array$5(collection) {
	var _this = this;

	var results = [];
	collection.forEach(function (item) {
		results.push(_this.find(item));
	});
	return results;
}

function _function$1(method) {
	var results = [];
	var isJSUI = Element$1.isPrototypeOf(method.prototype);
	if (isJSUI) {
		var proto = method.prototype;
		this.children(function (child) {
			if (proto.isPrototypeOf(child)) {
				results.push(child);
			}
		});
	}
	return results;
}

function _jsui$3(proto) {
	var results = [];
	this.children(function (child) {
		if (child instanceof proto) {
			results.push(child);
		}
	});
	return results;
}

function _regex(expression) {
	var results = [];
	this.children(function (child) {
		if (child.element) {
			var element = child.element;
			var text = element.innerText || element.textContent || '';
			if (expression.test(text)) {
				results.push(child);
			}
		}
	});
	return results;
}

function _string$5(query) {
	var results = null;
	results = this.element.querySelectorAll(query);
	results = !results || results === null ? [] : results;
	return results;
}

function _path$3(query) {
	return _string$5.call(this, query);
}

function _undefined$1() {
	var results = [];
	this.children(function (child) {
		results.push(child);
	});
	return results;
}

var Find = {
	array: _array$5,
	function: _function$1,
	jsui: _jsui$3,
	regex: _regex,
	string: _string$5,
	path: _path$3,
	undefined: _undefined$1
};

function _array$6(collection) {
	var _this = this;

	var results = [];
	collection.forEach(function (item) {
		results.push(_this.with(item));
	});
	return results;
}

function _function$2(method) {
	method.call(this);
	return this;
}

var With = {
	array: _array$6,
	function: _function$2
};

function _array$7(collection) {
	var _this = this;

	var results = [];
	collection.forEach(function (item) {
		results.push(_this.do(item));
	});
	return results;
}

function _object$2(macro) {
	var _this = this;

	var results = {};
	Object.keys(macro).forEach(function (command) {
		results[command] = _this.do(command, macro[command]);
	});
	return results;
}

function _string$6(command, args) {
	if (isFunction$1(this[command])) {
		if (isArray$1(args)) {
			return this[command].apply(this, args);
		}
		return this[command](args);
	}
}

function getter(obj, prop) {
	if (!isObject(obj)) {
		return;
	}
	return obj[prop];
}

function get$1(obj, path) {
	if (isString(path)) {
		return path.substring(1).split('.').reduce(getter, obj);
	}
	if (isArray$1(path)) {
		return path.reduce(getter, obj);
	}
}

function getWithContext(obj, path) {
	var parts = path.substring(1).split('.');
	if (!parts.length) {
		return;
	}
	if (parts.length === 1) {
		return {
			context: obj,
			property: parts[0]
		};
	}
	var tail = parts.splice(parts.length - 1, 1);
	var reference = get$1(obj, parts);
	if (reference) {
		return {
			context: reference,
			property: tail[0]
		};
	}
	return false;
}

function _path$4(command, args) {
	var path = getWithContext(this, command);
	if (!path || !path.context || !path.property) {
		return;
	}
	var method = path.context[path.property];
	if (isFunction$1(method)) {
		if (isArray$1(args)) {
			return method.apply(path.context, args);
		}
		return method.call(path.context, args);
	}
}

var Do = {
	array: _array$7,
	object: _object$2,
	string: _string$6,
	path: _path$4
};

function _array$8(collection) {
	var _this = this;

	var results = [];
	collection.forEach(function (item) {
		results.push(_this.get(item));
	});
	return results;
}

function _string$7(property) {
	if (!property) {
		return;
	}
	if (!this.hasOwnProperty(property)) {
		return;
	}
	return this[property];
}

function _path$5(path) {
	return get$1(this, path);
}

var Get = {
	array: _array$8,
	string: _string$7,
	path: _path$5
};

function _object$3(assignments) {
	var _this = this;

	var results = {};
	Object.keys(assignments).forEach(function (command) {
		results[command] = _this.set(command, assignments[command]);
	});
	return results;
}

function _string$8(property, value) {
	if (!property) {
		return;
	}
	if (!this.hasOwnProperty(property)) {
		return;
	}
	this[property] = value;
	return value;
}

function setter(obj, path, value) {
	var parts = path.substring(1).split('.');
	if (!parts.length) {
		return;
	}
	if (parts.length === 1) {
		obj[parts[0]] = value;
		return true;
	}
	var tail = parts.splice(parts.length - 1, 1);
	var reference = get$1(obj, parts);
	if (reference) {
		reference[tail[0]] = value;
		return true;
	}
	return false;
}

function set$1(obj, path, value) {
	return setter(obj, path, value);
}

function _path$6(path, value) {
	return set$1(this, path, value);
}

var Set = {
	object: _object$3,
	string: _string$8,
	path: _path$6
};

function _string$9(text) {
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
}

function _path$7(text) {
	return _string.call(this, text);
}

var Text = {
	string: _string$9,
	path: _path$7
};

function nodeAttributes(node, callback) {
	if (!isFunction$1(callback)) {
		return;
	}
	if (isElement$1(node)) {
		var attributes = node.attributes;
		for (var i = attributes.length - 1; i >= 0; i--) {
			var attribute = attributes[i];
			var name = attribute.name;
			var value = attribute.value;
			callback(name, value, attribute);
		};
	}
}

function _undefined$2() {
	var results = {};
	nodeAttributes(this.element, function (attribute, value, ref) {
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
	var _this = this;

	var results = {};
	collection.forEach(function (attribute) {
		results[attribute] = _this.attribute(attribute);
	});
	return results;
}

function _object$4(macro, value) {
	var _this = this;

	var result = isObject(value) ? value : {};
	Object.keys(macro).forEach(function (attribute) {
		results[attribute] = _this.attribute(attribute, macro[attribute]);
	});
	return results;
}

function _get_object(macro) {
	return _object$4.call(this, macro);
}

function isUndefined(u) {
	return typeof u === 'undefined';
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
	var _this = this;

	var results = [];
	collection.forEach(function (attribute) {
		results.push(_this.attribute(attribute, value));
	});
	return results;
}

//Get
//Set
var Attribute = {
	Get: {
		undefined: _undefined$2,
		string: _get_string,
		path: _get_path,
		array: _get_array,
		object: _get_object
	},
	Set: {
		string: _set_string,
		path: _set_path,
		array: _array$9,
		object: _object$4
	}
};

function _array$10(collection) {
	var _this = this;

	var results = [];
	collection.forEach(function (item) {
		results.push(_this.class(item));
	});
	return results;
}

function _object$5(classes) {
	var className = '';
	Object.keys(classes).forEach(function (name) {
		if (classes[name]) {
			className += name;
		}
	});
	this.element.className = className;
	return className;
}

var ElementAction = function () {
	function ElementAction(element) {
		classCallCheck(this, ElementAction);

		this.private = {
			element: element || false
		};
	}

	createClass(ElementAction, [{
		key: "element",
		get: function get() {
			return this.private.element;
		},
		set: function set(element) {
			this.private.element = element;
		}
	}]);
	return ElementAction;
}();

function getClasses(el) {
	if (!isElement$1(el)) {
		return;
	}
	var classes = {};
	if (isString(el.className)) {
		var list = el.className.split(' ');
		if (isArray$1(list)) {
			list.forEach(function (name) {
				classes[name] = true;
			});
		}
	}
	return classes;
}

var ElementClassAction = function (_ElementAction) {
	inherits(ElementClassAction, _ElementAction);

	function ElementClassAction(element, className) {
		classCallCheck(this, ElementClassAction);

		var _this = possibleConstructorReturn(this, Object.getPrototypeOf(ElementClassAction).call(this, element));

		_this.element = element;
		_this.private.classes = className.split(' ');
		return _this;
	}

	createClass(ElementClassAction, [{
		key: 'add',
		value: function add() {
			var existing = getClasses(this.element) || {};
			this.private.classes.forEach(function (name) {
				existing[name] = true;
			});
			this.element.className = Object.keys(existing).join(' ');
			return existing;
		}
	}, {
		key: 'remove',
		value: function remove() {
			var existing = getClasses(this.element) || {};
			this.private.classes.forEach(function (name) {
				delete existing[name];
			});
			this.element.className = Object.keys(existing).join(' ');
			return existing;
		}
	}, {
		key: 'toggle',
		value: function toggle() {
			var existing = getClasses(this.element) || {};
			this.private.classes.forEach(function (name) {
				if (existing[name]) {
					delete existing[name];
					return;
				}
				existing[name] = true;
			});
			this.element.className = Object.keys(existing).join(' ');
			return existing;
		}
	}, {
		key: 'exists',
		value: function exists() {
			var existing = getClasses(this.element) || {};
			var classes = this.private.classes;
			var count = classes.length;
			for (var i = 0; i < count; i++) {
				var name = classes[i];
				if (!existing[name]) {
					return false;
				}
			};
			return true;
		}
	}]);
	return ElementClassAction;
}(ElementAction);

function _string$10(name) {
	if (isEmptyString$1(name)) {
		return;
	}
	return new ElementClassAction(this.element, name);
}

function _path$8() {
	return _string$10.apply(this, arguments);
}

function _undefined$3() {
	return getClasses(this.element);
}

var Class = {
	array: _array$10,
	object: _object$5,
	string: _string$10,
	path: _path$8,
	undefined: _undefined$3
};

function isNumber(u) {
	return !isNaN(u) && typeof u === 'number';
}

var Sheets = {};

var JSUIError = function (_Error) {
	inherits(JSUIError, _Error);

	function JSUIError(title, message, severity) {
		classCallCheck(this, JSUIError);
		return possibleConstructorReturn(this, Object.getPrototypeOf(JSUIError).call(this));
	}

	createClass(JSUIError, [{
		key: 'throw',
		value: function _throw(title, message, severity) {
			if (window.console && window.console.trace) {
				console.trace(title || '');
			}
		}
	}]);
	return JSUIError;
}(Error);

function isUStyleRule(u) {
	return !!(u && u.prototype && (u.prototype instanceof StyleSheetRule || u === StyleSheetRule));
}

function rules(a, b) {
	var importance = b.importance - a.importance;
	var created = b.private.created - a.private.created;
	if (!importance) {
		return created;
	}
	return importance;
}

var StyleSheet = function (_Distinct) {
	inherits(StyleSheet, _Distinct);

	function StyleSheet(context) {
		classCallCheck(this, StyleSheet);

		var _this = possibleConstructorReturn(this, Object.getPrototypeOf(StyleSheet).call(this));

		context = context || 'default';

		_this.private.rules = {};
		_this.private.timer = false;
		_this.private.element = false;
		_this.private.context = context;

		var contextSheet = Sheets[context];
		if (contextSheet) {
			var _ret;

			_this.private = contextSheet.private;
			return _ret = _this, possibleConstructorReturn(_this, _ret);
		}

		var element = document.createElement('style');
		element.appendChild(document.createTextNode(""));
		element.setAttribute('id', 'style-' + context);
		document.head.appendChild(element);
		_this.private.element = element;
		Sheets[context] = _this;
		return _this;
	}

	createClass(StyleSheet, [{
		key: 'add',
		value: function add(rule) {
			if (isStyleRule(rule)) {
				var rules = this.private.rules;
				if (!rules[rule.uid]) {
					rules[rule.uid] = {
						references: 1,
						rule: rule
					};
					return this.render(10);
				}
				rules[rule.uid].references++;
				return true;
			}
			if (isUStyleRule(rule)) {
				return this.add(new rule(this.context));
			}
		}
	}, {
		key: 'remove',
		value: function remove(rule) {
			var rules = this.private.rules;
			if (isString(rule)) {
				var entry = rules[rule];
				if (entry) {
					entry.references--;
					if (entry.references < 1) {
						delete rules[rule];
						this.render(10);
					}
				}
				return;
			}
			if (isStyleRule(rule)) {
				this.remove(rule.uid);
			}
		}
	}, {
		key: 'render',
		value: function render(timeout) {
			var _this2 = this;

			var entries = this.private.rules;
			clearTimeout(this.private.timer);
			if (isNumber(timeout)) {
				this.private.timer = setTimeout(this.render.bind(this), timeout);
				return;
			}

			var entryList = Object.keys(entries);
			//check to see if there are any entries
			if (!entryList.length) {
				document.head.removeChild(this.private.element);
				return;
			}

			//create the stylesheet and disable it
			var element = document.createElement('style');
			element.setAttribute('id', 'style-' + this.context);
			element.appendChild(document.createTextNode(""));
			document.head.appendChild(element);
			element.sheet.disabled = true;

			//fetch all the entries and organize them
			var articles = [];
			entryList.forEach(function (uid) {
				var entry = entries[uid];
				articles.push(entry.rule);
			});
			articles.sort(this.sorter);

			//render each rule
			articles.forEach(function (rule) {
				var value = rule.render(_this2.context);
				element.sheet.insertRule(value, rule.importance);
			});

			//enable the new stylesheet and remove the old one
			element.sheet.disabled = false;
			document.head.removeChild(this.private.element);
			this.private.element = element;
			this.trigger('rendered');
		}
	}, {
		key: 'context',
		get: function get() {
			return this.private.context;
		}
	}, {
		key: 'variables',
		get: function get() {},
		set: function set(vars) {}
	}, {
		key: 'sorter',
		get: function get() {
			if (this.private.sorter) {
				return this.private.sorter;
			}
			return rules;
		},
		set: function set(method) {
			if (isFunction$1(method)) {
				this.private.sorter = method;
			}
		}
	}]);
	return StyleSheet;
}(Distinct);

var StyleSheetRule = function (_StyleRules) {
	inherits(StyleSheetRule, _StyleRules);

	function StyleSheetRule(selector, properties) {
		classCallCheck(this, StyleSheetRule);

		var _this = possibleConstructorReturn(this, Object.getPrototypeOf(StyleSheetRule).call(this));

		_this.private.importance = 0;
		_this.private.created = new Date().valueOf();
		if (selector) {
			_this.selector = selector;
		}
		if (isObject(properties)) {
			_this.set(properties);
		}
		return _this;
	}

	createClass(StyleSheetRule, [{
		key: 'set',
		value: function set(name, value) {
			var _this2 = this;

			if (isObject(name)) {
				Object.keys(name).forEach(function (key) {
					var value = name[key];
					_this2[key] = value;
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
	}, {
		key: 'render',
		value: function render(context) {
			var _this3 = this;

			context = context || this.private.context || 'default';
			var sheet = Sheets[context] || new StyleSheet(context);
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
			Object.keys(this.private.styles).forEach(function (key) {
				var name = equivalents[key];
				var value = _this3.private.styles[key];
				//needs handlers for values
				styles.push(name + ': ' + value + ';');
			});
			var selector = this.selector;
			var media = this.media;
			var tab = media ? '\t' : '';
			//needs handers for selectors
			var styleText = styles.join('\n\t' + tab);
			rendered = '' + tab + selector + ' {\n\t' + tab + styleText + '\n' + tab + '}';
			if (media) {
				rendered = media + ' {\n' + rendered + '\n}';
			}
			return rendered;
		}
	}, {
		key: 'selector',
		get: function get() {
			return this.private.selector;
		},
		set: function set(selector) {
			var _this4 = this;

			var self = this;
			var changed = function changed() {
				var old = _this4.private.selector;
				_this4.trigger('selectorChanged', {
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
	}, {
		key: 'media',
		get: function get() {
			return this.private.media;
		},
		set: function set(media) {
			var _this5 = this;

			var self = this;
			var changed = function changed() {
				var old = _this5.private.media;
				_this5.trigger('mediaChanged', {
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
	}, {
		key: 'importance',
		get: function get() {
			return this.private.importance || 0;
		},
		set: function set(zindex) {
			if (isNumber(zindex)) {
				this.private.importance = zindex;
			}
			this.trigger('importanceChanged');
		}
	}, {
		key: 'context',
		get: function get() {
			return this.private.context || 'default';
		},
		set: function set(context) {
			this.private.context = context;
			this.trigger('contextChanged');
		}
	}]);
	return StyleSheetRule;
}(StyleRules);

function isStyleRule(u) {
	return u instanceof StyleSheetRule;
}

var Styleable = function (_Distinct) {
	inherits(Styleable, _Distinct);

	function Styleable() {
		classCallCheck(this, Styleable);

		var _this = possibleConstructorReturn(this, Object.getPrototypeOf(Styleable).call(this));

		_this.private.context = 'default';
		_this.private.style = {
			rules: {}
		};
		return _this;
	}

	createClass(Styleable, [{
		key: 'add',
		value: function add(style) {
			if (isStyleRule(style)) {
				var rules = this.private.style.rules;
				var entry = rules[style.uid];
				if (!entry) {
					entry = {
						rule: style,
						context: this.context
					};
					rules[style.uid] = entry;
					style.render(this.context);
					return;
				}
				if (entry.context !== this.context) {
					var sheet = Sheets[entry.context];
					if (sheet) {
						sheet.remove(style);
						style.render(this.context);
					}
					return;
				}
			}
		}
	}, {
		key: 'context',
		get: function get() {
			return this.private.context;
		},
		set: function set(context) {
			var _this2 = this;

			var old = this.private.context;
			if (old === context) {
				return;
			}
			this.private.context = context;
			Object.keys(this.private.style.rules).forEach(function (uid) {
				var entry = _this2.private.style.rules[uid];
				Sheets[old].remove(entry.rule);
				entry.rule.render(_this2.private.context);
			});
			this.trigger('contextChanged');
		}
	}]);
	return Styleable;
}(Distinct);

//constructor & destructor
//handlers
//classes
var Element$1 = function (_Styleable) {
	inherits(Element, _Styleable);

	function Element(tag) {
		classCallCheck(this, Element);

		var _this = possibleConstructorReturn(this, Object.getPrototypeOf(Element).call(this, tag));

		constructor.call(_this, tag);
		//if not default, change the context of the child elements
		_this.on('contextChanged', function () {
			_this.children(function (child) {
				//allow context to only change once
				child.context = child.context === 'default' ? _this.context : child.context;
			});
		});
		return _this;
	}

	createClass(Element, [{
		key: 'add',
		value: function add(item) {
			var type = getHandledType(item);
			var action = Add[type];
			return (action || get(Object.getPrototypeOf(Element.prototype), 'add', this) || unhandled).call(this, item);
		}
	}, {
		key: 'addTo',
		value: function addTo(item) {
			var type = getHandledType(item);
			var action = AddTo[type];
			return (action || unhandled).call(this, item);
		}
	}, {
		key: 'remove',
		value: function remove(item) {
			var type = getHandledType(item);
			var action = Remove[type];
			return (action || unhandled).call(this, item);
		}
	}, {
		key: 'on',
		value: function on(event, method) {
			var type = getHandledType(event);
			var action = On[type];
			return (action || unhandled).call(this, event, method);
		}
	}, {
		key: 'trigger',
		value: function trigger(event, args) {
			var type = getHandledType(event);
			var action = Trigger[type];
			get(Object.getPrototypeOf(Element.prototype), 'trigger', this).call(this, event, args);
			return (action || unhandled).call(this, event, args);
		}
	}, {
		key: 'find',
		value: function find(what) {
			var type = getHandledType(what);
			var action = Find[type];
			return (action || unhandled([])).call(this, what);
		}
	}, {
		key: 'with',
		value: function _with(method) {
			var type = getHandledType(method);
			var action = With[type];
			return (action || unhandled).call(this, method);
		}
	}, {
		key: 'do',
		value: function _do(method, args) {
			var type = getHandledType(method);
			var action = Do[type];
			return (action || unhandled).call(this, method, args);
		}
	}, {
		key: 'get',
		value: function get(property) {
			var type = getHandledType(property);
			var action = Get[type];
			return (action || unhandled).call(this, property);
		}
	}, {
		key: 'set',
		value: function set(property, value) {
			var type = getHandledType(property);
			var action = Set[type];
			return (action || unhandled).call(this, property, value);
		}
	}, {
		key: 'text',
		value: function text(_text) {
			var type = getHandledType(_text);
			var action = Text[type];
			return (action || unhandled).call(this, _text);
		}
	}, {
		key: 'attribute',
		value: function attribute(name, value) {
			if (!isElement$1(this.element) || isEmptyString$1(name)) {
				return;
			}
			var type = getHandledType(name);
			var isSet = arguments.length > 1;
			var action = Attribute[isSet ? 'Set' : 'Get'][type];
			return (action || unhandled).apply(this, [name, value]);
		}
	}, {
		key: 'class',
		value: function _class(name) {
			var type = getHandledType(name);
			var action = Class[type];
			return (action || unhandled).call(this, name);
		}
	}, {
		key: 'children',
		value: function children(callback) {
			var results = [];
			if (isFunction$1(callback) && self.private && self.private.children) {
				var children = self.private.children;
				Object.keys(children).forEach(function (id) {
					var child = children[id];
					if (child) {
						results.push(callback(child, id));
					}
				});
			}
			return results;
		}
	}, {
		key: 'destructor',
		value: function destructor() {
			_destructor.call(this);
		}
	}]);
	return Element;
}(Styleable);

describe("Framework/TypeChecks/isJSUI", function () {
	//TRUE
	it("should return true if argument is a JSUI Element Class", function () {
		var instance = new Element$1();
		expect(isJSUI$1(instance)).toBe(true);
	});
	it("should return true if argument is inherited from a JSUI Element Class", function () {
		var A = function (_Element) {
			inherits(A, _Element);

			function A() {
				classCallCheck(this, A);
				return possibleConstructorReturn(this, Object.getPrototypeOf(A).apply(this, arguments));
			}

			return A;
		}(Element$1);

		var instance = new A();
		expect(isJSUI$1(instance)).toBe(true);
	});
	//FALSE
	it("should return false if argument is a function", function () {
		expect(isJSUI$1(function () {})).toBe(false);
	});
	it("should return false if argument is an arrow function", function () {
		expect(isJSUI$1(function () {})).toBe(false);
	});
	it("should return false if argument is a class", function () {
		expect(isJSUI$1(function A() {
			classCallCheck(this, A);
		})).toBe(false);
	});
	it("should return false if argument is a string", function () {
		expect(isJSUI$1("")).toBe(false);
	});
	it("should return false if argument is a number", function () {
		expect(isJSUI$1(1)).toBe(false);
	});
	it("should return false if argument is object", function () {
		expect(isJSUI$1({})).toBe(false);
	});
	it("should return false if argument is array", function () {
		expect(isJSUI$1([])).toBe(false);
	});
	it("should return false if argument is null", function () {
		expect(isJSUI$1(null)).toBe(false);
	});
	it("should return false if argument is undefined", function () {
		expect(isJSUI$1(undefined)).toBe(false);
	});
});

var tags = ['a', 'abbr', 'acronym', 'address', 'applet', 'area', 'article', 'aside', 'audio', 'b', 'base', 'basefont', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'command', 'datalist', 'dd', 'del', 'details', 'dfn', 'dir', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'menu', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'video', 'wbr'];

var Natives = {};
tags.forEach(function (tag) {
	Natives[tag] = true;
});

function isNativeTag$1(u) {
	return !!Natives[u];
}

describe("Framework/TypeChecks/isNativeTag", function () {
	//TRUE
	it("should return true if argument is any native tag", function () {
		tags.forEach(function (tag) {
			expect(isNativeTag$1(tag)).toBe(true);
		});
	});
	//FALSE
	it("should return false if argument is not a native tag", function () {
		tags.forEach(function (tag) {
			expect(isNativeTag$1('NOT-' + tag)).toBe(false);
		});
	});
	it("should return false if argument is a function", function () {
		expect(isNativeTag$1(function () {})).toBe(false);
	});
	it("should return false if argument is an arrow function", function () {
		expect(isNativeTag$1(function () {})).toBe(false);
	});
	it("should return false if argument is a class", function () {
		expect(isNativeTag$1(function A() {
			classCallCheck(this, A);
		})).toBe(false);
	});
	it("should return false if argument is a string", function () {
		expect(isNativeTag$1("")).toBe(false);
	});
	it("should return false if argument is a number", function () {
		expect(isNativeTag$1(1)).toBe(false);
	});
	it("should return false if argument is object", function () {
		expect(isNativeTag$1({})).toBe(false);
	});
	it("should return false if argument is array", function () {
		expect(isNativeTag$1([])).toBe(false);
	});
	it("should return false if argument is null", function () {
		expect(isNativeTag$1(null)).toBe(false);
	});
	it("should return false if argument is undefined", function () {
		expect(isNativeTag$1(undefined)).toBe(false);
	});
});

describe("Framework/TypeChecks/isNull", function () {
	//TRUE
	it("should return true if argument is null", function () {
		expect(isNull(null)).toBe(true);
	});
	//FALSE
	it("should return false if argument is a function", function () {
		expect(isNull(function () {})).toBe(false);
	});
	it("should return false if argument is an arrow function", function () {
		expect(isNull(function () {})).toBe(false);
	});
	it("should return false if argument is a class", function () {
		expect(isNull(function A() {
			classCallCheck(this, A);
		})).toBe(false);
	});
	it("should return false if argument is a string", function () {
		expect(isNull("")).toBe(false);
	});
	it("should return false if argument is a number = 1", function () {
		expect(isNull(1)).toBe(false);
	});
	it("should return false if argument is a number = 0", function () {
		expect(isNull(0)).toBe(false);
	});
	it("should return false if argument is a number = NaN", function () {
		expect(isNull(NaN)).toBe(false);
	});
	it("should return false if argument is a number = Infinity", function () {
		expect(isNull(Infinity)).toBe(false);
	});
	it("should return false if argument is a number = -Infinity", function () {
		expect(isNull(-Infinity)).toBe(false);
	});
	it("should return false if argument is a number = -1", function () {
		expect(isNull(-1)).toBe(false);
	});
	it("should return false if argument is object", function () {
		expect(isNull({})).toBe(false);
	});
	it("should return false if argument is array", function () {
		expect(isNull([])).toBe(false);
	});
	it("should return false if argument is undefined", function () {
		expect(isNull(undefined)).toBe(false);
	});
	it("should return false if argument is boolean/false", function () {
		expect(isNull(false)).toBe(false);
	});
	it("should return false if argument is boolean/true", function () {
		expect(isNull(true)).toBe(false);
	});
});

describe("Framework/TypeChecks/isNumber", function () {
	//TRUE
	it("should return true if argument is a number = 1", function () {
		expect(isNumber(1)).toBe(true);
	});
	it("should return true if argument is a number = 0", function () {
		expect(isNumber(0)).toBe(true);
	});
	it("should return false if argument is a number = NaN", function () {
		expect(isNumber(NaN)).toBe(false);
	});
	it("should return true if argument is a number = Infinity", function () {
		expect(isNumber(Infinity)).toBe(true);
	});
	it("should return true if argument is a number = -Infinity", function () {
		expect(isNumber(-Infinity)).toBe(true);
	});
	it("should return true if argument is a number = -1", function () {
		expect(isNumber(-1)).toBe(true);
	});
	//FALSE
	it("should return false if argument is a function", function () {
		expect(isNumber(function () {})).toBe(false);
	});
	it("should return false if argument is an arrow function", function () {
		expect(isNumber(function () {})).toBe(false);
	});
	it("should return false if argument is a class", function () {
		expect(isNumber(function A() {
			classCallCheck(this, A);
		})).toBe(false);
	});
	it("should return false if argument is a string", function () {
		expect(isNumber("")).toBe(false);
	});
	it("should return false if argument is object", function () {
		expect(isNumber({})).toBe(false);
	});
	it("should return false if argument is array", function () {
		expect(isNumber([])).toBe(false);
	});
	it("should return false if argument is undefined", function () {
		expect(isNumber(undefined)).toBe(false);
	});
	it("should return false if argument is boolean = false", function () {
		expect(isNumber(false)).toBe(false);
	});
	it("should return false if argument is boolean = true", function () {
		expect(isNumber(true)).toBe(false);
	});
});

describe("Framework/TypeChecks/isObject", function () {
	//TRUE
	it("should return true if argument is object", function () {
		expect(isObject({})).toBe(true);
	});
	it("should return true if argument is array", function () {
		expect(isObject([])).toBe(true);
	});
	//FALSE
	it("should return false if argument is a function", function () {
		expect(isObject(function () {})).toBe(false);
	});
	it("should return false if argument is an arrow function", function () {
		expect(isObject(function () {})).toBe(false);
	});
	it("should return false if argument is a class", function () {
		expect(isObject(function A() {
			classCallCheck(this, A);
		})).toBe(false);
	});
	it("should return false if argument is a string", function () {
		expect(isObject("")).toBe(false);
	});
	it("should return false if argument is a number = 1", function () {
		expect(isObject(1)).toBe(false);
	});
	it("should return false if argument is a number = 0", function () {
		expect(isObject(0)).toBe(false);
	});
	it("should return false if argument is a number = NaN", function () {
		expect(isObject(NaN)).toBe(false);
	});
	it("should return false if argument is a number = Infinity", function () {
		expect(isObject(Infinity)).toBe(false);
	});
	it("should return false if argument is a number = -Infinity", function () {
		expect(isObject(-Infinity)).toBe(false);
	});
	it("should return false if argument is a number = -1", function () {
		expect(isObject(-1)).toBe(false);
	});
	it("should return false if argument is undefined", function () {
		expect(isObject(undefined)).toBe(false);
	});
	it("should return false if argument is boolean = false", function () {
		expect(isObject(false)).toBe(false);
	});
	it("should return false if argument is boolean = true", function () {
		expect(isObject(true)).toBe(false);
	});
});

describe("Framework/TypeChecks/isPath", function () {
	//TRUE
	it("should return true if argument is a path string", function () {
		expect(isPath("@some.path")).toBe(true);
	});
	//FALSE
	it("should return false if argument is a function", function () {
		expect(isPath(function () {})).toBe(false);
	});
	it("should return false if argument is an arrow function", function () {
		expect(isPath(function () {})).toBe(false);
	});
	it("should return false if argument is a class", function () {
		expect(isPath(function A() {
			classCallCheck(this, A);
		})).toBe(false);
	});
	it("should return false if argument is a string", function () {
		expect(isPath("")).toBe(false);
	});
	it("should return false if argument is object", function () {
		expect(isPath({})).toBe(false);
	});
	it("should return false if argument is array", function () {
		expect(isPath([])).toBe(false);
	});
	it("should return false if argument is a number = 1", function () {
		expect(isPath(1)).toBe(false);
	});
	it("should return false if argument is a number = 0", function () {
		expect(isPath(0)).toBe(false);
	});
	it("should return false if argument is a number = NaN", function () {
		expect(isPath(NaN)).toBe(false);
	});
	it("should return false if argument is a number = Infinity", function () {
		expect(isPath(Infinity)).toBe(false);
	});
	it("should return false if argument is a number = -Infinity", function () {
		expect(isPath(-Infinity)).toBe(false);
	});
	it("should return false if argument is a number = -1", function () {
		expect(isPath(-1)).toBe(false);
	});
	it("should return false if argument is undefined", function () {
		expect(isPath(undefined)).toBe(false);
	});
	it("should return false if argument is boolean = false", function () {
		expect(isPath(false)).toBe(false);
	});
	it("should return false if argument is boolean = true", function () {
		expect(isPath(true)).toBe(false);
	});
});

describe("Framework/TypeChecks/isRegex", function () {
	//TRUE
	it("should return true if argument is a regex literal", function () {
		expect(isRegex(/ab+c/)).toBe(true);
	});
	it("should return true if argument is a regex class instance", function () {
		expect(isRegex(new RegExp("ab+c"))).toBe(true);
	});
	//FALSE
	it("should return false if argument is a function", function () {
		expect(isRegex(function () {})).toBe(false);
	});
	it("should return false if argument is an arrow function", function () {
		expect(isRegex(function () {})).toBe(false);
	});
	it("should return false if argument is a class", function () {
		expect(isRegex(function A() {
			classCallCheck(this, A);
		})).toBe(false);
	});
	it("should return false if argument is a string", function () {
		expect(isRegex("")).toBe(false);
	});
	it("should return false if argument is object", function () {
		expect(isRegex({})).toBe(false);
	});
	it("should return false if argument is array", function () {
		expect(isRegex([])).toBe(false);
	});
	it("should return false if argument is a number = 1", function () {
		expect(isRegex(1)).toBe(false);
	});
	it("should return false if argument is a number = 0", function () {
		expect(isRegex(0)).toBe(false);
	});
	it("should return false if argument is a number = NaN", function () {
		expect(isRegex(NaN)).toBe(false);
	});
	it("should return false if argument is a number = Infinity", function () {
		expect(isRegex(Infinity)).toBe(false);
	});
	it("should return false if argument is a number = -Infinity", function () {
		expect(isRegex(-Infinity)).toBe(false);
	});
	it("should return false if argument is a number = -1", function () {
		expect(isRegex(-1)).toBe(false);
	});
	it("should return false if argument is undefined", function () {
		expect(isRegex(undefined)).toBe(false);
	});
	it("should return false if argument is boolean = false", function () {
		expect(isRegex(false)).toBe(false);
	});
	it("should return false if argument is boolean = true", function () {
		expect(isRegex(true)).toBe(false);
	});
});

describe("Framework/TypeChecks/isString", function () {
	//TRUE
	it("should return true if argument is an empty string", function () {
		expect(isString("")).toBe(true);
	});
	it("should return true if argument is a string", function () {
		expect(isString("a string")).toBe(true);
	});
	//FALSE
	it("should return false if argument is a function", function () {
		expect(isString(function () {})).toBe(false);
	});
	it("should return false if argument is an arrow function", function () {
		expect(isString(function () {})).toBe(false);
	});
	it("should return false if argument is a class", function () {
		expect(isString(function A() {
			classCallCheck(this, A);
		})).toBe(false);
	});
	it("should return false if argument is object", function () {
		expect(isString({})).toBe(false);
	});
	it("should return false if argument is array", function () {
		expect(isString([])).toBe(false);
	});
	it("should return false if argument is a number = 1", function () {
		expect(isString(1)).toBe(false);
	});
	it("should return false if argument is a number = 0", function () {
		expect(isString(0)).toBe(false);
	});
	it("should return false if argument is a number = NaN", function () {
		expect(isString(NaN)).toBe(false);
	});
	it("should return false if argument is a number = Infinity", function () {
		expect(isString(Infinity)).toBe(false);
	});
	it("should return false if argument is a number = -Infinity", function () {
		expect(isString(-Infinity)).toBe(false);
	});
	it("should return false if argument is a number = -1", function () {
		expect(isString(-1)).toBe(false);
	});
	it("should return false if argument is undefined", function () {
		expect(isString(undefined)).toBe(false);
	});
	it("should return false if argument is boolean = false", function () {
		expect(isString(false)).toBe(false);
	});
	it("should return false if argument is boolean = true", function () {
		expect(isString(true)).toBe(false);
	});
});

describe("Framework/TypeChecks/isStyleRule", function () {
	//TRUE
	it("should return true if argument is a style rule", function () {
		expect(isStyleRule(new StyleSheetRule())).toBe(true);
	});
	it("should return true if argument is inherited from a style rule", function () {
		var SomeRule = function (_StyleRule) {
			inherits(SomeRule, _StyleRule);

			function SomeRule() {
				classCallCheck(this, SomeRule);
				return possibleConstructorReturn(this, Object.getPrototypeOf(SomeRule).apply(this, arguments));
			}

			return SomeRule;
		}(StyleSheetRule);

		expect(isStyleRule(new SomeRule())).toBe(true);
	});
	//FALSE
	it("should return false if argument is a function", function () {
		expect(isStyleRule(function () {})).toBe(false);
	});
	it("should return false if argument is an arrow function", function () {
		expect(isStyleRule(function () {})).toBe(false);
	});
	it("should return false if argument is a class", function () {
		expect(isStyleRule(function A() {
			classCallCheck(this, A);
		})).toBe(false);
	});
	it("should return false if argument is a string", function () {
		expect(isStyleRule("a string")).toBe(false);
	});
	it("should return false if argument is object", function () {
		expect(isStyleRule({})).toBe(false);
	});
	it("should return false if argument is array", function () {
		expect(isStyleRule([])).toBe(false);
	});
	it("should return false if argument is a number = 1", function () {
		expect(isStyleRule(1)).toBe(false);
	});
	it("should return false if argument is a number = 0", function () {
		expect(isStyleRule(0)).toBe(false);
	});
	it("should return false if argument is a number = NaN", function () {
		expect(isStyleRule(NaN)).toBe(false);
	});
	it("should return false if argument is a number = Infinity", function () {
		expect(isStyleRule(Infinity)).toBe(false);
	});
	it("should return false if argument is a number = -Infinity", function () {
		expect(isStyleRule(-Infinity)).toBe(false);
	});
	it("should return false if argument is a number = -1", function () {
		expect(isStyleRule(-1)).toBe(false);
	});
	it("should return false if argument is undefined", function () {
		expect(isStyleRule(undefined)).toBe(false);
	});
	it("should return false if argument is boolean = false", function () {
		expect(isStyleRule(false)).toBe(false);
	});
	it("should return false if argument is boolean = true", function () {
		expect(isStyleRule(true)).toBe(false);
	});
});

function isTextNode$1(u) {
	return !!(u && u.nodeName === "#text");
}

describe("Framework/TypeChecks/isTextNode", function () {
	//TRUE
	it("should return true if argument is a text node", function () {
		expect(isTextNode$1(document.createTextNode('text node'))).toBe(true);
	});
	//FALSE
	it("should return false if argument is a function", function () {
		expect(isTextNode$1(function () {})).toBe(false);
	});
	it("should return false if argument is an arrow function", function () {
		expect(isTextNode$1(function () {})).toBe(false);
	});
	it("should return false if argument is a class", function () {
		expect(isTextNode$1(function A() {
			classCallCheck(this, A);
		})).toBe(false);
	});
	it("should return false if argument is a string", function () {
		expect(isTextNode$1("a string")).toBe(false);
	});
	it("should return false if argument is object", function () {
		expect(isTextNode$1({})).toBe(false);
	});
	it("should return false if argument is array", function () {
		expect(isTextNode$1([])).toBe(false);
	});
	it("should return false if argument is a number = 1", function () {
		expect(isTextNode$1(1)).toBe(false);
	});
	it("should return false if argument is a number = 0", function () {
		expect(isTextNode$1(0)).toBe(false);
	});
	it("should return false if argument is a number = NaN", function () {
		expect(isTextNode$1(NaN)).toBe(false);
	});
	it("should return false if argument is a number = Infinity", function () {
		expect(isTextNode$1(Infinity)).toBe(false);
	});
	it("should return false if argument is a number = -Infinity", function () {
		expect(isTextNode$1(-Infinity)).toBe(false);
	});
	it("should return false if argument is a number = -1", function () {
		expect(isTextNode$1(-1)).toBe(false);
	});
	it("should return false if argument is undefined", function () {
		expect(isTextNode$1(undefined)).toBe(false);
	});
	it("should return false if argument is boolean = false", function () {
		expect(isTextNode$1(false)).toBe(false);
	});
	it("should return false if argument is boolean = true", function () {
		expect(isTextNode$1(true)).toBe(false);
	});
});

describe("Framework/TypeChecks/isUJSUI", function () {
	//TRUE
	it("should return true if argument is an uninstanced JSUI class", function () {
		expect(isUJSUI(Element$1)).toBe(true);
	});
	it("should return true if argument inherits Element and is uninstanced", function () {
		var TestElement = function (_Element) {
			inherits(TestElement, _Element);

			function TestElement() {
				classCallCheck(this, TestElement);
				return possibleConstructorReturn(this, Object.getPrototypeOf(TestElement).apply(this, arguments));
			}

			return TestElement;
		}(Element$1);

		expect(isUJSUI(TestElement)).toBe(true);
	});
	//FALSE
	it("should return false if argument is an instanced Element", function () {
		expect(isUJSUI(new Element$1())).toBe(false);
	});
	it("should return false if argument inherits from Element and is instanced", function () {
		var TestElement = function (_Element2) {
			inherits(TestElement, _Element2);

			function TestElement() {
				classCallCheck(this, TestElement);
				return possibleConstructorReturn(this, Object.getPrototypeOf(TestElement).apply(this, arguments));
			}

			return TestElement;
		}(Element$1);

		expect(isUJSUI(new TestElement())).toBe(false);
	});
	it("should return false if argument is a function", function () {
		expect(isUJSUI(function () {})).toBe(false);
	});
	it("should return false if argument is an arrow function", function () {
		expect(isUJSUI(function () {})).toBe(false);
	});
	it("should return false if argument is a class", function () {
		expect(isUJSUI(function A() {
			classCallCheck(this, A);
		})).toBe(false);
	});
	it("should return false if argument is a string", function () {
		expect(isUJSUI("a string")).toBe(false);
	});
	it("should return false if argument is object", function () {
		expect(isUJSUI({})).toBe(false);
	});
	it("should return false if argument is array", function () {
		expect(isUJSUI([])).toBe(false);
	});
	it("should return false if argument is a number = 1", function () {
		expect(isUJSUI(1)).toBe(false);
	});
	it("should return false if argument is a number = 0", function () {
		expect(isUJSUI(0)).toBe(false);
	});
	it("should return false if argument is a number = NaN", function () {
		expect(isUJSUI(NaN)).toBe(false);
	});
	it("should return false if argument is a number = Infinity", function () {
		expect(isUJSUI(Infinity)).toBe(false);
	});
	it("should return false if argument is a number = -Infinity", function () {
		expect(isUJSUI(-Infinity)).toBe(false);
	});
	it("should return false if argument is a number = -1", function () {
		expect(isUJSUI(-1)).toBe(false);
	});
	it("should return false if argument is undefined", function () {
		expect(isUJSUI(undefined)).toBe(false);
	});
	it("should return false if argument is boolean = false", function () {
		expect(isUJSUI(false)).toBe(false);
	});
	it("should return false if argument is boolean = true", function () {
		expect(isUJSUI(true)).toBe(false);
	});
});

describe("Framework/TypeChecks/isUndefined", function () {
	//TRUE
	it("should return true if argument is undefined", function () {
		expect(isUndefined(undefined)).toBe(true);
	});
	//FALSE
	it("should return false if argument is a function", function () {
		expect(isUndefined(function () {})).toBe(false);
	});
	it("should return false if argument is an arrow function", function () {
		expect(isUndefined(function () {})).toBe(false);
	});
	it("should return false if argument is a class", function () {
		expect(isUndefined(function A() {
			classCallCheck(this, A);
		})).toBe(false);
	});
	it("should return false if argument is a string", function () {
		expect(isUndefined("a string")).toBe(false);
	});
	it("should return false if argument is object", function () {
		expect(isUndefined({})).toBe(false);
	});
	it("should return false if argument is array", function () {
		expect(isUndefined([])).toBe(false);
	});
	it("should return false if argument is a number = 1", function () {
		expect(isUndefined(1)).toBe(false);
	});
	it("should return false if argument is a number = 0", function () {
		expect(isUndefined(0)).toBe(false);
	});
	it("should return false if argument is a number = NaN", function () {
		expect(isUndefined(NaN)).toBe(false);
	});
	it("should return false if argument is a number = Infinity", function () {
		expect(isUndefined(Infinity)).toBe(false);
	});
	it("should return false if argument is a number = -Infinity", function () {
		expect(isUndefined(-Infinity)).toBe(false);
	});
	it("should return false if argument is a number = -1", function () {
		expect(isUndefined(-1)).toBe(false);
	});
	it("should return false if argument is boolean = false", function () {
		expect(isUndefined(false)).toBe(false);
	});
	it("should return false if argument is boolean = true", function () {
		expect(isUndefined(true)).toBe(false);
	});
});

describe("Framework/TypeChecks/isUStyleRule", function () {
	//TRUE
	it("should return true if argument is an uninstanced style rule", function () {
		expect(isUStyleRule(StyleSheetRule)).toBe(true);
	});
	it("should return true if argument is inherited from a style rule and is uninstanced", function () {
		var SomeRule = function (_StyleRule) {
			inherits(SomeRule, _StyleRule);

			function SomeRule() {
				classCallCheck(this, SomeRule);
				return possibleConstructorReturn(this, Object.getPrototypeOf(SomeRule).apply(this, arguments));
			}

			return SomeRule;
		}(StyleSheetRule);

		expect(isUStyleRule(SomeRule)).toBe(true);
	});
	//FALSE
	it("should return false if argument is a function", function () {
		expect(isUStyleRule(function () {})).toBe(false);
	});
	it("should return false if argument is an arrow function", function () {
		expect(isUStyleRule(function () {})).toBe(false);
	});
	it("should return false if argument is a class", function () {
		expect(isUStyleRule(function A() {
			classCallCheck(this, A);
		})).toBe(false);
	});
	it("should return false if argument is a string", function () {
		expect(isUStyleRule("a string")).toBe(false);
	});
	it("should return false if argument is object", function () {
		expect(isUStyleRule({})).toBe(false);
	});
	it("should return false if argument is array", function () {
		expect(isUStyleRule([])).toBe(false);
	});
	it("should return false if argument is a number = 1", function () {
		expect(isUStyleRule(1)).toBe(false);
	});
	it("should return false if argument is a number = 0", function () {
		expect(isUStyleRule(0)).toBe(false);
	});
	it("should return false if argument is a number = NaN", function () {
		expect(isUStyleRule(NaN)).toBe(false);
	});
	it("should return false if argument is a number = Infinity", function () {
		expect(isUStyleRule(Infinity)).toBe(false);
	});
	it("should return false if argument is a number = -Infinity", function () {
		expect(isUStyleRule(-Infinity)).toBe(false);
	});
	it("should return false if argument is a number = -1", function () {
		expect(isUStyleRule(-1)).toBe(false);
	});
	it("should return false if argument is undefined", function () {
		expect(isUStyleRule(undefined)).toBe(false);
	});
	it("should return false if argument is boolean = false", function () {
		expect(isUStyleRule(false)).toBe(false);
	});
	it("should return false if argument is boolean = true", function () {
		expect(isUStyleRule(true)).toBe(false);
	});
});

function constructor$1() {
	Object.defineProperty(this, '$private', {
		configurable: true,
		enumerable: false,
		writable: true,
		value: {
			events: {},
			hooks: {},
			state: {}
		}
	});
	Object.defineProperty(this, '$uid', {
		configurable: true,
		enumerable: false,
		writable: true,
		value: uid()
	});
}

var Data = function Data() {
	classCallCheck(this, Data);

	constructor$1.call(this);
};

function $define(name, value) {
	Object.defineProperty(Data.prototype, name, {
		configurable: true,
		enumerable: false,
		writable: true,
		value: value
	});
}

$define('$on', function $on(name, method) {
	if (isString(name) && isFunction$1(method)) {
		var events = this.$private.events;
		var hooks = this.$private.hooks;
		var pool = events[name];
		var self = this;
		if (!pool) {
			var hook = function hook() {
				var args = arguments;
				Object.keys(pool).forEach(function (id) {
					var method = pool[id];
					method.apply(self, args);
				});
			};

			events[name] = {};
			pool = events[name];
			;
			hooks[name] = hook;
		}
		if (isFunction$1(method)) {
			var eid = uid();
			pool[eid] = method;
		}
		var handle = {
			id: eid,
			pool: pool,
			remove: remove,
			removeAll: removeAll
		};
		return handle;
	}
});
$define('$trigger', function $trigger(event, args) {
	var hooks = this.$private.hooks;
	var hook = hooks[event];
	if (isFunction$1(hook)) {
		hook(args);
	}
});
$define('$destructor', function $destructor() {
	for (var key in this) {
		delete this[key];
	}
});
$define('$bind', function $bind(event) {});

function isData$1(u) {
	return u instanceof Data;
}

describe("Framework/TypeChecks/isData", function () {
	//TRUE
	it("should return true if argument is a data class instance", function () {
		expect(isData$1(new Data())).toBe(true);
	});
	it("should return true if argument inherits from the Data class", function () {
		var SomeData = function (_Data) {
			inherits(SomeData, _Data);

			function SomeData() {
				classCallCheck(this, SomeData);
				return possibleConstructorReturn(this, Object.getPrototypeOf(SomeData).apply(this, arguments));
			}

			return SomeData;
		}(Data);

		expect(isData$1(new SomeData())).toBe(true);
	});
	//FALSE
	it("should return false if argument is a function", function () {
		expect(isData$1(function () {})).toBe(false);
	});
	it("should return false if argument is an arrow function", function () {
		expect(isData$1(function () {})).toBe(false);
	});
	it("should return false if argument is a class", function () {
		expect(isData$1(function A() {
			classCallCheck(this, A);
		})).toBe(false);
	});
	it("should return false if argument is a string", function () {
		expect(isData$1("a string")).toBe(false);
	});
	it("should return false if argument is object", function () {
		expect(isData$1({})).toBe(false);
	});
	it("should return false if argument is array", function () {
		expect(isData$1([])).toBe(false);
	});
	it("should return false if argument is a number = 1", function () {
		expect(isData$1(1)).toBe(false);
	});
	it("should return false if argument is a number = 0", function () {
		expect(isData$1(0)).toBe(false);
	});
	it("should return false if argument is a number = NaN", function () {
		expect(isData$1(NaN)).toBe(false);
	});
	it("should return false if argument is a number = Infinity", function () {
		expect(isData$1(Infinity)).toBe(false);
	});
	it("should return false if argument is a number = -Infinity", function () {
		expect(isData$1(-Infinity)).toBe(false);
	});
	it("should return false if argument is a number = -1", function () {
		expect(isData$1(-1)).toBe(false);
	});
	it("should return false if argument is undefined", function () {
		expect(isData$1(undefined)).toBe(false);
	});
	it("should return false if argument is boolean = false", function () {
		expect(isData$1(false)).toBe(false);
	});
	it("should return false if argument is boolean = true", function () {
		expect(isData$1(true)).toBe(false);
	});
});

function isUStyleRule$2(u) {
	return !!(u && u.prototype && (u.prototype instanceof Data || u === Data));
}

describe("Framework/TypeChecks/isUData", function () {
	//TRUE
	it("should return true if argument is an uninstanced data class", function () {
		expect(isUStyleRule$2(Data)).toBe(true);
	});
	it("should return true if argument is inherited from the data class and is uninstanced", function () {
		var SomeData = function (_Data) {
			inherits(SomeData, _Data);

			function SomeData() {
				classCallCheck(this, SomeData);
				return possibleConstructorReturn(this, Object.getPrototypeOf(SomeData).apply(this, arguments));
			}

			return SomeData;
		}(Data);

		expect(isUStyleRule$2(SomeData)).toBe(true);
	});
	//FALSE
	it("should return false if argument is a function", function () {
		expect(isUStyleRule$2(function () {})).toBe(false);
	});
	it("should return false if argument is an arrow function", function () {
		expect(isUStyleRule$2(function () {})).toBe(false);
	});
	it("should return false if argument is a class", function () {
		expect(isUStyleRule$2(function A() {
			classCallCheck(this, A);
		})).toBe(false);
	});
	it("should return false if argument is a string", function () {
		expect(isUStyleRule$2("a string")).toBe(false);
	});
	it("should return false if argument is object", function () {
		expect(isUStyleRule$2({})).toBe(false);
	});
	it("should return false if argument is array", function () {
		expect(isUStyleRule$2([])).toBe(false);
	});
	it("should return false if argument is a number = 1", function () {
		expect(isUStyleRule$2(1)).toBe(false);
	});
	it("should return false if argument is a number = 0", function () {
		expect(isUStyleRule$2(0)).toBe(false);
	});
	it("should return false if argument is a number = NaN", function () {
		expect(isUStyleRule$2(NaN)).toBe(false);
	});
	it("should return false if argument is a number = Infinity", function () {
		expect(isUStyleRule$2(Infinity)).toBe(false);
	});
	it("should return false if argument is a number = -Infinity", function () {
		expect(isUStyleRule$2(-Infinity)).toBe(false);
	});
	it("should return false if argument is a number = -1", function () {
		expect(isUStyleRule$2(-1)).toBe(false);
	});
	it("should return false if argument is undefined", function () {
		expect(isUStyleRule$2(undefined)).toBe(false);
	});
	it("should return false if argument is boolean = false", function () {
		expect(isUStyleRule$2(false)).toBe(false);
	});
	it("should return false if argument is boolean = true", function () {
		expect(isUStyleRule$2(true)).toBe(false);
	});
});

}());

//# sourceMappingURL=JSUI.Tests.js.map
