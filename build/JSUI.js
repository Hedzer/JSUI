(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Behavior = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Styleable2 = require('./Styleable');

var _Styleable3 = _interopRequireDefault(_Styleable2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Behavior = exports.Behavior = function (_Styleable) {
	_inherits(Behavior, _Styleable);

	function Behavior(host) {
		_classCallCheck(this, Behavior);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Behavior).call(this));

		_this.private.host = host;
		_this.context = 'behavior';
		return _this;
	}

	_createClass(Behavior, [{
		key: 'destructor',
		value: function destructor() {
			_get(Object.getPrototypeOf(Behavior.prototype), 'destructor', this).call(this);
		}
	}]);

	return Behavior;
}(_Styleable3.default);

},{"./Styleable":31}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Collection = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _isArray = require('../TypeChecks/isArray');

var _isArray2 = _interopRequireDefault(_isArray);

var _DoToEach = require('./Collection/Handlers/DoToEach');

var _DoToEach2 = _interopRequireDefault(_DoToEach);

var _getHandledType = require('./Element/getHandledType');

var _getHandledType2 = _interopRequireDefault(_getHandledType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Collection = exports.Collection = function (_Array) {
	_inherits(Collection, _Array);

	function Collection(target) {
		_classCallCheck(this, Collection);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Collection).call(this));

		if ((0, _isArray2.default)(target)) {
			target.forEach(function (item) {
				_this.push(item);
			});
		}
		return _this;
	}

	_createClass(Collection, [{
		key: 'doToEach',
		value: function doToEach(method, args) {
			var type = (0, _getHandledType2.default)(method);
			var action = _DoToEach2.default[type];
			return (action || unhandled).call(this, method, args);
		}
	}]);

	return Collection;
}(Array);

},{"../TypeChecks/isArray":52,"./Collection/Handlers/DoToEach":3,"./Element/getHandledType":22}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _isFunction = require('../../../TypeChecks/isFunction');

var _isFunction2 = _interopRequireDefault(_isFunction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function element_handler_dotoeach_string(command, args) {
	var results = [];
	this.forEach(function (item) {
		if ((0, _isFunction2.default)(item[command])) {
			results.push(item[command].apply(item, args));
			return;
		}
		results.push(undefined);
	});
	return results;
}
function element_handler_dotoeach_path(command, args) {
	//WIP
}

var DoToEach = {
	string: element_handler_dotoeach_string,
	path: element_handler_dotoeach_path
};

exports.default = DoToEach;

},{"../../../TypeChecks/isFunction":55}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Extensible2 = require('./Extensible');

var _Extensible3 = _interopRequireDefault(_Extensible2);

var _uid = require('../Utilities/General/uid');

var _uid2 = _interopRequireDefault(_uid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Distinct = function (_Extensible) {
	_inherits(Distinct, _Extensible);

	function Distinct() {
		_classCallCheck(this, Distinct);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Distinct).call(this));

		_this.uid = (0, _uid2.default)();
		return _this;
	}

	return Distinct;
}(_Extensible3.default);

exports.default = Distinct;

},{"../Utilities/General/uid":80,"./Extensible":24}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _getHandledType = require('./Element/getHandledType');

var _getHandledType2 = _interopRequireDefault(_getHandledType);

var _unhandled = require('../TypeChecks/unhandled');

var _unhandled2 = _interopRequireDefault(_unhandled);

var _isFunction = require('../TypeChecks/isFunction');

var _isFunction2 = _interopRequireDefault(_isFunction);

var _isArray = require('../TypeChecks/isArray');

var _isArray2 = _interopRequireDefault(_isArray);

var _isElement = require('../TypeChecks/isElement');

var _isElement2 = _interopRequireDefault(_isElement);

var _isEmptyString = require('../TypeChecks/isEmptyString');

var _isEmptyString2 = _interopRequireDefault(_isEmptyString);

var _constructor = require('./Element/constructor');

var _constructor2 = _interopRequireDefault(_constructor);

var _destructor2 = require('./Element/destructor');

var _destructor3 = _interopRequireDefault(_destructor2);

var _Add = require('./Element/Handlers/Add');

var _Add2 = _interopRequireDefault(_Add);

var _AddTo = require('./Element/Handlers/AddTo');

var _AddTo2 = _interopRequireDefault(_AddTo);

var _Remove = require('./Element/Handlers/Remove');

var _Remove2 = _interopRequireDefault(_Remove);

var _On = require('./Element/Handlers/On');

var _On2 = _interopRequireDefault(_On);

var _Trigger = require('./Element/Handlers/Trigger');

var _Trigger2 = _interopRequireDefault(_Trigger);

var _Find = require('./Element/Handlers/Find');

var _Find2 = _interopRequireDefault(_Find);

var _With = require('./Element/Handlers/With');

var _With2 = _interopRequireDefault(_With);

var _Do = require('./Element/Handlers/Do');

var _Do2 = _interopRequireDefault(_Do);

var _Get = require('./Element/Handlers/Get');

var _Get2 = _interopRequireDefault(_Get);

var _Set = require('./Element/Handlers/Set');

var _Set2 = _interopRequireDefault(_Set);

var _Text = require('./Element/Handlers/Text');

var _Text2 = _interopRequireDefault(_Text);

var _Attribute = require('./Element/Handlers/Attribute');

var _Attribute2 = _interopRequireDefault(_Attribute);

var _Styleable2 = require('./Styleable');

var _Styleable3 = _interopRequireDefault(_Styleable2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//constructor & destructor


//handlers


//classes


var Element = function (_Styleable) {
	_inherits(Element, _Styleable);

	function Element(tag) {
		_classCallCheck(this, Element);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Element).call(this, tag));

		_constructor2.default.call(_this, tag);
		return _this;
	}

	_createClass(Element, [{
		key: 'add',
		value: function add(item) {
			var type = (0, _getHandledType2.default)(item);
			var action = _Add2.default[type];
			return (action || _get(Object.getPrototypeOf(Element.prototype), 'add', this) || _unhandled2.default).call(this, item);
		}
	}, {
		key: 'addTo',
		value: function addTo(item) {
			var type = (0, _getHandledType2.default)(item);
			var action = _AddTo2.default[type];
			return (action || _unhandled2.default).call(this, item);
		}
	}, {
		key: 'remove',
		value: function remove(item) {
			var type = (0, _getHandledType2.default)(item);
			var action = _Remove2.default[type];
			return (action || _unhandled2.default).call(this, item);
		}
	}, {
		key: 'on',
		value: function on(event, method) {
			var type = (0, _getHandledType2.default)(event);
			var action = _On2.default[type];
			return (action || _unhandled2.default).call(this, event, method);
		}
	}, {
		key: 'trigger',
		value: function trigger(event, args) {
			var type = (0, _getHandledType2.default)(event);
			var action = _Trigger2.default[type];
			return (action || _unhandled2.default).call(this, event, args);
		}
	}, {
		key: 'find',
		value: function find(what) {
			var type = (0, _getHandledType2.default)(what);
			var action = _Find2.default[type];
			return (action || (0, _unhandled2.default)([])).call(this, what);
		}
	}, {
		key: 'with',
		value: function _with(method) {
			var type = (0, _getHandledType2.default)(method);
			var action = _With2.default[type];
			return (action || _unhandled2.default).call(this, method);
		}
	}, {
		key: 'do',
		value: function _do(method, args) {
			var type = (0, _getHandledType2.default)(method);
			var action = _Do2.default[type];
			return (action || _unhandled2.default).call(this, method, args);
		}
	}, {
		key: 'get',
		value: function get(property) {
			var type = (0, _getHandledType2.default)(property);
			var action = _Get2.default[type];
			return (action || _unhandled2.default).call(this, property);
		}
	}, {
		key: 'set',
		value: function set(property, value) {
			var type = (0, _getHandledType2.default)(property);
			var action = _Set2.default[type];
			return (action || _unhandled2.default).call(this, property, value);
		}
	}, {
		key: 'text',
		value: function text(_text) {
			var type = (0, _getHandledType2.default)(_text);
			var action = _Text2.default[type];
			return (action || _unhandled2.default).call(this, _text);
		}
	}, {
		key: 'attribute',
		value: function attribute(name, value) {
			if (!(0, _isElement2.default)(this.element) || (0, _isEmptyString2.default)(name)) {
				return;
			}
			var type = (0, _getHandledType2.default)(name);
			var isSet = arguments.length > 1;
			var action = _Attribute2.default[isSet ? 'Set' : 'Get'][type];
			return (action || _unhandled2.default).apply(this, [name, value]);
		}
	}, {
		key: 'children',
		value: function children(callback) {
			var results = [];
			if ((0, _isFunction2.default)(callback) && self.private && self.private.children) {
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
			_destructor3.default.call(this);
		}
	}]);

	return Element;
}(_Styleable3.default);

exports.default = Element;

},{"../TypeChecks/isArray":52,"../TypeChecks/isElement":53,"../TypeChecks/isEmptyString":54,"../TypeChecks/isFunction":55,"../TypeChecks/unhandled":70,"./Element/Handlers/Add":7,"./Element/Handlers/AddTo":8,"./Element/Handlers/Attribute":9,"./Element/Handlers/Do":11,"./Element/Handlers/Find":12,"./Element/Handlers/Get":13,"./Element/Handlers/On":14,"./Element/Handlers/Remove":15,"./Element/Handlers/Set":16,"./Element/Handlers/Text":17,"./Element/Handlers/Trigger":18,"./Element/Handlers/With":19,"./Element/constructor":20,"./Element/destructor":21,"./Element/getHandledType":22,"./Styleable":31}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ElementCollection = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Collection2 = require('./Collection');

