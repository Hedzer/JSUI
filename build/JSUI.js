(function () {
'use strict';

// Production steps of ECMA-262, Edition 5, 15.4.4.18
// Reference: http://es5.github.io/#x15.4.4.18
var hasForEach = !!Array.prototype.forEach;
if (!hasForEach) {
	Array.prototype.forEach = function (callback, thisArg) {

		var T, k;

		if (this === null) {
			throw new TypeError(' this is null or not defined');
		}

		// 1. Let O be the result of calling toObject() passing the
		// |this| value as the argument.
		var O = Object(this);

		// 2. Let lenValue be the result of calling the Get() internal
		// method of O with the argument "length".
		// 3. Let len be toUint32(lenValue).
		var len = O.length >>> 0;

		// 4. If isCallable(callback) is false, throw a TypeError exception. 
		// See: http://es5.github.com/#x9.11
		if (typeof callback !== "function") {
			throw new TypeError(callback + ' is not a function');
		}

		// 5. If thisArg was supplied, let T be thisArg; else let
		// T be undefined.
		if (arguments.length > 1) {
			T = thisArg;
		}

		// 6. Let k be 0
		k = 0;

		// 7. Repeat, while k < len
		while (k < len) {

			var kValue;

			// a. Let Pk be ToString(k).
			//    This is implicit for LHS operands of the in operator
			// b. Let kPresent be the result of calling the HasProperty
			//    internal method of O with argument Pk.
			//    This step can be combined with c
			// c. If kPresent is true, then
			if (k in O) {

				// i. Let kValue be the result of calling the Get internal
				// method of O with argument Pk.
				kValue = O[k];

				// ii. Call the Call internal method of callback with T as
				// the this value and argument list containing kValue, k, and O.
				callback.call(T, kValue, k, O);
			}
			// d. Increase k by 1.
			k++;
		}
		// 8. return undefined
	};
}

var forEach = !hasForEach;

var hasIsArray = !!Array.isArray;
if (!hasIsArray) {
	Array.isArray = function (arg) {
		return Object.prototype.toString.call(arg) === '[object Array]';
	};
}

var isArray = !hasIsArray;

// Production steps of ECMA-262, Edition 5, 15.4.4.19
// Reference: http://es5.github.io/#x15.4.4.19
var hasMap = !!Array.prototype.map;
if (!hasMap) {

	Array.prototype.map = function (callback, thisArg) {

		var T, A, k;

		if (this == null) {
			throw new TypeError(' this is null or not defined');
		}

		// 1. Let O be the result of calling ToObject passing the |this| 
		//    value as the argument.
		var O = Object(this);

		// 2. Let lenValue be the result of calling the Get internal 
		//    method of O with the argument "length".
		// 3. Let len be ToUint32(lenValue).
		var len = O.length >>> 0;

		// 4. If IsCallable(callback) is false, throw a TypeError exception.
		// See: http://es5.github.com/#x9.11
		if (typeof callback !== 'function') {
			throw new TypeError(callback + ' is not a function');
		}

		// 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
		if (arguments.length > 1) {
			T = thisArg;
		}

		// 6. Let A be a new array created as if by the expression new Array(len) 
		//    where Array is the standard built-in constructor with that name and 
		//    len is the value of len.
		A = new Array(len);

		// 7. Let k be 0
		k = 0;

		// 8. Repeat, while k < len
		while (k < len) {

			var kValue, mappedValue;

			// a. Let Pk be ToString(k).
			//   This is implicit for LHS operands of the in operator
			// b. Let kPresent be the result of calling the HasProperty internal 
			//    method of O with argument Pk.
			//   This step can be combined with c
			// c. If kPresent is true, then
			if (k in O) {

				// i. Let kValue be the result of calling the Get internal 
				//    method of O with argument Pk.
				kValue = O[k];

				// ii. Let mappedValue be the result of calling the Call internal 
				//     method of callback with T as the this value and argument 
				//     list containing kValue, k, and O.
				mappedValue = callback.call(T, kValue, k, O);

				// iii. Call the DefineOwnProperty internal method of A with arguments
				// Pk, Property Descriptor
				// { Value: mappedValue,
				//   Writable: true,
				//   Enumerable: true,
				//   Configurable: true },
				// and false.

				// In browsers that support Object.defineProperty, use the following:
				// Object.defineProperty(A, k, {
				//   value: mappedValue,
				//   writable: true,
				//   enumerable: true,
				//   configurable: true
				// });

				// For best browser support, use the following:
				A[k] = mappedValue;
			}
			// d. Increase k by 1.
			k++;
		}

		// 9. return A
		return A;
	};
}

var map = !hasMap;

// Production steps of ECMA-262, Edition 5, 15.4.4.21
// Reference: http://es5.github.io/#x15.4.4.21
var hasReduce = !!Array.prototype.reduce;
if (!Array.prototype.reduce) {
	Array.prototype.reduce = function (callback /*, initialValue*/) {
		'use strict';

		if (this == null) {
			throw new TypeError('Array.prototype.reduce called on null or undefined');
		}
		if (typeof callback !== 'function') {
			throw new TypeError(callback + ' is not a function');
		}
		var t = Object(this),
		    len = t.length >>> 0,
		    k = 0,
		    value;
		if (arguments.length == 2) {
			value = arguments[1];
		} else {
			while (k < len && !(k in t)) {
				k++;
			}
			if (k >= len) {
				throw new TypeError('Reduce of empty array with no initial value');
			}
			value = t[k++];
		}
		for (; k < len; k++) {
			if (k in t) {
				value = callback(value, t[k], k, t);
			}
		}
		return value;
	};
}

var reduce = !hasReduce;

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

// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
var hasObjectKeys = !!Object.keys;
if (!hasObjectKeys) {
	Object.keys = function () {
		'use strict';

		var hasOwnProperty = Object.prototype.hasOwnProperty,
		    hasDontEnumBug = !{
			toString: null
		}.propertyIsEnumerable('toString'),
		    dontEnums = ['toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'constructor'],
		    dontEnumsLength = dontEnums.length;

		return function (obj) {
			if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' && (typeof obj !== 'function' || obj === null)) {
				throw new TypeError('Object.keys called on non-object');
			}

			var result = [],
			    prop,
			    i;

			for (prop in obj) {
				if (hasOwnProperty.call(obj, prop)) {
					result.push(prop);
				}
			}

			if (hasDontEnumBug) {
				for (i = 0; i < dontEnumsLength; i++) {
					if (hasOwnProperty.call(obj, dontEnums[i])) {
						result.push(dontEnums[i]);
					}
				}
			}
			return result;
		};
	}();
}

var keys = !hasObjectKeys;

//from https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent
var hasCustomEvent = typeof window.CustomEvent === "function";
if (!hasCustomEvent) {
	var CustomEvent$1 = function CustomEvent$1(event, params) {
		params = params || { bubbles: false, cancelable: false, detail: undefined };
		var evt = document.createEvent('CustomEvent');
		evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
		return evt;
	};

	CustomEvent$1.prototype = window.Event.prototype;
	window.CustomEvent = CustomEvent$1;
}

var CustomEvent$2 = !hasCustomEvent;

//from https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
var hasAddEventListener = !!Element.prototype.addEventListener;
if (!hasAddEventListener) {
	var eventListeners = [];

	var addEventListener = function addEventListener(type, listener /*, useCapture (will be ignored) */) {
		var self = this;
		var wrapper = function wrapper(e) {
			e.target = e.srcElement;
			e.currentTarget = self;
			if (typeof listener.handleEvent != 'undefined') {
				listener.handleEvent(e);
			} else {
				listener.call(self, e);
			}
		};
		if (type == "DOMContentLoaded") {
			var wrapper2 = function wrapper2(e) {
				if (document.readyState == "complete") {
					wrapper(e);
				}
			};
			document.attachEvent("onreadystatechange", wrapper2);
			eventListeners.push({
				object: this,
				type: type,
				listener: listener,
				wrapper: wrapper2
			});

			if (document.readyState == "complete") {
				var e = new Event();
				e.srcElement = window;
				wrapper2(e);
			}
		} else {
			this.attachEvent("on" + type, wrapper);
			eventListeners.push({
				object: this,
				type: type,
				listener: listener,
				wrapper: wrapper
			});
		}
	};
	var removeEventListener = function removeEventListener(type, listener /*, useCapture (will be ignored) */) {
		var counter = 0;
		while (counter < eventListeners.length) {
			var eventListener = eventListeners[counter];
			if (eventListener.object == this && eventListener.type == type && eventListener.listener == listener) {
				if (type == "DOMContentLoaded") {
					this.detachEvent("onreadystatechange", eventListener.wrapper);
				} else {
					this.detachEvent("on" + type, eventListener.wrapper);
				}
				eventListeners.splice(counter, 1);
				break;
			}
			++counter;
		}
	};

	Element.prototype.addEventListener = addEventListener;
	Element.prototype.removeEventListener = removeEventListener;

	if (HTMLDocument) {
		HTMLDocument.prototype.addEventListener = addEventListener;
		HTMLDocument.prototype.removeEventListener = removeEventListener;
	}
	if (Window) {
		Window.prototype.addEventListener = addEventListener;
		Window.prototype.removeEventListener = removeEventListener;
	}
	if (!Event.prototype.preventDefault) {
		Event.prototype.preventDefault = function () {
			this.returnValue = false;
		};
	}
	if (!Event.prototype.stopPropagation) {
		Event.prototype.stopPropagation = function () {
			this.cancelBubble = true;
		};
	}
}

var addEventListener$1 = !hasAddEventListener;

//Array
//Object
//DOM
var Polyfilled = {
	Array: {
		forEach: forEach,
		isArray: isArray,
		map: map,
		reduce: reduce
	},
	Object: {
		keys: keys
	},
	DOM: {
		CustomEvent: CustomEvent$2,
		addEventListener: addEventListener$1
	}
};

function isObject(u) {
	return (typeof u === 'undefined' ? 'undefined' : _typeof(u)) === 'object';
}

function isString(u) {
	return typeof u === 'string';
}

var Identity = function () {
	function Identity(identity) {
		classCallCheck(this, Identity);


		var defaults$$1 = {
			class: 'NoClassSet',
			major: 0,
			minor: 0,
			patch: 0
		};

		if (isObject(identity)) {
			defaults$$1.class = identity.class || defaults$$1.class;
			defaults$$1.major = identity.major || defaults$$1.major;
			defaults$$1.minor = identity.minor || defaults$$1.minor;
			defaults$$1.patch = identity.patch || defaults$$1.patch;
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

	createClass(Identity, [{
		key: 'class',
		get: function get() {
			return this.private.class;
		}
	}, {
		key: 'major',
		get: function get() {
			return this.private.major;
		}
	}, {
		key: 'minor',
		get: function get() {
			return this.private.minor;
		}
	}, {
		key: 'patch',
		get: function get() {
			return this.private.patch;
		}
	}]);
	return Identity;
}();

function isNumber(u) {
	return !isNaN(u) && typeof u === 'number';
}

var Sheets = {};

function uncapitalize(text) {
	return text.charAt(0).toLowerCase() + text.slice(1);
}

var vendors = ['webkit', 'moz', 'ms', 'o'];

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

function isNull(u) {
	return u === null;
}

function isArray$1(u) {
	return Array.isArray(u);
}

function isFunction$1(u) {
	return typeof u === 'function';
}

function add$1(host, name, defaultValue) {
	Object.defineProperty(host, name, {
		get: function get() {
			var value = this.private.state.hasOwnProperty(name) ? this.private.state[name] : defaultValue;
			return value;
		},
		set: function set(v) {
			var value = this.private.state.hasOwnProperty(name) ? this.private.state[name] : defaultValue;
			var old = value;
			value = v;
			if (old !== v) {
				this.private.state[name] = value;
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

function remove$1() {
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

function constructor() {
	this.private = {
		state: {},
		events: {},
		hooks: {}
	};
}

var Extensible = function () {
	function Extensible() {
		classCallCheck(this, Extensible);

		constructor.call(this);
	}

	createClass(Extensible, [{
		key: 'add',
		value: function add(item, value) {
			var _this = this;

			if (isString(item)) {
				add$1(this, item);
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
		key: 'state',
		value: function state(property, value) {
			var old = this.private.state[property];
			if (arguments.length === 1) {
				return old;
			}

			var hasChanged = old !== value;

			if (hasChanged) {
				this.private.state[property] = value;
				var data = {
					property: property,
					old: old,
					new: value
				};
				this.trigger(property + 'Changed', data);
				this.trigger('Changed', data);
			}

			return hasChanged;
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
					
					hooks[name] = hook;
				}
				if (typeof method === 'function') {
					var eid = uid();
					pool[eid] = method;
				}
				var handle = {
					id: eid,
					pool: pool,
					remove: remove$1,
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

function constructor$1() {
	this.private.uid = uid();
	this.private.Is = {};
}

var identity$4 = new Identity({
	class: 'Distinct',
	major: 1,
	minor: 0,
	patch: 0
});

var Distinct = function (_Extensible) {
	inherits(Distinct, _Extensible);

	function Distinct() {
		classCallCheck(this, Distinct);

		var _this = possibleConstructorReturn(this, (Distinct.__proto__ || Object.getPrototypeOf(Distinct)).call(this));

		constructor$1.call(_this);

		//basics
		_this.identity = identity$4;
		return _this;
	}

	createClass(Distinct, [{
		key: 'uid',
		get: function get() {
			return this.private.uid;
		}
	}, {
		key: 'identity',
		get: function get() {
			return this.state('identity');
		},
		set: function set(identity) {
			this.state('identity', identity);
			if (!this.private.Is[identity]) {
				this.private.Is[identity.class] = identity;
			}
		}
	}, {
		key: 'Is',
		get: function get() {
			return this.private.Is;
		}
	}]);
	return Distinct;
}(Extensible);

var identity$3 = new Identity({
	class: 'StyleRules',
	major: 1,
	minor: 0,
	patch: 0
});

var StyleRules = function (_Distinct) {
	inherits(StyleRules, _Distinct);

	function StyleRules() {
		classCallCheck(this, StyleRules);

		var _this = possibleConstructorReturn(this, (StyleRules.__proto__ || Object.getPrototypeOf(StyleRules)).call(this));

		_this.private.styles = {};
		_this.identity = identity$3;
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

var identity$5 = new Identity({
	class: 'StyleSheet',
	major: 1,
	minor: 0,
	patch: 0
});

var StyleSheet = function (_Distinct) {
	inherits(StyleSheet, _Distinct);

	function StyleSheet(context) {
		classCallCheck(this, StyleSheet);

		var _this = possibleConstructorReturn(this, (StyleSheet.__proto__ || Object.getPrototypeOf(StyleSheet)).call(this));

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

		_this.identity = identity$5;
		return _this;
	}

	createClass(StyleSheet, [{
		key: 'add',
		value: function add(rule) {
			if (isStyleRule(rule)) {
				var rules$$1 = this.private.rules;
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
			if (isUStyleRule(rule)) {
				return this.add(new rule(this.context));
			}
		}
	}, {
		key: 'remove',
		value: function remove(rule) {
			var rules$$1 = this.private.rules;
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

var identity$2 = new Identity({
	class: 'StyleSheetRule',
	major: 1,
	minor: 0,
	patch: 0
});

var StyleSheetRule = function (_StyleRules) {
	inherits(StyleSheetRule, _StyleRules);

	function StyleSheetRule(selector, properties) {
		classCallCheck(this, StyleSheetRule);

		var _this = possibleConstructorReturn(this, (StyleSheetRule.__proto__ || Object.getPrototypeOf(StyleSheetRule)).call(this));

		_this.identity = identity$2;
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

function constructor$2() {
	this.private.context = 'default';
	this.private.style = {
		rules: {}
	};
}

var identity$1 = new Identity({
	class: 'Styleable',
	major: 1,
	minor: 0,
	patch: 0
});

var Styleable = function (_Distinct) {
	inherits(Styleable, _Distinct);

	function Styleable() {
		classCallCheck(this, Styleable);

		var _this = possibleConstructorReturn(this, (Styleable.__proto__ || Object.getPrototypeOf(Styleable)).call(this));

		constructor$2.call(_this);
		_this.identity = identity$1;
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

function isElement(u) {
	return u instanceof Element;
}

function isRegex(u) {
	return u instanceof RegExp;
}

var htmlRegex = /^<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)$/;
function isHTML(u) {
	return htmlRegex.test(u);
}

function isPath(u) {
	return typeof u === 'string' && u.length > 0 && u[0] === '@';
}

var Types = {
	object: {
		null: isNull,
		array: isArray$1,
		element: isElement,
		jsui: isJSUI,
		regex: isRegex
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

function isEmptyString(u) {
	return u === "";
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

var defaults$1 = {
	Development: {
		enabled: false,
		traceErrors: true,
		haltOnErrors: true,
		references: true
	},
	Production: {}
};

var identity$7 = new Identity({
	class: 'StyleInline',
	major: 1,
	minor: 0,
	patch: 0
});

var StyleInline = function (_StyleRules) {
	inherits(StyleInline, _StyleRules);

	function StyleInline(host) {
		classCallCheck(this, StyleInline);

		var _this = possibleConstructorReturn(this, (StyleInline.__proto__ || Object.getPrototypeOf(StyleInline)).call(this));

		_this.private.host = host || false;
		_this.on('styleChanged', function (ev) {
			if (_this.private.host && ev.property) {
				_this.private.host.element.style[ev.property] = ev.new;
			}
		});
		_this.identity = identity$7;
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
			if (isJSUI(element)) {
				this.private.host = element.element;
			}
		}
	}]);
	return StyleInline;
}(StyleRules);

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
	var development = defaults$1.Development;
	if (development.enabled && development.references) {
		this.element.JSUI = this;
	}

	//setup first name+event
	this.name = tag;

	//add styling capabilities
	this.style = new StyleInline(this);

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

function on$1(name, method) {
	if (!isFunction$1(method)) {
		return;
	}
	var events = this.private.events;
	var pool = events[name];
	var self = this;
	if (!pool) {
		var dispatcher = function dispatcher() {
			var _this = this;

			var args = arguments;
			Object.keys(pool).forEach(function (id) {
				var method = pool[id];
				method.apply(_this, args);
			});
		};

		events[name] = {};
		pool = events[name];
		
		var element = this.element;
		if (isElement(element)) {
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
		remove: remove$1,
		removeAll: removeAll
	};
	return handle;
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

function get$2(obj, path) {
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
	return this[property];
}

function _path$5(path) {
	return get$2(this, path);
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
	if (!isElement(el)) {
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

		var _this = possibleConstructorReturn(this, (ElementClassAction.__proto__ || Object.getPrototypeOf(ElementClassAction)).call(this, element));

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
			}
			return true;
		}
	}]);
	return ElementClassAction;
}(ElementAction);

function _string$10(name) {
	if (isEmptyString(name)) {
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

//constructor & destructor
//handlers
//classes
var identity$6 = new Identity({
	class: 'Element',
	major: 1,
	minor: 0,
	patch: 0
});

var Element$1 = function (_Styleable) {
	inherits(Element, _Styleable);

	function Element(tag) {
		classCallCheck(this, Element);

		var _this = possibleConstructorReturn(this, (Element.__proto__ || Object.getPrototypeOf(Element)).call(this, tag));

		constructor$3.call(_this, tag);
		_this.identity = identity$6;
		return _this;
	}

	createClass(Element, [{
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
		value: function on(event, method) {
			var type = getHandledType$1(event);
			var action = On[type];
			return (action || unhandled).call(this, event, method);
		}
	}, {
		key: 'trigger',
		value: function trigger(event, args) {
			var type = getHandledType$1(event);
			var action = Trigger[type];
			get$1(Element.prototype.__proto__ || Object.getPrototypeOf(Element.prototype), 'trigger', this).call(this, event, args);
			return (action || unhandled).call(this, event, args);
		}
	}, {
		key: 'find',
		value: function find(what) {
			var type = getHandledType$1(what);
			var action = Find[type];
			return (action || unhandled([])).call(this, what);
		}
	}, {
		key: 'with',
		value: function _with(method) {
			var type = getHandledType$1(method);
			var action = With[type];
			return (action || unhandled).call(this, method);
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
	}, {
		key: 'context',
		set: function set(context) {
			var _this2 = this;

			set$1(Element.prototype.__proto__ || Object.getPrototypeOf(Element.prototype), 'context', context, this);

			//if not default, change the context of the child elements
			this.children(function (child) {
				//allow context to only change once
				child.context = child.context === 'default' ? _this2.context : child.context;
			});
		}
	}, {
		key: 'identity',
		get: function get() {
			return get$1(Element.prototype.__proto__ || Object.getPrototypeOf(Element.prototype), 'identity', this);
		},
		set: function set(identity) {
			set$1(Element.prototype.__proto__ || Object.getPrototypeOf(Element.prototype), 'identity', identity, this);
			addClass(this.element, identity.class);
		}
	}]);
	return Element;
}(Styleable);

function isJSUI(u) {
	return u instanceof Element$1;
}

var identity = new Identity({
	class: 'Behavior',
	major: 1,
	minor: 0,
	patch: 0
});

var Behavior = function (_Styleable) {
	inherits(Behavior, _Styleable);

	function Behavior(host) {
		classCallCheck(this, Behavior);

		//create hosts container
		var _this = possibleConstructorReturn(this, (Behavior.__proto__ || Object.getPrototypeOf(Behavior)).call(this));

		_this.private.hosts = {};
		if (host) {
			_this.attach(host);
		}

		//setup new props
		_this.identity = identity;
		_this.context = 'behavior';
		return _this;
	}

	createClass(Behavior, [{
		key: 'attach',
		value: function attach(host) {
			if (isJSUI(host)) {
				var id = host.uid;
				if (this.private.hosts[id]) {
					return;
				}
				this.private.hosts[id] = host;
				this.trigger('attach', host);
				return;
			}
		}
	}, {
		key: 'detach',
		value: function detach(host) {
			var id = void 0;
			if (isJSUI(host)) {
				id = host.uid;
			}
			host = this.private.hosts[id];
			delete this.private.hosts[id];
			this.trigger('detach', host);
		}
	}, {
		key: 'destructor',
		value: function destructor() {
			get$1(Behavior.prototype.__proto__ || Object.getPrototypeOf(Behavior.prototype), 'destructor', this).call(this);
		}
	}]);
	return Behavior;
}(Styleable);

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

		if (isArray$1(target)) {
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
		key: 'with',
		value: function _with() {
			return this.doToEach('with', arguments);
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

var tags = ['a', 'abbr', 'acronym', 'address', 'applet', 'area', 'article', 'aside', 'audio', 'b', 'base', 'basefont', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'command', 'datalist', 'dd', 'del', 'details', 'dfn', 'dir', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'menu', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'video', 'wbr'];

function constructor$4() {
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
	var construct = constructor || constructor$4;
	var identity = new Identity({
		class: name,
		major: 1,
		minor: 0,
		patch: 0
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

var identity$8 = new Identity({
	class: 'StyleVariables',
	major: 1,
	minor: 0,
	patch: 0
});

var StyleVariables = function (_Distinct) {
	inherits(StyleVariables, _Distinct);

	function StyleVariables() {
		classCallCheck(this, StyleVariables);

		var _this = possibleConstructorReturn(this, (StyleVariables.__proto__ || Object.getPrototypeOf(StyleVariables)).call(this));

		_this.identity = identity$8;
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
			if (isArray$1(name)) {
				name.forEach(function (key) {
					_this3.remove(key);
				});
				return true;
			}
		}
	}]);
	return StyleVariables;
}(Distinct);

function constructor$5() {
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

	constructor$5.call(this);
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
			
			hooks[name] = hook;
		}
		if (isFunction$1(method)) {
			var eid = uid();
			pool[eid] = method;
		}
		var handle = {
			id: eid,
			pool: pool,
			remove: remove$1,
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

var Classes = {
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

var Constants = {
	CSS: {
		equivalents: equivalents,
		vendors: vendors
	},
	HTML: {
		tags: tags
	}
};

var Singletons = {
	Style: {
		Sheets: Sheets
	}
};

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

function isData(u) {
	return u instanceof Data;
}

function isUStyleRule$1(u) {
	return !!(u && u.prototype && (u.prototype instanceof Data || u === Data));
}

var TypeChecks = {
	isArray: isArray$1,
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
	isStyleRule: isStyleRule,
	isTextNode: isTextNode,
	isUJSUI: isUJSUI,
	isUndefined: isUndefined,
	isUStyleRule: isUStyleRule,
	isData: isData,
	isUData: isUStyleRule$1
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
		var root;
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

function debounce(fn, time) {
	if (isFunction$1(fn)) {
		var dbcTimer;
		return function () {
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
		removeAll: removeAll
	},
	Functions: {
		debounce: debounce
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
	var src = '\n\t\treturn (function(name, namespace, structure, Data, Subclasses, constructor, subconstructor) {\n\t\t\tfunction ' + name + '() {\n\t\t\t\tconstructor.call(this);\n\t\t\t\tsubconstructor.call(this, name, namespace, Subclasses);\n\t\t\t}\n\t\t\t' + name + '.prototype = Object.create(Data.prototype);\n\t\t\t' + name + '.constructor = ' + name + ';\n\t\t\t' + name + '.prototype.toJSON = function toJSON() {\n\t\t\t\tvar self = this;\n\t\t\t\tvar copy = {};\n\t\t\t\tObject.keys(structure).forEach(function(key) {\n\t\t\t\t\tconsole.log(key)\n\t\t\t\t\tcopy[key] = self[key];\n\t\t\t\t});\n\t\t\t\tconsole.log(copy);\n\t\t\t\treturn copy;\n\t\t\t};\n\t\t\treturn ' + name + ';\n\t\t})\n\t';
	var DataClass = feval.call(window, src)(name, namespace, json, Data, Subclasses, constructor$5, subconstructor);
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
							trigger(key + 'Changed', data);
							trigger('Changed', data);
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
			var node = document.createTextNode("");
			instance.element.appendChild(node);
			instance.private.text = node;
			textNodes.push({ node: node, value: child.nodeValue });
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
	var alias;
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
	var instantiation = '\tvar ' + name + ' = ' + (isRoot ? 'this' : 'new ' + alias + '();');

	var assignments = [];
	var instructions = [];
	var texts = [];
	childNodes(node, function (child) {
		if (isTextNode(child)) {
			var textName = 'text' + state.Counts.text;
			instructions.push('\tvar ' + textName + ' = document.createTextNode(\'\');');
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
	var parent;
	if (inherits) {
		parent = inherits.split('-').reduce(getter, classes);
	}
	parent = parent || element;
	var instruction = htmlToInstructions(root, classes);
	var aliases = Object.keys(instruction.state.aliases);
	//build headers
	var header = ['\n\t\/\/ Imports'];
	aliases.forEach(function (alias) {
		header.push('\tvar ' + alias + ' = classes.' + alias + '.type;');
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
	var container;
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
	Data: Data$2,
	Polyfilled: Polyfilled
};

window.JSUI = JSUI;

}());

//# sourceMappingURL=JSUI.js.map
