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

function isFunction(u) {
	return typeof u === 'function';
}

var htmlRegex = /^<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)$/;
function isHTML(u) {
	return htmlRegex.test(u);
}

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

function getHandledType$1(types, u) {
	var type = typeof u === "undefined" ? "undefined" : _typeof(u);
	var subtypes = types[type];
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

var defaults$1 = {
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
	return (typeof u === 'undefined' ? 'undefined' : _typeof(u)) === 'object' && u !== null;
}

function isString(u) {
	return typeof u === 'string';
}

function addHiddenValue(obj, prop, value) {
	Object.defineProperty(obj, prop, {
		configurable: true,
		enumerable: false,
		writable: true,
		value: value
	});
}

var namespace = defaults$1.namespace;

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

		addHiddenValue(this, symbol, defaults$$1);

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

var symbol$7 = symbolOrString('Mixins.Privatelike.private');

var symbol$8 = symbolOrString('Mixins.Privatelike.isInstance');

var symbol$9 = symbolOrString('Mixins.Privatelike.isStatic');

function extend(a) {
	if (!isObject(a)) {
		return a;
	}
	return {
		with: function _with(b) {
			if (!isObject(b)) {
				return a;
			}
			Object.keys(b).forEach(function (key) {
				if (isObject(b[key])) {
					if (!isObject(a[key])) {
						a[key] = {};
					}
					a[key] = extend(a[key]).with(b[key]);
					return;
				}
				a[key] = b[key];
			});
			return a;
		}
	};
}

//Keys
var Privatelike = function Privatelike(descendant) {
	return function (_descendant) {
		inherits(PrivatelikeMixin, _descendant);

		function PrivatelikeMixin() {
			classCallCheck(this, PrivatelikeMixin);

			var _this = possibleConstructorReturn(this, (PrivatelikeMixin.__proto__ || Object.getPrototypeOf(PrivatelikeMixin)).call(this));

			addHiddenValue(_this, symbol$7, {});
			return _this;
		}

		createClass(PrivatelikeMixin, [{
			key: 'destructor',
			value: function destructor() {
				delete this[symbol$7];
			}
		}, {
			key: symbol,
			get: function get() {
				return this[symbol$7];
			},
			set: function set(v) {
				if (isObject(v)) {
					extend(this[symbol$7]).with(v);
					return;
				}
				if (isNull(v)) {
					delete this[symbol$7];
					return;
				}
			}
		}, {
			key: symbol$8,
			get: function get() {
				return true;
			}
		}], [{
			key: symbol$9,
			get: function get() {
				return true;
			}
		}]);
		return PrivatelikeMixin;
	}(descendant);
};

function isUndefined(u) {
	return typeof u === 'undefined';
}

function isBoolean(u) {
	return typeof u === 'boolean';
}

function debounce$1(fn, time) {
	if (isFunction(fn)) {
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
	if (isFunction(fn)) {
		return function () {
			var now = new Date().getTime();
			if (nextCall <= now) {
				nextCall = now + time;
				fn.apply(null, arguments);
			}
		};
	}
}

var symbol$10 = symbolOrString('Mixins.Enableable.isInstance');

var symbol$11 = symbolOrString('Mixins.Enableable.isStatic');

//Keys
var Enableable = function Enableable(descendant) {
	return function (_descendant) {
		inherits(EnableableMixin, _descendant);

		function EnableableMixin() {
			classCallCheck(this, EnableableMixin);

			var _this = possibleConstructorReturn(this, (EnableableMixin.__proto__ || Object.getPrototypeOf(EnableableMixin)).call(this));

			_this[symbol] = {
				state: {
					enabled: true
				}
			};
			return _this;
		}

		createClass(EnableableMixin, [{
			key: 'enabled',
			get: function get() {
				return this[symbol].state.enabled;
			},
			set: function set(v) {
				this[symbol].state.enabled = !!v;
			}
		}, {
			key: symbol$10,
			get: function get() {
				return true;
			}
		}], [{
			key: symbol$11,
			get: function get() {
				return true;
			}
		}]);
		return EnableableMixin;
	}(descendant);
};

var JSUIFunction = function (_Enableable) {
	inherits(JSUIFunction, _Enableable);

	function JSUIFunction(original) {
		classCallCheck(this, JSUIFunction);

		var _this = possibleConstructorReturn(this, (JSUIFunction.__proto__ || Object.getPrototypeOf(JSUIFunction)).call(this));

		original = isFunction(original) ? original : function () {};

		_this[symbol] = {
			uid: uid(),
			original: original,
			debounce: false,
			throttle: false,
			modified: original,
			context: undefined,
			count: 0,
			limit: Infinity
		};
		return _this;
	}

	createClass(JSUIFunction, [{
		key: 'execute',
		value: function execute() {
			if (!this.executable) {
				return;
			}
			this[symbol].count++;
			return this.modified.apply(null, arguments);
		}
	}, {
		key: 'call',
		value: function call() {
			if (!this.executable) {
				return;
			}
			this[symbol].count++;
			return Function.prototype.call.apply(this.modified, arguments);
		}
	}, {
		key: 'apply',
		value: function apply() {
			if (!this.executable) {
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
		},
		set: function set(id) {
			this[symbol].uid = id;
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
	}, {
		key: 'executable',
		get: function get() {
			return !this.isAtLimit && this.enabled;
		}
	}]);
	return JSUIFunction;
}(Enableable(Privatelike(Base)));

function isJSUI$1(u) {
	return u instanceof JSUIFunction;
}

function dispatch(context, pool) {
	var _arguments = arguments;

	Array.prototype.splice.call(arguments, 0, 2);
	Object.keys(pool).forEach(function (uid) {
		var method = pool[uid];
		method.apply(context, _arguments);
	});
}

function remove$1() {
	delete this.pool[this.id];
}

function removeAll$1() {
	var _this = this;

	Object.keys(this.pool).forEach(function (eid) {
		delete _this.pool[eid];
	});
}

var Receipt = function (_Privatelike) {
  inherits(Receipt, _Privatelike);

  function Receipt() {
    classCallCheck(this, Receipt);
    return possibleConstructorReturn(this, (Receipt.__proto__ || Object.getPrototypeOf(Receipt)).apply(this, arguments));
  }

  return Receipt;
}(Privatelike(Base));

var OnEventBoundReceipt = function (_Enableable) {
	inherits(OnEventBoundReceipt, _Enableable);

	function OnEventBoundReceipt(pool) {
		classCallCheck(this, OnEventBoundReceipt);

		var _this = possibleConstructorReturn(this, (OnEventBoundReceipt.__proto__ || Object.getPrototypeOf(OnEventBoundReceipt)).call(this));

		_this[symbol] = {
			uid: uid()
		};
		_this[symbol].pool = pool;
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
		set: function set(id) {
			this[symbol].uid = id;
		}
	}, {
		key: 'pool',
		get: function get() {
			return this[symbol].pool;
		},
		set: function set(v) {
			this[symbol].pool = v;
		}
	}, {
		key: 'enabled',
		get: function get() {
			var method = this.pool[this.uid];
			return method.enabled;
		},
		set: function set(v) {
			var method = this.pool[this.uid];
			method.enabled = !!v;
		}
	}]);
	return OnEventBoundReceipt;
}(Enableable(Receipt));

function on$1(name, method) {
	if (!isFunction(method)) {
		return;
	}
	method = new JSUIFunction(method);
	var events = this[symbol].events;
	var dispatchers = this[symbol].dispatchers;
	var pool = events[name];
	if (!pool) {
		events[name] = {};
		pool = events[name];
		var dispatcher = dispatch.bind(this, this, pool);
		dispatchers[name] = new JSUIFunction(dispatcher);
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

var StateChangeReceipt = function (_Receipt) {
	inherits(StateChangeReceipt, _Receipt);

	function StateChangeReceipt() {
		var changes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
		classCallCheck(this, StateChangeReceipt);

		var _this = possibleConstructorReturn(this, (StateChangeReceipt.__proto__ || Object.getPrototypeOf(StateChangeReceipt)).call(this));

		_this[symbol] = changes;
		return _this;
	}

	createClass(StateChangeReceipt, [{
		key: 'owner',
		get: function get() {
			return this[symbol].owner;
		},
		set: function set(v) {
			this[symbol].owner = v;
		}
	}, {
		key: 'property',
		get: function get() {
			return this[symbol].property;
		},
		set: function set(v) {
			this[symbol].property = v;
		}
	}, {
		key: 'old',
		get: function get() {
			return this[symbol].old;
		},
		set: function set(v) {
			this[symbol].old = v;
		}
	}, {
		key: 'new',
		get: function get() {
			return this[symbol].new;
		},
		set: function set(v) {
			this[symbol].new = v;
		}
	}]);
	return StateChangeReceipt;
}(Receipt);

var symbol$12 = symbolOrString('Mixins.Routable.isInstance');

var symbol$13 = symbolOrString('Mixins.Routable.isStatic');

//Keys
var Extensible$3 = function Extensible$3(descendant) {
	return function (_descendant) {
		inherits(ExtensibleMixin, _descendant);

		function ExtensibleMixin() {
			classCallCheck(this, ExtensibleMixin);

			var _this = possibleConstructorReturn(this, (ExtensibleMixin.__proto__ || Object.getPrototypeOf(ExtensibleMixin)).call(this));

			_this[symbol] = {
				events: {},
				dispatchers: {},
				state: {}
			};
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
					var data = new StateChangeReceipt({
						owner: this,
						property: property,
						old: old,
						new: _value
					});
					this[symbol$4]([property + 'Changed', 'Changed'], data);
				}

				return hasChanged;
			}
		}, {
			key: symbol$3,
			value: function value(name, method) {
				if (isString(name) && isFunction(method)) {
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

				var dispatchers = this[symbol].dispatchers;
				var dispatcher = dispatchers[event];

				if (isJSUI$1(dispatcher)) {
					return dispatcher.execute(args);
				}

				if (isFunction(dispatcher)) {
					return dispatcher.call(this, args);
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

				var handle = setTimeout(function () {
					//destory these keys
					Object.keys(_this5).forEach(function (key) {
						delete _this5[key];
					});

					//destroy private data
					var $private = _this5[$private];
					Object.keys($private).forEach(function (key) {
						delete $private[key];
					});
				}, 0);
				this[symbol$4]('destructed');
				return handle;
			}
		}, {
			key: 'toJSON',
			value: function toJSON() {
				return this[symbol].state;
			}
		}, {
			key: symbol$12,
			get: function get() {
				return true;
			}
		}], [{
			key: symbol$13,
			get: function get() {
				return true;
			}
		}]);
		return ExtensibleMixin;
	}(descendant);
};

//Keys
//classes
//mixins
var Extensible$1 = function (_ExtensibleMixin) {
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
}(Extensible$3(Privatelike(Base)));

function constructor() {
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

		constructor.call(_this);
		_this.identity = identity$5;
		return _this;
	}

	createClass(Distinct, [{
		key: 'uid',
		get: function get() {
			return this[symbol].uid;
		},
		set: function set(id) {
			this[symbol].uid = id;
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
}(Extensible$1);

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
				var data = new StateChangeReceipt({
					owner: this,
					property: key,
					old: old,
					new: value
				});
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

function isUStyleSheetRule$1(u, t) {
	return !!(u && u.prototype && (u.prototype instanceof t || u === t));
}

function isUStyleSheetRule(u) {
	return isUStyleSheetRule$1(u, StyleSheetRule);
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

		_this[symbol] = {
			rules: {},
			timer: false,
			element: false,
			context: context
		};

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
			if (isFunction(method)) {
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

		_this[symbol] = {
			importance: 0,
			created: new Date().valueOf(),
			isSwitchable: false,
			isOnByDefault: true
		};

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
				var data = new StateChangeReceipt({
					owner: self,
					old: old,
					new: selector
				});
				_this4.trigger('selectorChanged', data);
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
				var data = new StateChangeReceipt({
					owner: self,
					old: old,
					new: media
				});
				_this5.trigger('mediaChanged', data);
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
			var data = new StateChangeReceipt({ old: old, new: zindex });
			this.trigger('importanceChanged', data);
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
			var data = new StateChangeReceipt({ old: old, new: context });
			this.trigger('contextChanged', data);
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
			var data = new StateChangeReceipt({ old: old, new: bool });
			this.trigger('isSwitchableChanged', data);
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
			var data = new StateChangeReceipt({ old: old, new: bool });
			this.trigger('isOnByDefaultChanged', data);
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
			var data = new StateChangeReceipt({ old: old, new: className });
			this.trigger('classChanged', data);
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

function constructor$1() {
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

		constructor$1.call(_this);
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
			var hasTask = isFunction(each);
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

var types$1 = {
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

var Types = Object.create(types$1);

var getHandledType = getHandledType$1.bind(null, Types);

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

function _element(element) {
	if (this.element) {
		this.element.appendChild(element);
	}
}

var ElementReceipt = function (_Receipt) {
	inherits(ElementReceipt, _Receipt);

	function ElementReceipt(element) {
		classCallCheck(this, ElementReceipt);

		var _this = possibleConstructorReturn(this, (ElementReceipt.__proto__ || Object.getPrototypeOf(ElementReceipt)).call(this));

		addHiddenValue(_this, symbol, { element: element });
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

function _string$1(command, args) {
	var results = new Collection$1();
	this.forEach(function (item) {
		var method = item[command];
		if (isFunction(method) || isJSUI$1(method)) {
			results.push({
				item: item,
				value: method.apply(item, args)
			});
			return;
		}
		results.push(undefined);
	});
	return results;
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

function _path(command, args) {
	var _this = this;

	var results = new Collection();
	this.forEach(function (item) {
		var path = getWithContext(_this, command);
		if (!path || !path.context || !path.property) {
			return;
		}
		var method = path.context[path.property];
		if (isFunction(method)) {
			var value = isArray(args) ? method.apply(path.context, args) : method.call(path.context, args);
			results.push({ item: item, value: value });
		}
	});
}

var Do = {
	string: _string$1,
	path: _path
};

function _string$2(property) {
	var results = new Collection$1();
	this.forEach(function (item) {
		var value = item[property];
		results.push({ item: item, value: value });
	});
	return results;
}

function _path$1(path) {
	var results = new Collection();
	this.forEach(function (item) {
		var value = get$2(item, path);
		results.push({ item: item, value: value });
	});
	return results;
}

var Get = {
	string: _string$2,
	path: _path$1
};

function _string$3(property, value) {
	var results = new Collection$1();
	this.forEach(function (item) {
		var old = item[property];
		item[property] = value;
		results.push({ item: item, property: property, old: old, value: value });
	});
	return results;
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

function _path$2(path) {
	var results = new Collection();
	this.forEach(function (item) {
		var value = get$2(item, path);
		set$2(item, path, value);
		results.push({ item: item, path: path, old: old, value: value });
	});
	return results;
}

var Set = {
	string: _string$3,
	path: _path$2
};

var CollectionWhereReceipt = function (_Receipt) {
	inherits(CollectionWhereReceipt, _Receipt);

	function CollectionWhereReceipt() {
		classCallCheck(this, CollectionWhereReceipt);

		var _this = possibleConstructorReturn(this, (CollectionWhereReceipt.__proto__ || Object.getPrototypeOf(CollectionWhereReceipt)).call(this));

		_this[symbol] = {
			selected: new Collection$1(),
			rejected: new Collection$1()
		};
		return _this;
	}

	createClass(CollectionWhereReceipt, [{
		key: 'selected',
		get: function get() {
			return this[symbol].selected;
		}
	}, {
		key: 'rejected',
		get: function get() {
			return this[symbol].rejected;
		}
	}]);
	return CollectionWhereReceipt;
}(Receipt);

function native(nativeClass) {
    function Native() {
        nativeClass.apply(this, arguments);
    }
    Native.prototype = Object.create(nativeClass.prototype);
    Object.setPrototypeOf(Native, nativeClass);

    return Native;
}

var Collection$1 = function (_native) {
	inherits(Collection, _native);

	function Collection() {
		classCallCheck(this, Collection);
		return possibleConstructorReturn(this, (Collection.__proto__ || Object.getPrototypeOf(Collection)).apply(this, arguments));
	}

	createClass(Collection, [{
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
		key: 'where',
		value: function where(selector) {
			var receipt = new CollectionWhereReceipt();
			if (!isFunction(selector)) {
				return receipt;
			}
			for (var i = this.length - 1; i >= 0; i--) {
				var item = this[i];
				var action = selector(item) ? 'selected' : 'rejected';
				receipt[action].push(item);
			}
			return receipt;
		}
	}]);
	return Collection;
}(native(Array));

function _array(collection) {
	var _this = this;

	var results = new Collection$1();
	collection.forEach(function (item) {
		results.push(_this.add(item));
	});
	return results;
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
				var data = new StateChangeReceipt({
					owner: this,
					property: name,
					old: old,
					new: value
				});
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

function _string$4(prop) {
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

function _path$3(prop) {
	return _string$4.call(this, prop);
}

function isUJSUI(u) {
	return isUStyleSheetRule$1(u, Element$1);
}

function isUBehavior(u) {
	return isUStyleSheetRule$1(u, Behavior);
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
	element: _element,
	jsui: _jsui,
	array: _array,
	string: _string$4,
	html: _html,
	path: _path$3,
	function: _function,
	behavior: _behavior
};

function _element$1(element) {
	if (element) {
		element.appendChild(this.element);
	}
}

function _jsui$1(instance) {
	return instance.add(this);
}

function _array$1(collection) {
	var _this = this;

	var results = new Collection$1();
	collection.forEach(function (item) {
		results.push(_this.addTo(item));
	});
	return results;
}

var AddTo = {
	element: _element$1,
	jsui: _jsui$1,
	array: _array$1
};

function _array$2(collection) {
	var _this = this;

	var results = new Collection$1();
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

	var results = new Collection$1();
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

function _string$5(name, method) {
	return on$1.call(this, name, method);
}

function _path$4(name, method) {
	return _string$5.call(this, name, method);
}

var On = {
	array: _array$3,
	object: _object,
	string: _string$5,
	path: _path$4
};

function _array$4(collection, args) {
	var _this = this;

	var results = new Collection$1();
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

function _string$6(name, args) {
	if (!this.element) {
		return false;
	}
	var event = new CustomEvent(name, { "detail": args });
	this.element.dispatchEvent(event);
	return true;
}

function _path$5(name, args) {
	return _string$6.call(this, name, args);
}

var Trigger = {
	array: _array$4,
	object: _object$1,
	string: _string$6,
	path: _path$5
};

function _array$5(collection) {
	var _this = this;

	var results = new Collection$1();
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

function _string$7(query) {
	var results = null;
	results = this.element.querySelectorAll(query);
	results = !results || results === null ? [] : results;
	return results;
}

function _path$6(query) {
	return _string$7.call(this, query);
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
	string: _string$7,
	path: _path$6,
	undefined: _undefined$1
};

function _array$6(collection) {
	var _this = this;

	var results = new Collection$1();
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

function _string$8(command, args) {
	if (isFunction(this[command])) {
		if (isArray(args)) {
			return this[command].apply(this, args);
		}
		return this[command](args);
	}
}

function _path$7(command, args) {
	var path = getWithContext(this, command);
	if (!path || !path.context || !path.property) {
		return;
	}
	var method = path.context[path.property];
	if (isFunction(method)) {
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

var Do$2 = {
	array: _array$6,
	object: _object$2,
	string: _string$8,
	path: _path$7,
	function: _function$2
};

function _array$7(collection) {
	var _this = this;

	var results = new Collection$1();
	collection.forEach(function (item) {

		var result = _this.get(item);
		results.push(result);

		if (isString(item)) {
			results[item] = result;
		}
	});
	return results;
}

function _string$9(property) {
	if (!property) {
		return;
	}
	return this[property];
}

function _path$8(path) {
	return get$2(this, path);
}

var Get$2 = {
	array: _array$7,
	string: _string$9,
	path: _path$8
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

function _string$10(property, value) {
	if (!property) {
		return;
	}
	this[property] = value;
	return value;
}

function _path$9(path, value) {
	return set$2(this, path, value);
}

var Set$2 = {
	array: _object$3,
	object: _object$4,
	string: _string$10,
	path: _path$9
};

function _string$11(text) {
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

function _path$10(text) {
	return _string.call(this, text);
}

function _undefined$2() {
	if (this[symbol].text) {
		return this[symbol].text.nodeValue;
	}
}

var Text = {
	string: _string$11,
	path: _path$10,
	undefined: _undefined$2
};

function placeholder() {}
function nodeAttributes(node, callback) {
	if (!isFunction(callback)) {
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

function _undefined$3() {
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

	var results = new Collection$1();
	collection.forEach(function (attribute) {
		results.push(_this.attribute(attribute, value));
	});
	return results;
}

//Get
//Set
var Attribute = {
	Get: {
		undefined: _undefined$3,
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

	var results = new Collection$1();
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

function _string$12(name) {
	if (isEmptyString(name)) {
		return;
	}
	return new ElementClassReceipt(this.element, name);
}

function _path$11() {
	return _string$12.apply(this, arguments);
}

function _undefined$4() {
	return getClasses(this.element);
}

var Class = {
	array: _array$9,
	object: _object$6,
	string: _string$12,
	path: _path$11,
	undefined: _undefined$4
};

var symbol$14 = symbolOrString('on');

var symbol$15 = symbolOrString('trigger');

function getTagName(el) {
	if (isElement(el)) {
		return el.tagName.toLowerCase();
	}
	return 'none';
}

function _element$2(el) {
	this.element = el;
	return getTagName(el);
}

function _string$13(tag) {
	tag = tag || 'div';
	this.element = document.createElement(tag);
	return tag;
}

var Constructor = {
	element: _element$2,
	string: _string$13
};

//handlers
//classes
//Keys
var identity = new Identity({
	class: 'Element',
	major: 1, minor: 0, patch: 0
});

var Element$1 = function (_Styleable) {
	inherits(Element, _Styleable);

	function Element(tag) {
		classCallCheck(this, Element);

		var _this = possibleConstructorReturn(this, (Element.__proto__ || Object.getPrototypeOf(Element)).call(this, tag));

		_this.identity = identity;
		//select the proper constructor action
		var type = getHandledType(tag);
		var action = Constructor[type];
		tag = (action || function () {
			return Constructor.string.call(this, 'div');
		}).call(_this, tag);

		//set up ids
		_this.element.uid = _this.uid;

		//add references 
		var development = defaults$1.Development;
		if (development.enabled && development.references) {
			_this.element.JSUI = _this;
		}
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
		key: symbol$14,
		value: function value(event, method) {
			var type = getHandledType(event);
			var action = On[type];
			return (action || unhandled).call(this, event, method);
		}
	}, {
		key: symbol$15,
		value: function value(event, args) {
			var type = getHandledType(event);
			var action = Trigger[type];
			return (action || unhandled).call(this, event, args);
		}
	}, {
		key: 'add',
		value: function add(item) {
			var type = getHandledType(item);
			var action = Add[type];
			return (action || get$1(Element.prototype.__proto__ || Object.getPrototypeOf(Element.prototype), 'add', this) || unhandled).call(this, item);
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
		value: function on() {
			return this[symbol$14].apply(this, arguments);
		}
	}, {
		key: 'trigger',
		value: function trigger() {
			return this[symbol$15].apply(this, arguments);
		}
	}, {
		key: 'find',
		value: function find(what) {
			var type = getHandledType(what);
			var action = Find[type];
			return (action || unhandled([])).call(this, what);
		}
	}, {
		key: 'do',
		value: function _do(method, args) {
			var type = getHandledType(method);
			var action = Do$2[type];
			return (action || unhandled).call(this, method, args);
		}
	}, {
		key: 'get',
		value: function get(property) {
			var type = getHandledType(property);
			var action = Get$2[type];
			return (action || unhandled).call(this, property);
		}
	}, {
		key: 'set',
		value: function set(property, value) {
			var type = getHandledType(property);
			var action = Set$2[type];
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
			if (!isElement(this.element) || isEmptyString(name)) {
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
			var _element = this.element;
			var _private = this[symbol];
			if (_element) {
				var parent = _element.parentNode;
				if (isFunction(_element.remove)) {
					_element.remove();
				} else if (parent && isFunction(parent.removeChild)) {
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
					if (isFunction(child.remove)) {
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
			return get$1(Element.prototype.__proto__ || Object.getPrototypeOf(Element.prototype), 'destructor', this).call(this);
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

var symbol$16 = symbolOrString('uid');

function constructor$2() {
	var values = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	addHiddenValue(this, symbol, {
		events: {},
		dispatchers: {},
		state: values
	});
	addHiddenValue(this, symbol$16, uid());
}

//classes
//mixins
var Data = function (_ExtensibleMixin) {
	inherits(Data, _ExtensibleMixin);

	function Data(values) {
		classCallCheck(this, Data);

		var _this = possibleConstructorReturn(this, (Data.__proto__ || Object.getPrototypeOf(Data)).call(this));

		constructor$2.call(_this, values);
		return _this;
	}

	return Data;
}(Extensible$3(Base));

function isData(u) {
	return u instanceof Data;
}

function isUData(u) {
	return isUStyleSheetRule$1(u, Data);
}

var symbol$17 = symbolOrString('Mixins.Extensible.isInstance');

function isExtensible(u) {
	return !!u[symbol$17];
}

var TypeChecks = {
	isArray: isArray,
	isElement: isElement,
	isEmptyString: isEmptyString,
	isFunction: isFunction,
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
	isBoolean: isBoolean,
	isExtensible: isExtensible
};

var ElementCollection = function (_Collection) {
	inherits(ElementCollection, _Collection);

	function ElementCollection(target) {
		classCallCheck(this, ElementCollection);
		return possibleConstructorReturn(this, (ElementCollection.__proto__ || Object.getPrototypeOf(ElementCollection)).call(this, target));
	}

	createClass(ElementCollection, [{
		key: 'add',
		value: function add() {
			return this.do('add', arguments);
		}
	}, {
		key: 'addTo',
		value: function addTo() {
			return this.do('addTo', arguments);
		}
	}, {
		key: 'remove',
		value: function remove() {
			return this.do('remove', arguments);
		}
	}, {
		key: 'on',
		value: function on() {
			return this.do('on', arguments);
		}
	}, {
		key: 'trigger',
		value: function trigger() {
			return this.do('trigger', arguments);
		}
	}, {
		key: 'find',
		value: function find() {
			return this.do('find', arguments);
		}
	}, {
		key: 'do',
		value: function _do() {
			return this.do('do', arguments);
		}
	}, {
		key: 'get',
		value: function get() {
			return this.do('get', arguments);
		}
	}, {
		key: 'set',
		value: function set() {
			return this.do('set', arguments);
		}
	}, {
		key: 'text',
		value: function text() {
			return this.do('text', arguments);
		}
	}, {
		key: 'attribute',
		value: function attribute() {
			return this.do('attribute', arguments);
		}
	}, {
		key: 'class',
		value: function _class() {
			return this.do('class', arguments);
		}
	}, {
		key: 'children',
		value: function children() {
			return this.do('children', arguments);
		}
	}, {
		key: 'destructor',
		value: function destructor() {
			return this.do('destructor', arguments);
		}
	}]);
	return ElementCollection;
}(Collection$1);

var identity$9 = new Identity({
	class: 'A',
	major: 1, minor: 0, patch: 0
});

var A = function (_Element) {
	inherits(A, _Element);

	function A() {
		classCallCheck(this, A);

		var _this = possibleConstructorReturn(this, (A.__proto__ || Object.getPrototypeOf(A)).call(this, 'a'));

		_this.identity = identity$9;
		return _this;
	}

	return A;
}(Element$1);

var identity$10 = new Identity({
	class: 'Abbr',
	major: 1, minor: 0, patch: 0
});

var Abbr = function (_Element) {
	inherits(Abbr, _Element);

	function Abbr() {
		classCallCheck(this, Abbr);

		var _this = possibleConstructorReturn(this, (Abbr.__proto__ || Object.getPrototypeOf(Abbr)).call(this, 'abbr'));

		_this.identity = identity$10;
		return _this;
	}

	return Abbr;
}(Element$1);

var identity$11 = new Identity({
	class: 'Acronym',
	major: 1, minor: 0, patch: 0
});

var Acronym = function (_Element) {
	inherits(Acronym, _Element);

	function Acronym() {
		classCallCheck(this, Acronym);

		var _this = possibleConstructorReturn(this, (Acronym.__proto__ || Object.getPrototypeOf(Acronym)).call(this, 'acronym'));

		_this.identity = identity$11;
		return _this;
	}

	return Acronym;
}(Element$1);

var identity$12 = new Identity({
	class: 'Address',
	major: 1, minor: 0, patch: 0
});

var Address = function (_Element) {
	inherits(Address, _Element);

	function Address() {
		classCallCheck(this, Address);

		var _this = possibleConstructorReturn(this, (Address.__proto__ || Object.getPrototypeOf(Address)).call(this, 'address'));

		_this.identity = identity$12;
		return _this;
	}

	return Address;
}(Element$1);

var identity$13 = new Identity({
	class: 'Applet',
	major: 1, minor: 0, patch: 0
});

var Applet = function (_Element) {
	inherits(Applet, _Element);

	function Applet() {
		classCallCheck(this, Applet);

		var _this = possibleConstructorReturn(this, (Applet.__proto__ || Object.getPrototypeOf(Applet)).call(this, 'applet'));

		_this.identity = identity$13;
		return _this;
	}

	return Applet;
}(Element$1);

var identity$14 = new Identity({
	class: 'Area',
	major: 1, minor: 0, patch: 0
});

var Area = function (_Element) {
	inherits(Area, _Element);

	function Area() {
		classCallCheck(this, Area);

		var _this = possibleConstructorReturn(this, (Area.__proto__ || Object.getPrototypeOf(Area)).call(this, 'area'));

		_this.identity = identity$14;
		return _this;
	}

	return Area;
}(Element$1);

var identity$15 = new Identity({
	class: 'Article',
	major: 1, minor: 0, patch: 0
});

var Article = function (_Element) {
	inherits(Article, _Element);

	function Article() {
		classCallCheck(this, Article);

		var _this = possibleConstructorReturn(this, (Article.__proto__ || Object.getPrototypeOf(Article)).call(this, 'article'));

		_this.identity = identity$15;
		return _this;
	}

	return Article;
}(Element$1);

var identity$16 = new Identity({
	class: 'Aside',
	major: 1, minor: 0, patch: 0
});

var Aside = function (_Element) {
	inherits(Aside, _Element);

	function Aside() {
		classCallCheck(this, Aside);

		var _this = possibleConstructorReturn(this, (Aside.__proto__ || Object.getPrototypeOf(Aside)).call(this, 'aside'));

		_this.identity = identity$16;
		return _this;
	}

	return Aside;
}(Element$1);

var identity$17 = new Identity({
	class: 'Audio',
	major: 1, minor: 0, patch: 0
});

var Audio = function (_Element) {
	inherits(Audio, _Element);

	function Audio() {
		classCallCheck(this, Audio);

		var _this = possibleConstructorReturn(this, (Audio.__proto__ || Object.getPrototypeOf(Audio)).call(this, 'audio'));

		_this.identity = identity$17;
		return _this;
	}

	return Audio;
}(Element$1);

var identity$18 = new Identity({
	class: 'B',
	major: 1, minor: 0, patch: 0
});

var B = function (_Element) {
	inherits(B, _Element);

	function B() {
		classCallCheck(this, B);

		var _this = possibleConstructorReturn(this, (B.__proto__ || Object.getPrototypeOf(B)).call(this, 'b'));

		_this.identity = identity$18;
		return _this;
	}

	return B;
}(Element$1);

var identity$19 = new Identity({
	class: 'Base',
	major: 1, minor: 0, patch: 0
});

var Base$2 = function (_Element) {
	inherits(Base, _Element);

	function Base() {
		classCallCheck(this, Base);

		var _this = possibleConstructorReturn(this, (Base.__proto__ || Object.getPrototypeOf(Base)).call(this, 'base'));

		_this.identity = identity$19;
		return _this;
	}

	return Base;
}(Element$1);

var identity$20 = new Identity({
	class: 'Basefont',
	major: 1, minor: 0, patch: 0
});

var Basefont = function (_Element) {
	inherits(Basefont, _Element);

	function Basefont() {
		classCallCheck(this, Basefont);

		var _this = possibleConstructorReturn(this, (Basefont.__proto__ || Object.getPrototypeOf(Basefont)).call(this, 'basefont'));

		_this.identity = identity$20;
		return _this;
	}

	return Basefont;
}(Element$1);

var identity$21 = new Identity({
	class: 'Bdi',
	major: 1, minor: 0, patch: 0
});

var Bdi = function (_Element) {
	inherits(Bdi, _Element);

	function Bdi() {
		classCallCheck(this, Bdi);

		var _this = possibleConstructorReturn(this, (Bdi.__proto__ || Object.getPrototypeOf(Bdi)).call(this, 'bdi'));

		_this.identity = identity$21;
		return _this;
	}

	return Bdi;
}(Element$1);

var identity$22 = new Identity({
	class: 'Bdo',
	major: 1, minor: 0, patch: 0
});

var Bdo = function (_Element) {
	inherits(Bdo, _Element);

	function Bdo() {
		classCallCheck(this, Bdo);

		var _this = possibleConstructorReturn(this, (Bdo.__proto__ || Object.getPrototypeOf(Bdo)).call(this, 'bdo'));

		_this.identity = identity$22;
		return _this;
	}

	return Bdo;
}(Element$1);

var identity$23 = new Identity({
	class: 'Big',
	major: 1, minor: 0, patch: 0
});

var Big = function (_Element) {
	inherits(Big, _Element);

	function Big() {
		classCallCheck(this, Big);

		var _this = possibleConstructorReturn(this, (Big.__proto__ || Object.getPrototypeOf(Big)).call(this, 'big'));

		_this.identity = identity$23;
		return _this;
	}

	return Big;
}(Element$1);

var identity$24 = new Identity({
	class: 'Blockquote',
	major: 1, minor: 0, patch: 0
});

var Blockquote = function (_Element) {
	inherits(Blockquote, _Element);

	function Blockquote() {
		classCallCheck(this, Blockquote);

		var _this = possibleConstructorReturn(this, (Blockquote.__proto__ || Object.getPrototypeOf(Blockquote)).call(this, 'blockquote'));

		_this.identity = identity$24;
		return _this;
	}

	return Blockquote;
}(Element$1);

var identity$25 = new Identity({
	class: 'Body',
	major: 1, minor: 0, patch: 0
});

var Body = function (_Element) {
	inherits(Body, _Element);

	function Body() {
		classCallCheck(this, Body);

		var _this = possibleConstructorReturn(this, (Body.__proto__ || Object.getPrototypeOf(Body)).call(this, 'body'));

		_this.identity = identity$25;
		return _this;
	}

	return Body;
}(Element$1);

var identity$26 = new Identity({
	class: 'Br',
	major: 1, minor: 0, patch: 0
});

var Br = function (_Element) {
	inherits(Br, _Element);

	function Br() {
		classCallCheck(this, Br);

		var _this = possibleConstructorReturn(this, (Br.__proto__ || Object.getPrototypeOf(Br)).call(this, 'br'));

		_this.identity = identity$26;
		return _this;
	}

	return Br;
}(Element$1);

var identity$27 = new Identity({
	class: 'Button',
	major: 1, minor: 0, patch: 0
});

var Button = function (_Element) {
	inherits(Button, _Element);

	function Button() {
		classCallCheck(this, Button);

		var _this = possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, 'button'));

		_this.identity = identity$27;
		return _this;
	}

	return Button;
}(Element$1);

var identity$28 = new Identity({
	class: 'Canvas',
	major: 1, minor: 0, patch: 0
});

var Canvas = function (_Element) {
	inherits(Canvas, _Element);

	function Canvas() {
		classCallCheck(this, Canvas);

		var _this = possibleConstructorReturn(this, (Canvas.__proto__ || Object.getPrototypeOf(Canvas)).call(this, 'canvas'));

		_this.identity = identity$28;
		return _this;
	}

	return Canvas;
}(Element$1);

var identity$29 = new Identity({
	class: 'Caption',
	major: 1, minor: 0, patch: 0
});

var Caption = function (_Element) {
	inherits(Caption, _Element);

	function Caption() {
		classCallCheck(this, Caption);

		var _this = possibleConstructorReturn(this, (Caption.__proto__ || Object.getPrototypeOf(Caption)).call(this, 'caption'));

		_this.identity = identity$29;
		return _this;
	}

	return Caption;
}(Element$1);

var identity$30 = new Identity({
	class: 'Center',
	major: 1, minor: 0, patch: 0
});

var Center = function (_Element) {
	inherits(Center, _Element);

	function Center() {
		classCallCheck(this, Center);

		var _this = possibleConstructorReturn(this, (Center.__proto__ || Object.getPrototypeOf(Center)).call(this, 'center'));

		_this.identity = identity$30;
		return _this;
	}

	return Center;
}(Element$1);

var identity$31 = new Identity({
	class: 'Cite',
	major: 1, minor: 0, patch: 0
});

var Cite = function (_Element) {
	inherits(Cite, _Element);

	function Cite() {
		classCallCheck(this, Cite);

		var _this = possibleConstructorReturn(this, (Cite.__proto__ || Object.getPrototypeOf(Cite)).call(this, 'cite'));

		_this.identity = identity$31;
		return _this;
	}

	return Cite;
}(Element$1);

var identity$32 = new Identity({
	class: 'Code',
	major: 1, minor: 0, patch: 0
});

var Code = function (_Element) {
	inherits(Code, _Element);

	function Code() {
		classCallCheck(this, Code);

		var _this = possibleConstructorReturn(this, (Code.__proto__ || Object.getPrototypeOf(Code)).call(this, 'code'));

		_this.identity = identity$32;
		return _this;
	}

	return Code;
}(Element$1);

var identity$33 = new Identity({
	class: 'Col',
	major: 1, minor: 0, patch: 0
});

var Col = function (_Element) {
	inherits(Col, _Element);

	function Col() {
		classCallCheck(this, Col);

		var _this = possibleConstructorReturn(this, (Col.__proto__ || Object.getPrototypeOf(Col)).call(this, 'col'));

		_this.identity = identity$33;
		return _this;
	}

	return Col;
}(Element$1);

var identity$34 = new Identity({
	class: 'Colgroup',
	major: 1, minor: 0, patch: 0
});

var Colgroup = function (_Element) {
	inherits(Colgroup, _Element);

	function Colgroup() {
		classCallCheck(this, Colgroup);

		var _this = possibleConstructorReturn(this, (Colgroup.__proto__ || Object.getPrototypeOf(Colgroup)).call(this, 'colgroup'));

		_this.identity = identity$34;
		return _this;
	}

	return Colgroup;
}(Element$1);

var identity$35 = new Identity({
	class: 'Command',
	major: 1, minor: 0, patch: 0
});

var Command = function (_Element) {
	inherits(Command, _Element);

	function Command() {
		classCallCheck(this, Command);

		var _this = possibleConstructorReturn(this, (Command.__proto__ || Object.getPrototypeOf(Command)).call(this, 'command'));

		_this.identity = identity$35;
		return _this;
	}

	return Command;
}(Element$1);

var identity$36 = new Identity({
	class: 'Datalist',
	major: 1, minor: 0, patch: 0
});

var Datalist = function (_Element) {
	inherits(Datalist, _Element);

	function Datalist() {
		classCallCheck(this, Datalist);

		var _this = possibleConstructorReturn(this, (Datalist.__proto__ || Object.getPrototypeOf(Datalist)).call(this, 'datalist'));

		_this.identity = identity$36;
		return _this;
	}

	return Datalist;
}(Element$1);

var identity$37 = new Identity({
	class: 'Dd',
	major: 1, minor: 0, patch: 0
});

var Dd = function (_Element) {
	inherits(Dd, _Element);

	function Dd() {
		classCallCheck(this, Dd);

		var _this = possibleConstructorReturn(this, (Dd.__proto__ || Object.getPrototypeOf(Dd)).call(this, 'dd'));

		_this.identity = identity$37;
		return _this;
	}

	return Dd;
}(Element$1);

var identity$38 = new Identity({
	class: 'Del',
	major: 1, minor: 0, patch: 0
});

var Del = function (_Element) {
	inherits(Del, _Element);

	function Del() {
		classCallCheck(this, Del);

		var _this = possibleConstructorReturn(this, (Del.__proto__ || Object.getPrototypeOf(Del)).call(this, 'del'));

		_this.identity = identity$38;
		return _this;
	}

	return Del;
}(Element$1);

var identity$39 = new Identity({
	class: 'Details',
	major: 1, minor: 0, patch: 0
});

var Details = function (_Element) {
	inherits(Details, _Element);

	function Details() {
		classCallCheck(this, Details);

		var _this = possibleConstructorReturn(this, (Details.__proto__ || Object.getPrototypeOf(Details)).call(this, 'details'));

		_this.identity = identity$39;
		return _this;
	}

	return Details;
}(Element$1);

var identity$40 = new Identity({
	class: 'Dfn',
	major: 1, minor: 0, patch: 0
});

var Dfn = function (_Element) {
	inherits(Dfn, _Element);

	function Dfn() {
		classCallCheck(this, Dfn);

		var _this = possibleConstructorReturn(this, (Dfn.__proto__ || Object.getPrototypeOf(Dfn)).call(this, 'dfn'));

		_this.identity = identity$40;
		return _this;
	}

	return Dfn;
}(Element$1);

var identity$41 = new Identity({
	class: 'Dir',
	major: 1, minor: 0, patch: 0
});

var Dir = function (_Element) {
	inherits(Dir, _Element);

	function Dir() {
		classCallCheck(this, Dir);

		var _this = possibleConstructorReturn(this, (Dir.__proto__ || Object.getPrototypeOf(Dir)).call(this, 'dir'));

		_this.identity = identity$41;
		return _this;
	}

	return Dir;
}(Element$1);

var identity$42 = new Identity({
	class: 'Div',
	major: 1, minor: 0, patch: 0
});

var Div = function (_Element) {
	inherits(Div, _Element);

	function Div() {
		classCallCheck(this, Div);

		var _this = possibleConstructorReturn(this, (Div.__proto__ || Object.getPrototypeOf(Div)).call(this, 'div'));

		_this.identity = identity$42;
		return _this;
	}

	return Div;
}(Element$1);

var identity$43 = new Identity({
	class: 'Dl',
	major: 1, minor: 0, patch: 0
});

var Dl = function (_Element) {
	inherits(Dl, _Element);

	function Dl() {
		classCallCheck(this, Dl);

		var _this = possibleConstructorReturn(this, (Dl.__proto__ || Object.getPrototypeOf(Dl)).call(this, 'dl'));

		_this.identity = identity$43;
		return _this;
	}

	return Dl;
}(Element$1);

var identity$44 = new Identity({
	class: 'Dt',
	major: 1, minor: 0, patch: 0
});

var Dt = function (_Element) {
	inherits(Dt, _Element);

	function Dt() {
		classCallCheck(this, Dt);

		var _this = possibleConstructorReturn(this, (Dt.__proto__ || Object.getPrototypeOf(Dt)).call(this, 'dt'));

		_this.identity = identity$44;
		return _this;
	}

	return Dt;
}(Element$1);

var identity$45 = new Identity({
	class: 'Em',
	major: 1, minor: 0, patch: 0
});

var Em = function (_Element) {
	inherits(Em, _Element);

	function Em() {
		classCallCheck(this, Em);

		var _this = possibleConstructorReturn(this, (Em.__proto__ || Object.getPrototypeOf(Em)).call(this, 'em'));

		_this.identity = identity$45;
		return _this;
	}

	return Em;
}(Element$1);

var identity$46 = new Identity({
	class: 'Embed',
	major: 1, minor: 0, patch: 0
});

var Embed = function (_Element) {
	inherits(Embed, _Element);

	function Embed() {
		classCallCheck(this, Embed);

		var _this = possibleConstructorReturn(this, (Embed.__proto__ || Object.getPrototypeOf(Embed)).call(this, 'embed'));

		_this.identity = identity$46;
		return _this;
	}

	return Embed;
}(Element$1);

var identity$47 = new Identity({
	class: 'Fieldset',
	major: 1, minor: 0, patch: 0
});

var Fieldset = function (_Element) {
	inherits(Fieldset, _Element);

	function Fieldset() {
		classCallCheck(this, Fieldset);

		var _this = possibleConstructorReturn(this, (Fieldset.__proto__ || Object.getPrototypeOf(Fieldset)).call(this, 'fieldset'));

		_this.identity = identity$47;
		return _this;
	}

	return Fieldset;
}(Element$1);

var identity$48 = new Identity({
	class: 'Figcaption',
	major: 1, minor: 0, patch: 0
});

var Figcaption = function (_Element) {
	inherits(Figcaption, _Element);

	function Figcaption() {
		classCallCheck(this, Figcaption);

		var _this = possibleConstructorReturn(this, (Figcaption.__proto__ || Object.getPrototypeOf(Figcaption)).call(this, 'figcaption'));

		_this.identity = identity$48;
		return _this;
	}

	return Figcaption;
}(Element$1);

var identity$49 = new Identity({
	class: 'Figure',
	major: 1, minor: 0, patch: 0
});

var Figure = function (_Element) {
	inherits(Figure, _Element);

	function Figure() {
		classCallCheck(this, Figure);

		var _this = possibleConstructorReturn(this, (Figure.__proto__ || Object.getPrototypeOf(Figure)).call(this, 'figure'));

		_this.identity = identity$49;
		return _this;
	}

	return Figure;
}(Element$1);

var identity$50 = new Identity({
	class: 'Footer',
	major: 1, minor: 0, patch: 0
});

var Footer = function (_Element) {
	inherits(Footer, _Element);

	function Footer() {
		classCallCheck(this, Footer);

		var _this = possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this, 'footer'));

		_this.identity = identity$50;
		return _this;
	}

	return Footer;
}(Element$1);

var identity$51 = new Identity({
	class: 'Form',
	major: 1, minor: 0, patch: 0
});

var Form = function (_Element) {
	inherits(Form, _Element);

	function Form() {
		classCallCheck(this, Form);

		var _this = possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, 'form'));

		_this.identity = identity$51;
		return _this;
	}

	return Form;
}(Element$1);

var identity$52 = new Identity({
	class: 'H1',
	major: 1, minor: 0, patch: 0
});

var H1 = function (_Element) {
	inherits(H1, _Element);

	function H1() {
		classCallCheck(this, H1);

		var _this = possibleConstructorReturn(this, (H1.__proto__ || Object.getPrototypeOf(H1)).call(this, 'h1'));

		_this.identity = identity$52;
		return _this;
	}

	return H1;
}(Element$1);

var identity$53 = new Identity({
	class: 'H2',
	major: 1, minor: 0, patch: 0
});

var H2 = function (_Element) {
	inherits(H2, _Element);

	function H2() {
		classCallCheck(this, H2);

		var _this = possibleConstructorReturn(this, (H2.__proto__ || Object.getPrototypeOf(H2)).call(this, 'h2'));

		_this.identity = identity$53;
		return _this;
	}

	return H2;
}(Element$1);

var identity$54 = new Identity({
	class: 'H3',
	major: 1, minor: 0, patch: 0
});

var H3 = function (_Element) {
	inherits(H3, _Element);

	function H3() {
		classCallCheck(this, H3);

		var _this = possibleConstructorReturn(this, (H3.__proto__ || Object.getPrototypeOf(H3)).call(this, 'h3'));

		_this.identity = identity$54;
		return _this;
	}

	return H3;
}(Element$1);

var identity$55 = new Identity({
	class: 'H4',
	major: 1, minor: 0, patch: 0
});

var H4 = function (_Element) {
	inherits(H4, _Element);

	function H4() {
		classCallCheck(this, H4);

		var _this = possibleConstructorReturn(this, (H4.__proto__ || Object.getPrototypeOf(H4)).call(this, 'h4'));

		_this.identity = identity$55;
		return _this;
	}

	return H4;
}(Element$1);

var identity$56 = new Identity({
	class: 'H5',
	major: 1, minor: 0, patch: 0
});

var H5 = function (_Element) {
	inherits(H5, _Element);

	function H5() {
		classCallCheck(this, H5);

		var _this = possibleConstructorReturn(this, (H5.__proto__ || Object.getPrototypeOf(H5)).call(this, 'h5'));

		_this.identity = identity$56;
		return _this;
	}

	return H5;
}(Element$1);

var identity$57 = new Identity({
	class: 'H6',
	major: 1, minor: 0, patch: 0
});

var H6 = function (_Element) {
	inherits(H6, _Element);

	function H6() {
		classCallCheck(this, H6);

		var _this = possibleConstructorReturn(this, (H6.__proto__ || Object.getPrototypeOf(H6)).call(this, 'h6'));

		_this.identity = identity$57;
		return _this;
	}

	return H6;
}(Element$1);

var identity$58 = new Identity({
	class: 'Head',
	major: 1, minor: 0, patch: 0
});

var Head = function (_Element) {
	inherits(Head, _Element);

	function Head() {
		classCallCheck(this, Head);

		var _this = possibleConstructorReturn(this, (Head.__proto__ || Object.getPrototypeOf(Head)).call(this, 'head'));

		_this.identity = identity$58;
		return _this;
	}

	return Head;
}(Element$1);

var identity$59 = new Identity({
	class: 'Header',
	major: 1, minor: 0, patch: 0
});

var Header = function (_Element) {
	inherits(Header, _Element);

	function Header() {
		classCallCheck(this, Header);

		var _this = possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, 'header'));

		_this.identity = identity$59;
		return _this;
	}

	return Header;
}(Element$1);

var identity$60 = new Identity({
	class: 'Hgroup',
	major: 1, minor: 0, patch: 0
});

var Hgroup = function (_Element) {
	inherits(Hgroup, _Element);

	function Hgroup() {
		classCallCheck(this, Hgroup);

		var _this = possibleConstructorReturn(this, (Hgroup.__proto__ || Object.getPrototypeOf(Hgroup)).call(this, 'hgroup'));

		_this.identity = identity$60;
		return _this;
	}

	return Hgroup;
}(Element$1);

var identity$61 = new Identity({
	class: 'Hr',
	major: 1, minor: 0, patch: 0
});

var Hr = function (_Element) {
	inherits(Hr, _Element);

	function Hr() {
		classCallCheck(this, Hr);

		var _this = possibleConstructorReturn(this, (Hr.__proto__ || Object.getPrototypeOf(Hr)).call(this, 'hr'));

		_this.identity = identity$61;
		return _this;
	}

	return Hr;
}(Element$1);

var identity$62 = new Identity({
	class: 'Html',
	major: 1, minor: 0, patch: 0
});

var Html = function (_Element) {
	inherits(Html, _Element);

	function Html() {
		classCallCheck(this, Html);

		var _this = possibleConstructorReturn(this, (Html.__proto__ || Object.getPrototypeOf(Html)).call(this, 'html'));

		_this.identity = identity$62;
		return _this;
	}

	return Html;
}(Element$1);

var identity$63 = new Identity({
	class: 'I',
	major: 1, minor: 0, patch: 0
});

var I = function (_Element) {
	inherits(I, _Element);

	function I() {
		classCallCheck(this, I);

		var _this = possibleConstructorReturn(this, (I.__proto__ || Object.getPrototypeOf(I)).call(this, 'i'));

		_this.identity = identity$63;
		return _this;
	}

	return I;
}(Element$1);

var identity$64 = new Identity({
	class: 'Iframe',
	major: 1, minor: 0, patch: 0
});

var Iframe = function (_Element) {
	inherits(Iframe, _Element);

	function Iframe() {
		classCallCheck(this, Iframe);

		var _this = possibleConstructorReturn(this, (Iframe.__proto__ || Object.getPrototypeOf(Iframe)).call(this, 'iframe'));

		_this.identity = identity$64;
		return _this;
	}

	return Iframe;
}(Element$1);

var identity$65 = new Identity({
	class: 'Img',
	major: 1, minor: 0, patch: 0
});

var Img = function (_Element) {
	inherits(Img, _Element);

	function Img() {
		classCallCheck(this, Img);

		var _this = possibleConstructorReturn(this, (Img.__proto__ || Object.getPrototypeOf(Img)).call(this, 'img'));

		_this.identity = identity$65;
		return _this;
	}

	return Img;
}(Element$1);

var identity$66 = new Identity({
	class: 'Input',
	major: 1, minor: 0, patch: 0
});

var Input = function (_Element) {
	inherits(Input, _Element);

	function Input() {
		classCallCheck(this, Input);

		var _this = possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, 'input'));

		_this.identity = identity$66;
		return _this;
	}

	return Input;
}(Element$1);

var identity$67 = new Identity({
	class: 'Ins',
	major: 1, minor: 0, patch: 0
});

var Ins = function (_Element) {
	inherits(Ins, _Element);

	function Ins() {
		classCallCheck(this, Ins);

		var _this = possibleConstructorReturn(this, (Ins.__proto__ || Object.getPrototypeOf(Ins)).call(this, 'ins'));

		_this.identity = identity$67;
		return _this;
	}

	return Ins;
}(Element$1);

var identity$68 = new Identity({
	class: 'Kbd',
	major: 1, minor: 0, patch: 0
});

var Kbd = function (_Element) {
	inherits(Kbd, _Element);

	function Kbd() {
		classCallCheck(this, Kbd);

		var _this = possibleConstructorReturn(this, (Kbd.__proto__ || Object.getPrototypeOf(Kbd)).call(this, 'kbd'));

		_this.identity = identity$68;
		return _this;
	}

	return Kbd;
}(Element$1);

var identity$69 = new Identity({
	class: 'Keygen',
	major: 1, minor: 0, patch: 0
});

var Keygen = function (_Element) {
	inherits(Keygen, _Element);

	function Keygen() {
		classCallCheck(this, Keygen);

		var _this = possibleConstructorReturn(this, (Keygen.__proto__ || Object.getPrototypeOf(Keygen)).call(this, 'keygen'));

		_this.identity = identity$69;
		return _this;
	}

	return Keygen;
}(Element$1);

var identity$70 = new Identity({
	class: 'Label',
	major: 1, minor: 0, patch: 0
});

var Label = function (_Element) {
	inherits(Label, _Element);

	function Label() {
		classCallCheck(this, Label);

		var _this = possibleConstructorReturn(this, (Label.__proto__ || Object.getPrototypeOf(Label)).call(this, 'label'));

		_this.identity = identity$70;
		return _this;
	}

	return Label;
}(Element$1);

var identity$71 = new Identity({
	class: 'Legend',
	major: 1, minor: 0, patch: 0
});

var Legend = function (_Element) {
	inherits(Legend, _Element);

	function Legend() {
		classCallCheck(this, Legend);

		var _this = possibleConstructorReturn(this, (Legend.__proto__ || Object.getPrototypeOf(Legend)).call(this, 'legend'));

		_this.identity = identity$71;
		return _this;
	}

	return Legend;
}(Element$1);

var identity$72 = new Identity({
	class: 'Li',
	major: 1, minor: 0, patch: 0
});

var Li = function (_Element) {
	inherits(Li, _Element);

	function Li() {
		classCallCheck(this, Li);

		var _this = possibleConstructorReturn(this, (Li.__proto__ || Object.getPrototypeOf(Li)).call(this, 'li'));

		_this.identity = identity$72;
		return _this;
	}

	return Li;
}(Element$1);

var identity$73 = new Identity({
	class: 'Link',
	major: 1, minor: 0, patch: 0
});

var Link = function (_Element) {
	inherits(Link, _Element);

	function Link() {
		classCallCheck(this, Link);

		var _this = possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).call(this, 'link'));

		_this.identity = identity$73;
		return _this;
	}

	return Link;
}(Element$1);

var identity$74 = new Identity({
	class: 'Main',
	major: 1, minor: 0, patch: 0
});

var Main = function (_Element) {
	inherits(Main, _Element);

	function Main() {
		classCallCheck(this, Main);

		var _this = possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this, 'main'));

		_this.identity = identity$74;
		return _this;
	}

	return Main;
}(Element$1);

var identity$75 = new Identity({
	class: 'Map',
	major: 1, minor: 0, patch: 0
});

var Map = function (_Element) {
	inherits(Map, _Element);

	function Map() {
		classCallCheck(this, Map);

		var _this = possibleConstructorReturn(this, (Map.__proto__ || Object.getPrototypeOf(Map)).call(this, 'map'));

		_this.identity = identity$75;
		return _this;
	}

	return Map;
}(Element$1);

var identity$76 = new Identity({
	class: 'Mark',
	major: 1, minor: 0, patch: 0
});

var Mark = function (_Element) {
	inherits(Mark, _Element);

	function Mark() {
		classCallCheck(this, Mark);

		var _this = possibleConstructorReturn(this, (Mark.__proto__ || Object.getPrototypeOf(Mark)).call(this, 'mark'));

		_this.identity = identity$76;
		return _this;
	}

	return Mark;
}(Element$1);

var identity$77 = new Identity({
	class: 'Menu',
	major: 1, minor: 0, patch: 0
});

var Menu = function (_Element) {
	inherits(Menu, _Element);

	function Menu() {
		classCallCheck(this, Menu);

		var _this = possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, 'menu'));

		_this.identity = identity$77;
		return _this;
	}

	return Menu;
}(Element$1);

var identity$78 = new Identity({
	class: 'Meta',
	major: 1, minor: 0, patch: 0
});

var Meta = function (_Element) {
	inherits(Meta, _Element);

	function Meta() {
		classCallCheck(this, Meta);

		var _this = possibleConstructorReturn(this, (Meta.__proto__ || Object.getPrototypeOf(Meta)).call(this, 'meta'));

		_this.identity = identity$78;
		return _this;
	}

	return Meta;
}(Element$1);

var identity$79 = new Identity({
	class: 'Meter',
	major: 1, minor: 0, patch: 0
});

var Meter = function (_Element) {
	inherits(Meter, _Element);

	function Meter() {
		classCallCheck(this, Meter);

		var _this = possibleConstructorReturn(this, (Meter.__proto__ || Object.getPrototypeOf(Meter)).call(this, 'meter'));

		_this.identity = identity$79;
		return _this;
	}

	return Meter;
}(Element$1);

var identity$80 = new Identity({
	class: 'Nav',
	major: 1, minor: 0, patch: 0
});

var Nav = function (_Element) {
	inherits(Nav, _Element);

	function Nav() {
		classCallCheck(this, Nav);

		var _this = possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).call(this, 'nav'));

		_this.identity = identity$80;
		return _this;
	}

	return Nav;
}(Element$1);

var identity$81 = new Identity({
	class: 'Noscript',
	major: 1, minor: 0, patch: 0
});

var Noscript = function (_Element) {
	inherits(Noscript, _Element);

	function Noscript() {
		classCallCheck(this, Noscript);

		var _this = possibleConstructorReturn(this, (Noscript.__proto__ || Object.getPrototypeOf(Noscript)).call(this, 'noscript'));

		_this.identity = identity$81;
		return _this;
	}

	return Noscript;
}(Element$1);

var identity$82 = new Identity({
	class: 'Object',
	major: 1, minor: 0, patch: 0
});

var Object$1 = function (_Element) {
	inherits(Object, _Element);

	function Object() {
		classCallCheck(this, Object);

		var _this = possibleConstructorReturn(this, (Object.__proto__ || Object.getPrototypeOf(Object)).call(this, 'object'));

		_this.identity = identity$82;
		return _this;
	}

	return Object;
}(Element$1);

var identity$83 = new Identity({
	class: 'Ol',
	major: 1, minor: 0, patch: 0
});

var Ol = function (_Element) {
	inherits(Ol, _Element);

	function Ol() {
		classCallCheck(this, Ol);

		var _this = possibleConstructorReturn(this, (Ol.__proto__ || Object.getPrototypeOf(Ol)).call(this, 'ol'));

		_this.identity = identity$83;
		return _this;
	}

	return Ol;
}(Element$1);

var identity$84 = new Identity({
	class: 'Optgroup',
	major: 1, minor: 0, patch: 0
});

var Optgroup = function (_Element) {
	inherits(Optgroup, _Element);

	function Optgroup() {
		classCallCheck(this, Optgroup);

		var _this = possibleConstructorReturn(this, (Optgroup.__proto__ || Object.getPrototypeOf(Optgroup)).call(this, 'optgroup'));

		_this.identity = identity$84;
		return _this;
	}

	return Optgroup;
}(Element$1);

var identity$85 = new Identity({
	class: 'Option',
	major: 1, minor: 0, patch: 0
});

var Option = function (_Element) {
	inherits(Option, _Element);

	function Option() {
		classCallCheck(this, Option);

		var _this = possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).call(this, 'option'));

		_this.identity = identity$85;
		return _this;
	}

	return Option;
}(Element$1);

var identity$86 = new Identity({
	class: 'Output',
	major: 1, minor: 0, patch: 0
});

var Output = function (_Element) {
	inherits(Output, _Element);

	function Output() {
		classCallCheck(this, Output);

		var _this = possibleConstructorReturn(this, (Output.__proto__ || Object.getPrototypeOf(Output)).call(this, 'output'));

		_this.identity = identity$86;
		return _this;
	}

	return Output;
}(Element$1);

var identity$87 = new Identity({
	class: 'P',
	major: 1, minor: 0, patch: 0
});

var P = function (_Element) {
	inherits(P, _Element);

	function P() {
		classCallCheck(this, P);

		var _this = possibleConstructorReturn(this, (P.__proto__ || Object.getPrototypeOf(P)).call(this, 'p'));

		_this.identity = identity$87;
		return _this;
	}

	return P;
}(Element$1);

var identity$88 = new Identity({
	class: 'Param',
	major: 1, minor: 0, patch: 0
});

var Param = function (_Element) {
	inherits(Param, _Element);

	function Param() {
		classCallCheck(this, Param);

		var _this = possibleConstructorReturn(this, (Param.__proto__ || Object.getPrototypeOf(Param)).call(this, 'param'));

		_this.identity = identity$88;
		return _this;
	}

	return Param;
}(Element$1);

var identity$89 = new Identity({
	class: 'Pre',
	major: 1, minor: 0, patch: 0
});

var Pre = function (_Element) {
	inherits(Pre, _Element);

	function Pre() {
		classCallCheck(this, Pre);

		var _this = possibleConstructorReturn(this, (Pre.__proto__ || Object.getPrototypeOf(Pre)).call(this, 'pre'));

		_this.identity = identity$89;
		return _this;
	}

	return Pre;
}(Element$1);

var identity$90 = new Identity({
	class: 'Progress',
	major: 1, minor: 0, patch: 0
});

var Progress = function (_Element) {
	inherits(Progress, _Element);

	function Progress() {
		classCallCheck(this, Progress);

		var _this = possibleConstructorReturn(this, (Progress.__proto__ || Object.getPrototypeOf(Progress)).call(this, 'progress'));

		_this.identity = identity$90;
		return _this;
	}

	return Progress;
}(Element$1);

var identity$91 = new Identity({
	class: 'Q',
	major: 1, minor: 0, patch: 0
});

var Q = function (_Element) {
	inherits(Q, _Element);

	function Q() {
		classCallCheck(this, Q);

		var _this = possibleConstructorReturn(this, (Q.__proto__ || Object.getPrototypeOf(Q)).call(this, 'q'));

		_this.identity = identity$91;
		return _this;
	}

	return Q;
}(Element$1);

var identity$92 = new Identity({
	class: 'Rp',
	major: 1, minor: 0, patch: 0
});

var Rp = function (_Element) {
	inherits(Rp, _Element);

	function Rp() {
		classCallCheck(this, Rp);

		var _this = possibleConstructorReturn(this, (Rp.__proto__ || Object.getPrototypeOf(Rp)).call(this, 'rp'));

		_this.identity = identity$92;
		return _this;
	}

	return Rp;
}(Element$1);

var identity$93 = new Identity({
	class: 'Rt',
	major: 1, minor: 0, patch: 0
});

var Rt = function (_Element) {
	inherits(Rt, _Element);

	function Rt() {
		classCallCheck(this, Rt);

		var _this = possibleConstructorReturn(this, (Rt.__proto__ || Object.getPrototypeOf(Rt)).call(this, 'rt'));

		_this.identity = identity$93;
		return _this;
	}

	return Rt;
}(Element$1);

var identity$94 = new Identity({
	class: 'Ruby',
	major: 1, minor: 0, patch: 0
});

var Ruby = function (_Element) {
	inherits(Ruby, _Element);

	function Ruby() {
		classCallCheck(this, Ruby);

		var _this = possibleConstructorReturn(this, (Ruby.__proto__ || Object.getPrototypeOf(Ruby)).call(this, 'ruby'));

		_this.identity = identity$94;
		return _this;
	}

	return Ruby;
}(Element$1);

var identity$95 = new Identity({
	class: 'S',
	major: 1, minor: 0, patch: 0
});

var S = function (_Element) {
	inherits(S, _Element);

	function S() {
		classCallCheck(this, S);

		var _this = possibleConstructorReturn(this, (S.__proto__ || Object.getPrototypeOf(S)).call(this, 's'));

		_this.identity = identity$95;
		return _this;
	}

	return S;
}(Element$1);

var identity$96 = new Identity({
	class: 'Samp',
	major: 1, minor: 0, patch: 0
});

var Samp = function (_Element) {
	inherits(Samp, _Element);

	function Samp() {
		classCallCheck(this, Samp);

		var _this = possibleConstructorReturn(this, (Samp.__proto__ || Object.getPrototypeOf(Samp)).call(this, 'samp'));

		_this.identity = identity$96;
		return _this;
	}

	return Samp;
}(Element$1);

var identity$97 = new Identity({
	class: 'Script',
	major: 1, minor: 0, patch: 0
});

var Script = function (_Element) {
	inherits(Script, _Element);

	function Script() {
		classCallCheck(this, Script);

		var _this = possibleConstructorReturn(this, (Script.__proto__ || Object.getPrototypeOf(Script)).call(this, 'script'));

		_this.identity = identity$97;
		return _this;
	}

	return Script;
}(Element$1);

var identity$98 = new Identity({
	class: 'Section',
	major: 1, minor: 0, patch: 0
});

var Section = function (_Element) {
	inherits(Section, _Element);

	function Section() {
		classCallCheck(this, Section);

		var _this = possibleConstructorReturn(this, (Section.__proto__ || Object.getPrototypeOf(Section)).call(this, 'section'));

		_this.identity = identity$98;
		return _this;
	}

	return Section;
}(Element$1);

var identity$99 = new Identity({
	class: 'Select',
	major: 1, minor: 0, patch: 0
});

var Select = function (_Element) {
	inherits(Select, _Element);

	function Select() {
		classCallCheck(this, Select);

		var _this = possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, 'select'));

		_this.identity = identity$99;
		return _this;
	}

	return Select;
}(Element$1);

var identity$100 = new Identity({
	class: 'Small',
	major: 1, minor: 0, patch: 0
});

var Small = function (_Element) {
	inherits(Small, _Element);

	function Small() {
		classCallCheck(this, Small);

		var _this = possibleConstructorReturn(this, (Small.__proto__ || Object.getPrototypeOf(Small)).call(this, 'small'));

		_this.identity = identity$100;
		return _this;
	}

	return Small;
}(Element$1);

var identity$101 = new Identity({
	class: 'Source',
	major: 1, minor: 0, patch: 0
});

var Source = function (_Element) {
	inherits(Source, _Element);

	function Source() {
		classCallCheck(this, Source);

		var _this = possibleConstructorReturn(this, (Source.__proto__ || Object.getPrototypeOf(Source)).call(this, 'source'));

		_this.identity = identity$101;
		return _this;
	}

	return Source;
}(Element$1);

var identity$102 = new Identity({
	class: 'Span',
	major: 1, minor: 0, patch: 0
});

var Span = function (_Element) {
	inherits(Span, _Element);

	function Span() {
		classCallCheck(this, Span);

		var _this = possibleConstructorReturn(this, (Span.__proto__ || Object.getPrototypeOf(Span)).call(this, 'span'));

		_this.identity = identity$102;
		return _this;
	}

	return Span;
}(Element$1);

var identity$103 = new Identity({
	class: 'Strong',
	major: 1, minor: 0, patch: 0
});

var Strong = function (_Element) {
	inherits(Strong, _Element);

	function Strong() {
		classCallCheck(this, Strong);

		var _this = possibleConstructorReturn(this, (Strong.__proto__ || Object.getPrototypeOf(Strong)).call(this, 'strong'));

		_this.identity = identity$103;
		return _this;
	}

	return Strong;
}(Element$1);

var identity$104 = new Identity({
	class: 'Style',
	major: 1, minor: 0, patch: 0
});

var Style = function (_Element) {
	inherits(Style, _Element);

	function Style() {
		classCallCheck(this, Style);

		var _this = possibleConstructorReturn(this, (Style.__proto__ || Object.getPrototypeOf(Style)).call(this, 'style'));

		_this.identity = identity$104;
		return _this;
	}

	return Style;
}(Element$1);

var identity$105 = new Identity({
	class: 'Sub',
	major: 1, minor: 0, patch: 0
});

var Sub = function (_Element) {
	inherits(Sub, _Element);

	function Sub() {
		classCallCheck(this, Sub);

		var _this = possibleConstructorReturn(this, (Sub.__proto__ || Object.getPrototypeOf(Sub)).call(this, 'sub'));

		_this.identity = identity$105;
		return _this;
	}

	return Sub;
}(Element$1);

var identity$106 = new Identity({
	class: 'Summary',
	major: 1, minor: 0, patch: 0
});

var Summary = function (_Element) {
	inherits(Summary, _Element);

	function Summary() {
		classCallCheck(this, Summary);

		var _this = possibleConstructorReturn(this, (Summary.__proto__ || Object.getPrototypeOf(Summary)).call(this, 'summary'));

		_this.identity = identity$106;
		return _this;
	}

	return Summary;
}(Element$1);

var identity$107 = new Identity({
	class: 'Sup',
	major: 1, minor: 0, patch: 0
});

var Sup = function (_Element) {
	inherits(Sup, _Element);

	function Sup() {
		classCallCheck(this, Sup);

		var _this = possibleConstructorReturn(this, (Sup.__proto__ || Object.getPrototypeOf(Sup)).call(this, 'sup'));

		_this.identity = identity$107;
		return _this;
	}

	return Sup;
}(Element$1);

var identity$108 = new Identity({
	class: 'Table',
	major: 1, minor: 0, patch: 0
});

var Table = function (_Element) {
	inherits(Table, _Element);

	function Table() {
		classCallCheck(this, Table);

		var _this = possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this, 'table'));

		_this.identity = identity$108;
		return _this;
	}

	return Table;
}(Element$1);

var identity$109 = new Identity({
	class: 'Tbody',
	major: 1, minor: 0, patch: 0
});

var Tbody = function (_Element) {
	inherits(Tbody, _Element);

	function Tbody() {
		classCallCheck(this, Tbody);

		var _this = possibleConstructorReturn(this, (Tbody.__proto__ || Object.getPrototypeOf(Tbody)).call(this, 'tbody'));

		_this.identity = identity$109;
		return _this;
	}

	return Tbody;
}(Element$1);

var identity$110 = new Identity({
	class: 'Td',
	major: 1, minor: 0, patch: 0
});

var Td = function (_Element) {
	inherits(Td, _Element);

	function Td() {
		classCallCheck(this, Td);

		var _this = possibleConstructorReturn(this, (Td.__proto__ || Object.getPrototypeOf(Td)).call(this, 'td'));

		_this.identity = identity$110;
		return _this;
	}

	return Td;
}(Element$1);

var identity$111 = new Identity({
	class: 'Textarea',
	major: 1, minor: 0, patch: 0
});

var Textarea = function (_Element) {
	inherits(Textarea, _Element);

	function Textarea() {
		classCallCheck(this, Textarea);

		var _this = possibleConstructorReturn(this, (Textarea.__proto__ || Object.getPrototypeOf(Textarea)).call(this, 'textarea'));

		_this.identity = identity$111;
		return _this;
	}

	return Textarea;
}(Element$1);

var identity$112 = new Identity({
	class: 'Tfoot',
	major: 1, minor: 0, patch: 0
});

var Tfoot = function (_Element) {
	inherits(Tfoot, _Element);

	function Tfoot() {
		classCallCheck(this, Tfoot);

		var _this = possibleConstructorReturn(this, (Tfoot.__proto__ || Object.getPrototypeOf(Tfoot)).call(this, 'tfoot'));

		_this.identity = identity$112;
		return _this;
	}

	return Tfoot;
}(Element$1);

var identity$113 = new Identity({
	class: 'Th',
	major: 1, minor: 0, patch: 0
});

var Th = function (_Element) {
	inherits(Th, _Element);

	function Th() {
		classCallCheck(this, Th);

		var _this = possibleConstructorReturn(this, (Th.__proto__ || Object.getPrototypeOf(Th)).call(this, 'th'));

		_this.identity = identity$113;
		return _this;
	}

	return Th;
}(Element$1);

var identity$114 = new Identity({
	class: 'Thead',
	major: 1, minor: 0, patch: 0
});

var Thead = function (_Element) {
	inherits(Thead, _Element);

	function Thead() {
		classCallCheck(this, Thead);

		var _this = possibleConstructorReturn(this, (Thead.__proto__ || Object.getPrototypeOf(Thead)).call(this, 'thead'));

		_this.identity = identity$114;
		return _this;
	}

	return Thead;
}(Element$1);

var identity$115 = new Identity({
	class: 'Time',
	major: 1, minor: 0, patch: 0
});

var Time = function (_Element) {
	inherits(Time, _Element);

	function Time() {
		classCallCheck(this, Time);

		var _this = possibleConstructorReturn(this, (Time.__proto__ || Object.getPrototypeOf(Time)).call(this, 'time'));

		_this.identity = identity$115;
		return _this;
	}

	return Time;
}(Element$1);

var identity$116 = new Identity({
	class: 'Title',
	major: 1, minor: 0, patch: 0
});

var Title = function (_Element) {
	inherits(Title, _Element);

	function Title() {
		classCallCheck(this, Title);

		var _this = possibleConstructorReturn(this, (Title.__proto__ || Object.getPrototypeOf(Title)).call(this, 'title'));

		_this.identity = identity$116;
		return _this;
	}

	return Title;
}(Element$1);

var identity$117 = new Identity({
	class: 'Tr',
	major: 1, minor: 0, patch: 0
});

var Tr = function (_Element) {
	inherits(Tr, _Element);

	function Tr() {
		classCallCheck(this, Tr);

		var _this = possibleConstructorReturn(this, (Tr.__proto__ || Object.getPrototypeOf(Tr)).call(this, 'tr'));

		_this.identity = identity$117;
		return _this;
	}

	return Tr;
}(Element$1);

var identity$118 = new Identity({
	class: 'Track',
	major: 1, minor: 0, patch: 0
});

var Track = function (_Element) {
	inherits(Track, _Element);

	function Track() {
		classCallCheck(this, Track);

		var _this = possibleConstructorReturn(this, (Track.__proto__ || Object.getPrototypeOf(Track)).call(this, 'track'));

		_this.identity = identity$118;
		return _this;
	}

	return Track;
}(Element$1);

var identity$119 = new Identity({
	class: 'U',
	major: 1, minor: 0, patch: 0
});

var U = function (_Element) {
	inherits(U, _Element);

	function U() {
		classCallCheck(this, U);

		var _this = possibleConstructorReturn(this, (U.__proto__ || Object.getPrototypeOf(U)).call(this, 'u'));

		_this.identity = identity$119;
		return _this;
	}

	return U;
}(Element$1);

var identity$120 = new Identity({
	class: 'Ul',
	major: 1, minor: 0, patch: 0
});

var Ul = function (_Element) {
	inherits(Ul, _Element);

	function Ul() {
		classCallCheck(this, Ul);

		var _this = possibleConstructorReturn(this, (Ul.__proto__ || Object.getPrototypeOf(Ul)).call(this, 'ul'));

		_this.identity = identity$120;
		return _this;
	}

	return Ul;
}(Element$1);

var identity$121 = new Identity({
	class: 'Video',
	major: 1, minor: 0, patch: 0
});

var Video = function (_Element) {
	inherits(Video, _Element);

	function Video() {
		classCallCheck(this, Video);

		var _this = possibleConstructorReturn(this, (Video.__proto__ || Object.getPrototypeOf(Video)).call(this, 'video'));

		_this.identity = identity$121;
		return _this;
	}

	return Video;
}(Element$1);

var identity$122 = new Identity({
	class: 'Wbr',
	major: 1, minor: 0, patch: 0
});

var Wbr = function (_Element) {
	inherits(Wbr, _Element);

	function Wbr() {
		classCallCheck(this, Wbr);

		var _this = possibleConstructorReturn(this, (Wbr.__proto__ || Object.getPrototypeOf(Wbr)).call(this, 'wbr'));

		_this.identity = identity$122;
		return _this;
	}

	return Wbr;
}(Element$1);

var Elements = {
	A: A,
	Abbr: Abbr,
	Acronym: Acronym,
	Address: Address,
	Applet: Applet,
	Area: Area,
	Article: Article,
	Aside: Aside,
	Audio: Audio,
	B: B,
	Base: Base$2,
	Basefont: Basefont,
	Bdi: Bdi,
	Bdo: Bdo,
	Big: Big,
	Blockquote: Blockquote,
	Body: Body,
	Br: Br,
	Button: Button,
	Canvas: Canvas,
	Caption: Caption,
	Center: Center,
	Cite: Cite,
	Code: Code,
	Col: Col,
	Colgroup: Colgroup,
	Command: Command,
	Datalist: Datalist,
	Dd: Dd,
	Del: Del,
	Details: Details,
	Dfn: Dfn,
	Dir: Dir,
	Div: Div,
	Dl: Dl,
	Dt: Dt,
	Em: Em,
	Embed: Embed,
	Fieldset: Fieldset,
	Figcaption: Figcaption,
	Figure: Figure,
	Footer: Footer,
	Form: Form,
	H1: H1,
	H2: H2,
	H3: H3,
	H4: H4,
	H5: H5,
	H6: H6,
	Head: Head,
	Header: Header,
	Hgroup: Hgroup,
	Hr: Hr,
	Html: Html,
	I: I,
	Iframe: Iframe,
	Img: Img,
	Input: Input,
	Ins: Ins,
	Kbd: Kbd,
	Keygen: Keygen,
	Label: Label,
	Legend: Legend,
	Li: Li,
	Link: Link,
	Main: Main,
	Map: Map,
	Mark: Mark,
	Menu: Menu,
	Meta: Meta,
	Meter: Meter,
	Nav: Nav,
	Noscript: Noscript,
	Object: Object$1,
	Ol: Ol,
	Optgroup: Optgroup,
	Option: Option,
	Output: Output,
	P: P,
	Param: Param,
	Pre: Pre,
	Progress: Progress,
	Q: Q,
	Rp: Rp,
	Rt: Rt,
	Ruby: Ruby,
	S: S,
	Samp: Samp,
	Script: Script,
	Section: Section,
	Select: Select,
	Small: Small,
	Source: Source,
	Span: Span,
	Strong: Strong,
	Style: Style,
	Sub: Sub,
	Summary: Summary,
	Sup: Sup,
	Table: Table,
	Tbody: Tbody,
	Td: Td,
	Textarea: Textarea,
	Tfoot: Tfoot,
	Th: Th,
	Thead: Thead,
	Time: Time,
	Title: Title,
	Tr: Tr,
	Track: Track,
	U: U,
	Ul: Ul,
	Video: Video,
	Wbr: Wbr
};

var identity$123 = new Identity({
	class: 'StyleVariables',
	major: 1, minor: 0, patch: 0
});

var StyleVariables = function (_Distinct) {
	inherits(StyleVariables, _Distinct);

	function StyleVariables() {
		classCallCheck(this, StyleVariables);

		var _this = possibleConstructorReturn(this, (StyleVariables.__proto__ || Object.getPrototypeOf(StyleVariables)).call(this));

		_this.identity = identity$123;
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

function isOnEventBoundReceipt(u) {
	return u instanceof OnEventBoundReceipt;
}

var RelationshipBindingReceipt = function (_Enableable) {
	inherits(RelationshipBindingReceipt, _Enableable);

	function RelationshipBindingReceipt() {
		var bindings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
		classCallCheck(this, RelationshipBindingReceipt);

		var _this = possibleConstructorReturn(this, (RelationshipBindingReceipt.__proto__ || Object.getPrototypeOf(RelationshipBindingReceipt)).call(this));

		_this[symbol] = bindings;
		bindings.uid = uid();
		return _this;
	}

	createClass(RelationshipBindingReceipt, [{
		key: 'remove',
		value: function remove() {
			var _this2 = this;

			this.handles.forEach(function (handle) {
				handle.remove();
			});
			['subjectHandler', 'toHandler', 'subjectDestroyer', 'toDestroyer', 'normalizer', 'name'].forEach(function (key) {
				delete _this2[symbol][key];
			});
			delete this[symbol];
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
		key: 'subjectHandler',
		get: function get() {
			return this[symbol].subjectHandler;
		},
		set: function set(v) {
			this[symbol].subjectHandler = v;
		}
	}, {
		key: 'toHandler',
		get: function get() {
			return this[symbol].toHandler;
		},
		set: function set(v) {
			this[symbol].toHandler = v;
		}
	}, {
		key: 'subjectDestroyer',
		get: function get() {
			return this[symbol].subjectDestroyer;
		},
		set: function set(v) {
			this[symbol].subjectDestroyer = v;
		}
	}, {
		key: 'toDestroyer',
		get: function get() {
			return this[symbol].toDestroyer;
		},
		set: function set(v) {
			this[symbol].toDestroyer = v;
		}
	}, {
		key: 'name',
		get: function get() {
			return this[symbol].name;
		},
		set: function set(v) {
			this[symbol].name = v;
		}
	}, {
		key: 'normalizer',
		get: function get() {
			return this[symbol].normalizer;
		},
		set: function set(v) {
			this[symbol].normalizer = v;
		}
	}, {
		key: 'handles',
		get: function get() {
			var handles = Object.values(this[symbol]).filter(isOnEventBoundReceipt);
			return handles;
		}
	}, {
		key: 'enabled',
		get: function get() {
			return get$1(RelationshipBindingReceipt.prototype.__proto__ || Object.getPrototypeOf(RelationshipBindingReceipt.prototype), 'enabled', this);
		},
		set: function set(v) {
			var value = !!v;
			this.handles.forEach(function (handle) {
				handle.enabled = value;
			});
			set$1(RelationshipBindingReceipt.prototype.__proto__ || Object.getPrototypeOf(RelationshipBindingReceipt.prototype), 'enabled', value, this);
		}
	}]);
	return RelationshipBindingReceipt;
}(Enableable(Receipt));

function isRelationshipBindingReceipt(u) {
	return u instanceof RelationshipBindingReceipt;
}

var symbol$18 = symbolOrString('BindReceipt.on');

var symbol$19 = symbolOrString('BindReceipt.on');

var symbol$20 = symbolOrString('BindReceipt.normalize');

var symbol$21 = symbolOrString('BindReceipt.remove');

var symbol$22 = symbolOrString('BindReceipt.removeAll');

function isStateChangeReceipt(u) {
	return u instanceof StateChangeReceipt;
}

var graph = {}; //prevent infinite loops

function getUID(obj) {
	var id = obj.uid || obj[symbol$16] || (obj[symbol] ? $obj[symbol].uid : false) || (obj[symbol] ? $obj[symbol][symbol$16] : false);
	if (!id) {
		id = uid();
		addHiddenValue(obj, symbol$16, id);
	}
	return id;
}

function open(obj) {
	for (var i = arguments.length - 1; i >= 0; i--) {
		var _obj = arguments[i];
		var id = getUID(_obj);
		graph[id] = true;
	}
}

function close(obj) {
	for (var i = arguments.length - 1; i >= 0; i--) {
		var _obj2 = arguments[i];
		var id = getUID(_obj2);
		graph[id] = false;
		delete graph[id];
	}
}

function isClosed(obj) {
	var result = true;
	for (var i = arguments.length - 1; i >= 0; i--) {
		var _obj4 = arguments[i];
		var id = getUID(_obj4);
		result = result && !graph[id];
	}
	return result;
}

var actions = {
	'->': function _(objA, propA, objB, propB, data, normalizer) {
		if (!isClosed(objA, objB)) {
			return;
		}

		open(objA, objB);
		objB[propB] = normalizer(objA[propA]);
		close(objA, objB);
	},
	'<-': function _(objA, propA, objB, propB, data, normalizer) {
		if (!isClosed(objA, objB)) {
			return;
		}

		open(objA, objB);
		objA[propA] = normalizer(objB[propB]);
		close(objA, objB);
	},
	'()->': function _(objA, propA, objB, propB, data, normalizer) {
		if (!isClosed(objA, objB)) {
			return;
		}
		if (!isFunction(objA[propA])) {
			return;
		}

		open(objA, objB);
		objB[propB] = normalizer(objA[propA]());
		close(objA, objB);
	},
	'<-()': function _(objA, propA, objB, propB, data, normalizer) {
		if (!isClosed(objA, objB)) {
			return;
		}
		if (!isFunction(objB[propB])) {
			return;
		}

		open(objA, objB);
		objA[propA] = normalizer(objB[propB]());
		close(objA, objB);
	},
	'->()': function _(objA, propA, objB, propB, data, normalizer) {
		if (!isClosed(objA, objB)) {
			return;
		}
		if (!isFunction(objB[propB])) {
			return;
		}

		open(objA, objB);
		objB[propB](normalizer(objA[propA]));
		close(objA, objB);
	},
	'()<-': function _(objA, propA, objB, propB, data, normalizer) {
		if (!isClosed(objA, objB)) {
			return;
		}
		if (!isFunction(objA[propA])) {
			return;
		}

		open(objA, objB);
		objA[propA](normalizer(objB[propB]));
		close(objA, objB);
	},
	'()->()': function _(objA, propA, objB, propB, data, normalizer) {
		if (!isClosed(objA, objB)) {
			return;
		}
		if (!isFunction(objA[propA]) || !isFunction(objB[propB])) {
			return;
		}

		open(objA, objB);
		objB[propB](normalizer(objA[propA]()));
		close(objA, objB);
	},
	'()<-()': function _(objA, propA, objB, propB, data, normalizer) {
		if (!isClosed(objA, objB)) {
			return;
		}
		if (!isFunction(objA[propA]) || !isFunction(objB[propB])) {
			return;
		}

		open(objA, objB);
		objA[propA](normalizer(objB[propB]()));
		close(objA, objB);
	}
};

var none = function none(v) {
	return v;
};

function extensibleToExtensible(receipt, event, bind, arrow, to) {
	var _private = receipt[symbol];
	var action = isFunction(actions[arrow]) ? actions[arrow] : false;
	if (!action) {
		return false;
	}

	//create the relationship
	var elementHandle = _private.subject[symbol$14](event, function (e) {
		var normalizer = binding.normalizer;
		var data = e && isStateChangeReceipt(e.detail) ? e.detail.new : e;
		action(_private.subject, bind, _private.to, to, data, normalizer);
	});

	//destroy the relationship if either one dies
	var elementHandleDestroyer = _private.subject[symbol$14]('destructed', function (e) {
		elementHandle.remove();
	});

	var dataHandleDestroyer = _private.to[symbol$3]('destructed', function (e) {
		elementHandle.remove();
	});

	var binding = new RelationshipBindingReceipt({
		name: event + ': ' + bind + ' ' + arrow + ' ' + to,
		subjectHandler: elementHandle,
		toHandler: false,
		subjectDestroyer: elementHandleDestroyer,
		toDestroyer: dataHandleDestroyer,
		normalizer: none
	});

	return binding;
}

var defaultExtensible = {
	jsui: extensibleToExtensible,
	data: extensibleToExtensible,
	extensible: extensibleToExtensible
};

var relationships = {
	data: Object.create(defaultExtensible),
	jsui: Object.create(defaultExtensible),
	extensible: Object.create(defaultExtensible)
};

var Types$1 = Object.create(types$1);
extend(Types$1).with({
	object: {
		data: isData,
		jsui: isJSUI,
		extensible: isExtensible
	}
});

var getHandledType$2 = getHandledType$1.bind(null, Types$1);

//keys
var BindReceipt = function (_Enableable) {
	inherits(BindReceipt, _Enableable);

	function BindReceipt(relationship, subject) {
		classCallCheck(this, BindReceipt);

		var _this = possibleConstructorReturn(this, (BindReceipt.__proto__ || Object.getPrototypeOf(BindReceipt)).call(this));

		_this[symbol] = {
			uid: uid(),
			Handles: {
				byID: {},
				byName: {}
			}
		};
		_this[symbol].relationship = relationship;
		_this[symbol].subject = subject;

		if (subject) {
			_this.to = _this[symbol$18];
		}
		return _this;
	}

	createClass(BindReceipt, [{
		key: symbol$18,
		value: function value(subject) {
			var to = this[symbol].to;
			if (!to) {
				this[symbol].to = subject;
				this.on = this[symbol$19];
				this.normalize = this[symbol$20];
				delete this.to;
			}
			return this;
		}
	}, {
		key: symbol$19,
		value: function value(events) {
			var _this2 = this;

			if (isObject(events)) {
				Object.keys(events).forEach(function (event) {
					var tie = events[event];
					if (isObject(tie)) {
						Object.keys(tie).forEach(function (bind) {
							var direction = tie[bind];
							if (isObject(direction)) {
								Object.keys(direction).forEach(function (arrow) {
									var _private = _this2[symbol];
									var to = direction[arrow];
									var subjectType = getHandledType$2(_private.subject);
									var toType = getHandledType$2(_private.to);
									var relationshipTo = relationships[subjectType];
									var handle = relationshipTo[toType](_this2, event, bind, arrow, to);
									_private.Handles.byID[handle.uid] = handle;
									_private.Handles.byName[handle.name] = handle;
								});
							}
						});
					}
				});
				delete this.on;
				this.remove = this[symbol$21];
				this.removeAll = this[symbol$22];
			}

			return this;
		}
	}, {
		key: symbol$20,
		value: function value(rules) {
			var _this3 = this;

			if (isObject(rules)) {
				Object.keys(rules).forEach(function (event) {
					var relationships$$1 = rules[event];
					if (isObject(relationships$$1)) {
						Object.keys(relationships$$1).forEach(function (relationship) {
							var normalizer = relationships$$1[relationship];
							var key = event + ': ' + relationship;
							if (isFunction(normalizer) || isJSUI$1(normalizer)) {
								var handle = _this3[symbol].Handles.byName[key];
								if (handle) {
									handle.normalizer = normalizer;
								}
							}
						});
					}
				});
			}

			return this;
		}
	}, {
		key: symbol$21,
		value: function value(handle) {
			var _this4 = this;

			if (isArray(handle)) {
				return handle.forEach(function (h) {
					_this4[symbol$21](h);
				});
			}
			var success = false;
			var Handles = this[symbol].Handles;
			if (isString(handle)) {
				handle = Handles.byName[handle] || Handles.byID[handle];
			}
			if (isRelationshipBindingReceipt(handle)) {
				var name = handle.name;
				var id = handle.id;
				handle.remove();
				delete Handles.byName[name];
				delete Handles.byID[id];
				success = true;
			}
			return success;
		}
	}, {
		key: symbol$22,
		value: function value() {

			var Handles = this[symbol].Handles;
			this[symbol$21](Object.values(Handles.byID));
		}
	}, {
		key: 'uid',
		get: function get() {
			return this[symbol].uid;
		},
		set: function set(id) {
			this[symbol].uid = id;
		}
	}, {
		key: 'handles',
		get: function get() {
			var Handles = this[symbol].Handles;
			return Object.values(Handles.byID);
		}
	}, {
		key: 'enabled',
		get: function get() {
			return get$1(BindReceipt.prototype.__proto__ || Object.getPrototypeOf(BindReceipt.prototype), 'enabled', this);
		},
		set: function set(v) {
			var value = !!v;
			this.handles.forEach(function (handle) {
				handle.enabled = value;
			});
			set$1(BindReceipt.prototype.__proto__ || Object.getPrototypeOf(BindReceipt.prototype), 'enabled', value, this);
		}
	}]);
	return BindReceipt;
}(Enableable(Receipt));

var identity$124 = new Identity({
	class: 'Relationship',
	major: 1, minor: 0, patch: 0
});

var Relationship = function (_Enableable) {
	inherits(Relationship, _Enableable);

	function Relationship() {
		classCallCheck(this, Relationship);

		var _this = possibleConstructorReturn(this, (Relationship.__proto__ || Object.getPrototypeOf(Relationship)).call(this));

		_this[symbol] = {
			bindings: {},
			uid: uid()
		};
		return _this;
	}

	createClass(Relationship, [{
		key: 'bind',
		value: function bind(subject) {
			var binding = new BindReceipt(this, subject);
			this[symbol].bindings[binding.uid] = binding;
			return binding;
		}
	}, {
		key: 'remove',
		value: function remove(binding) {
			var _this2 = this;

			if (isArray(binding)) {
				return binding.forEach(function (b) {
					_this2.remove(b);
				});
			}
			if (isString(binding)) {
				binding = this[symbol].bindings[binding];
			}
			if (binding && isFunction(binding.remove)) {
				delete this[symbol].bindings[binding.uid];
				binding.removeAll();
			}
		}
	}, {
		key: 'removeAll',
		value: function removeAll() {
			this.remove(Object.values(this[symbol].bindings));
		}
	}, {
		key: 'uid',
		get: function get() {
			return this[symbol].uid;
		}
	}]);
	return Relationship;
}(Enableable(Base));

//Keys
//mixins
var DataHandle = function (_Extensible) {
	inherits(DataHandle, _Extensible);

	function DataHandle(data) {
		classCallCheck(this, DataHandle);

		var _this = possibleConstructorReturn(this, (DataHandle.__proto__ || Object.getPrototypeOf(DataHandle)).call(this));

		if (isData(data)) {
			_this[symbol] = data[symbol];
		}
		return _this;
	}

	return DataHandle;
}(Extensible$1);

function isRoutable$1(u) {
	return !!u[symbol$13];
}

var Router$1 = function (_Enableable) {
	inherits(Router, _Enableable);

	function Router() {
		classCallCheck(this, Router);

		var _this = possibleConstructorReturn(this, (Router.__proto__ || Object.getPrototypeOf(Router)).call(this));

		_this[symbol] = {
			roots: {},
			lastURL: null,
			root: null,
			nonexistent: null,
			unauthorized: null
		};
		window.addEventListener("hashchange", _this.onHashChange);
		return _this;
	}

	createClass(Router, [{
		key: 'onHashChange',
		value: function onHashChange(event) {
			var lastURL = this[symbol].lastURL;
			var hash = window.location.hash;
			var path = hash.replace('#!', '');
			var routes = path.split('/');
			routes = routes.filter(function (route) {
				return !!route.length;
			});
			if (!routes.length) {
				return;
			}
			var roots = this.roots;
			var root = routes.splice(0, 1)[0];
			var count = routes.length;
			var parent = roots[root];
			if (!parent) {
				var method = this.nonexistent;
				if (isFunction(method)) {
					method();
				}
				return;
			}
			if (isRoutable$1(parent) && parent.isInstancedRoute) {
				parent = new parent();
			}
			this[symbol].root = parent;
			for (var index = 0; index < count; index++) {
				var route = routes[index];
			}
		}
	}, {
		key: 'add',
		value: function add(routable) {}
	}, {
		key: 'remove',
		value: function remove(routable) {}
	}, {
		key: 'nonexistent',
		get: function get() {},
		set: function set(method) {}
	}, {
		key: 'unauthorized',
		get: function get() {},
		set: function set(method) {}
	}, {
		key: 'roots',
		get: function get() {
			return this[symbol].roots;
		}
	}]);
	return Router;
}(Enableable(Privatelike(Base)));

var router = new Router$1();

//Keys
var Routable = function Routable(descendant) {
	return function (_descendant) {
		inherits(RoutableMixin, _descendant);

		function RoutableMixin() {
			classCallCheck(this, RoutableMixin);

			var _this = possibleConstructorReturn(this, (RoutableMixin.__proto__ || Object.getPrototypeOf(RoutableMixin)).call(this));

			_this[symbol] = {
				state: {
					route: _this.constructor.route,
					subroutes: {}
				}
			};

			return _this;
		}

		createClass(RoutableMixin, [{
			key: 'route',
			get: function get() {
				return this[symbol$1]('route');
			},
			set: function set(route) {
				var old = this.route;
				if (this[symbol$1]('route', route)) {
					if (this.isRootRoute) {
						router.remove(old);
						router.add(route);
					}
				}
			}
		}, {
			key: 'subroutes',
			get: function get() {
				return this[symbol$1]('subroutes');
			}
		}, {
			key: 'isRootRoute',
			get: function get() {
				return this[symbol$1]('isRootRoute');
			},
			set: function set(bool) {
				if (this[symbol$1]('isRootRoute', bool)) {
					if (bool) {
						router.add(this.route);
						return;
					}
					router.remove(route);
				}
			}
		}, {
			key: symbol$12,
			get: function get() {
				return true;
			}
		}], [{
			key: 'route',
			get: function get() {
				return 'route';
			}
		}, {
			key: symbol$13,
			get: function get() {
				return true;
			}
		}]);
		return RoutableMixin;
	}(descendant);
};

var identity$125 = new Identity({
	class: 'Application',
	major: 1, minor: 0, patch: 0
});

var Application = function (_Routable) {
	inherits(Application, _Routable);

	function Application() {
		classCallCheck(this, Application);

		var _this = possibleConstructorReturn(this, (Application.__proto__ || Object.getPrototypeOf(Application)).call(this, 'div'));

		_this.identity = identity$125;
		_this[symbol].routes = {};
		return _this;
	}

	createClass(Application, null, [{
		key: 'register',
		value: function register() {
			router.add(this);
		}
	}, {
		key: 'route',
		get: function get() {
			return 'Application';
		}
	}]);
	return Application;
}(Routable(Distinct));

var identity$126 = new Identity({
	class: 'Role',
	major: 1, minor: 0, patch: 0
});

var Role = function (_Routable) {
	inherits(Role, _Routable);

	function Role() {
		classCallCheck(this, Role);

		var _this = possibleConstructorReturn(this, (Role.__proto__ || Object.getPrototypeOf(Role)).call(this));

		_this.identity = identity$126;
		return _this;
	}

	createClass(Role, null, [{
		key: 'route',
		get: function get() {
			return 'Role';
		}
	}]);
	return Role;
}(Routable(Distinct));

var identity$127 = new Identity({
	class: 'Feature',
	major: 1, minor: 0, patch: 0
});

var Feature = function (_Routable) {
	inherits(Feature, _Routable);

	function Feature() {
		classCallCheck(this, Feature);

		var _this = possibleConstructorReturn(this, (Feature.__proto__ || Object.getPrototypeOf(Feature)).call(this));

		_this.identity = identity$127;
		return _this;
	}

	createClass(Feature, null, [{
		key: 'route',
		get: function get() {
			return 'Feature';
		}
	}]);
	return Feature;
}(Routable(Distinct));

var Classes = {
	Behavior: Behavior,
	Collection: Collection$1,
	Distinct: Distinct,
	Receipt: Receipt,
	ElementReceipt: ElementReceipt,
	ElementClassReceipt: ElementClassReceipt,
	Element: Element$1,
	ElementCollection: ElementCollection,
	Extensible: Extensible$1,
	JSUIError: JSUIError,
	Styleable: Styleable,
	StyleInline: StyleInline,
	StyleRules: StyleRules,
	StyleSheet: StyleSheet,
	StyleSheetRule: StyleSheetRule,
	StyleVariables: StyleVariables,
	Data: Data,
	Identity: Identity,
	Function: JSUIFunction,
	Relationship: Relationship,
	BindReceipt: BindReceipt,
	DataHandle: DataHandle,
	Application: Application,
	Role: Role,
	Feature: Feature
};

//Keys
var Constants = {
	CSS: {
		equivalents: equivalents,
		vendors: vendors
	},
	HTML: {
		tags: tags
	},
	Keys: {
		Extensible: {
			on: symbol$3,
			trigger: symbol$4,
			add: symbol$5,
			remove: symbol$6
		},
		BindReceipt: {
			normalize: symbol$20,
			on: symbol$19,
			to: symbol$18
		},
		General: {
			on: symbol$14,
			private: symbol,
			state: symbol$1,
			trigger: symbol$15,
			uid: symbol$16,
			destructor: symbol$2
		}
	}
};

var Singletons = {
	Style: {
		Sheets: Sheets$1
	}
};

function placeholder$1() {}
function childNodes(node, callback) {
	if (!isFunction(callback)) {
		callback = placeholder$1;
	}
	if (!isElement(node)) {
		return;
	}
	var children = new Collection$1();
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
	var nodes = new Collection$1();
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
		if (isFunction(obj[prop])) {
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

function capitalize(text) {
	return text.charAt(0).toUpperCase() + text.slice(1);
}

function handle(data) {
	if (!isData(data)) {
		return;
	}
	return new DataHandle(data);
}

//Elements
//Events
//Functions
//General
//Paths
//Properties
//Strings
//Objects
//Data
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
	},
	Objects: {
		extend: extend
	},
	Data: {
		handle: handle
	}
};

var Sorts = {
	StyleSheet: {
		rules: rules
	}
};

function feval(code) {
	return new Function(code)();
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

function create(name, json, namespace) {
	name = cleanName(name);
	namespace = namespace || name;
	var Subclasses = {};
	var src = '\n\t\treturn (function(name, namespace, structure, Data, Subclasses, constructor, subconstructor) {\n\t\t\tfunction ' + name + '() {\n\t\t\t\tconstructor.call(this);\n\t\t\t\tsubconstructor.call(this, name, namespace, Subclasses);\n\t\t\t}\n\t\t\t' + name + '.prototype = Object.create(Data.prototype);\n\t\t\t' + name + '.constructor = ' + name + ';\n\t\t\t' + name + '.prototype.toJSON = function toJSON() {\n\t\t\t\tlet self = this;\n\t\t\t\tlet copy = {};\n\t\t\t\tObject.keys(structure).forEach(function(key) {\n\t\t\t\t\tcopy[key] = self[key];\n\t\t\t\t});\n\t\t\t\treturn copy;\n\t\t\t};\n\t\t\treturn ' + name + ';\n\t\t})\n\t';
	var DataClass = feval.call(window, src)(name, namespace, json, Data, Subclasses, constructor$2, subconstructor);
	Object.keys(json).forEach(function (key) {
		var value = json[key];
		if (isObject(value)) {
			Subclasses[key] = create(key, value, name + '.' + key);
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

						var data = new StateChangeReceipt({
							owner: this,
							property: key,
							old: old,
							new: v
						});

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

var Reflection = {
	Data: {
		create: create
	},
	feval: feval
};

var Data$2 = {
	fromJSON: create
};

var JSUI = {
	Settings: defaults$1,
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