var _Collection3 = _interopRequireDefault(_Collection2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ElementCollection = exports.ElementCollection = function (_Collection) {
	_inherits(ElementCollection, _Collection);

	function ElementCollection(target) {
		var _ret;

		_classCallCheck(this, ElementCollection);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ElementCollection).call(this, target));

		return _ret = _this.doToEach('constructor', arguments), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(ElementCollection, [{
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
}(_Collection3.default);

},{"./Collection":2}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _addClass = require('../../../Utilities/Elements/addClass');

var _addClass2 = _interopRequireDefault(_addClass);

var _add = require('../../../Utilities/Properties/add');

var _isUJSUI = require('../../../TypeChecks/isUJSUI');

var _isUJSUI2 = _interopRequireDefault(_isUJSUI);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function element_handler_add_element(element) {
	if (this.element) {
		this.element.appendChild(element);
	}
}
function element_handler_add_jsui(instance) {
	if (this.element && instance.element) {
		this.element.appendChild(instance.element);
		this.private.children = this.private.children || {};
		this.private.children[instance.uid] = instance;
		instance.private.parent = this;
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
				(0, _addClass2.default)(instance.element, name);
			}
			return instance;
		}.bind(this)
	};
	return options;
}
function element_handler_add_array(collection) {
	var _this = this;

	var results = [];
	collection.forEach(function (item) {
		results.push(_this.add(item));
	});
	return results;
}
function element_handler_add_string(prop) {
	(0, _add.add)(this, prop);
}
function element_handler_add_html(markup) {
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
function element_handler_add_path(prop) {
	return element_handler_add_string.call(this, prop);
}
function element_handler_add_function(method) {
	if ((0, _isUJSUI2.default)(method)) {
		return this.add(new method());
	}
}

var Add = {
	element: element_handler_add_element,
	jsui: element_handler_add_jsui,
	array: element_handler_add_array,
	string: element_handler_add_string,
	html: element_handler_add_html,
	path: element_handler_add_path,
	function: element_handler_add_function
};

exports.default = Add;

},{"../../../TypeChecks/isUJSUI":67,"../../../Utilities/Elements/addClass":71,"../../../Utilities/Properties/add":86}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
function element_handler_addTo_element(element) {
	if (element) {
		element.appendChild(this.element);
	}
}
function element_handler_addTo_jsui(instance) {
	return instance.add(this);
}
function element_handler_addTo_array(collection) {
	var _this = this;

	var results = [];
	collection.forEach(function (item) {
		results.push(_this.addTo(item));
	});
	return results;
}

var AddTo = {
	element: element_handler_addTo_element,
	jsui: element_handler_addTo_jsui,
	array: element_handler_addTo_array
};

exports.default = AddTo;

},{}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _nodeAttributes = require('../../../Utilities/Elements/nodeAttributes');

var _nodeAttributes2 = _interopRequireDefault(_nodeAttributes);

var _isUndefined = require('../../../TypeChecks/isUndefined');

var _isUndefined2 = _interopRequireDefault(_isUndefined);

var _isNull = require('../../../TypeChecks/isNull');

var _isNull2 = _interopRequireDefault(_isNull);

var _isObject = require('../../../TypeChecks/isObject');

var _isObject2 = _interopRequireDefault(_isObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Get
function element_handler_attribute_get_undefined() {
	var results = {};
	(0, _nodeAttributes2.default)(this.element, function (attribute, value, ref) {
		results[attribute] = value;
	});
	return results;
}
function element_handler_attribute_get_string(name) {
	return this.element.getAttribute(name);
}
function element_handler_attribute_get_path() {
	return element_handler_attribute_get_string.apply(this, arguments);
}
function element_handler_attribute_get_array(collection) {
	var _this = this;

	var results = {};
	collection.forEach(function (attribute) {
		results[attribute] = _this.attribute(attribute);
	});
	return results;
}
function element_handler_attribute_get_object(macro) {
	return element_handler_attribute_set_object.call(this, macro);
}

//Set
function element_handler_attribute_set_string(name, value) {
	if ((0, _isUndefined2.default)(value) || (0, _isNull2.default)(value)) {
		this.element.removeAttribute(name);
		return true;
	}
	this.element.setAttribute(name, value);
	return true;
}
function element_handler_attribute_set_path() {
	return element_handler_attribute_set_string.apply(this, arguments);
}
function element_handler_attribute_set_array(collection, value) {
	var _this2 = this;

	var results = [];
	collection.forEach(function (attribute) {
		results.push(_this2.attribute(attribute, value));
	});
	return results;
}
function element_handler_attribute_set_object(macro, value) {
	var _this3 = this;

	var result = (0, _isObject2.default)(value) ? value : {};
	Object.keys(macro).forEach(function (attribute) {
		results[attribute] = _this3.attribute(attribute, macro[attribute]);
	});
	return results;
}

var Attribute = {
	Get: {
		undefined: element_handler_attribute_get_undefined,
		string: element_handler_attribute_get_string,
		path: element_handler_attribute_get_path,
		array: element_handler_attribute_get_array,
		object: element_handler_attribute_get_object
	},
	Set: {
		string: element_handler_attribute_set_string,
		path: element_handler_attribute_set_path,
		array: element_handler_attribute_set_array,
		object: element_handler_attribute_set_object
	}
};

exports.default = Attribute;

},{"../../../TypeChecks/isNull":59,"../../../TypeChecks/isObject":61,"../../../TypeChecks/isUndefined":69,"../../../Utilities/Elements/nodeAttributes":76}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getTagName = require('../../../Utilities/Elements/getTagName');

var _getTagName2 = _interopRequireDefault(_getTagName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function element_handler_constructor_element(el) {
	this.element = el;
	return (0, _getTagName2.default)(el);
}
function element_handler_constructor_string(tag) {
	tag = tag || 'div';
	this.element = document.createElement(tag);
	return tag;
}

var Constructor = {
	element: element_handler_constructor_element,
	string: element_handler_constructor_string
};

exports.default = Constructor;

},{"../../../Utilities/Elements/getTagName":74}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _isFunction = require('../../../TypeChecks/isFunction');

var _isFunction2 = _interopRequireDefault(_isFunction);

var _isArray = require('../../../TypeChecks/isArray');

var _isArray2 = _interopRequireDefault(_isArray);

var _getWithContext = require('../../../Utilities/Paths/getWithContext');

var _getWithContext2 = _interopRequireDefault(_getWithContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function element_handler_do_array(collection) {
	var _this = this;

	var results = [];
	collection.forEach(function (item) {
		results.push(_this.do(item));
	});
	return results;
}
function element_handler_do_object(macro) {
	var _this2 = this;

	var results = {};
	Object.keys(macro).forEach(function (command) {
		results[command] = _this2.do(command, macro[command]);
	});
	return results;
}
function element_handler_do_string(command, args) {
	if ((0, _isFunction2.default)(this[command])) {
		if ((0, _isArray2.default)(args)) {
			return this[command].apply(this, args);
		}
		return this[command](args);
	}
}
function element_handler_do_path(command, args) {
	var path = (0, _getWithContext2.default)(this, command);
	if (!path || !path.context || !path.property) {
		return;
	}
	var method = path.context[path.property];
	if ((0, _isFunction2.default)(method)) {
		if ((0, _isArray2.default)(args)) {
			return method.apply(path.context, args);
		}
		return method.call(path.context, args);
	}
}

var Do = {
	array: element_handler_do_array,
	object: element_handler_do_object,
	string: element_handler_do_string,
	path: element_handler_do_path
};

exports.default = Do;

},{"../../../TypeChecks/isArray":52,"../../../TypeChecks/isFunction":55,"../../../Utilities/Paths/getWithContext":82}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Element = require('../../Element');

var _Element2 = _interopRequireDefault(_Element);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function element_handler_find_array(collection) {
	var _this = this;

	var results = [];
	collection.forEach(function (item) {
		results.push(_this.find(item));
	});
	return results;
}
function element_handler_find_function(method) {
	var results = [];
	var isJSUI = _Element2.default.isPrototypeOf(method.prototype);
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
function element_handler_find_jsui(proto) {
	var results = [];
	this.children(function (child) {
		if (child instanceof proto) {
			results.push(child);
		}
	});
	return results;
}
function element_handler_find_regex(expression) {
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
function element_handler_find_string(query) {
	var results = null;
	results = this.element.querySelectorAll(query);
	results = !results || results === null ? [] : results;
	return results;
}
function element_handler_find_path(query) {
	return element_handler_find_string.call(this, query);
}
function element_handler_find_undefined() {
	var results = [];
	this.children(function (child) {
		results.push(child);
	});
	return results;
}

var Find = {
	array: element_handler_find_array,
	function: element_handler_find_function,
	jsui: element_handler_find_jsui,
	regex: element_handler_find_regex,
	string: element_handler_find_string,
	path: element_handler_find_path,
	undefined: element_handler_find_undefined
};

exports.default = Find;

},{"../../Element":5}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _get = require('../../../Utilities/Paths/get');

var _get2 = _interopRequireDefault(_get);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function element_handler_get_array(collection) {
	var _this = this;

	var results = [];
	collection.forEach(function (item) {
		results.push(_this.get(item));
	});
	return results;
}
function element_handler_get_string(property) {
	if (!property) {
		return;
	}
	if (!this.hasOwnProperty(property)) {
		return;
	}
	return this[property];
}
function element_handler_get_path(path) {
	return (0, _get2.default)(this, path);
}

var Get = {
	array: element_handler_get_array,
	string: element_handler_get_string,
	path: element_handler_get_path
};

exports.default = Get;

},{"../../../Utilities/Paths/get":81}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _isFunction = require('../../../TypeChecks/isFunction');

var _isFunction2 = _interopRequireDefault(_isFunction);

var _uid = require('../../../Utilities/General/uid');

var _uid2 = _interopRequireDefault(_uid);

var _remove = require('../../../Utilities/Events/remove');

