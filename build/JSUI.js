var JSUI = (function () {
'use strict';

function isArray(u) {
	return Array.isArray(u);
}

function isElement(u) {
	return u instanceof Element;
}

function isEmptyString(u) {
	return u === "";
}

function isFunction$1(u) {
	return typeof u === 'function';
}

var htmlRegex = /^<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)$/;
function isHTML(u) {
	return htmlRegex.test(u);
}

function isNull(u) {
	return u === null;
}

function isRegex(u) {
	return u instanceof RegExp;
}

function isPath(u) {
	return typeof u === 'string' && u.length > 0 && u[0] === '@';
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

var hasSymbol = typeof Symbol == 'function';

function symbolOrString(name) {
	var id = uid();
	return hasSymbol ? Symbol(name) : 'Symbol(' + name + ')@' + id;
}

var symbol = symbolOrString('private');

var defaults = {
	namespace: 'JSUI',
	Development: {
		enabled: false,
		traceErrors: true,
		haltOnErrors: true,
		references: true
	},
	Production: {}
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};





var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();





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







var get$1 = function get$1(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get$1(parent, property, receiver);
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



var set$1 = function set$1(object, property, value, receiver) {
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent !== null) {
      set$1(parent, property, value, receiver);
    }
  } else if ("value" in desc && desc.writable) {
    desc.value = value;
  } else {
    var setter = desc.set;

    if (setter !== undefined) {
      setter.call(receiver, value);
    }
  }

  return value;
};

function isObject(u) {
	return (typeof u === 'undefined' ? 'undefined' : _typeof(u)) === 'object' && u !== null;
}

function isString(u) {
	return typeof u === 'string';
}

var namespace = defaults.namespace;

var Identity = function () {
	function Identity(identity) {
		classCallCheck(this, Identity);


		var defaults$$1 = {
			namespace: namespace,
			class: 'NoClass',
			major: 0, minor: 0, patch: 0
		};

		if (isObject(identity)) {
			defaults$$1.namespace = identity.namespace || defaults$$1.namespace;
			defaults$$1.class = identity.class || defaults$$1.class;
			defaults$$1.major = identity.major || defaults$$1.major;
			defaults$$1.minor = identity.minor || defaults$$1.minor;
			defaults$$1.patch = identity.patch || defaults$$1.patch;
		}

		if (isString(identity)) {
			defaults$$1.class = identity;
		}

		Object.defineProperty(this, symbol, {
			value: defaults$$1,
			enumerable: false
		});

		Object.freeze(this[symbol]);
	}

	createClass(Identity, [{
		key: 'namespace',
		get: function get() {
			return this[symbol].namespace;
		}
	}, {
		key: 'class',
		get: function get() {
			return this[symbol].class;
		}
	}, {
		key: 'major',
		get: function get() {
			return this[symbol].major;
		}
	}, {
		key: 'minor',
		get: function get() {
			return this[symbol].minor;
		}
	}, {
		key: 'patch',
		get: function get() {
			return this[symbol].patch;
		}
	}]);
	return Identity;
}();

function isNumber(u) {
	return !isNaN(u) && typeof u === 'number';
}

var Sheets$1 = {};

function uncapitalize(text) {
	return text.charAt(0).toLowerCase() + text.slice(1);
}

var vendors = ['webkit', 'moz', 'ms', 'o'];

//not a real constant, since it is generated
var equivalents = {};
var example = document.createElement('div');

var _loop = function _loop(key) {
	try {
		(function () {
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
		})();
	} catch (e) {}
};

for (var key in example.style) {
	_loop(key);
}

var symbol$1 = symbolOrString('Extensible.state');

var symbol$2 = symbolOrString('destructor');

var symbol$3 = symbolOrString('Extensible.on');

var symbol$4 = symbolOrString('Extensible.trigger');

var symbol$5 = symbolOrString('Extensible.add');

var symbol$6 = symbolOrString('Extensible.remove');

var Base = function Base() {
  classCallCheck(this, Base);
};

function remove$1() {
	delete this.pool[this.id];
}

function removeAll$1() {
	var _this = this;

	Object.keys(this.pool).forEach(function (eid) {
		delete _this.pool[eid];
	});
}

var Receipt = function Receipt() {
  classCallCheck(this, Receipt);
};

var OnEventBoundReceipt = function (_Receipt) {
	inherits(OnEventBoundReceipt, _Receipt);

	function OnEventBoundReceipt(pool) {
		classCallCheck(this, OnEventBoundReceipt);

		var _this = possibleConstructorReturn(this, (OnEventBoundReceipt.__proto__ || Object.getPrototypeOf(OnEventBoundReceipt)).call(this));

		_this[symbol] = {
			pool: pool,
			uid: uid()
		};
		return _this;
	}

	createClass(OnEventBoundReceipt, [{
		key: 'remove',
		value: function remove() {
			return remove$1.call(this);
		}
	}, {
		key: 'removeAll',
		value: function removeAll() {
			return removeAll$1.call(this);
		}
	}, {
		key: 'debounce',
		value: function debounce(time) {
			var method = this.pool[this.uid];
			method.debounce(time);
			return this;
		}
	}, {
		key: 'throttle',
		value: function throttle(time) {
			var method = this.pool[this.uid];
			method.throttle(time);
			return this;
		}
	}, {
		key: 'limit',
		value: function limit(count) {
			var method = this.pool[this.uid];
			method.limit = count;
			return this;
		}
	}, {
		key: 'once',
		value: function once() {
			return this.limit(1);
		}
	}, {
		key: 'uid',
		get: function get() {
			return this[symbol].uid;
		},
		set: function set(v) {
			this[symbol].uid = v;
		}
	}, {
		key: 'pool',
		get: function get() {
			return this[symbol].pool;
		},
		set: function set(v) {
			this[symbol].pool = v;
		}
	}]);
	return OnEventBoundReceipt;
}(Receipt);

function isUndefined(u) {
	return typeof u === 'undefined';
}

function isBoolean(u) {
	return typeof u === 'boolean';
}

function debounce$1(fn, time) {
	if (isFunction$1(fn)) {
		var _ret = function () {
			var dbcTimer = void 0;
			return {
				v: function v() {
					var _arguments = arguments;

					clearTimeout(dbcTimer);
					dbcTimer = setTimeout(function () {
						fn.apply(null, _arguments);
					}, time);
				}
			};
		}();

		if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	}
}

function throttle$1(fn, time) {
	var nextCall = 0;
	if (isFunction$1(fn)) {
		return function () {
			var now = new Date().getTime();
			if (nextCall <= now) {
				nextCall = now + time;
				fn.apply(null, arguments);
			}
		};
	}
}

var JSUIFunction = function () {
	function JSUIFunction(original) {
		classCallCheck(this, JSUIFunction);

		original = isFunction$1(original) ? original : function () {};
		this[symbol] = {
			uid: uid(),
			original: original,
			debounce: false,
			throttle: false,
			modified: original,
			context: undefined,
			count: 0,
			limit: Infinity
		};
	}

	createClass(JSUIFunction, [{
		key: 'execute',
		value: function execute() {
			if (this.isAtLimit) {
				return;
			}
			this[symbol].count++;
			return this.modified.apply(null, arguments);
		}
	}, {
		key: 'call',
		value: function call() {
			if (this.isAtLimit) {
				return;
			}
			this[symbol].count++;
			return Function.prototype.call.apply(this.modified, arguments);
		}
	}, {
		key: 'apply',
		value: function apply() {
			if (this.isAtLimit) {
				return;
			}
			this[symbol].count++;
			return Function.prototype.apply.apply(this.modified, arguments);
		}
	}, {
		key: 'debounce',
		value: function debounce$1(time) {
			time = isNumber(time) ? time : false;
			this[symbol].debounce = time;
			this.modify();
			return this;
		}
	}, {
		key: 'throttle',
		value: function throttle$1(time) {
			time = isNumber(time) ? time : false;
			this[symbol].throttle = time;
			this.modify();
			return this;
		}
	}, {
		key: 'modify',
		value: function modify() {
			var modified = this.original;
			var dbcTime = this[symbol].debounce;
			var trlTime = this[symbol].throttle;
			modified = isBoolean(dbcTime) ? modified : debounce$1(modified, dbcTime);
			modified = isBoolean(trlTime) ? modified : throttle$1(modified, trlTime);
			modified = isUndefined(this.context) ? modified : modified.bind(this.context);
			this[symbol].modified = modified;
			return modified;
		}
	}, {
		key: 'uid',
		get: function get() {
			return this[symbol].uid;
		}
	}, {
		key: 'original',
		get: function get() {
			return this[symbol].original;
		},
		set: function set(v) {
			this[symbol].original = v;
			this.modify();
		}
	}, {
		key: 'modified',
		get: function get() {
			return this[symbol].modified;
		}
	}, {
		key: 'context',
		get: function get() {
			return this[symbol].context;
		},
		set: function set(v) {
			this[symbol].context = v;
			this.modify();
		}
	}, {
		key: 'count',
		get: function get() {
			return this[symbol].count;
		}
	}, {
		key: 'limit',
		get: function get() {
			return this[symbol].limit;
		},
		set: function set(v) {
			v = isNumber(v) ? v : Infinity;
			this[symbol].limit = v;
		}
	}, {
		key: 'isAtLimit',
		get: function get() {
			return this[symbol].count >= this[symbol].limit;
		},
		set: function set(v) {
			this[symbol].count = v ? this[symbol].limit : 0;
		}
	}]);
	return JSUIFunction;
}();

function on$1(name, method) {
	if (!isFunction$1(method)) {
		return;
	}
	method = new JSUIFunction(method);
	var events = this[symbol].events;
	var hooks = this[symbol].hooks;
	var pool = events[name];
	if (!pool) {
		var dispatcher = function dispatcher() {
			var _this = this;

			var args = arguments;
			Object.keys(pool).forEach(function (uid) {
				var method = pool[uid];
				method.apply(_this, args);
			});
		};

		events[name] = {};
		pool = events[name];
		
		hooks[name] = dispatcher;
		var element = this.element;
		if (isElement(element)) {
			element.addEventListener(name, dispatcher, false);
		}
	}
	var receipt = new OnEventBoundReceipt(pool);
	receipt.uid = method.uid;
	pool[method.uid] = method;
	return receipt;
}

function constructor() {
	this[symbol] = {
		state: {},
		events: {},
		hooks: {}
	};
}

//symbols
var Extensible$2 = function Extensible$2(descendant) {
	return function (_descendant) {
		inherits(ExtensibleMixin, _descendant);

		function ExtensibleMixin() {
			classCallCheck(this, ExtensibleMixin);

			var _this = possibleConstructorReturn(this, (ExtensibleMixin.__proto__ || Object.getPrototypeOf(ExtensibleMixin)).call(this));

			constructor.call(_this);
			return _this;
		}

		createClass(ExtensibleMixin, [{
			key: symbol$1,
			value: function value(property, _value) {
				var old = this[symbol].state[property];
				if (arguments.length === 1) {
					return old;
				}

				var hasChanged = old !== _value;

				if (hasChanged) {
					this[symbol].state[property] = _value;
					var data = {
						owner: this,
						property: property,
						old: old,
						new: _value
					};
					this[symbol$4]([property + 'Changed', 'Changed'], data);
				}

				return hasChanged;
			}
		}, {
			key: symbol$3,
			value: function value(name, method) {
				if (isString(name) && isFunction$1(method)) {
					return on$1.call(this, name, method);
				}
			}
		}, {
			key: symbol$4,
			value: function value(event, args) {
				var _this2 = this;

				if (isArray(event)) {
					var _ret = function () {
						var results = [];
						event.forEach(function (e) {
							results.push(_this2[symbol$4](e, args));
						});
						return {
							v: results
						};
					}();

					if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
				}

				var hooks = this[symbol].hooks;
				var hook = hooks[event];
				if (isFunction$1(hook)) {
					return hook(args);
				}
			}
		}, {
			key: symbol$5,
			value: function value(item, _value2) {
				var _this3 = this;

				if (isString(item)) {
					addProperty(this, item);
					return;
				}
				if (isArray(item)) {
					item.forEach(function (key) {
						_this3.add(key, _value2);
					});
					return;
				}
				if (isObject(item)) {
					Object.keys(item).forEach(function (key) {
						_this3.add(key, item[key]);
					});
				}
			}
		}, {
			key: symbol$6,
			value: function value(item) {
				var _this4 = this;

				if (isString(item)) {
					delete this[item];
					return;
				}
				if (isArray(item)) {
					item.forEach(function (value) {
						_this4.remove(value);
					});
				}
			}
		}, {
			key: symbol$2,
			value: function value() {
				var _this5 = this;

				Object.keys(this).forEach(function (key) {
					delete _this5[key];
				});
			}
		}]);
		return ExtensibleMixin;
	}(descendant);
};

//symbols
//classes
//mixins
var Extensible = function (_ExtensibleMixin) {
	inherits(Extensible, _ExtensibleMixin);

	function Extensible() {
		classCallCheck(this, Extensible);
		return possibleConstructorReturn(this, (Extensible.__proto__ || Object.getPrototypeOf(Extensible)).apply(this, arguments));
	}

	createClass(Extensible, [{
		key: 'state',
		value: function state() {
			return this[symbol$1].apply(this, arguments);
		}
	}, {
		key: 'on',
		value: function on() {
			return this[symbol$3].apply(this, arguments);
		}
	}, {
		key: 'trigger',
		value: function trigger() {
			return this[symbol$4].apply(this, arguments);
		}
	}, {
		key: 'add',
		value: function add() {
			return this[symbol$5].apply(this, arguments);
		}
	}, {
		key: 'remove',
		value: function remove() {
			return this[symbol$6].apply(this, arguments);
		}
	}, {
		key: 'destructor',
		value: function destructor() {
			return this[symbol$2].apply(this, arguments);
		}
	}, {
		key: 'private',
		get: function get() {
			return this[symbol];
		}
	}]);
	return Extensible;
}(Extensible$2(Base));

function constructor$1() {
	this[symbol].uid = uid();
	this[symbol].Is = {};
}

var identity$5 = new Identity({
	class: 'Distinct',
	major: 1, minor: 0, patch: 0
});

var Distinct = function (_Extensible) {
	inherits(Distinct, _Extensible);

	function Distinct() {
		classCallCheck(this, Distinct);

		var _this = possibleConstructorReturn(this, (Distinct.__proto__ || Object.getPrototypeOf(Distinct)).call(this));

		constructor$1.call(_this);

		//basics
		_this.identity = identity$5;
		return _this;
	}

	createClass(Distinct, [{
		key: 'uid',
		get: function get() {
			return this[symbol].uid;
		}
	}, {
		key: 'identity',
		get: function get() {
			return this.state('identity');
		},
		set: function set(identity) {
			this.state('identity', identity);
			if (!this[symbol].Is[identity]) {
				this[symbol].Is[identity.class] = identity;
			}
		}
	}, {
		key: 'Is',
		get: function get() {
			return this[symbol].Is;
		}
	}]);
	return Distinct;
}(Extensible);

var identity$4 = new Identity({
	class: 'StyleRules',
	major: 1, minor: 0, patch: 0
});

var StyleRules = function (_Distinct) {
	inherits(StyleRules, _Distinct);

	function StyleRules() {
		classCallCheck(this, StyleRules);

		var _this = possibleConstructorReturn(this, (StyleRules.__proto__ || Object.getPrototypeOf(StyleRules)).call(this));

		_this[symbol].styles = {};
		_this.identity = identity$4;
		return _this;
	}

	return StyleRules;
}(Distinct);

//add all the style keys as properties


Object.keys(equivalents).forEach(function (key) {
	Object.defineProperty(StyleRules.prototype, key, {
		get: function get() {
			return this[symbol].styles[key];
		},
		set: function set(value) {
			var old = this[symbol].styles[key];
			this[symbol].styles[key] = value;
			if (isNull(value)) {
				delete this[symbol].styles[key];
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

var JSUIError = function (_Error) {
	inherits(JSUIError, _Error);

	function JSUIError(title, message, severity) {
		classCallCheck(this, JSUIError);
		return possibleConstructorReturn(this, (JSUIError.__proto__ || Object.getPrototypeOf(JSUIError)).call(this));
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

function isUStyleSheetRule(u) {
	return !!(u && u.prototype && (u.prototype instanceof StyleSheetRule || u === StyleSheetRule));
}

function rules(a, b) {
	var importance = b.importance - a.importance;
	var created = b[symbol].created - a[symbol].created;
	if (!importance) {
		return created;
	}
	return importance;
}

var identity$6 = new Identity({
	class: 'StyleSheet',
	major: 1, minor: 0, patch: 0
});

var StyleSheet = function (_Distinct) {
	inherits(StyleSheet, _Distinct);

	function StyleSheet(context) {
		classCallCheck(this, StyleSheet);

		var _this = possibleConstructorReturn(this, (StyleSheet.__proto__ || Object.getPrototypeOf(StyleSheet)).call(this));

		context = context || 'default';

		_this[symbol].rules = {};
		_this[symbol].timer = false;
		_this[symbol].element = false;
		_this[symbol].context = context;

		var contextSheet = Sheets$1[context];
		if (contextSheet) {
			var _ret;

			_this[symbol] = contextSheet[symbol];
			return _ret = _this, possibleConstructorReturn(_this, _ret);
		}

		var element = document.createElement('style');
		element.appendChild(document.createTextNode(""));
		element.setAttribute('id', 'style-' + context);
		document.head.appendChild(element);
		_this[symbol].element = element;
		Sheets$1[context] = _this;

		_this.identity = identity$6;
		return _this;
	}

	createClass(StyleSheet, [{
		key: 'add',
		value: function add(rule) {
			if (isStyleSheetRule(rule)) {
				var rules$$1 = this[symbol].rules;
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
	}, {
		key: 'remove',
		value: function remove(rule) {
			var rules$$1 = this[symbol].rules;
			if (isString(rule)) {
				var entry = rules$$1[rule];
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
	}, {
		key: 'render',
		value: function render(timeout) {
			var _this2 = this;

			var entries = this[symbol].rules;
			clearTimeout(this[symbol].timer);
			if (isNumber(timeout)) {
				this[symbol].timer = setTimeout(this.render.bind(this), timeout);
				return;
			}

			var entryList = Object.keys(entries);
			//check to see if there are any entries
			if (!entryList.length) {
				document.head.removeChild(this[symbol].element);
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
				element.sheet.insertRule(value, 0);
			});

			//enable the new stylesheet and remove the old one
			element.sheet.disabled = false;
			document.head.removeChild(this[symbol].element);
			this[symbol].element = element;
			this.trigger('rendered');
		}
	}, {
		key: 'context',
		get: function get() {
			return this[symbol].context;
		}
	}, {
		key: 'variables',
		get: function get() {},
		set: function set(vars) {}
	}, {
		key: 'sorter',
		get: function get() {
			if (this[symbol].sorter) {
				return this[symbol].sorter;
			}
			return rules;
		},
		set: function set(method) {
			if (isFunction$1(method)) {
				this[symbol].sorter = method;
			}
		}
	}]);
	return StyleSheet;
}(Distinct);

var identity$3 = new Identity({
	class: 'StyleSheetRule',
	major: 1, minor: 0, patch: 0
});

var StyleSheetRule = function (_StyleRules) {
	inherits(StyleSheetRule, _StyleRules);

	function StyleSheetRule(selector, properties) {
		classCallCheck(this, StyleSheetRule);

		var _this = possibleConstructorReturn(this, (StyleSheetRule.__proto__ || Object.getPrototypeOf(StyleSheetRule)).call(this));

		_this.identity = identity$3;
		_this[symbol].importance = 0;
		_this[symbol].created = new Date().valueOf();
		_this[symbol].isSwitchable = false;
		_this[symbol].isOnByDefault = true;
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

			context = context || this[symbol].context || 'default';
			var sheet = Sheets$1[context] || new StyleSheet(context);
			if (!sheet[symbol].rules[this.uid]) {
				sheet.add(this);
				return;
			}

			if (!this.selector) {
				var error = new JSUIError();
				error.throw();
			}
			var styles = [];
			var rendered = '';
			Object.keys(this[symbol].styles).forEach(function (key) {
				var name = equivalents[key];
				var value = _this3[symbol].styles[key];
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
		key: '_on',
		value: function _on(JSUIElement) {
			if (!this.isSwitchable || !this.class) {
				return;
			}
			if (isJSUI(JSUIElement)) {
				JSUIElement.class(this.class).add();
			}
		}
	}, {
		key: '_off',
		value: function _off(JSUIElement) {
			if (!this.isSwitchable || !this.class) {
				return;
			}
			if (isJSUI(JSUIElement)) {
				JSUIElement.class(this.class).remove();
			}
		}
	}, {
		key: 'selector',
		get: function get() {
			return this[symbol].selector;
		},
		set: function set(selector) {
			var _this4 = this;

			var self = this;
			var changed = function changed() {
				var old = _this4[symbol].selector;
				_this4.trigger('selectorChanged', {
					owner: self,
					old: old,
					new: selector
				});
			};

			if (isString(selector)) {
				this[symbol].selector = selector;
				changed();
				return;
			}
			//will need array and object
		}
	}, {
		key: 'media',
		get: function get() {
			return this[symbol].media;
		},
		set: function set(media) {
			var _this5 = this;

			var self = this;
			var changed = function changed() {
				var old = _this5[symbol].media;
				_this5.trigger('mediaChanged', {
					owner: self,
					old: old,
					new: media
				});
			};

			if (isString(media)) {
				this[symbol].media = media;
				changed();
				return;
			}
			//will need array and object
		}
	}, {
		key: 'importance',
		get: function get() {
			return this[symbol].importance || 0;
		},
		set: function set(zindex) {
			var old = this[symbol].importance;
			if (isNumber(zindex)) {
				if (old === zindex) {
					return;
				}
				this[symbol].importance = zindex;
			}
			this.trigger('importanceChanged', { old: old, new: zindex });
		}
	}, {
		key: 'context',
		get: function get() {
			return this[symbol].context || 'default';
		},
		set: function set(context) {
			var old = this[symbol].context;
			if (old === context) {
				return;
			}
			this[symbol].context = context;
			this.trigger('contextChanged', { old: old, new: context });
		}
	}, {
		key: 'isSwitchable',
		get: function get() {
			return this[symbol].isSwitchable;
		},
		set: function set(bool) {
			var old = this[symbol].isSwitchable;
			if (old === bool) {
				return;
			}
			this[symbol].isSwitchable = bool;
			this.trigger('isSwitchableChanged', { old: old, new: bool });
		}
	}, {
		key: 'isOnByDefault',
		get: function get() {
			return this[symbol].isOnByDefault;
		},
		set: function set(bool) {
			var old = this[symbol].isOnByDefault;
			if (old === bool) {
				return;
			}
			this[symbol].isOnByDefault = bool;
			this.trigger('isOnByDefaultChanged', { old: old, new: bool });
		}
	}, {
		key: 'class',
		get: function get() {
			return this[symbol].class;
		},
		set: function set(className) {
			var old = this[symbol].class;
			if (old === className) {
				return;
			}
			this[symbol].class = className;
			this.trigger('classChanged', { old: old, new: className });
		}
	}]);
	return StyleSheetRule;
}(StyleRules);

function isStyleSheetRule(u) {
	return u instanceof StyleSheetRule;
}

var identity$8 = new Identity({
	class: 'StyleInline',
	major: 1, minor: 0, patch: 0
});

var StyleInline = function (_StyleRules) {
	inherits(StyleInline, _StyleRules);

	function StyleInline(host) {
		classCallCheck(this, StyleInline);

		var _this = possibleConstructorReturn(this, (StyleInline.__proto__ || Object.getPrototypeOf(StyleInline)).call(this));

		_this[symbol].host = host || false;

		var handler = function handler() {};
		if (isJSUI(host)) {
			handler = function handler(ev) {
				if (_this[symbol].host && ev.property) {
					_this[symbol].host.element.style[ev.property] = ev.new;
				}
			};
		}
		if (isBehavior(host)) {
			handler = function handler(ev) {
				host.hosts(function (jsui) {
					jsui.element.style[ev.property] = ev.new;
				});
			};
		}

		_this.on('styleChanged', handler);
		_this.identity = identity$8;
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
			return this[symbol].host;
		},
		set: function set(element) {
			if (isJSUI(element)) {
				this[symbol].host = element.element;
			}
		}
	}]);
	return StyleInline;
}(StyleRules);

var identity$7 = new Identity({
	class: 'StyleableHost',
	major: 1, minor: 0, patch: 0
});

var StyleableHost = function (_Distinct) {
	inherits(StyleableHost, _Distinct);

	function StyleableHost(host) {
		classCallCheck(this, StyleableHost);

		var _this = possibleConstructorReturn(this, (StyleableHost.__proto__ || Object.getPrototypeOf(StyleableHost)).call(this));

		_this[symbol].host = host;
		_this.identity = identity$7;
		return _this;
	}

	createClass(StyleableHost, [{
		key: 'switch',
		value: function _switch(style) {
			if (isStyleSheetRule(style)) {
				var styleActions = this[symbol].styleActions = this[symbol].styleActions || {};
				var host = this[symbol].host;

				var action = styleActions[style.uid] || {
					on: style._on.bind(style, host),
					off: style._off.bind(style, host)
				};

				return action;
			}
		}
	}, {
		key: 'Inline',
		get: function get() {
			if (!this[symbol].Inline) {
				this[symbol].Inline = new StyleInline(this[symbol].host);
			}
			return this[symbol].Inline;
		}
	}, {
		key: 'context',
		get: function get() {
			return this[symbol].context;
		},
		set: function set(context) {
			var _this2 = this;

			var host = this[symbol].host;
			var old = this[symbol].context;

			if (old === context) {
				return;
			}

			this[symbol].context = context;
			Object.keys(host[symbol].style.rules).forEach(function (uid) {
				var entry = host[symbol].style.rules[uid];
				Sheets[old].remove(entry.rule);
				entry.rule.render(_this2[symbol].context);
			});

			host.trigger('Style.contextChanged', {
				old: old,
				new: context
			});
		}
	}]);
	return StyleableHost;
}(Distinct);

function constructor$2() {
	this[symbol].context = 'default';
	this[symbol].style = {
		rules: {}
	};
}

var identity$2 = new Identity({
	class: 'Styleable',
	major: 1, minor: 0, patch: 0
});

var Styleable = function (_Distinct) {
	inherits(Styleable, _Distinct);

	function Styleable() {
		classCallCheck(this, Styleable);

		var _this = possibleConstructorReturn(this, (Styleable.__proto__ || Object.getPrototypeOf(Styleable)).call(this));

		constructor$2.call(_this);
		_this.identity = identity$2;
		return _this;
	}

	createClass(Styleable, [{
		key: 'add',
		value: function add(style) {
			if (isStyleSheetRule(style)) {
				var rules = this[symbol].style.rules;
				var entry = rules[style.uid];
				var Style = this.Style;
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
					var sheet = Sheets$1[entry.context];
					if (sheet) {
						sheet.remove(style);
						style.render(Style.context);
					}
					return;
				}
			}
		}
	}, {
		key: 'Style',
		get: function get() {
			if (!this[symbol].Style) {
				this[symbol].Style = new StyleableHost(this);
			}
			return this[symbol].Style;
		}
	}]);
	return Styleable;
}(Distinct);

var identity$1 = new Identity({
	class: 'Behavior',
	major: 1, minor: 0, patch: 0
});

var Behavior = function (_Styleable) {
	inherits(Behavior, _Styleable);

	function Behavior(host) {
		classCallCheck(this, Behavior);

		//create hosts container
		var _this = possibleConstructorReturn(this, (Behavior.__proto__ || Object.getPrototypeOf(Behavior)).call(this));

		_this[symbol].hosts = {};
		if (host) {
			_this.attach(host);
		}

		//setup new props
		_this.identity = identity$1;
		_this.Style.context = 'behavior';
		return _this;
	}

	createClass(Behavior, [{
		key: 'attach',
		value: function attach(host) {
			var _this2 = this;

			if (isJSUI(host)) {
				var _ret = function () {
					var id = host.uid;
					var addAs = _this2.identity.class;
					if (_this2[symbol].hosts[id]) {
						return {
							v: void 0
						};
					}
					_this2[symbol].hosts[id] = host;
					host[addAs] = _this2;
					_this2.trigger('attach', host);
					return {
						v: {
							as: function (name) {
								delete host[addAs];
								host[name] = this;
							}.bind(_this2)
						}
					};
				}();

				if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
			}
		}
	}, {
		key: 'detach',
		value: function detach(host) {
			var id = void 0;
			if (isJSUI(host)) {
				id = host.uid;
			}
			host = this[symbol].hosts[id];
			delete this[symbol].hosts[id];
			this.trigger('detach', host);
		}
	}, {
		key: 'hosts',
		value: function hosts(each) {
			var results = [];
			var hasTask = isFunction$1(each);
			var hosts = this[symbol].hosts;
			Object.keys(hosts).forEach(function (id) {
				var host = hosts[id];
				if (hasTask) {
					each(host);
				}
				results.push(host);
			});
			return results;
		}
	}, {
		key: 'destructor',
		value: function destructor() {
			get$1(Behavior.prototype.__proto__ || Object.getPrototypeOf(Behavior.prototype), 'destructor', this).call(this);
		}
	}]);
	return Behavior;
}(Styleable);

function isBehavior(u) {
	return u instanceof Behavior;
}

var Types = {
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

var getHandledType$1 = (function getHandledType(u) {
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

function addClass(el, name) {
	if (!isString(name) || !isElement(el)) {
		return;
	}
	if (el.classList && el.classList.add) {
		el.classList.add.apply(el.classList, name.split(' '));
		return;
	}
	var classes = el.className.split(' ');
	if (~classes.indexOf(name)) {
		return;
	}
	classes.push(name);
	el.className = classes.join(' ');
}

function add$1(host, name, defaultValue) {
	Object.defineProperty(host, name, {
		get: function get() {
			var value = this[symbol].state.hasOwnProperty(name) ? this[symbol].state[name] : defaultValue;
			return value;
		},
		set: function set(v) {
			var value = this[symbol].state.hasOwnProperty(name) ? this[symbol].state[name] : defaultValue;
			var old = value;
			value = v;
			if (old !== v) {
				this[symbol].state[name] = value;
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
	tag = tag || 'div';
	this.element = document.createElement(tag);
	return tag;
}

var Constructor = {
	element: _element,
	string: _string$1
};

function constructor$3(tag) {
	//select the proper constructor action
	var type = getHandledType$1(tag);
	var action = Constructor[type];
	tag = (action || function () {
		return Constructor.string.call(this, 'div');
	}).call(this, tag);

	//set up ids
	this.element.uid = this.uid;

	//add references 
	var development = defaults.Development;
	if (development.enabled && development.references) {
		this.element.JSUI = this;
	}

	return this;
}

function destructor$2() {
	var _this = this;

	var _element = this.element;
	var _private = this[symbol];
	if (_element) {
		var parent = _element.parentNode;
		if (isFunction$1(_element.remove)) {
			_element.remove();
		} else if (parent && isFunction$1(parent.removeChild)) {
			parent.removeChild(_element);
		}
	}
	var _style = this.style;
	if (_style && _style.Host) {
		delete _style.Host;
	}
	var _parent = _private.parent;
	if (_parent) {
		if (_private && _private.mapped) {
			var map = _private.mapped[_parent.uid];
			if (isArray(map)) {
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

	Object.keys(this).forEach(function (key) {
		delete _this[key];
	});

	//ensure GC picks em' up
	_element = null;
	_private = null;
	_parent = null;
	_children = null;
	return true;
}

function _element$1(element) {
	if (this.element) {
		this.element.appendChild(element);
	}
}

var ElementReceipt = function (_Receipt) {
	inherits(ElementReceipt, _Receipt);

	function ElementReceipt(element) {
		classCallCheck(this, ElementReceipt);

		var _this = possibleConstructorReturn(this, (ElementReceipt.__proto__ || Object.getPrototypeOf(ElementReceipt)).call(this));

		_this[symbol] = {
			element: element || false
		};
		return _this;
	}

	createClass(ElementReceipt, [{
		key: 'element',
		get: function get() {
			return this[symbol].element;
		},
		set: function set(element) {
			this[symbol].element = element;
		}
	}]);
	return ElementReceipt;
}(Receipt);

var ElementAddedReceipt = function (_ElementReceipt) {
	inherits(ElementAddedReceipt, _ElementReceipt);

	function ElementAddedReceipt(element, addition) {
		classCallCheck(this, ElementAddedReceipt);

		var _this = possibleConstructorReturn(this, (ElementAddedReceipt.__proto__ || Object.getPrototypeOf(ElementAddedReceipt)).call(this, element));

		_this[symbol].addition = addition;
		return _this;
	}

	createClass(ElementAddedReceipt, [{
		key: 'as',
		value: function as(name) {
			var element = this[symbol].element;
			var addition = this[symbol].addition;
			var uid = element.uid;
			if (name) {
				element[name] = addition;
				addition[symbol].mapped = addition[symbol].mapped || {};
				var map = addition[symbol].mapped;
				map[uid] = map[uid] || [];
				map[uid].push(name);
				addition.attribute('as', name);
				addClass(addition.element, 'as-' + name);
			}
			return addition;
		}
	}]);
	return ElementAddedReceipt;
}(ElementReceipt);

function _jsui(instance) {
	if (this.element && instance.element) {
		this.element.appendChild(instance.element);
		this[symbol].children = this[symbol].children || {};
		this[symbol].children[instance.uid] = instance;
		instance[symbol].parent = this;

		var Style = instance.Style;
		Style.context = Style.context === 'default' ? this.Style.context : Style.context;
	}
	var receipt = new ElementAddedReceipt(this, instance);
	return receipt;
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
	add$1(this, prop);
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

function isUBehavior(u) {
	return !!(u && u.prototype && (u.prototype instanceof Behavior || u === Behavior));
}

function _function(method) {
	if (isUJSUI(method)) {
		return this.add(new method());
	}
	if (isUBehavior(method)) {
		return this.add(new method());
	}
}

function _behavior(instance) {
	return instance.attach(this);
}

var Add = {
	element: _element$1,
	jsui: _jsui,
	array: _array,
	string: _string$2,
	html: _html,
	path: _path,
	function: _function,
	behavior: _behavior
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

function _string$3(name, method) {
	return on$1.call(this, name, method);
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
	var _this = this;

	var results = [];
	var isJSUI = Element$1.isPrototypeOf(method.prototype);
	if (isJSUI) {
		(function () {
			var proto = method.prototype;
			_this.children(function (child) {
				if (proto.isPrototypeOf(child)) {
					results.push(child);
				}
			});
		})();
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
		if (isArray(args)) {
			return this[command].apply(this, args);
		}
		return this[command](args);
	}
}

function getter(obj, prop) {
	if (!obj || !isObject(obj)) {
		return;
	}
	return obj[prop];
}

function get$2(obj, path) {
	if (isString(path)) {
		return path.substring(1).split('.').reduce(getter, obj);
	}
	if (isArray(path)) {
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
	var reference = get$2(obj, parts);
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
		if (isArray(args)) {
			return method.apply(path.context, args);
		}
		return method.call(path.context, args);
	}
}

function _function$2(method, args) {
	method.call(this, args);
	return this;
}

var Do = {
	array: _array$6,
	object: _object$2,
	string: _string$6,
	path: _path$4,
	function: _function$2
};

function _array$7(collection) {
	var _this = this;

	var results = [];
	collection.forEach(function (item) {

		var result = _this.get(item);
		results.push(result);

		if (isString(item)) {
			results[item] = result;
		}
	});
	return results;
}

function _string$7(property) {
	if (!property) {
		return;
	}
	return this[property];
}

function _path$5(path) {
	return get$2(this, path);
}

var Get = {
	array: _array$7,
	string: _string$7,
	path: _path$5
};

function _object$3(properties, value) {
	var _this = this;

	var results = {};
	properties.forEach(function (command) {
		results[command] = _this.set(command, value);
	});
	return results;
}

function _object$4(assignments) {
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
	var reference = get$2(obj, parts);
	if (reference) {
		reference[tail[0]] = value;
		return true;
	}
	return false;
}

function set$2(obj, path, value) {
	return setter(obj, path, value);
}

function _path$6(path, value) {
	return set$2(this, path, value);
}

var Set = {
	array: _object$3,
	object: _object$4,
	string: _string$8,
	path: _path$6
};

function _string$9(text) {
	if (this[symbol] && this.element) {
		if (!this[symbol].text) {
			var textNode = document.createTextNode(text);
			this[symbol].text = textNode;
			this.element.appendChild(textNode);
			return true;
		}
		this[symbol].text.nodeValue = text;
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

function placeholder() {}
function nodeAttributes(node, callback) {
	if (!isFunction$1(callback)) {
		callback = placeholder;
	}
	if (!isElement(node)) {
		return;
	}
	var attributeList = node.attributes;
	var attributes = {};
	for (var i = attributeList.length - 1; i >= 0; i--) {
		var attribute = attributeList[i];
		var name = attribute.name;
		var value = attribute.value;
		attributes[name] = value;
		if (callback(name, value, attribute)) {
			break;
		}
	}
	return attributes;
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

function _object$5(macro, value) {
	var _this = this;

	var result = isObject(value) ? value : {};
	Object.keys(macro).forEach(function (attribute) {
		results[attribute] = _this.attribute(attribute, macro[attribute]);
	});
	return results;
}

function _get_object(macro) {
	return _object$5.call(this, macro);
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

function _array$8(collection, value) {
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
		array: _array$8,
		object: _object$5
	}
};

function _array$9(collection) {
	var _this = this;

	var results = [];
	collection.forEach(function (item) {
		results.push(_this.class(item));
	});
	return results;
}

function _object$6(classes) {
	var className = '';
	Object.keys(classes).forEach(function (name) {
		if (classes[name]) {
			className += name;
		}
	});
	this.element.className = className;
	return className;
}

function getClasses(el) {
	if (!isElement(el)) {
		return;
	}
	var classes = {};
	if (isString(el.className)) {
		var list = el.className.split(' ');
		if (isArray(list)) {
			list.forEach(function (name) {
				classes[name] = true;
			});
		}
	}
	return classes;
}

var ElementClassReceipt = function (_ElementReceipt) {
	inherits(ElementClassReceipt, _ElementReceipt);

	function ElementClassReceipt(element, className) {
		classCallCheck(this, ElementClassReceipt);

		var _this = possibleConstructorReturn(this, (ElementClassReceipt.__proto__ || Object.getPrototypeOf(ElementClassReceipt)).call(this, element));

		_this.element = element;
		_this[symbol].classes = className.split(' ');
		return _this;
	}

	createClass(ElementClassReceipt, [{
		key: 'add',
		value: function add() {
			var existing = getClasses(this.element) || {};
			this[symbol].classes.forEach(function (name) {
				existing[name] = true;
			});
			this.element.className = Object.keys(existing).join(' ');
			return existing;
		}
	}, {
		key: 'remove',
		value: function remove() {
			var existing = getClasses(this.element) || {};
			this[symbol].classes.forEach(function (name) {
				delete existing[name];
			});
			this.element.className = Object.keys(existing).join(' ');
			return existing;
		}
	}, {
		key: 'toggle',
		value: function toggle() {
			var existing = getClasses(this.element) || {};
			this[symbol].classes.forEach(function (name) {
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
			var classes = this[symbol].classes;
			var count = classes.length;
			for (var i = 0; i < count; i++) {
				var name = classes[i];
				if (!existing[name]) {
					return false;
				}
			}
			return true;
		}
	}]);
	return ElementClassReceipt;
}(ElementReceipt);

function _string$10(name) {
	if (isEmptyString(name)) {
		return;
	}
	return new ElementClassReceipt(this.element, name);
}

function _path$8() {
	return _string$10.apply(this, arguments);
}

function _undefined$3() {
	return getClasses(this.element);
}

var Class = {
	array: _array$9,
	object: _object$6,
	string: _string$10,
	path: _path$8,
	undefined: _undefined$3
};

var symbol$7 = symbolOrString('on');

var symbol$8 = symbolOrString('trigger');

//constructor & destructor
//handlers
//classes
//symbols
var identity = new Identity({
	class: 'Element',
	major: 1, minor: 0, patch: 0
});

var Element$1 = function (_Styleable) {
	inherits(Element, _Styleable);

	function Element(tag) {
		classCallCheck(this, Element);

		var _this = possibleConstructorReturn(this, (Element.__proto__ || Object.getPrototypeOf(Element)).call(this, tag));

		constructor$3.call(_this, tag);
		_this.identity = identity;
		_this.on('Style.contextChanged', function () {
			//if not default, change the context of the child elements
			var context = _this.Style.context;
			_this.children(function (child) {
				//allow context to only change once
				var childStyle = child.Style;
				childStyle.context = childStyle.context === 'default' ? context : childStyle.context;
			});
		});
		return _this;
	}

	createClass(Element, [{
		key: symbol$7,
		value: function value(event, method) {
			var type = getHandledType$1(event);
			var action = On[type];
			return (action || unhandled).call(this, event, method);
		}
	}, {
		key: symbol$8,
		value: function value(event, args) {
			var type = getHandledType$1(event);
			var action = Trigger[type];
			get$1(Element.prototype.__proto__ || Object.getPrototypeOf(Element.prototype), 'trigger', this).call(this, event, args);
			return (action || unhandled).call(this, event, args);
		}
	}, {
		key: 'add',
		value: function add(item) {
			var type = getHandledType$1(item);
			var action = Add[type];
			return (action || get$1(Element.prototype.__proto__ || Object.getPrototypeOf(Element.prototype), 'add', this) || unhandled).call(this, item);
		}
	}, {
		key: 'addTo',
		value: function addTo(item) {
			var type = getHandledType$1(item);
			var action = AddTo[type];
			return (action || unhandled).call(this, item);
		}
	}, {
		key: 'remove',
		value: function remove(item) {
			var type = getHandledType$1(item);
			var action = Remove[type];
			return (action || unhandled).call(this, item);
		}
	}, {
		key: 'on',
		value: function on() {
			return this[symbol$7].apply(this, arguments);
		}
	}, {
		key: 'trigger',
		value: function trigger() {
			return this[symbol$8].apply(this, arguments);
		}
	}, {
		key: 'find',
		value: function find(what) {
			var type = getHandledType$1(what);
			var action = Find[type];
			return (action || unhandled([])).call(this, what);
		}
	}, {
		key: 'do',
		value: function _do(method, args) {
			var type = getHandledType$1(method);
			var action = Do[type];
			return (action || unhandled).call(this, method, args);
		}
	}, {
		key: 'get',
		value: function get(property) {
			var type = getHandledType$1(property);
			var action = Get[type];
			return (action || unhandled).call(this, property);
		}
	}, {
		key: 'set',
		value: function set(property, value) {
			var type = getHandledType$1(property);
			var action = Set[type];
			return (action || unhandled).call(this, property, value);
		}
	}, {
		key: 'text',
		value: function text(_text) {
			var type = getHandledType$1(_text);
			var action = Text[type];
			return (action || unhandled).call(this, _text);
		}
	}, {
		key: 'attribute',
		value: function attribute(name, value) {
			if (!isElement(this.element) || isEmptyString(name)) {
				return;
			}
			var type = getHandledType$1(name);
			var isSet = arguments.length > 1;
			var action = Attribute[isSet ? 'Set' : 'Get'][type];
			return (action || unhandled).apply(this, [name, value]);
		}
	}, {
		key: 'class',
		value: function _class(name) {
			var type = getHandledType$1(name);
			var action = Class[type];
			return (action || unhandled).call(this, name);
		}
	}, {
		key: 'children',
		value: function children() {
			var _this2 = this;

			var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {
				return true;
			};

			var results = [];
			if (this[symbol] && this[symbol].children) {
				(function () {
					var children = _this2[symbol].children;
					Object.keys(children).forEach(function (id) {
						var child = children[id];
						if (child) {
							if (callback(child, id)) {
								results.push(child);
							}
						}
					});
				})();
			}
			return results;
		}
	}, {
		key: 'destructor',
		value: function destructor() {
			destructor$2.call(this);
		}
	}, {
		key: 'identity',
		get: function get() {
			return get$1(Element.prototype.__proto__ || Object.getPrototypeOf(Element.prototype), 'identity', this);
		},
		set: function set(identity) {
			set$1(Element.prototype.__proto__ || Object.getPrototypeOf(Element.prototype), 'identity', identity, this);
			if (identity.namespace) {
				addClass(this.element, identity.namespace);
			}
			// else {} throw error here later
			if (identity.class) {
				addClass(this.element, identity.class);
			}
			// else {} also throw one here later
		}
	}]);
	return Element;
}(Styleable);

function isJSUI(u) {
	return u instanceof Element$1;
}

var tags = ['a', 'abbr', 'acronym', 'address', 'applet', 'area', 'article', 'aside', 'audio', 'b', 'base', 'basefont', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'command', 'datalist', 'dd', 'del', 'details', 'dfn', 'dir', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'menu', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'video', 'wbr'];

var Natives = {};
tags.forEach(function (tag) {
	Natives[tag] = true;
});

function isNativeTag(u) {
	return !!Natives[u];
}

function isTextNode(u) {
	return !!(u && u.nodeName === "#text");
}

var symbol$9 = symbolOrString('uid');

function addHiddenValue(obj, prop, value) {
	Object.defineProperty(obj, prop, {
		configurable: true,
		enumerable: false,
		writable: true,
		value: value
	});
}

function constructor$4() {
	var values = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	addHiddenValue(this, symbol, {
		events: {},
		hooks: {},
		state: values
	});
	addHiddenValue(this, symbol$9, uid());
}

var Data = function () {
	function Data(values) {
		classCallCheck(this, Data);

		constructor$4.call(this, values);
	}

	createClass(Data, [{
		key: symbol$7,
		value: function value(event, method) {
			var type = getHandledType$1(event);
			var action = On[type];
			return (action || unhandled).call(this, event, method);
		}
	}, {
		key: symbol$8,
		value: function value(event, args) {
			var type = getHandledType$1(event);
			var action = Trigger[type];
			return (action || unhandled).call(this, event, args);
		}
	}, {
		key: 'toJSON',
		value: function toJSON() {
			return this[symbol].state;
		}
	}]);
	return Data;
}();

function isData(u) {
	return u instanceof Data;
}

function isUData(u) {
	return !!(u && u.prototype && (u.prototype instanceof Data || u === Data));
}

var TypeChecks = {
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
	isUData: isUData,
	isBoolean: isBoolean
};

function _string$11(command, args) {
	var results = [];
	this.forEach(function (item) {
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

var DoToEach = {
	string: _string$11,
	path: _path$9
};

var Collection = function (_Array) {
	inherits(Collection, _Array);

	function Collection(target) {
		classCallCheck(this, Collection);

		var _this = possibleConstructorReturn(this, (Collection.__proto__ || Object.getPrototypeOf(Collection)).call(this));

		if (isArray(target)) {
			target.forEach(function (item) {
				_this.push(item);
			});
		}
		return _this;
	}

	createClass(Collection, [{
		key: 'doToEach',
		value: function doToEach(method, args) {
			var type = getHandledType$1(method);
			var action = DoToEach[type];
			return (action || unhandled).call(this, method, args);
		}
	}]);
	return Collection;
}(Array);

var ElementCollection = function (_Collection) {
	inherits(ElementCollection, _Collection);

	function ElementCollection(target) {
		var _ret;

		classCallCheck(this, ElementCollection);

		var _this = possibleConstructorReturn(this, (ElementCollection.__proto__ || Object.getPrototypeOf(ElementCollection)).call(this, target));

		return _ret = _this.doToEach('constructor', arguments), possibleConstructorReturn(_this, _ret);
	}

	createClass(ElementCollection, [{
		key: 'add',
		value: function add() {
			return this.doToEach('add', arguments);
		}
	}, {
		key: 'addTo',
		value: function addTo() {
			return this.doToEach('addTo', arguments);
		}
	}, {
		key: 'remove',
		value: function remove() {
			return this.doToEach('remove', arguments);
		}
	}, {
		key: 'on',
		value: function on() {
			return this.doToEach('on', arguments);
		}
	}, {
		key: 'trigger',
		value: function trigger() {
			return this.doToEach('trigger', arguments);
		}
	}, {
		key: 'find',
		value: function find() {
			return this.doToEach('find', arguments);
		}
	}, {
		key: 'do',
		value: function _do() {
			return this.doToEach('do', arguments);
		}
	}, {
		key: 'get',
		value: function get() {
			return this.doToEach('get', arguments);
		}
	}, {
		key: 'set',
		value: function set() {
			return this.doToEach('set', arguments);
		}
	}, {
		key: 'text',
		value: function text() {
			return this.doToEach('text', arguments);
		}
	}, {
		key: 'attribute',
		value: function attribute() {
			return this.doToEach('attribute', arguments);
		}
	}, {
		key: 'class',
		value: function _class() {
			return this.doToEach('class', arguments);
		}
	}, {
		key: 'children',
		value: function children() {
			return this.doToEach('children', arguments);
		}
	}, {
		key: 'destructor',
		value: function destructor() {
			return this.doToEach('destructor', arguments);
		}
	}]);
	return ElementCollection;
}(Collection);

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
    var cleaned = dirty.replace(/^[^-_a-zA-Z]+/, '_').replace(/^-(?:[-0-9]+)/, '_');
    var result = cleaned && cleaned.replace(/[^-_a-zA-Z0-9]+/g, '_');
    return result;
}

function feval(code) {
	return new Function(code)();
}

var classCreate = (function create(name, tag, inherits, constructor) {
	name = cleanName(name);
	tag = tag.toLowerCase();
	var inherit = inherits || Element$1;
	var construct = constructor || constructor$5;
	var identity = new Identity({
		class: name,
		major: 1, minor: 0, patch: 0
	});
	var src = '\n\t\treturn (function(element, constructor, identity) {\n\t\t\tfunction ' + name + '() {\n\t\t\t\tconstructor.call(this, \'' + tag + '\');\n\t\t\t\tthis.identity = identity;\n\t\t\t}\n\t\t\t' + name + '.prototype = Object.create(element.prototype);\n\t\t\t' + name + '.constructor = ' + name + ';\n\t\t\treturn ' + name + ';\t\t\t\t\t\n\t\t})\n\t';
	return feval.call(window, src)(inherit, construct, identity);
});

function capitalize(text) {
	return text.charAt(0).toUpperCase() + text.slice(1);
}

var Elements = {};
tags.forEach(function (tag) {
	var name = capitalize(tag);
	try {
		Elements[name] = classCreate(name, tag);
	} catch (e) {
		Elements[name] = classCreate(tag, tag);
	}
});

var identity$9 = new Identity({
	class: 'StyleVariables',
	major: 1, minor: 0, patch: 0
});

var StyleVariables = function (_Distinct) {
	inherits(StyleVariables, _Distinct);

	function StyleVariables() {
		classCallCheck(this, StyleVariables);

		var _this = possibleConstructorReturn(this, (StyleVariables.__proto__ || Object.getPrototypeOf(StyleVariables)).call(this));

		_this.identity = identity$9;
		return _this;
	}

	createClass(StyleVariables, [{
		key: 'add',
		value: function add(name, value) {
			var _this2 = this;

			if (isString(name)) {
				add$1(this, name, value);
				this.trigger('variableAdded', {
					name: name,
					value: value
				});
				return;
			}
			if (isObject(name)) {
				Object.keys(name).forEach(function (key) {
					_this2.add(key, name[key]);
				});
			}
		}
	}, {
		key: 'remove',
		value: function remove(name) {
			var _this3 = this;

			if (isString(name)) {
				if (this[name]) {
					delete this[name];
					trigger('variableRemoved', name);
					return true;
				}
				return false;
			}
			if (isArray(name)) {
				name.forEach(function (key) {
					_this3.remove(key);
				});
				return true;
			}
		}
	}]);
	return StyleVariables;
}(Distinct);

var Classes = {
	Behavior: Behavior,
	Collection: Collection,
	Distinct: Distinct,
	Receipt: Receipt,
	ElementReceipt: ElementReceipt,
	ElementClassReceipt: ElementClassReceipt,
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
	Identity: Identity,
	Function: JSUIFunction
};

//symbols
var Constants = {
	CSS: {
		equivalents: equivalents,
		vendors: vendors
	},
	HTML: {
		tags: tags
	},
	Symbols: {
		Extensible: {
			on: symbol$3,
			trigger: symbol$4,
			add: symbol$5,
			remove: symbol$6
		},
		on: symbol$7,
		private: symbol,
		state: symbol$1,
		trigger: symbol$8,
		uid: symbol$9,
		destructor: symbol$2
	}
};

var Singletons = {
	Style: {
		Sheets: Sheets$1
	}
};

function placeholder$1() {}
function childNodes(node, callback) {
	if (!isFunction$1(callback)) {
		callback = placeholder$1;
	}
	if (!isElement(node)) {
		return;
	}
	var children = [];
	var count = node.childNodes.length;
	for (var i = 0; i < count; i++) {
		var child = node.childNodes[i];
		children.push(child);
		if (callback(child)) {
			break;
		}
	}
	return children;
}

function getFirstNonTextChild(node) {
	if (isElement(node)) {
		var root = void 0;
		childNodes(node, function (child) {
			if (!isTextNode(child)) {
				root = child;
				return true;
			}
		});
		return root;
	}
}

function getTextNodes(el, stopAtFirst) {
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

var ObjectPrototype = Object.getPrototypeOf({});
function getAll(obj) {
	//code modified from airportyh, http://stackoverflow.com/questions/8024149/is-it-possible-to-get-the-non-enumerable-inherited-property-names-of-an-object
	var props = [];
	do {
		Object.getOwnPropertyNames(obj).forEach(function (prop) {
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
var Utilities = {
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
		on: on$1,
		remove: remove$1,
		removeAll: removeAll$1
	},
	Functions: {
		debounce: debounce$1,
		throttle: throttle$1
	},
	General: {
		uid: uid
	},
	Paths: {
		get: get$2,
		getter: getter,
		set: set$2,
		setter: setter,
		getWithContext: getWithContext
	},
	Properties: {
		add: add$1,
		doOrSet: doOrSet,
		getAll: getAll
	},
	Strings: {
		capitalize: capitalize,
		uncapitalize: uncapitalize
	}
};

var Sorts = {
	StyleSheet: {
		rules: rules
	}
};

function subconstructor(name, namespace, Subclasses) {
	var self = this;
	Object.defineProperty(this, '$name', {
		configurable: true,
		enumerable: false,
		writable: true,
		value: '' + name
	});
	Object.defineProperty(this, '$uid', {
		configurable: true,
		enumerable: false,
		writable: true,
		value: '' + namespace
	});
	Object.keys(Subclasses).forEach(function (key) {
		var subclass = new Subclasses[key]();
		Object.defineProperty(subclass, '$parent', {
			configurable: true,
			enumerable: false,
			writable: true,
			value: self
		});
		self[key] = subclass;
		subclass.$on('Changed', function (e) {
			e.name = self.$name;
			e.namespace = self.$namespace;
			self.$trigger('Changed', e);
		});
	});
}

function create$1(name, json, namespace) {
	name = cleanName(name);
	namespace = namespace || name;
	var Subclasses = {};
	var src = '\n\t\treturn (function(name, namespace, structure, Data, Subclasses, constructor, subconstructor) {\n\t\t\tfunction ' + name + '() {\n\t\t\t\tconstructor.call(this);\n\t\t\t\tsubconstructor.call(this, name, namespace, Subclasses);\n\t\t\t}\n\t\t\t' + name + '.prototype = Object.create(Data.prototype);\n\t\t\t' + name + '.constructor = ' + name + ';\n\t\t\t' + name + '.prototype.toJSON = function toJSON() {\n\t\t\t\tlet self = this;\n\t\t\t\tlet copy = {};\n\t\t\t\tObject.keys(structure).forEach(function(key) {\n\t\t\t\t\tcopy[key] = self[key];\n\t\t\t\t});\n\t\t\t\treturn copy;\n\t\t\t};\n\t\t\treturn ' + name + ';\n\t\t})\n\t';
	var DataClass = feval.call(window, src)(name, namespace, json, Data, Subclasses, constructor$4, subconstructor);
	Object.keys(json).forEach(function (key) {
		var value = json[key];
		if (isObject(value)) {
			Subclasses[key] = create$1(key, value, name + '.' + key);
			return;
		}
		Object.defineProperty(DataClass.prototype, key, {
			get: function get() {
				var state = this.$private.state;
				if (!state.hasOwnProperty(key)) {
					return value;
				}
				return this.$private.state[key];
			},
			set: function set(v) {
				var state = this.$private.state;
				if (state) {
					var old = state[key];
					state[key] = v;
					if (old !== v) {

						var data = {
							owner: this,
							property: key,
							old: old,
							new: v
						};

						var trigger = state.$trigger;
						if (!trigger) {
							trigger = this.$trigger.bind(this);
							state.$trigger = trigger;
						}

						if (trigger) {
							trigger([key + 'Changed', 'Changed'], data);
						}
					}
					return;
				}
			},
			configurable: true,
			enumerable: true
		});
	});
	return DataClass;
}

function onParsedElementChanged(ev) {
	var data = ev ? ev.detail : false;
	if (data) {
		var owner = data.owner;
		var attribute = data.property;
		var value = data.new;
		if (owner && owner.element && isFunction$1(owner.element.getAttribute)) {
			owner.element.getAttribute(attribute, isObject(value) ? JSON.stringify(value) : value);
		}
	}
}

function _default(node, classes, container) {
	var tag = getTagName(node);
	var type = tag.split('-').reduce(getter, classes);
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
		instance.on(name + 'Changed', onParsedElementChanged);
		instance[name] = value;
	}
	var textNodes = [];
	childNodes(node, function (child) {
		if (isTextNode(child)) {
			var _node = document.createTextNode("");
			instance.element.appendChild(_node);
			instance[symbol].text = _node;
			textNodes.push({ node: _node, value: child.nodeValue });
			return;
		}
		var as = child.getAttribute('as');
		var handle = instance.add(_default(child, classes));
		if (as) {
			if (handle && isFunction(handle.as)) {
				handle.as(as);
			}
		}
		return;
	});
	//for some reason, text nodes need to be set at the end
	textNodes.forEach(function (textNode) {
		textNode.node.nodeValue = textNode.value;
	});
	return instance;
}

function htmlToInstructions(node, classes, state) {
	var isRoot = false;
	if (!state) {
		state = {
			map: {},
			aliases: {},
			Counts: {
				element: 0,
				instance: 0,
				text: 0
			}
		};
		isRoot = true;
	}
	var tag = getTagName(node);
	var directory = state.map[tag];
	var alias = void 0;
	if (!directory) {
		var type = tag.split('-').reduce(getter, classes);
		if (!isUJSUI(type)) {
			return;
		}
		alias = 'element' + state.Counts.element;
		state.Counts.element++;
		directory = {
			type: type,
			alias: alias
		};
		state.map[tag] = directory;
		state.aliases[alias] = directory;
	}
	if (!alias) {
		alias = directory.alias;
	}
	var as = node.getAttribute('as');
	var name = 'instance' + state.Counts.instance;
	state.Counts.instance++;
	var comments = "\t\/\/ " + (as || 'Anonymous Element');
	var instantiation = '\tlet ' + name + ' = ' + (isRoot ? 'this' : 'new ' + alias + '();');

	var assignments = [];
	var instructions = [];
	var texts = [];
	childNodes(node, function (child) {
		if (isTextNode(child)) {
			var textName = 'text' + state.Counts.text;
			instructions.push('\tlet ' + textName + ' = document.createTextNode(\'\');');
			instructions.push('\t' + name + '.element.appendChild(' + textName + ');');
			assignments.push({
				name: textName,
				value: child.nodeValue
			});
			state.Counts.text++;
			return;
		}
		instructions.push('\n');
		var instruction = htmlToInstructions(child, classes, state);
		var childName = instruction.name;
		instructions.push(instruction.code);
		instructions.push('\n\t\/\/ Adding Children');
		instructions.push('\t' + name + '.add(' + childName + ')' + (as ? '.as(\'' + as + '\')' : '') + ';');
		instructions.push('\n\t\/\/ Text Node Assignments');
		texts.push(instruction.text);
		return;
	});
	//add the last text as primary
	var lastText = assignments[assignments.length - 1];
	var lastTextName = lastText.name;
	instructions.push('\t' + name + '.private.text = ' + lastTextName + ';');
	assignments = Array.prototype.concat.apply(assignments, texts);
	instructions = instructions.join('\n');
	return {
		tag: tag,
		directory: directory,
		name: name,
		code: [comments, instantiation, instructions].join('\n'),
		as: as,
		text: assignments,
		state: state
	};
}

function _class$1(node, classes, container) {
	var children = node.childNodes;
	var count = children.length;
	var root = getFirstNonTextChild(node);
	if (!root) {
		return;
	}
	var tag = getTagName(root);
	var name = container.getAttribute('name') || 'Anonymous' + uid();
	var inherits = container.getAttribute('inherits');
	var asTag = container.getAttribute('tag') || tag;
	var parent = void 0;
	if (inherits) {
		parent = inherits.split('-').reduce(getter, classes);
	}
	parent = parent || element;
	var instruction = htmlToInstructions(root, classes);
	var aliases = Object.keys(instruction.state.aliases);
	//build headers
	var header = ['\n\t\/\/ Imports'];
	aliases.forEach(function (alias) {
		header.push('\tlet ' + alias + ' = classes.' + alias + '.type;');
	});
	header.push('\n');
	//build text
	var texts = {};
	var textNodes = [];
	instruction.text.forEach(function (text) {
		var name = text.name;
		var value = text.value;
		texts[name] = value;
		textNodes.push('\t' + name + '.nodeValue = texts.' + name + ';');
	});
	var built = '\n return (function compile(element, constructor, classes, texts, inherits) {\n' + header.join('\n') + ('\n\tfunction ' + name + '() { \n') + '\tconstructor = (inherits === element ? constructor : inherits.constructor);\n' + ('\tconstructor.call(this, \'' + asTag + '\'); \n') + ('\tthis.type = \'' + name + '\'; \n\n') + '\t// Generated \n' + instruction.code + '\n\n' + '\t// Assign Text Values \n' + textNodes.join('\n') + '\n}\n' + ('\n\t' + name + '.prototype = Object.create(inherits.prototype);\n') + ('\n\t' + name + '.constructor = ' + name + ';\n') + ('\t return ' + name + ';\n') + '});';
	var compiled = feval.call(window, built)(Element$1, constructor$3, instruction.state.aliases, texts, parent);
	return compiled;
}

var Tag = {
	default: _default,
	class: _class$1
};

function parse(html, classes) {
	var container = void 0;
	if (isString(html)) {
		container = document.createElement('container');
		container.innerHTML = html;
	}
	if (isElement(html)) {
		container = html;
	}
	if (!container) {
		return;
	}
	var root = getFirstNonTextChild(container);
	var tag = getTagName(root);
	var parser = Tag[tag];
	return (parser || Tag.default).call(this, root, classes || Elements, root);
}

var Reflection = {
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

var Data$2 = {
	fromJSON: create$1
};

var JSUI = {
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

//# sourceMappingURL=JSUI.js.map