var _removeAll = require('../../../Utilities/Events/removeAll');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function element_handler_on_array(collection, method) {
	var _this = this;

	var results = [];
	collection.forEach(function (item) {
		results.push(_this.on(item, method));
	});
	return results;
}
function element_handler_on_object(assignments) {
	var _this2 = this;

	var results = {};
	Object.keys(assignments).forEach(function (name) {
		var method = assignments[name];
		results[name] = _this2.on(name, method);
	});
	return results;
}
function element_handler_on_string(name, method) {
	if (!(0, _isFunction2.default)(method)) {
		return;
	}
	var events = (this.private || {}).Events || {};
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
		if (this.element) {
			this.element.addEventListener(name, hook, false);
		}
	}
	if ((0, _isFunction2.default)(method)) {
		var eid = (0, _uid2.default)();
		pool[eid] = method;
	}
	var handle = {
		id: eid,
		pool: pool,
		remove: _remove.remove,
		removeAll: _removeAll.removeAll
	};
	return handle;
}
function element_handler_on_path(name, method) {
	return element_handler_on_string.call(this, name, method);
}

var On = {
	array: element_handler_on_array,
	object: element_handler_on_object,
	string: element_handler_on_string,
	path: element_handler_on_path
};

exports.default = On;

},{"../../../TypeChecks/isFunction":55,"../../../Utilities/Events/remove":77,"../../../Utilities/Events/removeAll":78,"../../../Utilities/General/uid":80}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
function element_handler_remove_array(collection) {
	var _this = this;

	var results = [];
	collection.forEach(function (item) {
		results.push(_this.remove(item));
	});
	return results;
}
function element_handler_remove_jsui(instance) {
	if (instance.remove) {
		return instance.remove();
	}
}
function element_handler_remove_undefined() {
	this.trigger('destructed');
	return this.destructor();
}

var Remove = {
	array: element_handler_remove_array,
	jsui: element_handler_remove_jsui,
	undefined: element_handler_remove_undefined
};

exports.default = Remove;

},{}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _set = require('../../../Utilities/Paths/set');

var _set2 = _interopRequireDefault(_set);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function element_handler_set_object(assignments) {
	var _this = this;

	var results = {};
	Object.keys(assignments).forEach(function (command) {
		results[command] = _this.set(command, assignments[command]);
	});
	return results;
}
function element_handler_set_string(property, value) {
	if (!property) {
		return;
	}
	if (!this.hasOwnProperty(property)) {
		return;
	}
	this[property] = value;
	return value;
}
function element_handler_set_path(path, value) {
	return (0, _set2.default)(this, path, value);
}
var Set = {
	object: element_handler_set_object,
	string: element_handler_set_string,
	path: element_handler_set_path
};

exports.default = Set;

},{"../../../Utilities/Paths/set":84}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
function element_handler_text_string(text) {
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
function element_handler_text_path(text) {
	return element_handler_text_string.call(this, text);
}

var Text = {
	string: element_handler_text_string,
	path: element_handler_text_path
};

exports.default = Text;

},{}],18:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
function element_handler_trigger_array(collection, args) {
	var _this = this;

	var results = [];
	collection.forEach(function (item) {
		results.push(_this.trigger(item, args));
	});
	return results;
}
function element_handler_trigger_object(assignments) {
	var _this2 = this;

	Object.keys(assignments).forEach(function (name) {
		var args = assignments[name];
		_this2.trigger(name, args);
	});
}
function element_handler_trigger_string(name, args) {
	if (!this.element) {
		return false;
	}
	var event = new CustomEvent(name, { "detail": args });
	this.element.dispatchEvent(event);
	return true;
}
function element_handler_trigger_path(name, args) {
	return element_handler_trigger_string.call(this, name, args);
}

var Trigger = {
	array: element_handler_trigger_array,
	object: element_handler_trigger_object,
	string: element_handler_trigger_string,
	path: element_handler_trigger_path
};

exports.default = Trigger;

},{}],19:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
function element_handler_with_array(collection) {
	var _this = this;

	var results = [];
	collection.forEach(function (item) {
		results.push(_this.with(item));
	});
	return results;
}
function element_handler_with_function(method) {
	method.call(this);
	return this;
}

var With = {
	array: element_handler_with_array,
	function: element_handler_with_function
};

exports.default = With;

},{}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.constructor = constructor;

var _add = require('../../Utilities/Properties/add');

var _addClass = require('../../Utilities/Elements/addClass');

var _addClass2 = _interopRequireDefault(_addClass);

var _getHandledType = require('./getHandledType');

var _getHandledType2 = _interopRequireDefault(_getHandledType);

var _StyleInline = require('../StyleInline');

var _StyleInline2 = _interopRequireDefault(_StyleInline);

var _Constructor = require('./Handlers/Constructor');

var _Constructor2 = _interopRequireDefault(_Constructor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function constructor(tag) {
	var _this = this;

	//select the proper constructor action
	var type = (0, _getHandledType2.default)(tag);
	var action = handler[type];
	tag = (action || function () {
		return handler.string.call(this, 'div');
	}).call(this, tag);

	//set up ids
	this.element.uid = this.uid;

	//setup first type+event
	(0, _add.add)(this, 'type');
	this.on('typeChanged', function (e) {
		if (e && e.detail && e.detail.new) {
			if (_this.element && e.detail.new) {
				var name = e.detail.new;
				if (!name) {
					return;
				}
				(0, _addClass2.default)(_this.element, name);
			}
		}
	});
	this.type = tag;

	//add styling capabilities
	this.style = new _StyleInline2.default(this);

	//signal that this class has been built
	this.trigger('constructed');
	return this;
}

},{"../../Utilities/Elements/addClass":71,"../../Utilities/Properties/add":86,"../StyleInline":26,"./Handlers/Constructor":10,"./getHandledType":22}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.destructor = destructor;

var _isFunction = require('../../TypeChecks/isFunction');

var _isFunction2 = _interopRequireDefault(_isFunction);

var _isArray = require('../../TypeChecks/isArray');

var _isArray2 = _interopRequireDefault(_isArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function destructor() {
	var _this = this;

	var _element = this.element;
	var _private = this.private;
	if (_element) {
		var parent = _element.parentNode;
		if ((0, _isFunction2.default)(_element.remove)) {
			_element.remove();
			return;
		}
		if (parent && (0, _isFunction2.default)(parent.removeChild)) {
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
			if (map && (0, _isArray2.default)(map)) {
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
			if ((0, _isFunction2.default)(child.remove)) {
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

},{"../../TypeChecks/isArray":52,"../../TypeChecks/isFunction":55}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

exports.getHandledType = getHandledType;

var _isNull = require('../../TypeChecks/isNull');

var _isNull2 = _interopRequireDefault(_isNull);

var _isArray = require('../../TypeChecks/isArray');

var _isArray2 = _interopRequireDefault(_isArray);

var _isElement = require('../../TypeChecks/isElement');

var _isElement2 = _interopRequireDefault(_isElement);

var _isJSUI = require('../../TypeChecks/isJSUI');

var _isJSUI2 = _interopRequireDefault(_isJSUI);

var _isRegex = require('../../TypeChecks/isRegex');

var _isRegex2 = _interopRequireDefault(_isRegex);

var _isHTML = require('../../TypeChecks/isHTML');

var _isHTML2 = _interopRequireDefault(_isHTML);

var _isPath = require('../../TypeChecks/isPath');

var _isPath2 = _interopRequireDefault(_isPath);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Types = {
	object: {
		null: _isNull2.default,
		array: _isArray2.default,
		element: _isElement2.default,
		jsui: _isJSUI2.default,
		regex: _isRegex2.default
	},
	string: {
		html: _isHTML2.default,
		path: _isPath2.default
	}
};

function getHandledType(u) {
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
}

},{"../../TypeChecks/isArray":52,"../../TypeChecks/isElement":53,"../../TypeChecks/isHTML":56,"../../TypeChecks/isJSUI":57,"../../TypeChecks/isNull":59,"../../TypeChecks/isPath":62,"../../TypeChecks/isRegex":63}],23:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _tags = require('../Constants/HTML/tags');

var _tags2 = _interopRequireDefault(_tags);

var _create = require('../Reflection/Class/create');

var _create2 = _interopRequireDefault(_create);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Elements = {};
_tags2.default.forEach(function (tag) {
	Elements[tag] = (0, _create2.default)(tag, tag);
});

exports.default = Elements;

},{"../Constants/HTML/tags":34,"../Reflection/Class/create":43}],24:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _isString = require('../TypeChecks/isString');

var _isString2 = _interopRequireDefault(_isString);

var _isArray = require('../TypeChecks/isArray');

var _isArray2 = _interopRequireDefault(_isArray);

var _isFunction = require('../TypeChecks/isFunction');

var _isFunction2 = _interopRequireDefault(_isFunction);

var _isObject = require('../TypeChecks/isObject');

var _isObject2 = _interopRequireDefault(_isObject);

var _add = require('../Utilities/Properties/add');

var _remove = require('../Utilities/Events/remove');

var _removeAll = require('../Utilities/Events/removeAll');

var _uid = require('../Utilities/General/uid');

var _uid2 = _interopRequireDefault(_uid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Extensible = function () {
	function Extensible() {
		_classCallCheck(this, Extensible);

		this.private = {
			Events: {},
			Hooks: {}
		};
	}

	_createClass(Extensible, [{
		key: 'add',
		value: function add(item, value) {
			var _this = this;

			if ((0, _isString2.default)(item)) {
				(0, _add.add)(this, item);
				return;
			}
			if ((0, _isArray2.default)(item)) {
				item.forEach(function (key) {
					_this.add(key, value);
				});
				return;
			}
			if ((0, _isObject2.default)(item)) {
				Object.keys(item).forEach(function (key) {
					_this.add(key, item[key]);
				});
			}
		}
	}, {
		key: 'remove',
		value: function remove(item) {
			var _this2 = this;

			if ((0, _isString2.default)(item)) {
				delete this[item];
				return;
			}
			if ((0, _isArray2.default)(item)) {
				item.forEach(function (value) {
					_this2.remove(value);
				});
			}
		}
	}, {
		key: 'on',
		value: function on(name, method) {
			if ((0, _isString2.default)(name) && (0, _isFunction2.default)(method)) {
				var events = (this.private || {}).Events || {};
				var hooks = (this.private || {}).Hooks || {};
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
					var eid = (0, _uid2.default)();
					pool[eid] = method;
				}
				var handle = {
					id: eid,
					pool: pool,
					remove: _remove.remove,
					removeAll: _removeAll.removeAll
				};
				return handle;
			}
		}
	}, {
		key: 'trigger',
		value: function trigger(event, args) {
			var hooks = (this.private || {}).Hooks || {};
			var hook = hooks[event];
			if ((0, _isFunction2.default)(hook)) {
				hook(args);
			}
		}
	}, {
		key: 'destructor',
		value: function destructor() {
			var _this3 = this;

			Object.keys(this).forEach(function (key) {
				delete _this3[key];
			});
		}
	}]);

	return Extensible;
}();

exports.default = Extensible;

},{"../TypeChecks/isArray":52,"../TypeChecks/isFunction":55,"../TypeChecks/isObject":61,"../TypeChecks/isString":64,"../Utilities/Events/remove":77,"../Utilities/Events/removeAll":78,"../Utilities/General/uid":80,"../Utilities/Properties/add":86}],25:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var JSUIError = function (_Error) {
	_inherits(JSUIError, _Error);

	function JSUIError(title, message, severity) {
		_classCallCheck(this, JSUIError);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(JSUIError).call(this));
	}

	_createClass(JSUIError, [{
		key: 'throw',
		value: function _throw(title, message, severity) {
			if (window.console && window.console.trace) {
				console.trace(title || '');
			}
		}
	}]);

	return JSUIError;
}(Error);

exports.default = JSUIError;

},{}],26:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.StyleInline = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _isJSUI = require('../TypeChecks/isJSUI');

var _isJSUI2 = _interopRequireDefault(_isJSUI);

var _isObject = require('../TypeChecks/isObject');

var _isObject2 = _interopRequireDefault(_isObject);

var _isString = require('../TypeChecks/isString');

var _isString2 = _interopRequireDefault(_isString);

var _StyleRules2 = require('./StyleRules');

var _StyleRules3 = _interopRequireDefault(_StyleRules2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StyleInline = exports.StyleInline = function (_StyleRules) {
	_inherits(StyleInline, _StyleRules);

	function StyleInline(host) {
		_classCallCheck(this, StyleInline);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(StyleInline).call(this));

		_this.private.host = host || false;
		_this.on('styleChanged', function (ev) {
			if (_this.private.host && ev.property) {
				_this.private.host.element.style[ev.property] = ev.new;
			}
		});
		return _this;
	}

	_createClass(StyleInline, [{
		key: 'set',
		value: function set(name, value) {
			var _this2 = this;

			if ((0, _isObject2.default)(name)) {
				Object.keys(name).forEach(function (key) {
					var value = name[key];
					_this2[key] = value;
				});
				return;
			}
			if ((0, _isString2.default)(name)) {
				if (arguments.length > 1) {
					if ((0, _isString2.default)(value)) {
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
			if ((0, _isJSUI2.default)(element)) {
				this.private.host = element.element;
			}
		}
	}]);

	return StyleInline;
}(_StyleRules3.default);

},{"../TypeChecks/isJSUI":57,"../TypeChecks/isObject":61,"../TypeChecks/isString":64,"./StyleRules":27}],27:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _isNull = require('../TypeChecks/isNull');

var _isNull2 = _interopRequireDefault(_isNull);

var _vendors = require('../Constants/CSS/vendors');

var _vendors2 = _interopRequireDefault(_vendors);

var _equivalents = require('../Constants/CSS/equivalents');

var _equivalents2 = _interopRequireDefault(_equivalents);

var _Distinct2 = require('./Distinct');

var _Distinct3 = _interopRequireDefault(_Distinct2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StyleRules = function (_Distinct) {
	_inherits(StyleRules, _Distinct);

	function StyleRules() {
		_classCallCheck(this, StyleRules);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(StyleRules).call(this));

		_this.private.styles = {};
		return _this;
	}

	return StyleRules;
}(_Distinct3.default);

//add all the style keys as properties


Object.keys(_equivalents2.default).forEach(function (key) {
	Object.defineProperty(StyleRules.prototype, key, {
		get: function get() {
			return this.private.styles[key];
		},
		set: function set(value) {
			var old = this.private.styles[key];
			this.private.styles[key] = value;
			if ((0, _isNull2.default)(value)) {
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

exports.default = StyleRules;

},{"../Constants/CSS/equivalents":32,"../Constants/CSS/vendors":33,"../TypeChecks/isNull":59,"./Distinct":4}],28:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _isString = require('../TypeChecks/isString');

var _isString2 = _interopRequireDefault(_isString);

var _isFunction = require('../TypeChecks/isFunction');

var _isFunction2 = _interopRequireDefault(_isFunction);

var _isNumber = require('../TypeChecks/isNumber');

var _isNumber2 = _interopRequireDefault(_isNumber);

var _isStyleRule = require('../TypeChecks/isStyleRule');

var _isStyleRule2 = _interopRequireDefault(_isStyleRule);

var _isUStyleRule = require('../TypeChecks/isUStyleRule');

var _isUStyleRule2 = _interopRequireDefault(_isUStyleRule);

var _rules = require('../Sorts/StyleSheet/rules');

var _Sheets = require('../Singletons/Style/Sheets');

var _Sheets2 = _interopRequireDefault(_Sheets);

var _Distinct2 = require('./Distinct');

var _Distinct3 = _interopRequireDefault(_Distinct2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StyleSheet = function (_Distinct) {
	_inherits(StyleSheet, _Distinct);

	function StyleSheet(context) {
		_classCallCheck(this, StyleSheet);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(StyleSheet).call(this));

		context = context || 'default';

		_this.private.rules = {};
		_this.private.timer = false;
		_this.private.element = false;
		_this.private.context = context;

		var contextSheet = _Sheets2.default[context];
		if (contextSheet) {
			var _ret;

			_this.private = contextSheet.private;
			return _ret = _this, _possibleConstructorReturn(_this, _ret);
		}

		var element = document.createElement('style');
		element.appendChild(document.createTextNode(""));
		element.setAttribute('id', 'style-' + context);
		document.head.appendChild(element);
		_this.private.element = element;
		_Sheets2.default[context] = _this;
		return _this;
	}

	_createClass(StyleSheet, [{
		key: 'add',
		value: function add(rule) {
			if ((0, _isStyleRule2.default)(rule)) {
				var rules = this.private.rules;
				if (!rules[rule.uid]) {
					rules[rule.uid] = rule;
					return this.render(50);
				}
				return true;
			}
			if ((0, _isUStyleRule2.default)(rule)) {
				return this.add(new rule(this.context));
			}
		}
	}, {
		key: 'remove',
		value: function remove(rule) {
			var rules = this.private.rules;
			if ((0, _isString2.default)(rule)) {
				if (rules[rule]) {
					delete rules[rule];
					this.render(50);
				}
				return;
			}
			if ((0, _isStyleRule2.default)(rule)) {
				this.remove(rule.uid);
			}
		}
	}, {
		key: 'render',
		value: function render(timeout) {
			var _this2 = this;

			var rules = this.private.rules;
			clearTimeout(this.private.timer);
			if ((0, _isNumber2.default)(timeout)) {
				this.private.timer = setTimeout(this.render.bind(this), timeout);
				return;
			}

			//create the stylesheet and disable it
			var element = document.createElement('style');
			element.setAttribute('id', 'style-' + this.context);
			element.appendChild(document.createTextNode(""));
			document.head.appendChild(element);
			element.sheet.disabled = true;

			//fetch all the rules and organize them
			var articles = [];
			Object.keys(rules).forEach(function (uid) {
				var rule = rules[uid];
				articles.push(rule);
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
			return _rules.rules;
		},
		set: function set(method) {
			if ((0, _isFunction2.default)(method)) {
				this.private.sorter = method;
			}
		}
	}]);

	return StyleSheet;
}(_Distinct3.default);

exports.default = StyleSheet;

},{"../Singletons/Style/Sheets":50,"../Sorts/StyleSheet/rules":51,"../TypeChecks/isFunction":55,"../TypeChecks/isNumber":60,"../TypeChecks/isString":64,"../TypeChecks/isStyleRule":65,"../TypeChecks/isUStyleRule":68,"./Distinct":4}],29:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _isString = require('../TypeChecks/isString');

var _isString2 = _interopRequireDefault(_isString);

var _isNumber = require('../TypeChecks/isNumber');

var _isNumber2 = _interopRequireDefault(_isNumber);

var _isObject = require('../TypeChecks/isObject');

var _isObject2 = _interopRequireDefault(_isObject);

var _Sheets = require('../Singletons/Style/Sheets');

var _Sheets2 = _interopRequireDefault(_Sheets);

var _equivalents = require('../Constants/CSS/equivalents');

var _equivalents2 = _interopRequireDefault(_equivalents);

var _StyleRules2 = require('./StyleRules');

var _StyleRules3 = _interopRequireDefault(_StyleRules2);

var _JSUIError = require('./JSUIError');

var _JSUIError2 = _interopRequireDefault(_JSUIError);

var _StyleSheet = require('./StyleSheet');

var _StyleSheet2 = _interopRequireDefault(_StyleSheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StyleSheetRule = function (_StyleRules) {
	_inherits(StyleSheetRule, _StyleRules);

	function StyleSheetRule(selector, properties) {
		_classCallCheck(this, StyleSheetRule);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(StyleSheetRule).call(this));

		_this.private.importance = 0;
		_this.private.created = new Date().valueOf();
		if (selector) {
			_this.selector = selector;
		}
		if ((0, _isObject2.default)(properties)) {
			_this.set(properties);
		}
		return _this;
	}

	_createClass(StyleSheetRule, [{
		key: 'set',
		value: function set(name, value) {
			var _this2 = this;

			if ((0, _isObject2.default)(name)) {
				Object.keys(name).forEach(function (key) {
					var value = name[key];
					_this2[key] = value;
				});
				return;
			}
			if ((0, _isString2.default)(name)) {
				if (arguments.length > 1) {
					if ((0, _isString2.default)(value)) {
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
			var sheet = _Sheets2.default[context] || new _StyleSheet2.default(context);
			if (!sheet.private.rules[this.uid]) {
				sheet.add(this);
				return;
			}

			if (!this.selector) {
				var error = new _JSUIError2.default();
				error.throw();
			}
			var styles = [];
			var rendered = '';
			Object.keys(this.private.styles).forEach(function (key) {
				var name = _equivalents2.default[key];
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

			if ((0, _isString2.default)(selector)) {
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

			if ((0, _isString2.default)(media)) {
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
			if ((0, _isNumber2.default)(zindex)) {
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
}(_StyleRules3.default);

exports.default = StyleSheetRule;

},{"../Constants/CSS/equivalents":32,"../Singletons/Style/Sheets":50,"../TypeChecks/isNumber":60,"../TypeChecks/isObject":61,"../TypeChecks/isString":64,"./JSUIError":25,"./StyleRules":27,"./StyleSheet":28}],30:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.StyleVariables = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _isString = require('../TypeChecks/isString');

var _isString2 = _interopRequireDefault(_isString);

var _isObject = require('../TypeChecks/isObject');

var _isObject2 = _interopRequireDefault(_isObject);

var _isArray = require('../TypeChecks/isArray');

var _isArray2 = _interopRequireDefault(_isArray);

var _add = require('../Utilities/Properties/add');

var _Distinct2 = require('./Distinct');

var _Distinct3 = _interopRequireDefault(_Distinct2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StyleVariables = exports.StyleVariables = function (_Distinct) {
	_inherits(StyleVariables, _Distinct);

	function StyleVariables() {
		_classCallCheck(this, StyleVariables);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(StyleVariables).call(this));
	}

	_createClass(StyleVariables, [{
		key: 'add',
		value: function add(name, value) {
			var _this2 = this;

			if ((0, _isString2.default)(name)) {
				(0, _add.add)(this, name, value);
				this.trigger('variableAdded', {
					name: name,
					value: value
				});
				return;
			}
			if ((0, _isObject2.default)(name)) {
				Object.keys(name).forEach(function (key) {
					_this2.add(key, name[key]);
				});
			}
		}
	}, {
		key: 'remove',
		value: function remove(name) {
			var _this3 = this;

			if ((0, _isString2.default)(name)) {
				if (this[name]) {
					delete this[name];
					trigger('variableRemoved', name);
					return true;
				}
				return false;
			}
			if ((0, _isArray2.default)(name)) {
				name.forEach(function (key) {
					_this3.remove(key);
				});
				return true;
			}
		}
	}]);

	return StyleVariables;
}(_Distinct3.default);

},{"../TypeChecks/isArray":52,"../TypeChecks/isObject":61,"../TypeChecks/isString":64,"../Utilities/Properties/add":86,"./Distinct":4}],31:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _isStyleRule = require('../TypeChecks/isStyleRule');

var _isStyleRule2 = _interopRequireDefault(_isStyleRule);

var _Distinct2 = require('./Distinct');

var _Distinct3 = _interopRequireDefault(_Distinct2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Styleable = function (_Distinct) {
	_inherits(Styleable, _Distinct);

	function Styleable() {
		_classCallCheck(this, Styleable);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Styleable).call(this));

		_this.private.context = 'default';
		_this.private.style = {
			rules: {}
		};
		//re-render css if context changes
		_this.on('contextChanged', function () {
			Object.keys(_this.private.style.rules).forEach(function (uid) {
				var rule = _this.private.style.rules[uid];
				rule.render(_this.private.context);
			});
		});
		return _this;
	}

	_createClass(Styleable, [{
		key: 'add',
		value: function add(style) {
			if ((0, _isStyleRule2.default)(style)) {
				this.private.style.rules[style.uid] = style;
				style.render(this.context);
			}
			return _get(Object.getPrototypeOf(Styleable.prototype), 'add', this).call(this, style);
		}
	}, {
		key: 'context',
		get: function get() {
			return this.private.context;
		},
		set: function set(context) {
			var old = this.private.context;
			if (old === context) {
				return;
			}
			this.private.context = context;
			this.trigger('contextChanged');
		}
	}]);

	return Styleable;
}(_Distinct3.default);

exports.default = Styleable;

},{"../TypeChecks/isStyleRule":65,"./Distinct":4}],32:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _uncapitalize = require('../../Utilities/Strings/uncapitalize');

var _uncapitalize2 = _interopRequireDefault(_uncapitalize);

var _vendors = require('./vendors');

var _vendors2 = _interopRequireDefault(_vendors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//not a real constant, since it is generated
var equivalents = {};
var example = document.createElement('div');
Object.getOwnPropertyNames(example.style).forEach(function (key) {
	example.style[key] = 'inherit';
	var name = (example.getAttribute('style') || '').split(':')[0];
	equivalents[key] = name;
	example.setAttribute('style', '');
	_vendors2.default.forEach(function (vendor) {
		var prefix = '-' + vendor + '-';
		if (~name.indexOf(prefix)) {
			var w3cKey = key;
			w3cKey = (0, _uncapitalize2.default)(w3cKey.replace(vendor, ''));
			equivalents[w3cKey] = name;
			equivalents[name.replace(prefix, '')] = name;
		}
	});
});
var element = null;

exports.default = equivalents;

},{"../../Utilities/Strings/uncapitalize":90,"./vendors":33}],33:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var vendors = ['webkit', 'moz', 'ms', 'o'];
exports.default = vendors;

},{}],34:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var tags = ['a', 'abbr', 'acronym', 'address', 'applet', 'area', 'article', 'aside', 'audio', 'b', 'base', 'basefont', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'command', 'datalist', 'dd', 'del', 'details', 'dfn', 'dir', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'menu', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'video', 'wbr'];

exports.default = tags;

},{}],35:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Classes = require('./JSUI/Classes');

var _Classes2 = _interopRequireDefault(_Classes);

var _Constants = require('./JSUI/Constants');

var _Constants2 = _interopRequireDefault(_Constants);

var _Singletons = require('./JSUI/Singletons');

var _Singletons2 = _interopRequireDefault(_Singletons);

var _TypeChecks = require('./JSUI/TypeChecks');

var _TypeChecks2 = _interopRequireDefault(_TypeChecks);

var _Utilities = require('./JSUI/Utilities');

var _Utilities2 = _interopRequireDefault(_Utilities);

var _Sorts = require('./JSUI/Sorts');

var _Sorts2 = _interopRequireDefault(_Sorts);

var _Reflection = require('./JSUI/Reflection');

var _Reflection2 = _interopRequireDefault(_Reflection);

var _Elements = require('./Classes/Elements');

var _Elements2 = _interopRequireDefault(_Elements);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var JSUI = {
	Behavior: _Classes2.default.Behavior,
	Element: _Classes2.default.Element,
	Elements: _Elements2.default,
	Style: {
		Sheet: _Classes2.default.StyleSheet,
		Rule: _Classes2.default.StyleSheetRule,
		Inline: _Classes2.default.StyleInline,
		Sheets: _Singletons2.default.Style.Sheets
	},
	Classes: _Classes2.default,
	Constants: _Constants2.default,
	Singletons: _Singletons2.default,
	TypeChecks: _TypeChecks2.default,
	Utilities: _Utilities2.default,
	Sorts: _Sorts2.default,
	Reflection: _Reflection2.default
};

window.JSUI = JSUI;
exports.default = JSUI;

},{"./Classes/Elements":23,"./JSUI/Classes":36,"./JSUI/Constants":37,"./JSUI/Reflection":38,"./JSUI/Singletons":39,"./JSUI/Sorts":40,"./JSUI/TypeChecks":41,"./JSUI/Utilities":42}],36:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Behavior = require('../Classes/Behavior');

var _Behavior2 = _interopRequireDefault(_Behavior);

var _Collection = require('../Classes/Collection');

var _Collection2 = _interopRequireDefault(_Collection);

var _Distinct = require('../Classes/Distinct');

var _Distinct2 = _interopRequireDefault(_Distinct);

var _Element = require('../Classes/Element');

var _Element2 = _interopRequireDefault(_Element);

var _ElementCollection = require('../Classes/ElementCollection');

var _ElementCollection2 = _interopRequireDefault(_ElementCollection);

var _Elements = require('../Classes/Elements');

var _Elements2 = _interopRequireDefault(_Elements);

var _Extensible = require('../Classes/Extensible');

var _Extensible2 = _interopRequireDefault(_Extensible);

var _JSUIError = require('../Classes/JSUIError');

var _JSUIError2 = _interopRequireDefault(_JSUIError);

var _Styleable = require('../Classes/Styleable');

var _Styleable2 = _interopRequireDefault(_Styleable);

var _StyleInline = require('../Classes/StyleInline');

var _StyleInline2 = _interopRequireDefault(_StyleInline);

var _StyleRules = require('../Classes/StyleRules');

var _StyleRules2 = _interopRequireDefault(_StyleRules);

var _StyleSheet = require('../Classes/StyleSheet');

var _StyleSheet2 = _interopRequireDefault(_StyleSheet);

var _StyleSheetRule = require('../Classes/StyleSheetRule');

var _StyleSheetRule2 = _interopRequireDefault(_StyleSheetRule);

var _StyleVariables = require('../Classes/StyleVariables');

var _StyleVariables2 = _interopRequireDefault(_StyleVariables);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Classes = {
	Behavior: _Behavior2.default,
	Collection: _Collection2.default,
	Distinct: _Distinct2.default,
	Element: _Element2.default,
	ElementCollection: _ElementCollection2.default,
	Extensible: _Extensible2.default,
	JSUIError: _JSUIError2.default,
	Styleable: _Styleable2.default,
	StyleInline: _StyleInline2.default,
	StyleRules: _StyleRules2.default,
	StyleSheet: _StyleSheet2.default,
	StyleSheetRule: _StyleSheetRule2.default,
	StyleVariables: _StyleVariables2.default
};

exports.default = Classes;

},{"../Classes/Behavior":1,"../Classes/Collection":2,"../Classes/Distinct":4,"../Classes/Element":5,"../Classes/ElementCollection":6,"../Classes/Elements":23,"../Classes/Extensible":24,"../Classes/JSUIError":25,"../Classes/StyleInline":26,"../Classes/StyleRules":27,"../Classes/StyleSheet":28,"../Classes/StyleSheetRule":29,"../Classes/StyleVariables":30,"../Classes/Styleable":31}],37:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _equivalents = require('../Constants/CSS/equivalents');

var _equivalents2 = _interopRequireDefault(_equivalents);

var _vendors = require('../Constants/CSS/vendors');

var _vendors2 = _interopRequireDefault(_vendors);

var _tags = require('../Constants/HTML/tags');

var _tags2 = _interopRequireDefault(_tags);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Constants = {
	CSS: {
		equivalents: _equivalents2.default,
		vendors: _vendors2.default
	},
	HTML: {
		tags: _tags2.default
	}
};

exports.default = Constants;

},{"../Constants/CSS/equivalents":32,"../Constants/CSS/vendors":33,"../Constants/HTML/tags":34}],38:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _feval = require('../Reflection/feval');

var _feval2 = _interopRequireDefault(_feval);

var _create = require('../Reflection/Class/create');

var _create2 = _interopRequireDefault(_create);

var _parse = require('../Reflection/XML/parse');

var _parse2 = _interopRequireDefault(_parse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Reflection = {
	Class: {
		create: _create2.default
	},
	XML: {
		parse: _parse2.default
	},
	feval: _feval2.default
};

exports.default = Reflection;

},{"../Reflection/Class/create":43,"../Reflection/XML/parse":48,"../Reflection/feval":49}],39:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Sheets = require('../Singletons/Style/Sheets');

var _Sheets2 = _interopRequireDefault(_Sheets);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Singletons = {
	Style: {
		Sheets: _Sheets2.default
	}
};

exports.default = Singletons;

},{"../Singletons/Style/Sheets":50}],40:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _rules = require('../Sorts/StyleSheet/rules');

var _rules2 = _interopRequireDefault(_rules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Sorts = {
	StyleSheet: {
		rules: _rules2.default
	}
};

exports.default = Sorts;

},{"../Sorts/StyleSheet/rules":51}],41:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _isArray = require('../TypeChecks/isArray');

var _isArray2 = _interopRequireDefault(_isArray);

var _isElement = require('../TypeChecks/isElement');

var _isElement2 = _interopRequireDefault(_isElement);

var _isEmptyString = require('../TypeChecks/isEmptyString');

var _isEmptyString2 = _interopRequireDefault(_isEmptyString);

var _isFunction = require('../TypeChecks/isFunction');

var _isFunction2 = _interopRequireDefault(_isFunction);

var _isHTML = require('../TypeChecks/isHTML');

var _isHTML2 = _interopRequireDefault(_isHTML);

var _isJSUI = require('../TypeChecks/isJSUI');

var _isJSUI2 = _interopRequireDefault(_isJSUI);

var _isNativeTag = require('../TypeChecks/isNativeTag');

var _isNativeTag2 = _interopRequireDefault(_isNativeTag);

var _isNull = require('../TypeChecks/isNull');

var _isNull2 = _interopRequireDefault(_isNull);

var _isNumber = require('../TypeChecks/isNumber');

var _isNumber2 = _interopRequireDefault(_isNumber);

var _isObject = require('../TypeChecks/isObject');

var _isObject2 = _interopRequireDefault(_isObject);

var _isPath = require('../TypeChecks/isPath');

var _isPath2 = _interopRequireDefault(_isPath);

var _isRegex = require('../TypeChecks/isRegex');

var _isRegex2 = _interopRequireDefault(_isRegex);

var _isString = require('../TypeChecks/isString');

var _isString2 = _interopRequireDefault(_isString);

var _isStyleRule = require('../TypeChecks/isStyleRule');

var _isStyleRule2 = _interopRequireDefault(_isStyleRule);

var _isTextNode = require('../TypeChecks/isTextNode');

var _isTextNode2 = _interopRequireDefault(_isTextNode);

var _isUJSUI = require('../TypeChecks/isUJSUI');

var _isUJSUI2 = _interopRequireDefault(_isUJSUI);

var _isUndefined = require('../TypeChecks/isUndefined');

var _isUndefined2 = _interopRequireDefault(_isUndefined);

var _isUStyleRule = require('../TypeChecks/isUStyleRule');

var _isUStyleRule2 = _interopRequireDefault(_isUStyleRule);

var _unhandled = require('../TypeChecks/unhandled');

var _unhandled2 = _interopRequireDefault(_unhandled);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TypeChecks = {
	isArray: _isArray2.default,
	isElement: _isElement2.default,
	isEmptyString: _isEmptyString2.default,
	isFunction: _isFunction2.default,
	isHTML: _isHTML2.default,
	isJSUI: _isJSUI2.default,
	isNativeTag: _isNativeTag2.default,
	isNull: _isNull2.default,
	isNumber: _isNumber2.default,
	isObject: _isObject2.default,
	isPath: _isPath2.default,
	isRegex: _isRegex2.default,
	isString: _isString2.default,
	isStyleRule: _isStyleRule2.default,
	isTextNode: _isTextNode2.default,
	isUJSUI: _isUJSUI2.default,
	isUndefined: _isUndefined2.default,
	isUStyleRule: _isUStyleRule2.default,
	unhandled: _unhandled2.default
};

exports.default = TypeChecks;

},{"../TypeChecks/isArray":52,"../TypeChecks/isElement":53,"../TypeChecks/isEmptyString":54,"../TypeChecks/isFunction":55,"../TypeChecks/isHTML":56,"../TypeChecks/isJSUI":57,"../TypeChecks/isNativeTag":58,"../TypeChecks/isNull":59,"../TypeChecks/isNumber":60,"../TypeChecks/isObject":61,"../TypeChecks/isPath":62,"../TypeChecks/isRegex":63,"../TypeChecks/isString":64,"../TypeChecks/isStyleRule":65,"../TypeChecks/isTextNode":66,"../TypeChecks/isUJSUI":67,"../TypeChecks/isUStyleRule":68,"../TypeChecks/isUndefined":69,"../TypeChecks/unhandled":70}],42:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _addClass = require('../Utilities/Elements/addClass');

var _addClass2 = _interopRequireDefault(_addClass);

var _childNodes = require('../Utilities/Elements/childNodes');

var _childNodes2 = _interopRequireDefault(_childNodes);

var _getFirstNonTextChild = require('../Utilities/Elements/getFirstNonTextChild');

var _getFirstNonTextChild2 = _interopRequireDefault(_getFirstNonTextChild);

var _getTagName = require('../Utilities/Elements/getTagName');

var _getTagName2 = _interopRequireDefault(_getTagName);

var _getTextNodes = require('../Utilities/Elements/getTextNodes');

var _getTextNodes2 = _interopRequireDefault(_getTextNodes);

var _nodeAttributes = require('../Utilities/Elements/nodeAttributes');

var _nodeAttributes2 = _interopRequireDefault(_nodeAttributes);

var _remove = require('../Utilities/Events/remove');

var _remove2 = _interopRequireDefault(_remove);

var _removeAll = require('../Utilities/Events/removeAll');

var _removeAll2 = _interopRequireDefault(_removeAll);

var _debounce = require('../Utilities/Functions/debounce');

var _debounce2 = _interopRequireDefault(_debounce);

var _uid = require('../Utilities/General/uid');

var _uid2 = _interopRequireDefault(_uid);

var _get = require('../Utilities/Paths/get');

var _get2 = _interopRequireDefault(_get);

var _getter = require('../Utilities/Paths/getter');

var _getter2 = _interopRequireDefault(_getter);

var _set = require('../Utilities/Paths/set');

var _set2 = _interopRequireDefault(_set);

var _setter = require('../Utilities/Paths/setter');

var _setter2 = _interopRequireDefault(_setter);

var _getWithContext = require('../Utilities/Paths/getWithContext');

var _getWithContext2 = _interopRequireDefault(_getWithContext);

var _add = require('../Utilities/Properties/add');

var _add2 = _interopRequireDefault(_add);

var _doOrSet = require('../Utilities/Properties/doOrSet');

var _doOrSet2 = _interopRequireDefault(_doOrSet);

var _getAll = require('../Utilities/Properties/getAll');

var _getAll2 = _interopRequireDefault(_getAll);

var _capitalize = require('../Utilities/Strings/capitalize');

var _capitalize2 = _interopRequireDefault(_capitalize);

var _uncapitalize = require('../Utilities/Strings/uncapitalize');

var _uncapitalize2 = _interopRequireDefault(_uncapitalize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Strings


//Paths


//Functions


//Events
//Elements
var Utilities = {
	Elements: {
		addClass: _addClass2.default,
		childNodes: _childNodes2.default,
		getFirstNonTextChild: _getFirstNonTextChild2.default,
		getTagName: _getTagName2.default,
		getTextNodes: _getTextNodes2.default,
		nodeAttributes: _nodeAttributes2.default
	},
	Events: {
		remove: _remove2.default,
		removeAll: _removeAll2.default
	},
	Functions: {
		debounce: _debounce2.default
	},
	General: {
		uid: _uid2.default
	},
	Paths: {
		get: _get2.default,
		getter: _getter2.default,
		set: _set2.default,
		setter: _setter2.default,
		getWithContext: _getWithContext2.default
	},
	Properties: {
		add: _add2.default,
		doOrSet: _doOrSet2.default,
		getAll: _getAll2.default
	},
	Strings: {
		capitalize: _capitalize2.default,
		uncapitalize: _uncapitalize2.default
	}
};

//Properties


//General
exports.default = Utilities;

},{"../Utilities/Elements/addClass":71,"../Utilities/Elements/childNodes":72,"../Utilities/Elements/getFirstNonTextChild":73,"../Utilities/Elements/getTagName":74,"../Utilities/Elements/getTextNodes":75,"../Utilities/Elements/nodeAttributes":76,"../Utilities/Events/remove":77,"../Utilities/Events/removeAll":78,"../Utilities/Functions/debounce":79,"../Utilities/General/uid":80,"../Utilities/Paths/get":81,"../Utilities/Paths/getWithContext":82,"../Utilities/Paths/getter":83,"../Utilities/Paths/set":84,"../Utilities/Paths/setter":85,"../Utilities/Properties/add":86,"../Utilities/Properties/doOrSet":87,"../Utilities/Properties/getAll":88,"../Utilities/Strings/capitalize":89,"../Utilities/Strings/uncapitalize":90}],43:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.create = create;

var _Element = require('../../Classes/Element');

var _Element2 = _interopRequireDefault(_Element);

var _constructor = require('../../Classes/Element/constructor');

var _feval = require('../feval');

var _feval2 = _interopRequireDefault(_feval);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function create(name, tag, inherits, constructor) {
	var inherit = inherits || _Element2.default;
	var construct = constructor || _constructor.constructor;
	var src = '\n\t\treturn (function(element, constructor) {\n\t\t\tfunction ' + name + '() {\n\t\t\t\tconstructor.call(this, \'' + tag + '\');\n\t\t\t\tthis.type = \'' + tag + '\';\n\t\t\t}\n\t\t\t' + name + '.prototype = Object.create(element.prototype);\n\t\t\t' + name + '.constructor = ' + name + ';\n\t\t\treturn ' + name + ';\t\t\t\t\t\n\t\t})\n\t';
	return _feval2.default.call(window, src)(inherit, construct);
}

},{"../../Classes/Element":5,"../../Classes/Element/constructor":20,"../feval":49}],44:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _default2 = require('./Tag/_default');

var _default3 = _interopRequireDefault(_default2);

var _class2 = require('./Tag/_class');

var _class3 = _interopRequireDefault(_class2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tag = {
	default: _default3.default,
	class: _class3.default
};

exports.default = Tag;

},{"./Tag/_class":45,"./Tag/_default":46}],45:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports._class = _class;

var _getFirstNonTextChild = require('../../../../Utilities/Elements/getFirstNonTextChild');

var _getFirstNonTextChild2 = _interopRequireDefault(_getFirstNonTextChild);

var _getTagName = require('../../../../Utilities/Elements/getTagName');

var _getTagName2 = _interopRequireDefault(_getTagName);

var _uid = require('../../../../Utilities/General/uid');

var _uid2 = _interopRequireDefault(_uid);

var _getter = require('../../../../Utilities/Paths/getter');

var _getter2 = _interopRequireDefault(_getter);

var _htmlToInstructions = require('../htmlToInstructions');

var _htmlToInstructions2 = _interopRequireDefault(_htmlToInstructions);

var _feval = require('../../../feval');

var _feval2 = _interopRequireDefault(_feval);

var _Element = require('../../../../Classes/Element');

var _Element2 = _interopRequireDefault(_Element);

var _constructor = require('../../../../Classes/Element/constructor');

var _constructor2 = _interopRequireDefault(_constructor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _class(node, classes, container) {
	var children = node.childNodes;
	var count = children.length;
	var root = (0, _getFirstNonTextChild2.default)(node);
	if (!root) {
		return;
	}
	var tag = (0, _getTagName2.default)(root);
	var name = container.getAttribute('name') || 'Anonymous' + (0, _uid2.default)();
	var inherits = container.getAttribute('inherits');
	var asTag = container.getAttribute('tag') || tag;
	var parent;
	if (inherits) {
		parent = inherits.split('-').reduce(_getter2.default, classes);
	}
	parent = parent || element;
	var instruction = (0, _htmlToInstructions2.default)(root, classes);
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
	var compiled = _feval2.default.call(window, built)(_Element2.default, _constructor2.default, instruction.state.aliases, texts, parent);
	return compiled;
}

},{"../../../../Classes/Element":5,"../../../../Classes/Element/constructor":20,"../../../../Utilities/Elements/getFirstNonTextChild":73,"../../../../Utilities/Elements/getTagName":74,"../../../../Utilities/General/uid":80,"../../../../Utilities/Paths/getter":83,"../../../feval":49,"../htmlToInstructions":47}],46:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports._default = _default;

var _getTagName = require('../../../../Utilities/Elements/getTagName');

var _getTagName2 = _interopRequireDefault(_getTagName);

var _childNodes = require('../../../../Utilities/Elements/childNodes');

var _childNodes2 = _interopRequireDefault(_childNodes);

var _doOrSet = require('../../../../Utilities/Properties/doOrSet');

var _doOrSet2 = _interopRequireDefault(_doOrSet);

var _getter = require('../../../../Utilities/Paths/getter');

var _getter2 = _interopRequireDefault(_getter);

var _isNativeTag = require('../../../../TypeChecks/isNativeTag');

var _isNativeTag2 = _interopRequireDefault(_isNativeTag);

var _isTextNode = require('../../../../TypeChecks/isTextNode');

var _isTextNode2 = _interopRequireDefault(_isTextNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default(node, classes, container) {
	var tag = (0, _getTagName2.default)(node);
	var type = tag.split('-').reduce(_getter2.default, classes);
	if (!type) {
		//WARN
		return undefined;
	}
	var instance = new type();
	var attributes = node.attributes;
	var isNative = (0, _isNativeTag2.default)(tag);
	for (var i = attributes.length - 1; i >= 0; i--) {
		var attribute = attributes[i];
		var name = attribute.name;
		var value = attribute.value;
		instance.element.setAttribute(name, value);
		if (instance.hasOwnProperty(name)) {
			(0, _doOrSet2.default)(instance, name, value);
			continue;
		}
		instance.add(name);
		instance.on(name + 'Changed', Parser.Events.onParsedElementChanged);
		instance[name] = value;
	};
	var textNodes = [];
	(0, _childNodes2.default)(node, function (child) {
		if ((0, _isTextNode2.default)(child)) {
			var node = document.createTextNode("");
			instance.element.appendChild(node);
			instance.private.text = node;
			textNodes.push({ node: node, value: child.nodeValue });
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
	textNodes.forEach(function (textNode) {
		textNode.node.nodeValue = textNode.value;
	});
	return instance;
}

},{"../../../../TypeChecks/isNativeTag":58,"../../../../TypeChecks/isTextNode":66,"../../../../Utilities/Elements/childNodes":72,"../../../../Utilities/Elements/getTagName":74,"../../../../Utilities/Paths/getter":83,"../../../../Utilities/Properties/doOrSet":87}],47:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.htmlToInstructions = htmlToInstructions;

var _getTagName = require('../../../Utilities/Elements/getTagName');

var _getTagName2 = _interopRequireDefault(_getTagName);

var _getter = require('../../../Utilities/Paths/getter');

var _getter2 = _interopRequireDefault(_getter);

var _childNodes = require('../../../Utilities/Elements/childNodes');

var _childNodes2 = _interopRequireDefault(_childNodes);

var _isUJSUI = require('../../../TypeChecks/isUJSUI');

var _isUJSUI2 = _interopRequireDefault(_isUJSUI);

var _isTextNode = require('../../../TypeChecks/isTextNode');

var _isTextNode2 = _interopRequireDefault(_isTextNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
	var tag = (0, _getTagName2.default)(node);
	var directory = state.map[tag];
	var alias;
	if (!directory) {
		var type = tag.split('-').reduce(_getter2.default, classes);
		if (!(0, _isUJSUI2.default)(type)) {
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
	};
	var as = node.getAttribute('as');
	var name = 'instance' + state.Counts.instance;
	state.Counts.instance++;
	var comments = "\t\/\/ " + (as || 'Anonymous Element');
	var instantiation = '\tvar ' + name + ' = ' + (isRoot ? 'this' : 'new ' + alias + '();');

	var assignments = [];
	var instructions = [];
	var texts = [];
	(0, _childNodes2.default)(node, function (child) {
		if ((0, _isTextNode2.default)(child)) {
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

},{"../../../TypeChecks/isTextNode":66,"../../../TypeChecks/isUJSUI":67,"../../../Utilities/Elements/childNodes":72,"../../../Utilities/Elements/getTagName":74,"../../../Utilities/Paths/getter":83}],48:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.parse = parse;

var _isString = require('../../TypeChecks/isString');

var _isString2 = _interopRequireDefault(_isString);

var _isElement = require('../../TypeChecks/isElement');

var _isElement2 = _interopRequireDefault(_isElement);

var _getFirstNonTextChild = require('../../Utilities/Elements/getFirstNonTextChild');

var _getFirstNonTextChild2 = _interopRequireDefault(_getFirstNonTextChild);

var _getTagName = require('../../Utilities/Elements/getTagName');

var _getTagName2 = _interopRequireDefault(_getTagName);

var _Tag = require('./Parse/Tag');

var _Tag2 = _interopRequireDefault(_Tag);

var _Elements = require('../../Classes/Elements');

var _Elements2 = _interopRequireDefault(_Elements);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function parse(html, classes) {
	var container;
	if ((0, _isString2.default)(html)) {
		container = document.createElement('container');
		container.innerHTML = html;
	}
	if ((0, _isElement2.default)(html)) {
		container = html;
	}
	if (!container) {
		return;
	}
	var root = (0, _getFirstNonTextChild2.default)(container);
	var tag = (0, _getTagName2.default)(root);
	var parser = _Tag2.default[tag];
	return (parser || _Tag2.default.default).call(this, root, classes || _Elements2.default, root);
}

},{"../../Classes/Elements":23,"../../TypeChecks/isElement":53,"../../TypeChecks/isString":64,"../../Utilities/Elements/getFirstNonTextChild":73,"../../Utilities/Elements/getTagName":74,"./Parse/Tag":44}],49:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.feval = feval;
function feval(code) {
	return new Function(code)();
}

},{}],50:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Sheets = {};
exports.default = Sheets;

},{}],51:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.rules = rules;
function rules(a, b) {
	var importance = b.importance - a.importance;
	var created = b.private.created - a.private.created;
	if (!importance) {
		return created;
	}
	return importance;
}

},{}],52:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.isArray = isArray;
function isArray(u) {
	return Array.isArray(u);
}

},{}],53:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.isElement = isElement;
function isElement(u) {
	return u instanceof Element;
}

},{}],54:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.isEmptyString = isEmptyString;
function isEmptyString(u) {
	return u === "";
}

},{}],55:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.isFunction = isFunction;
function isFunction(u) {
	return typeof u === 'function';
}

},{}],56:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.isHTML = isHTML;
var htmlRegex = /^<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)$/;
function isHTML(u) {
	return htmlRegex.test(u);
}

},{}],57:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.isJSUI = isJSUI;

var _Element = require('../Classes/Element');

var _Element2 = _interopRequireDefault(_Element);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isJSUI(u) {
	return u instanceof _Element2.default;
}

},{"../Classes/Element":5}],58:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.isNativeTag = isNativeTag;

var _tags = require('../Constants/HTML/tags');

var _tags2 = _interopRequireDefault(_tags);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Natives = {};
_tags2.default.forEach(function (tag) {
	Natives[tag] = true;
});

function isNativeTag(u) {
	return Natives[u];
}

},{"../Constants/HTML/tags":34}],59:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.isNull = isNull;
function isNull(u) {
	return u === null;
}

},{}],60:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.isNumber = isNumber;
function isNumber(u) {
	return typeof u === 'number';
}

},{}],61:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

exports.isObject = isObject;
function isObject(u) {
	return (typeof u === 'undefined' ? 'undefined' : _typeof(u)) === 'object';
}

},{}],62:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.isPath = isPath;
function isPath(u) {
	return u[0] === '@';
}

},{}],63:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.isRegex = isRegex;
function isRegex(u) {
	return u instanceof RegExp;
}

},{}],64:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.isString = isString;
function isString(u) {
	return typeof u === 'string';
}

},{}],65:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.isStyleRule = isStyleRule;

var _StyleSheetRule = require('../Classes/StyleSheetRule');

var _StyleSheetRule2 = _interopRequireDefault(_StyleSheetRule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isStyleRule(u) {
	return u instanceof _StyleSheetRule2.default;
}

},{"../Classes/StyleSheetRule":29}],66:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.isTextNode = isTextNode;
function isTextNode(u) {
	return u && u.nodeName === "#text";
}

},{}],67:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.isUJSUI = isUJSUI;

var _Element = require('../Classes/Element');

var _Element2 = _interopRequireDefault(_Element);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isUJSUI(u) {
	return u.prototype instanceof _Element2.default;
}

},{"../Classes/Element":5}],68:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.isUStyleRule = isUStyleRule;

var _StyleSheetRule = require('../Classes/StyleSheetRule');

var _StyleSheetRule2 = _interopRequireDefault(_StyleSheetRule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isUStyleRule(u) {
	return u.prototype instanceof _StyleSheetRule2.default;
}

},{"../Classes/StyleSheetRule":29}],69:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.isUndefined = isUndefined;
function isUndefined(u) {
	return typeof u === 'undefined';
}

},{}],70:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unhandled = unhandled;
function unhandled(args) {
  return args;
}

},{}],71:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.addClass = addClass;

var _isElement = require('../../TypeChecks/isElement');

var _isElement2 = _interopRequireDefault(_isElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addClass(el, name) {
	if (!name || !(0, _isElement2.default)(el)) {
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

},{"../../TypeChecks/isElement":53}],72:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.childNodes = childNodes;

var _isFunction = require('../../TypeChecks/isFunction');

var _isFunction2 = _interopRequireDefault(_isFunction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function childNodes(node, callback) {
	if (!(0, _isFunction2.default)(callback)) {
		return;
	}
	if (isElement(node)) {
		var count = node.childNodes.length;
		for (var i = 0; i < count; i++) {
			var child = node.childNodes[i];
			if (callback(child)) {
				break;
			}
		}
	}
}

},{"../../TypeChecks/isFunction":55}],73:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getFirstNonTextChild = getFirstNonTextChild;

var _isElement = require('../../TypeChecks/isElement');

var _isElement2 = _interopRequireDefault(_isElement);

var _isTextNode = require('../../TypeChecks/isTextNode');

var _isTextNode2 = _interopRequireDefault(_isTextNode);

var _childNodes = require('./childNodes');

var _childNodes2 = _interopRequireDefault(_childNodes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getFirstNonTextChild(node) {
	if ((0, _isElement2.default)(node)) {
		var root;
		(0, _childNodes2.default)(node, function (child) {
			if (!(0, _isTextNode2.default)(child)) {
				root = child;
				return true;
			}
		});
		return root;
	}
}

},{"../../TypeChecks/isElement":53,"../../TypeChecks/isTextNode":66,"./childNodes":72}],74:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getTagName = getTagName;

var _isElement = require('../../TypeChecks/isElement');

var _isElement2 = _interopRequireDefault(_isElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getTagName(el) {
	if ((0, _isElement2.default)(el)) {
		return el.tagName.toLowerCase();
	}
	return 'none';
}

},{"../../TypeChecks/isElement":53}],75:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getTextNodes = getTextNodes;

var _isTextNode = require('../../TypeChecks/isTextNode');

var _isTextNode2 = _interopRequireDefault(_isTextNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getTextNodes(el, stopAtFirst) {
	var nodes = [];
	for (var i = 0; i < el.childNodes.length; i++) {
		var node = el.childNodes[i];
		if ((0, _isTextNode2.default)(node)) {
			nodes.push(node);
			if (stopAtFirst) {
				break;
			}
		}
	}
	return nodes;
}

},{"../../TypeChecks/isTextNode":66}],76:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.nodeAttributes = nodeAttributes;

var _isFunction = require('../../TypeChecks/isFunction');

var _isFunction2 = _interopRequireDefault(_isFunction);

var _isElement = require('../../TypeChecks/isElement');

var _isElement2 = _interopRequireDefault(_isElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function nodeAttributes(node, callback) {
	if (!(0, _isFunction2.default)(callback)) {
		return;
	}
	if ((0, _isElement2.default)(node)) {
		var attributes = node.attributes;
		for (var i = attributes.length - 1; i >= 0; i--) {
			var attribute = attributes[i];
			var name = attribute.name;
			var value = attribute.value;
			callback(name, value, attribute);
		};
	}
}

},{"../../TypeChecks/isElement":53,"../../TypeChecks/isFunction":55}],77:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.remove = remove;
function remove() {
	delete this.pool[this.id];
}

},{}],78:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.removeAll = removeAll;
function removeAll() {
	var _this = this;

	Object.keys(this.pool).forEach(function (eid) {
		delete _this.pool[eid];
	});
}

},{}],79:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.debounce = debounce;

var _isFunction = require('../../TypeChecks/isFunction');

var _isFunction2 = _interopRequireDefault(_isFunction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function debounce(fn, time) {
	if ((0, _isFunction2.default)(fn)) {
		var dbcTimer;
		return function () {
			clearTimeout(dbcTimer);
			dbcTimer = setTimeout(fn, time);
		};
	}
}

},{"../../TypeChecks/isFunction":55}],80:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.uid = uid;
var prefix = '';
var current = 0;
var max = Number.MAX_SAFE_INTEGER - 1;
function uid() {
	return function uid() {
		if (current > max) {
			prefix += current;
			current = 0;
		}
		return prefix + current++;
	};
}

},{}],81:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.get = get;

var _isString = require('../../TypeChecks/isString');

var _isString2 = _interopRequireDefault(_isString);

var _isArray = require('../../TypeChecks/isArray');

var _isArray2 = _interopRequireDefault(_isArray);

var _getter = require('./getter');

var _getter2 = _interopRequireDefault(_getter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function get(obj, path) {
	if ((0, _isString2.default)(path)) {
		return path.substring(1).split('.').reduce(_getter2.default, obj);
	}
	if ((0, _isArray2.default)(path)) {
		return path.reduce(_getter2.default, obj);
	}
}

},{"../../TypeChecks/isArray":52,"../../TypeChecks/isString":64,"./getter":83}],82:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getWithContext = getWithContext;

var _get = require('./get');

var _get2 = _interopRequireDefault(_get);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
	var reference = (0, _get2.default)(obj, parts);
	if (reference) {
		return {
			context: reference,
			property: tail[0]
		};
	}
	return false;
}

},{"./get":81}],83:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getter = getter;

var _isObject = require('../../TypeChecks/isObject');

var _isObject2 = _interopRequireDefault(_isObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getter(obj, prop) {
	if (!(0, _isObject2.default)(obj)) {
		return;
	}
	return obj[prop];
}

},{"../../TypeChecks/isObject":61}],84:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.set = set;

var _setter = require('./setter');

var _setter2 = _interopRequireDefault(_setter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function set(obj, path, value) {
	return (0, _setter2.default)(obj, path, value);
}

},{"./setter":85}],85:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.setter = setter;

var _get = require('./get');

var _get2 = _interopRequireDefault(_get);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
	var reference = (0, _get2.default)(obj, parts);
	if (reference) {
		reference[tail[0]] = value;
		return true;
	}
	return false;
}

},{"./get":81}],86:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.add = add;
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
				if (this.trigger) {
					this.trigger(name + 'Changed', data);
					this.trigger('Changed', data);
				}
			}
		},
		configurable: true,
		enumerable: true
	});
}

},{}],87:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.doOrSet = doOrSet;

var _isFunction = require('../../TypeChecks/isFunction');

var _isFunction2 = _interopRequireDefault(_isFunction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function doOrSet(obj, prop, value) {
	if (obj.hasOwnProperty(prop)) {
		if ((0, _isFunction2.default)(obj[prop])) {
			obj[prop].apply(obj, value);
			return true;
		}
		obj[prop] = value;
		return true;
	}
	return false;
}

},{"../../TypeChecks/isFunction":55}],88:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getAll = getAll;
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

},{}],89:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.capitalize = capitalize;
function capitalize(style) {
	return style.charAt(0).toUpperCase() + style.slice(1);
}

},{}],90:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.uncapitalize = uncapitalize;
function uncapitalize(style) {
	return style.charAt(0).toLowerCase() + style.slice(1);
}

},{}]},{},[35])


//# sourceMappingURL=JSUI.js.map
