require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Styleable2 = require('./Styleable');

var _Styleable3 = babelHelpers.interopRequireDefault(_Styleable2);

var Behavior = function (_Styleable) {
	babelHelpers.inherits(Behavior, _Styleable);

	function Behavior(host) {
		babelHelpers.classCallCheck(this, Behavior);

		var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(Behavior).call(this));

		_this.private.host = host;
		_this.context = 'behavior';
		return _this;
	}

	babelHelpers.createClass(Behavior, [{
		key: 'destructor',
		value: function destructor() {
			babelHelpers.get(Object.getPrototypeOf(Behavior.prototype), 'destructor', this).call(this);
		}
	}]);
	return Behavior;
}(_Styleable3.default);

exports.default = Behavior;

}).call(this,require("babel/external-helpers"))
},{"./Styleable":86,"babel/external-helpers":"babel/external-helpers"}],2:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _isArray = require('../TypeChecks/isArray');

var _isArray2 = babelHelpers.interopRequireDefault(_isArray);

var _DoToEach = require('./Collection/Handlers/DoToEach');

var _DoToEach2 = babelHelpers.interopRequireDefault(_DoToEach);

var _getHandledType = require('./Element/getHandledType');

var _getHandledType2 = babelHelpers.interopRequireDefault(_getHandledType);

var Collection = function (_Array) {
	babelHelpers.inherits(Collection, _Array);

	function Collection(target) {
		babelHelpers.classCallCheck(this, Collection);

		var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(Collection).call(this));

		if ((0, _isArray2.default)(target)) {
			target.forEach(function (item) {
				_this.push(item);
			});
		}
		return _this;
	}

	babelHelpers.createClass(Collection, [{
		key: 'doToEach',
		value: function doToEach(method, args) {
			var type = (0, _getHandledType2.default)(method);
			var action = _DoToEach2.default[type];
			return (action || unhandled).call(this, method, args);
		}
	}]);
	return Collection;
}(Array);

exports.default = Collection;

}).call(this,require("babel/external-helpers"))
},{"../TypeChecks/isArray":113,"./Collection/Handlers/DoToEach":3,"./Element/getHandledType":77,"babel/external-helpers":"babel/external-helpers"}],3:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _string2 = require('./DoToEach/_string');

var _string3 = babelHelpers.interopRequireDefault(_string2);

var _path2 = require('./DoToEach/_path');

var _path3 = babelHelpers.interopRequireDefault(_path2);

var DoToEach = {
	string: _string3.default,
	path: _path3.default
};

exports.default = DoToEach;

}).call(this,require("babel/external-helpers"))
},{"./DoToEach/_path":4,"./DoToEach/_string":5,"babel/external-helpers":"babel/external-helpers"}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _path;
function _path(command, args) {
	//WIP
}

},{}],5:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _string;

var _isFunction = require('../../../../TypeChecks/isFunction');

var _isFunction2 = babelHelpers.interopRequireDefault(_isFunction);

function _string(command, args) {
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

}).call(this,require("babel/external-helpers"))
},{"../../../../TypeChecks/isFunction":116,"babel/external-helpers":"babel/external-helpers"}],6:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Extensible2 = require('./Extensible');

var _Extensible3 = babelHelpers.interopRequireDefault(_Extensible2);

var _uid = require('../Utilities/General/uid');

var _uid2 = babelHelpers.interopRequireDefault(_uid);

var Distinct = function (_Extensible) {
	babelHelpers.inherits(Distinct, _Extensible);

	function Distinct() {
		babelHelpers.classCallCheck(this, Distinct);

		var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(Distinct).call(this));

		_this.uid = (0, _uid2.default)();
		return _this;
	}

	return Distinct;
}(_Extensible3.default);

exports.default = Distinct;

}).call(this,require("babel/external-helpers"))
},{"../Utilities/General/uid":141,"./Extensible":79,"babel/external-helpers":"babel/external-helpers"}],7:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getHandledType = require('./Element/getHandledType');

var _getHandledType2 = babelHelpers.interopRequireDefault(_getHandledType);

var _unhandled = require('../TypeChecks/unhandled');

var _unhandled2 = babelHelpers.interopRequireDefault(_unhandled);

var _isFunction = require('../TypeChecks/isFunction');

var _isFunction2 = babelHelpers.interopRequireDefault(_isFunction);

var _isArray = require('../TypeChecks/isArray');

var _isArray2 = babelHelpers.interopRequireDefault(_isArray);

var _isElement = require('../TypeChecks/isElement');

var _isElement2 = babelHelpers.interopRequireDefault(_isElement);

var _isEmptyString = require('../TypeChecks/isEmptyString');

var _isEmptyString2 = babelHelpers.interopRequireDefault(_isEmptyString);

var _constructor = require('./Element/constructor');

var _constructor2 = babelHelpers.interopRequireDefault(_constructor);

var _destructor2 = require('./Element/destructor');

var _destructor3 = babelHelpers.interopRequireDefault(_destructor2);

var _Add = require('./Element/Handlers/Add');

var _Add2 = babelHelpers.interopRequireDefault(_Add);

var _AddTo = require('./Element/Handlers/AddTo');

var _AddTo2 = babelHelpers.interopRequireDefault(_AddTo);

var _Remove = require('./Element/Handlers/Remove');

var _Remove2 = babelHelpers.interopRequireDefault(_Remove);

var _On = require('./Element/Handlers/On');

var _On2 = babelHelpers.interopRequireDefault(_On);

var _Trigger = require('./Element/Handlers/Trigger');

var _Trigger2 = babelHelpers.interopRequireDefault(_Trigger);

var _Find = require('./Element/Handlers/Find');

var _Find2 = babelHelpers.interopRequireDefault(_Find);

var _With = require('./Element/Handlers/With');

var _With2 = babelHelpers.interopRequireDefault(_With);

var _Do = require('./Element/Handlers/Do');

var _Do2 = babelHelpers.interopRequireDefault(_Do);

var _Get = require('./Element/Handlers/Get');

var _Get2 = babelHelpers.interopRequireDefault(_Get);

var _Set = require('./Element/Handlers/Set');

var _Set2 = babelHelpers.interopRequireDefault(_Set);

var _Text = require('./Element/Handlers/Text');

var _Text2 = babelHelpers.interopRequireDefault(_Text);

var _Attribute = require('./Element/Handlers/Attribute');

var _Attribute2 = babelHelpers.interopRequireDefault(_Attribute);

var _Styleable2 = require('./Styleable');

var _Styleable3 = babelHelpers.interopRequireDefault(_Styleable2);

var Element = function (_Styleable) {
	babelHelpers.inherits(Element, _Styleable);

	function Element(tag) {
		babelHelpers.classCallCheck(this, Element);

		var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(Element).call(this, tag));

		_constructor2.default.call(_this, tag);
		return _this;
	}

	babelHelpers.createClass(Element, [{
		key: 'add',
		value: function add(item) {
			var type = (0, _getHandledType2.default)(item);
			var action = _Add2.default[type];
			return (action || babelHelpers.get(Object.getPrototypeOf(Element.prototype), 'add', this) || _unhandled2.default).call(this, item);
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

//classes


//handlers


//constructor & destructor


exports.default = Element;

}).call(this,require("babel/external-helpers"))
},{"../TypeChecks/isArray":113,"../TypeChecks/isElement":114,"../TypeChecks/isEmptyString":115,"../TypeChecks/isFunction":116,"../TypeChecks/unhandled":131,"./Element/Handlers/Add":9,"./Element/Handlers/AddTo":10,"./Element/Handlers/Attribute":21,"./Element/Handlers/Do":34,"./Element/Handlers/Find":39,"./Element/Handlers/Get":47,"./Element/Handlers/On":51,"./Element/Handlers/Remove":56,"./Element/Handlers/Set":60,"./Element/Handlers/Text":64,"./Element/Handlers/Trigger":67,"./Element/Handlers/With":72,"./Element/constructor":75,"./Element/destructor":76,"./Element/getHandledType":77,"./Styleable":86,"babel/external-helpers":"babel/external-helpers"}],8:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Collection2 = require('./Collection');

var _Collection3 = babelHelpers.interopRequireDefault(_Collection2);

var ElementCollection = function (_Collection) {
	babelHelpers.inherits(ElementCollection, _Collection);

	function ElementCollection(target) {
		var _ret;

		babelHelpers.classCallCheck(this, ElementCollection);

		var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(ElementCollection).call(this, target));

		return _ret = _this.doToEach('constructor', arguments), babelHelpers.possibleConstructorReturn(_this, _ret);
	}

	babelHelpers.createClass(ElementCollection, [{
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

exports.default = ElementCollection;

}).call(this,require("babel/external-helpers"))
},{"./Collection":2,"babel/external-helpers":"babel/external-helpers"}],9:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _element2 = require('./Add/_element');

var _element3 = babelHelpers.interopRequireDefault(_element2);

var _jsui2 = require('./Add/_jsui');

var _jsui3 = babelHelpers.interopRequireDefault(_jsui2);

var _array2 = require('./Add/_array');

var _array3 = babelHelpers.interopRequireDefault(_array2);

var _string2 = require('./Add/_string');

var _string3 = babelHelpers.interopRequireDefault(_string2);

var _html2 = require('./Add/_html');

var _html3 = babelHelpers.interopRequireDefault(_html2);

var _path2 = require('./Add/_path');

var _path3 = babelHelpers.interopRequireDefault(_path2);

var _function2 = require('./Add/_function');

var _function3 = babelHelpers.interopRequireDefault(_function2);

var Add = {
	element: _element3.default,
	jsui: _jsui3.default,
	array: _array3.default,
	string: _string3.default,
	html: _html3.default,
	path: _path3.default,
	function: _function3.default
};

exports.default = Add;

}).call(this,require("babel/external-helpers"))
},{"./Add/_array":14,"./Add/_element":15,"./Add/_function":16,"./Add/_html":17,"./Add/_jsui":18,"./Add/_path":19,"./Add/_string":20,"babel/external-helpers":"babel/external-helpers"}],10:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _element2 = require('./AddTo/_element');

var _element3 = babelHelpers.interopRequireDefault(_element2);

var _jsui2 = require('./AddTo/_jsui');

var _jsui3 = babelHelpers.interopRequireDefault(_jsui2);

var _array2 = require('./AddTo/_array');

var _array3 = babelHelpers.interopRequireDefault(_array2);

var AddTo = {
	element: _element3.default,
	jsui: _jsui3.default,
	array: _array3.default
};

exports.default = AddTo;

}).call(this,require("babel/external-helpers"))
},{"./AddTo/_array":11,"./AddTo/_element":12,"./AddTo/_jsui":13,"babel/external-helpers":"babel/external-helpers"}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _array;
function _array(collection) {
	var _this = this;

	var results = [];
	collection.forEach(function (item) {
		results.push(_this.addTo(item));
	});
	return results;
}

},{}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _element;
function _element(element) {
	if (element) {
		element.appendChild(this.element);
	}
}

},{}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _jsui;
function _jsui(instance) {
	return instance.add(this);
}

},{}],14:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _array;
function _array(collection) {
	var _this = this;

	var results = [];
	collection.forEach(function (item) {
		results.push(_this.add(item));
	});
	return results;
}

},{}],15:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _element;
function _element(element) {
	if (this.element) {
		this.element.appendChild(element);
	}
}

},{}],16:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _function;

var _isUJSUI = require('../../../../TypeChecks/isUJSUI');

var _isUJSUI2 = babelHelpers.interopRequireDefault(_isUJSUI);

function _function(method) {
	if ((0, _isUJSUI2.default)(method)) {
		return this.add(new method());
	}
}

}).call(this,require("babel/external-helpers"))
},{"../../../../TypeChecks/isUJSUI":128,"babel/external-helpers":"babel/external-helpers"}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _html;
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

},{}],18:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _jsui;

var _addClass = require('../../../../Utilities/Elements/addClass');

var _addClass2 = babelHelpers.interopRequireDefault(_addClass);

function _jsui(instance) {
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

}).call(this,require("babel/external-helpers"))
},{"../../../../Utilities/Elements/addClass":132,"babel/external-helpers":"babel/external-helpers"}],19:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _path;

var _string2 = require('./_string');

var _string3 = babelHelpers.interopRequireDefault(_string2);

function _path(prop) {
	return _string3.default.call(this, prop);
}

}).call(this,require("babel/external-helpers"))
},{"./_string":20,"babel/external-helpers":"babel/external-helpers"}],20:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _string;

var _add = require('../../../../Utilities/Properties/add');

var _add2 = babelHelpers.interopRequireDefault(_add);

function _string(prop) {
	(0, _add2.default)(this, prop);
}

}).call(this,require("babel/external-helpers"))
},{"../../../../Utilities/Properties/add":147,"babel/external-helpers":"babel/external-helpers"}],21:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _undefined = require('./Attribute/Get/_undefined');

var _undefined2 = babelHelpers.interopRequireDefault(_undefined);

var _string = require('./Attribute/Get/_string');

var _string2 = babelHelpers.interopRequireDefault(_string);

var _path = require('./Attribute/Get/_path');

var _path2 = babelHelpers.interopRequireDefault(_path);

var _array = require('./Attribute/Get/_array');

var _array2 = babelHelpers.interopRequireDefault(_array);

var _object = require('./Attribute/Get/_object');

var _object2 = babelHelpers.interopRequireDefault(_object);

var _string3 = require('./Attribute/Set/_string');

var _string4 = babelHelpers.interopRequireDefault(_string3);

var _path3 = require('./Attribute/Set/_path');

var _path4 = babelHelpers.interopRequireDefault(_path3);

var _array3 = require('./Attribute/Set/_array');

var _array4 = babelHelpers.interopRequireDefault(_array3);

var _object3 = require('./Attribute/Set/_object');

var _object4 = babelHelpers.interopRequireDefault(_object3);

//Set
var Attribute = {
	Get: {
		undefined: _undefined2.default,
		string: _string2.default,
		path: _path2.default,
		array: _array2.default,
		object: _object2.default
	},
	Set: {
		string: _string4.default,
		path: _path4.default,
		array: _array4.default,
		object: _object4.default
	}
}; //Get
exports.default = Attribute;

}).call(this,require("babel/external-helpers"))
},{"./Attribute/Get/_array":22,"./Attribute/Get/_object":23,"./Attribute/Get/_path":24,"./Attribute/Get/_string":25,"./Attribute/Get/_undefined":26,"./Attribute/Set/_array":27,"./Attribute/Set/_object":28,"./Attribute/Set/_path":29,"./Attribute/Set/_string":30,"babel/external-helpers":"babel/external-helpers"}],22:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _get_array;
function _get_array(collection) {
	var _this = this;

	var results = {};
	collection.forEach(function (attribute) {
		results[attribute] = _this.attribute(attribute);
	});
	return results;
}

},{}],23:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _get_object;

var _object = require('../Set/_object');

var _object2 = babelHelpers.interopRequireDefault(_object);

function _get_object(macro) {
	return _object2.default.call(this, macro);
}

}).call(this,require("babel/external-helpers"))
},{"../Set/_object":28,"babel/external-helpers":"babel/external-helpers"}],24:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _get_path;

var _string2 = require('./_string');

var _string3 = babelHelpers.interopRequireDefault(_string2);

function _get_path() {
	return _string3.default.apply(this, arguments);
}

}).call(this,require("babel/external-helpers"))
},{"./_string":25,"babel/external-helpers":"babel/external-helpers"}],25:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _get_string;
function _get_string(name) {
	return this.element.getAttribute(name);
}

},{}],26:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _undefined;

var _nodeAttributes = require('../../../../../Utilities/Elements/nodeAttributes');

var _nodeAttributes2 = babelHelpers.interopRequireDefault(_nodeAttributes);

function _undefined() {
	var results = {};
	(0, _nodeAttributes2.default)(this.element, function (attribute, value, ref) {
		results[attribute] = value;
	});
	return results;
}

}).call(this,require("babel/external-helpers"))
},{"../../../../../Utilities/Elements/nodeAttributes":137,"babel/external-helpers":"babel/external-helpers"}],27:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _array;
function _array(collection, value) {
	var _this = this;

	var results = [];
	collection.forEach(function (attribute) {
		results.push(_this.attribute(attribute, value));
	});
	return results;
}

},{}],28:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _object;

var _isObject = require('../../../../../TypeChecks/isObject');

var _isObject2 = babelHelpers.interopRequireDefault(_isObject);

function _object(macro, value) {
	var _this = this;

	var result = (0, _isObject2.default)(value) ? value : {};
	Object.keys(macro).forEach(function (attribute) {
		results[attribute] = _this.attribute(attribute, macro[attribute]);
	});
	return results;
}

}).call(this,require("babel/external-helpers"))
},{"../../../../../TypeChecks/isObject":122,"babel/external-helpers":"babel/external-helpers"}],29:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _set_path;

var _string = require('./_string');

var _string2 = babelHelpers.interopRequireDefault(_string);

function _set_path() {
	return _string2.default.apply(this, arguments);
}

}).call(this,require("babel/external-helpers"))
},{"./_string":30,"babel/external-helpers":"babel/external-helpers"}],30:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _set_string;

var _isUndefined = require('../../../../../TypeChecks/isUndefined');

var _isUndefined2 = babelHelpers.interopRequireDefault(_isUndefined);

var _isNull = require('../../../../../TypeChecks/isNull');

var _isNull2 = babelHelpers.interopRequireDefault(_isNull);

function _set_string(name, value) {
	if ((0, _isUndefined2.default)(value) || (0, _isNull2.default)(value)) {
		this.element.removeAttribute(name);
		return true;
	}
	this.element.setAttribute(name, value);
	return true;
}

}).call(this,require("babel/external-helpers"))
},{"../../../../../TypeChecks/isNull":120,"../../../../../TypeChecks/isUndefined":130,"babel/external-helpers":"babel/external-helpers"}],31:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _element2 = require('./Constructor/_element');

var _element3 = babelHelpers.interopRequireDefault(_element2);

var _string2 = require('./Constructor/_string');

var _string3 = babelHelpers.interopRequireDefault(_string2);

var Constructor = {
	element: _element3.default,
	string: _string3.default
};

exports.default = Constructor;

}).call(this,require("babel/external-helpers"))
},{"./Constructor/_element":32,"./Constructor/_string":33,"babel/external-helpers":"babel/external-helpers"}],32:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _element;

var _getTagName = require('../../../../Utilities/Elements/getTagName');

var _getTagName2 = babelHelpers.interopRequireDefault(_getTagName);

function _element(el) {
	this.element = el;
	return (0, _getTagName2.default)(el);
}

}).call(this,require("babel/external-helpers"))
},{"../../../../Utilities/Elements/getTagName":135,"babel/external-helpers":"babel/external-helpers"}],33:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _string;
function _string(tag) {
	tag = tag || 'div';
	this.element = document.createElement(tag);
	return tag;
}

},{}],34:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _array2 = require('./Do/_array');

var _array3 = babelHelpers.interopRequireDefault(_array2);

var _object2 = require('./Do/_object');

var _object3 = babelHelpers.interopRequireDefault(_object2);

var _string2 = require('./Do/_string');

var _string3 = babelHelpers.interopRequireDefault(_string2);

var _path2 = require('./Do/_path');

var _path3 = babelHelpers.interopRequireDefault(_path2);

var Do = {
	array: _array3.default,
	object: _object3.default,
	string: _string3.default,
	path: _path3.default
};

exports.default = Do;

}).call(this,require("babel/external-helpers"))
},{"./Do/_array":35,"./Do/_object":36,"./Do/_path":37,"./Do/_string":38,"babel/external-helpers":"babel/external-helpers"}],35:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _array;
function _array(collection) {
	var _this = this;

	var results = [];
	collection.forEach(function (item) {
		results.push(_this.do(item));
	});
	return results;
}

},{}],36:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _object;
function _object(macro) {
	var _this = this;

	var results = {};
	Object.keys(macro).forEach(function (command) {
		results[command] = _this.do(command, macro[command]);
	});
	return results;
}

},{}],37:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _path;

var _isFunction = require('../../../../TypeChecks/isFunction');

var _isFunction2 = babelHelpers.interopRequireDefault(_isFunction);

var _isArray = require('../../../../TypeChecks/isArray');

var _isArray2 = babelHelpers.interopRequireDefault(_isArray);

var _getWithContext = require('../../../../Utilities/Paths/getWithContext');

var _getWithContext2 = babelHelpers.interopRequireDefault(_getWithContext);

function _path(command, args) {
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

}).call(this,require("babel/external-helpers"))
},{"../../../../TypeChecks/isArray":113,"../../../../TypeChecks/isFunction":116,"../../../../Utilities/Paths/getWithContext":143,"babel/external-helpers":"babel/external-helpers"}],38:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _string;

var _isFunction = require('../../../../TypeChecks/isFunction');

var _isFunction2 = babelHelpers.interopRequireDefault(_isFunction);

var _isArray = require('../../../../TypeChecks/isArray');

var _isArray2 = babelHelpers.interopRequireDefault(_isArray);

function _string(command, args) {
	if ((0, _isFunction2.default)(this[command])) {
		if ((0, _isArray2.default)(args)) {
			return this[command].apply(this, args);
		}
		return this[command](args);
	}
}

}).call(this,require("babel/external-helpers"))
},{"../../../../TypeChecks/isArray":113,"../../../../TypeChecks/isFunction":116,"babel/external-helpers":"babel/external-helpers"}],39:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _array2 = require('./Find/_array');

var _array3 = babelHelpers.interopRequireDefault(_array2);

var _function2 = require('./Find/_function');

var _function3 = babelHelpers.interopRequireDefault(_function2);

var _jsui2 = require('./Find/_jsui');

var _jsui3 = babelHelpers.interopRequireDefault(_jsui2);

var _regex2 = require('./Find/_regex');

var _regex3 = babelHelpers.interopRequireDefault(_regex2);

var _string2 = require('./Find/_string');

var _string3 = babelHelpers.interopRequireDefault(_string2);

var _path2 = require('./Find/_path');

var _path3 = babelHelpers.interopRequireDefault(_path2);

var _undefined2 = require('./Find/_undefined');

var _undefined3 = babelHelpers.interopRequireDefault(_undefined2);

var Find = {
	array: _array3.default,
	function: _function3.default,
	jsui: _jsui3.default,
	regex: _regex3.default,
	string: _string3.default,
	path: _path3.default,
	undefined: _undefined3.default
};

exports.default = Find;

}).call(this,require("babel/external-helpers"))
},{"./Find/_array":40,"./Find/_function":41,"./Find/_jsui":42,"./Find/_path":43,"./Find/_regex":44,"./Find/_string":45,"./Find/_undefined":46,"babel/external-helpers":"babel/external-helpers"}],40:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _array;
function _array(collection) {
	var _this = this;

	var results = [];
	collection.forEach(function (item) {
		results.push(_this.find(item));
	});
	return results;
}

},{}],41:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _function;

var _Element = require('../../../Element');

var _Element2 = babelHelpers.interopRequireDefault(_Element);

function _function(method) {
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

}).call(this,require("babel/external-helpers"))
},{"../../../Element":7,"babel/external-helpers":"babel/external-helpers"}],42:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _jsui;
function _jsui(proto) {
	var results = [];
	this.children(function (child) {
		if (child instanceof proto) {
			results.push(child);
		}
	});
	return results;
}

},{}],43:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _path;

var _string2 = require('./_string');

var _string3 = babelHelpers.interopRequireDefault(_string2);

function _path(query) {
	return _string3.default.call(this, query);
}

}).call(this,require("babel/external-helpers"))
},{"./_string":45,"babel/external-helpers":"babel/external-helpers"}],44:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _regex;
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

},{}],45:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _string;
function _string(query) {
	var results = null;
	results = this.element.querySelectorAll(query);
	results = !results || results === null ? [] : results;
	return results;
}

},{}],46:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _undefined;
function _undefined() {
	var results = [];
	this.children(function (child) {
		results.push(child);
	});
	return results;
}

},{}],47:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _array2 = require('./Get/_array');

var _array3 = babelHelpers.interopRequireDefault(_array2);

var _string2 = require('./Get/_string');

var _string3 = babelHelpers.interopRequireDefault(_string2);

var _path2 = require('./Get/_path');

var _path3 = babelHelpers.interopRequireDefault(_path2);

var Get = {
	array: _array3.default,
	string: _string3.default,
	path: _path3.default
};

exports.default = Get;

}).call(this,require("babel/external-helpers"))
},{"./Get/_array":48,"./Get/_path":49,"./Get/_string":50,"babel/external-helpers":"babel/external-helpers"}],48:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _array;
function _array(collection) {
	var _this = this;

	var results = [];
	collection.forEach(function (item) {
		results.push(_this.get(item));
	});
	return results;
}

},{}],49:[function(require,module,exports){
(function (babelHelpers){
'use strict';

var _get = require('../../../../Utilities/Paths/get');

var _get2 = babelHelpers.interopRequireDefault(_get);

function _path(path) {
	return (0, _get2.default)(this, path);
}

}).call(this,require("babel/external-helpers"))
},{"../../../../Utilities/Paths/get":142,"babel/external-helpers":"babel/external-helpers"}],50:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _string;
function _string(property) {
	if (!property) {
		return;
	}
	if (!this.hasOwnProperty(property)) {
		return;
	}
	return this[property];
}

},{}],51:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _array2 = require('./On/_array');

var _array3 = babelHelpers.interopRequireDefault(_array2);

var _object2 = require('./On/_object');

var _object3 = babelHelpers.interopRequireDefault(_object2);

var _string2 = require('./On/_string');

var _string3 = babelHelpers.interopRequireDefault(_string2);

var _path2 = require('./On/_path');

var _path3 = babelHelpers.interopRequireDefault(_path2);

var On = {
	array: _array3.default,
	object: _object3.default,
	string: _string3.default,
	path: _path3.default
};

exports.default = On;

}).call(this,require("babel/external-helpers"))
},{"./On/_array":52,"./On/_object":53,"./On/_path":54,"./On/_string":55,"babel/external-helpers":"babel/external-helpers"}],52:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _array;
function _array(collection, method) {
	var _this = this;

	var results = [];
	collection.forEach(function (item) {
		results.push(_this.on(item, method));
	});
	return results;
}

},{}],53:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _object;
function _object(assignments) {
	var _this = this;

	var results = {};
	Object.keys(assignments).forEach(function (name) {
		var method = assignments[name];
		results[name] = _this.on(name, method);
	});
	return results;
}

},{}],54:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _path;

var _string2 = require('./_string');

var _string3 = babelHelpers.interopRequireDefault(_string2);

function _path(name, method) {
	return _string3.default.call(this, name, method);
}

}).call(this,require("babel/external-helpers"))
},{"./_string":55,"babel/external-helpers":"babel/external-helpers"}],55:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _string;

var _remove = require('../../../../Utilities/Events/remove');

var _remove2 = babelHelpers.interopRequireDefault(_remove);

var _removeAll = require('../../../../Utilities/Events/removeAll');

var _removeAll2 = babelHelpers.interopRequireDefault(_removeAll);

var _isFunction = require('../../../../TypeChecks/isFunction');

var _isFunction2 = babelHelpers.interopRequireDefault(_isFunction);

var _uid = require('../../../../Utilities/General/uid');

var _uid2 = babelHelpers.interopRequireDefault(_uid);

function _string(name, method) {
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
		remove: _remove2.default,
		removeAll: _removeAll2.default
	};
	return handle;
}

}).call(this,require("babel/external-helpers"))
},{"../../../../TypeChecks/isFunction":116,"../../../../Utilities/Events/remove":138,"../../../../Utilities/Events/removeAll":139,"../../../../Utilities/General/uid":141,"babel/external-helpers":"babel/external-helpers"}],56:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _array2 = require('./Remove/_array');

var _array3 = babelHelpers.interopRequireDefault(_array2);

var _jsui2 = require('./Remove/_jsui');

var _jsui3 = babelHelpers.interopRequireDefault(_jsui2);

var _undefined2 = require('./Remove/_undefined');

var _undefined3 = babelHelpers.interopRequireDefault(_undefined2);

var Remove = {
	array: _array3.default,
	jsui: _jsui3.default,
	undefined: _undefined3.default
};

exports.default = Remove;

}).call(this,require("babel/external-helpers"))
},{"./Remove/_array":57,"./Remove/_jsui":58,"./Remove/_undefined":59,"babel/external-helpers":"babel/external-helpers"}],57:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _array;
function _array(collection) {
	var _this = this;

	var results = [];
	collection.forEach(function (item) {
		results.push(_this.remove(item));
	});
	return results;
}

},{}],58:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _jsui;
function _jsui(instance) {
	if (instance.remove) {
		return instance.remove();
	}
}

},{}],59:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _undefined;
function _undefined() {
	this.trigger('destructed');
	return this.destructor();
}

},{}],60:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _object2 = require('./Set/_object');

var _object3 = babelHelpers.interopRequireDefault(_object2);

var _string2 = require('./Set/_string');

var _string3 = babelHelpers.interopRequireDefault(_string2);

var _path2 = require('./Set/_path');

var _path3 = babelHelpers.interopRequireDefault(_path2);

var Set = {
	object: _object3.default,
	string: _string3.default,
	path: _path3.default
};

exports.default = Set;

}).call(this,require("babel/external-helpers"))
},{"./Set/_object":61,"./Set/_path":62,"./Set/_string":63,"babel/external-helpers":"babel/external-helpers"}],61:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _object;
function _object(assignments) {
	var _this = this;

	var results = {};
	Object.keys(assignments).forEach(function (command) {
		results[command] = _this.set(command, assignments[command]);
	});
	return results;
}

},{}],62:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _path;

var _set = require('../../../../Utilities/Paths/set');

var _set2 = babelHelpers.interopRequireDefault(_set);

function _path(path, value) {
	return (0, _set2.default)(this, path, value);
}

}).call(this,require("babel/external-helpers"))
},{"../../../../Utilities/Paths/set":145,"babel/external-helpers":"babel/external-helpers"}],63:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _string;
function _string(property, value) {
	if (!property) {
		return;
	}
	if (!this.hasOwnProperty(property)) {
		return;
	}
	this[property] = value;
	return value;
}

},{}],64:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _string2 = require('./Text/_string');

var _string3 = babelHelpers.interopRequireDefault(_string2);

var _path2 = require('./Text/_path');

var _path3 = babelHelpers.interopRequireDefault(_path2);

var Text = {
	string: _string3.default,
	path: _path3.default
};

exports.default = Text;

}).call(this,require("babel/external-helpers"))
},{"./Text/_path":65,"./Text/_string":66,"babel/external-helpers":"babel/external-helpers"}],65:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _path;
function _path(text) {
	return _string.call(this, text);
}

},{}],66:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _string;
function _string(text) {
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

},{}],67:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _array2 = require('./Trigger/_array');

var _array3 = babelHelpers.interopRequireDefault(_array2);

var _object2 = require('./Trigger/_object');

var _object3 = babelHelpers.interopRequireDefault(_object2);

var _string2 = require('./Trigger/_string');

var _string3 = babelHelpers.interopRequireDefault(_string2);

var _path2 = require('./Trigger/_path');

var _path3 = babelHelpers.interopRequireDefault(_path2);

var Trigger = {
	array: _array3.default,
	object: _object3.default,
	string: _string3.default,
	path: _path3.default
};

exports.default = Trigger;

}).call(this,require("babel/external-helpers"))
},{"./Trigger/_array":68,"./Trigger/_object":69,"./Trigger/_path":70,"./Trigger/_string":71,"babel/external-helpers":"babel/external-helpers"}],68:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _array;
function _array(collection, args) {
	var _this = this;

	var results = [];
	collection.forEach(function (item) {
		results.push(_this.trigger(item, args));
	});
	return results;
}

},{}],69:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _object;
function _object(assignments) {
	var _this = this;

	Object.keys(assignments).forEach(function (name) {
		var args = assignments[name];
		_this.trigger(name, args);
	});
}

},{}],70:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _path;

var _string2 = require('./_string');

var _string3 = babelHelpers.interopRequireDefault(_string2);

function _path(name, args) {
	return _string3.default.call(this, name, args);
}

}).call(this,require("babel/external-helpers"))
},{"./_string":71,"babel/external-helpers":"babel/external-helpers"}],71:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _string;
function _string(name, args) {
	if (!this.element) {
		return false;
	}
	var event = new CustomEvent(name, { "detail": args });
	this.element.dispatchEvent(event);
	return true;
}

},{}],72:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _array2 = require('./With/_array');

var _array3 = babelHelpers.interopRequireDefault(_array2);

var _function2 = require('./With/_function');

var _function3 = babelHelpers.interopRequireDefault(_function2);

var With = {
	array: _array3.default,
	function: _function3.default
};

exports.default = With;

}).call(this,require("babel/external-helpers"))
},{"./With/_array":73,"./With/_function":74,"babel/external-helpers":"babel/external-helpers"}],73:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _array;
function _array(collection) {
	var _this = this;

	var results = [];
	collection.forEach(function (item) {
		results.push(_this.with(item));
	});
	return results;
}

},{}],74:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _function;
function _function(method) {
	method.call(this);
	return this;
}

},{}],75:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = constructor;

var _add = require('../../Utilities/Properties/add');

var _add2 = babelHelpers.interopRequireDefault(_add);

var _addClass = require('../../Utilities/Elements/addClass');

var _addClass2 = babelHelpers.interopRequireDefault(_addClass);

var _getHandledType = require('./getHandledType');

var _getHandledType2 = babelHelpers.interopRequireDefault(_getHandledType);

var _StyleInline = require('../StyleInline');

var _StyleInline2 = babelHelpers.interopRequireDefault(_StyleInline);

var _Constructor = require('./Handlers/Constructor');

var _Constructor2 = babelHelpers.interopRequireDefault(_Constructor);

function constructor(tag) {
	var _this = this;

	//select the proper constructor action
	var type = (0, _getHandledType2.default)(tag);
	var action = _Constructor2.default[type];
	tag = (action || function () {
		return _Constructor2.default.string.call(this, 'div');
	}).call(this, tag);

	//set up ids
	this.element.uid = this.uid;

	//setup first type+event
	(0, _add2.default)(this, 'type');
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

}).call(this,require("babel/external-helpers"))
},{"../../Utilities/Elements/addClass":132,"../../Utilities/Properties/add":147,"../StyleInline":81,"./Handlers/Constructor":31,"./getHandledType":77,"babel/external-helpers":"babel/external-helpers"}],76:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _isFunction = require('../../TypeChecks/isFunction');

var _isFunction2 = babelHelpers.interopRequireDefault(_isFunction);

var _isArray = require('../../TypeChecks/isArray');

var _isArray2 = babelHelpers.interopRequireDefault(_isArray);

exports.default = function destructor() {
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
};

}).call(this,require("babel/external-helpers"))
},{"../../TypeChecks/isArray":113,"../../TypeChecks/isFunction":116,"babel/external-helpers":"babel/external-helpers"}],77:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _isNull = require('../../TypeChecks/isNull');

var _isNull2 = babelHelpers.interopRequireDefault(_isNull);

var _isArray = require('../../TypeChecks/isArray');

var _isArray2 = babelHelpers.interopRequireDefault(_isArray);

var _isElement = require('../../TypeChecks/isElement');

var _isElement2 = babelHelpers.interopRequireDefault(_isElement);

var _isJSUI = require('../../TypeChecks/isJSUI');

var _isJSUI2 = babelHelpers.interopRequireDefault(_isJSUI);

var _isRegex = require('../../TypeChecks/isRegex');

var _isRegex2 = babelHelpers.interopRequireDefault(_isRegex);

var _isHTML = require('../../TypeChecks/isHTML');

var _isHTML2 = babelHelpers.interopRequireDefault(_isHTML);

var _isPath = require('../../TypeChecks/isPath');

var _isPath2 = babelHelpers.interopRequireDefault(_isPath);

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

exports.default = function getHandledType(u) {
	var type = typeof u === 'undefined' ? 'undefined' : babelHelpers.typeof(u);
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
};

}).call(this,require("babel/external-helpers"))
},{"../../TypeChecks/isArray":113,"../../TypeChecks/isElement":114,"../../TypeChecks/isHTML":117,"../../TypeChecks/isJSUI":118,"../../TypeChecks/isNull":120,"../../TypeChecks/isPath":123,"../../TypeChecks/isRegex":124,"babel/external-helpers":"babel/external-helpers"}],78:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _tags = require('../Constants/HTML/tags');

var _tags2 = babelHelpers.interopRequireDefault(_tags);

var _create = require('../Reflection/Class/create');

var _create2 = babelHelpers.interopRequireDefault(_create);

var Elements = {};
_tags2.default.forEach(function (tag) {
	Elements[tag] = (0, _create2.default)(tag, tag);
});

exports.default = Elements;

}).call(this,require("babel/external-helpers"))
},{"../Constants/HTML/tags":89,"../Reflection/Class/create":104,"babel/external-helpers":"babel/external-helpers"}],79:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _isString = require('../TypeChecks/isString');

var _isString2 = babelHelpers.interopRequireDefault(_isString);

var _isArray = require('../TypeChecks/isArray');

var _isArray2 = babelHelpers.interopRequireDefault(_isArray);

var _isFunction = require('../TypeChecks/isFunction');

var _isFunction2 = babelHelpers.interopRequireDefault(_isFunction);

var _isObject = require('../TypeChecks/isObject');

var _isObject2 = babelHelpers.interopRequireDefault(_isObject);

var _add = require('../Utilities/Properties/add');

var _add2 = babelHelpers.interopRequireDefault(_add);

var _remove = require('../Utilities/Events/remove');

var _remove2 = babelHelpers.interopRequireDefault(_remove);

var _removeAll = require('../Utilities/Events/removeAll');

var _removeAll2 = babelHelpers.interopRequireDefault(_removeAll);

var _uid = require('../Utilities/General/uid');

var _uid2 = babelHelpers.interopRequireDefault(_uid);

var Extensible = function () {
	function Extensible() {
		babelHelpers.classCallCheck(this, Extensible);

		this.private = {
			Events: {},
			Hooks: {}
		};
	}

	babelHelpers.createClass(Extensible, [{
		key: 'add',
		value: function add(item, value) {
			var _this = this;

			if ((0, _isString2.default)(item)) {
				(0, _add2.default)(this, item);
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
					remove: _remove2.default,
					removeAll: _removeAll2.default
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

}).call(this,require("babel/external-helpers"))
},{"../TypeChecks/isArray":113,"../TypeChecks/isFunction":116,"../TypeChecks/isObject":122,"../TypeChecks/isString":125,"../Utilities/Events/remove":138,"../Utilities/Events/removeAll":139,"../Utilities/General/uid":141,"../Utilities/Properties/add":147,"babel/external-helpers":"babel/external-helpers"}],80:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var JSUIError = function (_Error) {
	babelHelpers.inherits(JSUIError, _Error);

	function JSUIError(title, message, severity) {
		babelHelpers.classCallCheck(this, JSUIError);
		return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(JSUIError).call(this));
	}

	babelHelpers.createClass(JSUIError, [{
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

}).call(this,require("babel/external-helpers"))
},{"babel/external-helpers":"babel/external-helpers"}],81:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _isJSUI = require('../TypeChecks/isJSUI');

var _isJSUI2 = babelHelpers.interopRequireDefault(_isJSUI);

var _isObject = require('../TypeChecks/isObject');

var _isObject2 = babelHelpers.interopRequireDefault(_isObject);

var _isString = require('../TypeChecks/isString');

var _isString2 = babelHelpers.interopRequireDefault(_isString);

var _StyleRules2 = require('./StyleRules');

var _StyleRules3 = babelHelpers.interopRequireDefault(_StyleRules2);

var StyleInline = function (_StyleRules) {
	babelHelpers.inherits(StyleInline, _StyleRules);

	function StyleInline(host) {
		babelHelpers.classCallCheck(this, StyleInline);

		var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(StyleInline).call(this));

		_this.private.host = host || false;
		_this.on('styleChanged', function (ev) {
			if (_this.private.host && ev.property) {
				_this.private.host.element.style[ev.property] = ev.new;
			}
		});
		return _this;
	}

	babelHelpers.createClass(StyleInline, [{
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

exports.default = StyleInline;

}).call(this,require("babel/external-helpers"))
},{"../TypeChecks/isJSUI":118,"../TypeChecks/isObject":122,"../TypeChecks/isString":125,"./StyleRules":82,"babel/external-helpers":"babel/external-helpers"}],82:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _isNull = require('../TypeChecks/isNull');

var _isNull2 = babelHelpers.interopRequireDefault(_isNull);

var _vendors = require('../Constants/CSS/vendors');

var _vendors2 = babelHelpers.interopRequireDefault(_vendors);

var _equivalents = require('../Constants/CSS/equivalents');

var _equivalents2 = babelHelpers.interopRequireDefault(_equivalents);

var _Distinct2 = require('./Distinct');

var _Distinct3 = babelHelpers.interopRequireDefault(_Distinct2);

var StyleRules = function (_Distinct) {
	babelHelpers.inherits(StyleRules, _Distinct);

	function StyleRules() {
		babelHelpers.classCallCheck(this, StyleRules);

		var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(StyleRules).call(this));

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

}).call(this,require("babel/external-helpers"))
},{"../Constants/CSS/equivalents":87,"../Constants/CSS/vendors":88,"../TypeChecks/isNull":120,"./Distinct":6,"babel/external-helpers":"babel/external-helpers"}],83:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _isString = require('../TypeChecks/isString');

var _isString2 = babelHelpers.interopRequireDefault(_isString);

var _isFunction = require('../TypeChecks/isFunction');

var _isFunction2 = babelHelpers.interopRequireDefault(_isFunction);

var _isNumber = require('../TypeChecks/isNumber');

var _isNumber2 = babelHelpers.interopRequireDefault(_isNumber);

var _isStyleRule = require('../TypeChecks/isStyleRule');

var _isStyleRule2 = babelHelpers.interopRequireDefault(_isStyleRule);

var _isUStyleRule = require('../TypeChecks/isUStyleRule');

var _isUStyleRule2 = babelHelpers.interopRequireDefault(_isUStyleRule);

var _rules = require('../Sorts/StyleSheet/rules');

var _rules2 = babelHelpers.interopRequireDefault(_rules);

var _Sheets = require('../Singletons/Style/Sheets');

var _Sheets2 = babelHelpers.interopRequireDefault(_Sheets);

var _Distinct2 = require('./Distinct');

var _Distinct3 = babelHelpers.interopRequireDefault(_Distinct2);

var StyleSheet = function (_Distinct) {
	babelHelpers.inherits(StyleSheet, _Distinct);

	function StyleSheet(context) {
		babelHelpers.classCallCheck(this, StyleSheet);

		var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(StyleSheet).call(this));

		context = context || 'default';

		_this.private.rules = {};
		_this.private.timer = false;
		_this.private.element = false;
		_this.private.context = context;

		var contextSheet = _Sheets2.default[context];
		if (contextSheet) {
			var _ret;

			_this.private = contextSheet.private;
			return _ret = _this, babelHelpers.possibleConstructorReturn(_this, _ret);
		}

		var element = document.createElement('style');
		element.appendChild(document.createTextNode(""));
		element.setAttribute('id', 'style-' + context);
		document.head.appendChild(element);
		_this.private.element = element;
		_Sheets2.default[context] = _this;
		return _this;
	}

	babelHelpers.createClass(StyleSheet, [{
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
			return _rules2.default;
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

}).call(this,require("babel/external-helpers"))
},{"../Singletons/Style/Sheets":111,"../Sorts/StyleSheet/rules":112,"../TypeChecks/isFunction":116,"../TypeChecks/isNumber":121,"../TypeChecks/isString":125,"../TypeChecks/isStyleRule":126,"../TypeChecks/isUStyleRule":129,"./Distinct":6,"babel/external-helpers":"babel/external-helpers"}],84:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _isString = require('../TypeChecks/isString');

var _isString2 = babelHelpers.interopRequireDefault(_isString);

var _isNumber = require('../TypeChecks/isNumber');

var _isNumber2 = babelHelpers.interopRequireDefault(_isNumber);

var _isObject = require('../TypeChecks/isObject');

var _isObject2 = babelHelpers.interopRequireDefault(_isObject);

var _Sheets = require('../Singletons/Style/Sheets');

var _Sheets2 = babelHelpers.interopRequireDefault(_Sheets);

var _equivalents = require('../Constants/CSS/equivalents');

var _equivalents2 = babelHelpers.interopRequireDefault(_equivalents);

var _StyleRules2 = require('./StyleRules');

var _StyleRules3 = babelHelpers.interopRequireDefault(_StyleRules2);

var _JSUIError = require('./JSUIError');

var _JSUIError2 = babelHelpers.interopRequireDefault(_JSUIError);

var _StyleSheet = require('./StyleSheet');

var _StyleSheet2 = babelHelpers.interopRequireDefault(_StyleSheet);

var StyleSheetRule = function (_StyleRules) {
	babelHelpers.inherits(StyleSheetRule, _StyleRules);

	function StyleSheetRule(selector, properties) {
		babelHelpers.classCallCheck(this, StyleSheetRule);

		var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(StyleSheetRule).call(this));

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

	babelHelpers.createClass(StyleSheetRule, [{
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

}).call(this,require("babel/external-helpers"))
},{"../Constants/CSS/equivalents":87,"../Singletons/Style/Sheets":111,"../TypeChecks/isNumber":121,"../TypeChecks/isObject":122,"../TypeChecks/isString":125,"./JSUIError":80,"./StyleRules":82,"./StyleSheet":83,"babel/external-helpers":"babel/external-helpers"}],85:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _isString = require('../TypeChecks/isString');

var _isString2 = babelHelpers.interopRequireDefault(_isString);

var _isObject = require('../TypeChecks/isObject');

var _isObject2 = babelHelpers.interopRequireDefault(_isObject);

var _isArray = require('../TypeChecks/isArray');

var _isArray2 = babelHelpers.interopRequireDefault(_isArray);

var _add = require('../Utilities/Properties/add');

var _add2 = babelHelpers.interopRequireDefault(_add);

var _Distinct2 = require('./Distinct');

var _Distinct3 = babelHelpers.interopRequireDefault(_Distinct2);

var StyleVariables = function (_Distinct) {
	babelHelpers.inherits(StyleVariables, _Distinct);

	function StyleVariables() {
		babelHelpers.classCallCheck(this, StyleVariables);
		return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(StyleVariables).call(this));
	}

	babelHelpers.createClass(StyleVariables, [{
		key: 'add',
		value: function add(name, value) {
			var _this2 = this;

			if ((0, _isString2.default)(name)) {
				(0, _add2.default)(this, name, value);
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

exports.default = StyleVariables;

}).call(this,require("babel/external-helpers"))
},{"../TypeChecks/isArray":113,"../TypeChecks/isObject":122,"../TypeChecks/isString":125,"../Utilities/Properties/add":147,"./Distinct":6,"babel/external-helpers":"babel/external-helpers"}],86:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _isStyleRule = require('../TypeChecks/isStyleRule');

var _isStyleRule2 = babelHelpers.interopRequireDefault(_isStyleRule);

var _Distinct2 = require('./Distinct');

var _Distinct3 = babelHelpers.interopRequireDefault(_Distinct2);

var Styleable = function (_Distinct) {
	babelHelpers.inherits(Styleable, _Distinct);

	function Styleable() {
		babelHelpers.classCallCheck(this, Styleable);

		var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(Styleable).call(this));

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

	babelHelpers.createClass(Styleable, [{
		key: 'add',
		value: function add(style) {
			if ((0, _isStyleRule2.default)(style)) {
				this.private.style.rules[style.uid] = style;
				style.render(this.context);
			}
			return babelHelpers.get(Object.getPrototypeOf(Styleable.prototype), 'add', this).call(this, style);
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

}).call(this,require("babel/external-helpers"))
},{"../TypeChecks/isStyleRule":126,"./Distinct":6,"babel/external-helpers":"babel/external-helpers"}],87:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _uncapitalize = require('../../Utilities/Strings/uncapitalize');

var _uncapitalize2 = babelHelpers.interopRequireDefault(_uncapitalize);

var _vendors = require('./vendors');

var _vendors2 = babelHelpers.interopRequireDefault(_vendors);

//not a real constant, since it is generated
var equivalents = {};
var example = document.createElement('div');
for (var key in example.style) {
	try {
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
	} catch (e) {}
}
var element = null;

exports.default = equivalents;

}).call(this,require("babel/external-helpers"))
},{"../../Utilities/Strings/uncapitalize":151,"./vendors":88,"babel/external-helpers":"babel/external-helpers"}],88:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var vendors = ['webkit', 'moz', 'ms', 'o'];
exports.default = vendors;

},{}],89:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var tags = ['a', 'abbr', 'acronym', 'address', 'applet', 'area', 'article', 'aside', 'audio', 'b', 'base', 'basefont', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'command', 'datalist', 'dd', 'del', 'details', 'dfn', 'dir', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'menu', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'video', 'wbr'];

exports.default = tags;

},{}],90:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Polyfills = require('./JSUI/Polyfills');

var _Polyfills2 = babelHelpers.interopRequireDefault(_Polyfills);

var _Classes = require('./JSUI/Classes');

var _Classes2 = babelHelpers.interopRequireDefault(_Classes);

var _Constants = require('./JSUI/Constants');

var _Constants2 = babelHelpers.interopRequireDefault(_Constants);

var _Singletons = require('./JSUI/Singletons');

var _Singletons2 = babelHelpers.interopRequireDefault(_Singletons);

var _TypeChecks = require('./JSUI/TypeChecks');

var _TypeChecks2 = babelHelpers.interopRequireDefault(_TypeChecks);

var _Utilities = require('./JSUI/Utilities');

var _Utilities2 = babelHelpers.interopRequireDefault(_Utilities);

var _Sorts = require('./JSUI/Sorts');

var _Sorts2 = babelHelpers.interopRequireDefault(_Sorts);

var _Reflection = require('./JSUI/Reflection');

var _Reflection2 = babelHelpers.interopRequireDefault(_Reflection);

var _Elements = require('./Classes/Elements');

var _Elements2 = babelHelpers.interopRequireDefault(_Elements);

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
	Reflection: _Reflection2.default,
	Polyfilled: _Polyfills2.default
};

window.JSUI = JSUI;
exports.default = JSUI;

}).call(this,require("babel/external-helpers"))
},{"./Classes/Elements":78,"./JSUI/Classes":91,"./JSUI/Constants":92,"./JSUI/Polyfills":93,"./JSUI/Reflection":94,"./JSUI/Singletons":95,"./JSUI/Sorts":96,"./JSUI/TypeChecks":97,"./JSUI/Utilities":98,"babel/external-helpers":"babel/external-helpers"}],91:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Behavior = require('../Classes/Behavior');

var _Behavior2 = babelHelpers.interopRequireDefault(_Behavior);

var _Collection = require('../Classes/Collection');

var _Collection2 = babelHelpers.interopRequireDefault(_Collection);

var _Distinct = require('../Classes/Distinct');

var _Distinct2 = babelHelpers.interopRequireDefault(_Distinct);

var _Element = require('../Classes/Element');

var _Element2 = babelHelpers.interopRequireDefault(_Element);

var _ElementCollection = require('../Classes/ElementCollection');

var _ElementCollection2 = babelHelpers.interopRequireDefault(_ElementCollection);

var _Elements = require('../Classes/Elements');

var _Elements2 = babelHelpers.interopRequireDefault(_Elements);

var _Extensible = require('../Classes/Extensible');

var _Extensible2 = babelHelpers.interopRequireDefault(_Extensible);

var _JSUIError = require('../Classes/JSUIError');

var _JSUIError2 = babelHelpers.interopRequireDefault(_JSUIError);

var _Styleable = require('../Classes/Styleable');

var _Styleable2 = babelHelpers.interopRequireDefault(_Styleable);

var _StyleInline = require('../Classes/StyleInline');

var _StyleInline2 = babelHelpers.interopRequireDefault(_StyleInline);

var _StyleRules = require('../Classes/StyleRules');

var _StyleRules2 = babelHelpers.interopRequireDefault(_StyleRules);

var _StyleSheet = require('../Classes/StyleSheet');

var _StyleSheet2 = babelHelpers.interopRequireDefault(_StyleSheet);

var _StyleSheetRule = require('../Classes/StyleSheetRule');

var _StyleSheetRule2 = babelHelpers.interopRequireDefault(_StyleSheetRule);

var _StyleVariables = require('../Classes/StyleVariables');

var _StyleVariables2 = babelHelpers.interopRequireDefault(_StyleVariables);

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

}).call(this,require("babel/external-helpers"))
},{"../Classes/Behavior":1,"../Classes/Collection":2,"../Classes/Distinct":6,"../Classes/Element":7,"../Classes/ElementCollection":8,"../Classes/Elements":78,"../Classes/Extensible":79,"../Classes/JSUIError":80,"../Classes/StyleInline":81,"../Classes/StyleRules":82,"../Classes/StyleSheet":83,"../Classes/StyleSheetRule":84,"../Classes/StyleVariables":85,"../Classes/Styleable":86,"babel/external-helpers":"babel/external-helpers"}],92:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _equivalents = require('../Constants/CSS/equivalents');

var _equivalents2 = babelHelpers.interopRequireDefault(_equivalents);

var _vendors = require('../Constants/CSS/vendors');

var _vendors2 = babelHelpers.interopRequireDefault(_vendors);

var _tags = require('../Constants/HTML/tags');

var _tags2 = babelHelpers.interopRequireDefault(_tags);

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

}).call(this,require("babel/external-helpers"))
},{"../Constants/CSS/equivalents":87,"../Constants/CSS/vendors":88,"../Constants/HTML/tags":89,"babel/external-helpers":"babel/external-helpers"}],93:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _forEach = require('../Polyfills/Array/forEach');

var _forEach2 = babelHelpers.interopRequireDefault(_forEach);

var _isArray = require('../Polyfills/Array/isArray');

var _isArray2 = babelHelpers.interopRequireDefault(_isArray);

var _map = require('../Polyfills/Array/map');

var _map2 = babelHelpers.interopRequireDefault(_map);

var _reduce = require('../Polyfills/Array/reduce');

var _reduce2 = babelHelpers.interopRequireDefault(_reduce);

var _keys = require('../Polyfills/Object/keys');

var _keys2 = babelHelpers.interopRequireDefault(_keys);

var Polyfilled = {
	Array: {
		forEach: _forEach2.default,
		isArray: _isArray2.default,
		map: _map2.default,
		reduce: _reduce2.default
	},
	Object: {
		keys: _keys2.default
	}
};

//Object
//Array
exports.default = Polyfilled;

}).call(this,require("babel/external-helpers"))
},{"../Polyfills/Array/forEach":99,"../Polyfills/Array/isArray":100,"../Polyfills/Array/map":101,"../Polyfills/Array/reduce":102,"../Polyfills/Object/keys":103,"babel/external-helpers":"babel/external-helpers"}],94:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _feval = require('../Reflection/feval');

var _feval2 = babelHelpers.interopRequireDefault(_feval);

var _create = require('../Reflection/Class/create');

var _create2 = babelHelpers.interopRequireDefault(_create);

var _parse = require('../Reflection/XML/parse');

var _parse2 = babelHelpers.interopRequireDefault(_parse);

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

}).call(this,require("babel/external-helpers"))
},{"../Reflection/Class/create":104,"../Reflection/XML/parse":109,"../Reflection/feval":110,"babel/external-helpers":"babel/external-helpers"}],95:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Sheets = require('../Singletons/Style/Sheets');

var _Sheets2 = babelHelpers.interopRequireDefault(_Sheets);

var Singletons = {
	Style: {
		Sheets: _Sheets2.default
	}
};

exports.default = Singletons;

}).call(this,require("babel/external-helpers"))
},{"../Singletons/Style/Sheets":111,"babel/external-helpers":"babel/external-helpers"}],96:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _rules = require('../Sorts/StyleSheet/rules');

var _rules2 = babelHelpers.interopRequireDefault(_rules);

var Sorts = {
	StyleSheet: {
		rules: _rules2.default
	}
};

exports.default = Sorts;

}).call(this,require("babel/external-helpers"))
},{"../Sorts/StyleSheet/rules":112,"babel/external-helpers":"babel/external-helpers"}],97:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _isArray = require('../TypeChecks/isArray');

var _isArray2 = babelHelpers.interopRequireDefault(_isArray);

var _isElement = require('../TypeChecks/isElement');

var _isElement2 = babelHelpers.interopRequireDefault(_isElement);

var _isEmptyString = require('../TypeChecks/isEmptyString');

var _isEmptyString2 = babelHelpers.interopRequireDefault(_isEmptyString);

var _isFunction = require('../TypeChecks/isFunction');

var _isFunction2 = babelHelpers.interopRequireDefault(_isFunction);

var _isHTML = require('../TypeChecks/isHTML');

var _isHTML2 = babelHelpers.interopRequireDefault(_isHTML);

var _isJSUI = require('../TypeChecks/isJSUI');

var _isJSUI2 = babelHelpers.interopRequireDefault(_isJSUI);

var _isNativeTag = require('../TypeChecks/isNativeTag');

var _isNativeTag2 = babelHelpers.interopRequireDefault(_isNativeTag);

var _isNull = require('../TypeChecks/isNull');

var _isNull2 = babelHelpers.interopRequireDefault(_isNull);

var _isNumber = require('../TypeChecks/isNumber');

var _isNumber2 = babelHelpers.interopRequireDefault(_isNumber);

var _isObject = require('../TypeChecks/isObject');

var _isObject2 = babelHelpers.interopRequireDefault(_isObject);

var _isPath = require('../TypeChecks/isPath');

var _isPath2 = babelHelpers.interopRequireDefault(_isPath);

var _isRegex = require('../TypeChecks/isRegex');

var _isRegex2 = babelHelpers.interopRequireDefault(_isRegex);

var _isString = require('../TypeChecks/isString');

var _isString2 = babelHelpers.interopRequireDefault(_isString);

var _isStyleRule = require('../TypeChecks/isStyleRule');

var _isStyleRule2 = babelHelpers.interopRequireDefault(_isStyleRule);

var _isTextNode = require('../TypeChecks/isTextNode');

var _isTextNode2 = babelHelpers.interopRequireDefault(_isTextNode);

var _isUJSUI = require('../TypeChecks/isUJSUI');

var _isUJSUI2 = babelHelpers.interopRequireDefault(_isUJSUI);

var _isUndefined = require('../TypeChecks/isUndefined');

var _isUndefined2 = babelHelpers.interopRequireDefault(_isUndefined);

var _isUStyleRule = require('../TypeChecks/isUStyleRule');

var _isUStyleRule2 = babelHelpers.interopRequireDefault(_isUStyleRule);

var _unhandled = require('../TypeChecks/unhandled');

var _unhandled2 = babelHelpers.interopRequireDefault(_unhandled);

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

}).call(this,require("babel/external-helpers"))
},{"../TypeChecks/isArray":113,"../TypeChecks/isElement":114,"../TypeChecks/isEmptyString":115,"../TypeChecks/isFunction":116,"../TypeChecks/isHTML":117,"../TypeChecks/isJSUI":118,"../TypeChecks/isNativeTag":119,"../TypeChecks/isNull":120,"../TypeChecks/isNumber":121,"../TypeChecks/isObject":122,"../TypeChecks/isPath":123,"../TypeChecks/isRegex":124,"../TypeChecks/isString":125,"../TypeChecks/isStyleRule":126,"../TypeChecks/isTextNode":127,"../TypeChecks/isUJSUI":128,"../TypeChecks/isUStyleRule":129,"../TypeChecks/isUndefined":130,"../TypeChecks/unhandled":131,"babel/external-helpers":"babel/external-helpers"}],98:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _addClass = require('../Utilities/Elements/addClass');

var _addClass2 = babelHelpers.interopRequireDefault(_addClass);

var _childNodes = require('../Utilities/Elements/childNodes');

var _childNodes2 = babelHelpers.interopRequireDefault(_childNodes);

var _getFirstNonTextChild = require('../Utilities/Elements/getFirstNonTextChild');

var _getFirstNonTextChild2 = babelHelpers.interopRequireDefault(_getFirstNonTextChild);

var _getTagName = require('../Utilities/Elements/getTagName');

var _getTagName2 = babelHelpers.interopRequireDefault(_getTagName);

var _getTextNodes = require('../Utilities/Elements/getTextNodes');

var _getTextNodes2 = babelHelpers.interopRequireDefault(_getTextNodes);

var _nodeAttributes = require('../Utilities/Elements/nodeAttributes');

var _nodeAttributes2 = babelHelpers.interopRequireDefault(_nodeAttributes);

var _remove = require('../Utilities/Events/remove');

var _remove2 = babelHelpers.interopRequireDefault(_remove);

var _removeAll = require('../Utilities/Events/removeAll');

var _removeAll2 = babelHelpers.interopRequireDefault(_removeAll);

var _debounce = require('../Utilities/Functions/debounce');

var _debounce2 = babelHelpers.interopRequireDefault(_debounce);

var _uid = require('../Utilities/General/uid');

var _uid2 = babelHelpers.interopRequireDefault(_uid);

var _get = require('../Utilities/Paths/get');

var _get2 = babelHelpers.interopRequireDefault(_get);

var _getter = require('../Utilities/Paths/getter');

var _getter2 = babelHelpers.interopRequireDefault(_getter);

var _set = require('../Utilities/Paths/set');

var _set2 = babelHelpers.interopRequireDefault(_set);

var _setter = require('../Utilities/Paths/setter');

var _setter2 = babelHelpers.interopRequireDefault(_setter);

var _getWithContext = require('../Utilities/Paths/getWithContext');

var _getWithContext2 = babelHelpers.interopRequireDefault(_getWithContext);

var _add = require('../Utilities/Properties/add');

var _add2 = babelHelpers.interopRequireDefault(_add);

var _doOrSet = require('../Utilities/Properties/doOrSet');

var _doOrSet2 = babelHelpers.interopRequireDefault(_doOrSet);

var _getAll = require('../Utilities/Properties/getAll');

var _getAll2 = babelHelpers.interopRequireDefault(_getAll);

var _capitalize = require('../Utilities/Strings/capitalize');

var _capitalize2 = babelHelpers.interopRequireDefault(_capitalize);

var _uncapitalize = require('../Utilities/Strings/uncapitalize');

var _uncapitalize2 = babelHelpers.interopRequireDefault(_uncapitalize);

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

}).call(this,require("babel/external-helpers"))
},{"../Utilities/Elements/addClass":132,"../Utilities/Elements/childNodes":133,"../Utilities/Elements/getFirstNonTextChild":134,"../Utilities/Elements/getTagName":135,"../Utilities/Elements/getTextNodes":136,"../Utilities/Elements/nodeAttributes":137,"../Utilities/Events/remove":138,"../Utilities/Events/removeAll":139,"../Utilities/Functions/debounce":140,"../Utilities/General/uid":141,"../Utilities/Paths/get":142,"../Utilities/Paths/getWithContext":143,"../Utilities/Paths/getter":144,"../Utilities/Paths/set":145,"../Utilities/Paths/setter":146,"../Utilities/Properties/add":147,"../Utilities/Properties/doOrSet":148,"../Utilities/Properties/getAll":149,"../Utilities/Strings/capitalize":150,"../Utilities/Strings/uncapitalize":151,"babel/external-helpers":"babel/external-helpers"}],99:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
		value: true
});
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

exports.default = !hasForEach;

},{}],100:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var hasIsArray = !!Array.isArray;
if (!hasIsArray) {
	Array.isArray = function (arg) {
		return Object.prototype.toString.call(arg) === '[object Array]';
	};
}

exports.default = !hasIsArray;

},{}],101:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
		value: true
});
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

exports.default = !hasMap;

},{}],102:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
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

exports.default = !hasReduce;

},{}],103:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
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
			if ((typeof obj === 'undefined' ? 'undefined' : babelHelpers.typeof(obj)) !== 'object' && (typeof obj !== 'function' || obj === null)) {
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

exports.default = !hasObjectKeys;

}).call(this,require("babel/external-helpers"))
},{"babel/external-helpers":"babel/external-helpers"}],104:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Element = require('../../Classes/Element');

var _Element2 = babelHelpers.interopRequireDefault(_Element);

var _constructor = require('../../Classes/Element/constructor');

var _constructor2 = babelHelpers.interopRequireDefault(_constructor);

var _feval = require('../feval');

var _feval2 = babelHelpers.interopRequireDefault(_feval);

exports.default = function create(name, tag, inherits, constructor) {
	var inherit = inherits || _Element2.default;
	var construct = constructor || _constructor2.default;
	var src = '\n\t\treturn (function(element, constructor) {\n\t\t\tfunction ' + name + '() {\n\t\t\t\tconstructor.call(this, \'' + tag + '\');\n\t\t\t\tthis.type = \'' + tag + '\';\n\t\t\t}\n\t\t\t' + name + '.prototype = Object.create(element.prototype);\n\t\t\t' + name + '.constructor = ' + name + ';\n\t\t\treturn ' + name + ';\t\t\t\t\t\n\t\t})\n\t';
	return _feval2.default.call(window, src)(inherit, construct);
};

}).call(this,require("babel/external-helpers"))
},{"../../Classes/Element":7,"../../Classes/Element/constructor":75,"../feval":110,"babel/external-helpers":"babel/external-helpers"}],105:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _default2 = require('./Tag/_default');

var _default3 = babelHelpers.interopRequireDefault(_default2);

var _class2 = require('./Tag/_class');

var _class3 = babelHelpers.interopRequireDefault(_class2);

var Tag = {
	default: _default3.default,
	class: _class3.default
};

exports.default = Tag;

}).call(this,require("babel/external-helpers"))
},{"./Tag/_class":106,"./Tag/_default":107,"babel/external-helpers":"babel/external-helpers"}],106:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _class;

var _getFirstNonTextChild = require('../../../../Utilities/Elements/getFirstNonTextChild');

var _getFirstNonTextChild2 = babelHelpers.interopRequireDefault(_getFirstNonTextChild);

var _getTagName = require('../../../../Utilities/Elements/getTagName');

var _getTagName2 = babelHelpers.interopRequireDefault(_getTagName);

var _uid = require('../../../../Utilities/General/uid');

var _uid2 = babelHelpers.interopRequireDefault(_uid);

var _getter = require('../../../../Utilities/Paths/getter');

var _getter2 = babelHelpers.interopRequireDefault(_getter);

var _htmlToInstructions = require('../htmlToInstructions');

var _htmlToInstructions2 = babelHelpers.interopRequireDefault(_htmlToInstructions);

var _feval = require('../../../feval');

var _feval2 = babelHelpers.interopRequireDefault(_feval);

var _Element = require('../../../../Classes/Element');

var _Element2 = babelHelpers.interopRequireDefault(_Element);

var _constructor = require('../../../../Classes/Element/constructor');

var _constructor2 = babelHelpers.interopRequireDefault(_constructor);

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

}).call(this,require("babel/external-helpers"))
},{"../../../../Classes/Element":7,"../../../../Classes/Element/constructor":75,"../../../../Utilities/Elements/getFirstNonTextChild":134,"../../../../Utilities/Elements/getTagName":135,"../../../../Utilities/General/uid":141,"../../../../Utilities/Paths/getter":144,"../../../feval":110,"../htmlToInstructions":108,"babel/external-helpers":"babel/external-helpers"}],107:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _default;

var _getTagName = require('../../../../Utilities/Elements/getTagName');

var _getTagName2 = babelHelpers.interopRequireDefault(_getTagName);

var _childNodes = require('../../../../Utilities/Elements/childNodes');

var _childNodes2 = babelHelpers.interopRequireDefault(_childNodes);

var _doOrSet = require('../../../../Utilities/Properties/doOrSet');

var _doOrSet2 = babelHelpers.interopRequireDefault(_doOrSet);

var _getter = require('../../../../Utilities/Paths/getter');

var _getter2 = babelHelpers.interopRequireDefault(_getter);

var _isNativeTag = require('../../../../TypeChecks/isNativeTag');

var _isNativeTag2 = babelHelpers.interopRequireDefault(_isNativeTag);

var _isTextNode = require('../../../../TypeChecks/isTextNode');

var _isTextNode2 = babelHelpers.interopRequireDefault(_isTextNode);

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

}).call(this,require("babel/external-helpers"))
},{"../../../../TypeChecks/isNativeTag":119,"../../../../TypeChecks/isTextNode":127,"../../../../Utilities/Elements/childNodes":133,"../../../../Utilities/Elements/getTagName":135,"../../../../Utilities/Paths/getter":144,"../../../../Utilities/Properties/doOrSet":148,"babel/external-helpers":"babel/external-helpers"}],108:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = htmlToInstructions;

var _getTagName = require('../../../Utilities/Elements/getTagName');

var _getTagName2 = babelHelpers.interopRequireDefault(_getTagName);

var _getter = require('../../../Utilities/Paths/getter');

var _getter2 = babelHelpers.interopRequireDefault(_getter);

var _childNodes = require('../../../Utilities/Elements/childNodes');

var _childNodes2 = babelHelpers.interopRequireDefault(_childNodes);

var _isUJSUI = require('../../../TypeChecks/isUJSUI');

var _isUJSUI2 = babelHelpers.interopRequireDefault(_isUJSUI);

var _isTextNode = require('../../../TypeChecks/isTextNode');

var _isTextNode2 = babelHelpers.interopRequireDefault(_isTextNode);

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

}).call(this,require("babel/external-helpers"))
},{"../../../TypeChecks/isTextNode":127,"../../../TypeChecks/isUJSUI":128,"../../../Utilities/Elements/childNodes":133,"../../../Utilities/Elements/getTagName":135,"../../../Utilities/Paths/getter":144,"babel/external-helpers":"babel/external-helpers"}],109:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = parse;

var _isString = require('../../TypeChecks/isString');

var _isString2 = babelHelpers.interopRequireDefault(_isString);

var _isElement = require('../../TypeChecks/isElement');

var _isElement2 = babelHelpers.interopRequireDefault(_isElement);

var _getFirstNonTextChild = require('../../Utilities/Elements/getFirstNonTextChild');

var _getFirstNonTextChild2 = babelHelpers.interopRequireDefault(_getFirstNonTextChild);

var _getTagName = require('../../Utilities/Elements/getTagName');

var _getTagName2 = babelHelpers.interopRequireDefault(_getTagName);

var _Tag = require('./Parse/Tag');

var _Tag2 = babelHelpers.interopRequireDefault(_Tag);

var _Elements = require('../../Classes/Elements');

var _Elements2 = babelHelpers.interopRequireDefault(_Elements);

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

}).call(this,require("babel/external-helpers"))
},{"../../Classes/Elements":78,"../../TypeChecks/isElement":114,"../../TypeChecks/isString":125,"../../Utilities/Elements/getFirstNonTextChild":134,"../../Utilities/Elements/getTagName":135,"./Parse/Tag":105,"babel/external-helpers":"babel/external-helpers"}],110:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = feval;
function feval(code) {
	return new Function(code)();
}

},{}],111:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Sheets = {};
exports.default = Sheets;

},{}],112:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = rules;
function rules(a, b) {
	var importance = b.importance - a.importance;
	var created = b.private.created - a.private.created;
	if (!importance) {
		return created;
	}
	return importance;
}

},{}],113:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = isArray;
function isArray(u) {
	return Array.isArray(u);
}

},{}],114:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = isElement;
function isElement(u) {
	return u instanceof Element;
}

},{}],115:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = isEmptyString;
function isEmptyString(u) {
	return u === "";
}

},{}],116:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = isFunction;
function isFunction(u) {
	return typeof u === 'function';
}

},{}],117:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = isHTML;
var htmlRegex = /^<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)$/;
function isHTML(u) {
	return htmlRegex.test(u);
}

},{}],118:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = isJSUI;

var _Element = require('../Classes/Element');

var _Element2 = babelHelpers.interopRequireDefault(_Element);

function isJSUI(u) {
	return u instanceof _Element2.default;
}

}).call(this,require("babel/external-helpers"))
},{"../Classes/Element":7,"babel/external-helpers":"babel/external-helpers"}],119:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = isNativeTag;

var _tags = require('../Constants/HTML/tags');

var _tags2 = babelHelpers.interopRequireDefault(_tags);

var Natives = {};
_tags2.default.forEach(function (tag) {
	Natives[tag] = true;
});

function isNativeTag(u) {
	return Natives[u];
}

}).call(this,require("babel/external-helpers"))
},{"../Constants/HTML/tags":89,"babel/external-helpers":"babel/external-helpers"}],120:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = isNull;
function isNull(u) {
	return u === null;
}

},{}],121:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = isNumber;
function isNumber(u) {
	return typeof u === 'number';
}

},{}],122:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = isObject;
function isObject(u) {
	return (typeof u === 'undefined' ? 'undefined' : babelHelpers.typeof(u)) === 'object';
}

}).call(this,require("babel/external-helpers"))
},{"babel/external-helpers":"babel/external-helpers"}],123:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = isPath;
function isPath(u) {
	return u[0] === '@';
}

},{}],124:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = isRegex;
function isRegex(u) {
	return u instanceof RegExp;
}

},{}],125:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = isString;
function isString(u) {
	return typeof u === 'string';
}

},{}],126:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = isStyleRule;

var _StyleSheetRule = require('../Classes/StyleSheetRule');

var _StyleSheetRule2 = babelHelpers.interopRequireDefault(_StyleSheetRule);

function isStyleRule(u) {
	return u instanceof _StyleSheetRule2.default;
}

}).call(this,require("babel/external-helpers"))
},{"../Classes/StyleSheetRule":84,"babel/external-helpers":"babel/external-helpers"}],127:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = isTextNode;
function isTextNode(u) {
	return u && u.nodeName === "#text";
}

},{}],128:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = isUJSUI;

var _Element = require('../Classes/Element');

var _Element2 = babelHelpers.interopRequireDefault(_Element);

function isUJSUI(u) {
	return u.prototype instanceof _Element2.default;
}

}).call(this,require("babel/external-helpers"))
},{"../Classes/Element":7,"babel/external-helpers":"babel/external-helpers"}],129:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = isUStyleRule;

var _StyleSheetRule = require('../Classes/StyleSheetRule');

var _StyleSheetRule2 = babelHelpers.interopRequireDefault(_StyleSheetRule);

function isUStyleRule(u) {
	return u.prototype instanceof _StyleSheetRule2.default;
}

}).call(this,require("babel/external-helpers"))
},{"../Classes/StyleSheetRule":84,"babel/external-helpers":"babel/external-helpers"}],130:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = isUndefined;
function isUndefined(u) {
	return typeof u === 'undefined';
}

},{}],131:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = unhandled;
function unhandled(args) {
  return args;
}

},{}],132:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = addClass;

var _isElement = require('../../TypeChecks/isElement');

var _isElement2 = babelHelpers.interopRequireDefault(_isElement);

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

}).call(this,require("babel/external-helpers"))
},{"../../TypeChecks/isElement":114,"babel/external-helpers":"babel/external-helpers"}],133:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = childNodes;

var _isFunction = require('../../TypeChecks/isFunction');

var _isFunction2 = babelHelpers.interopRequireDefault(_isFunction);

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

}).call(this,require("babel/external-helpers"))
},{"../../TypeChecks/isFunction":116,"babel/external-helpers":"babel/external-helpers"}],134:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = getFirstNonTextChild;

var _isElement = require('../../TypeChecks/isElement');

var _isElement2 = babelHelpers.interopRequireDefault(_isElement);

var _isTextNode = require('../../TypeChecks/isTextNode');

var _isTextNode2 = babelHelpers.interopRequireDefault(_isTextNode);

var _childNodes = require('./childNodes');

var _childNodes2 = babelHelpers.interopRequireDefault(_childNodes);

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

}).call(this,require("babel/external-helpers"))
},{"../../TypeChecks/isElement":114,"../../TypeChecks/isTextNode":127,"./childNodes":133,"babel/external-helpers":"babel/external-helpers"}],135:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = getTagName;

var _isElement = require('../../TypeChecks/isElement');

var _isElement2 = babelHelpers.interopRequireDefault(_isElement);

function getTagName(el) {
	if ((0, _isElement2.default)(el)) {
		return el.tagName.toLowerCase();
	}
	return 'none';
}

}).call(this,require("babel/external-helpers"))
},{"../../TypeChecks/isElement":114,"babel/external-helpers":"babel/external-helpers"}],136:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = getTextNodes;

var _isTextNode = require('../../TypeChecks/isTextNode');

var _isTextNode2 = babelHelpers.interopRequireDefault(_isTextNode);

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

}).call(this,require("babel/external-helpers"))
},{"../../TypeChecks/isTextNode":127,"babel/external-helpers":"babel/external-helpers"}],137:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = nodeAttributes;

var _isFunction = require('../../TypeChecks/isFunction');

var _isFunction2 = babelHelpers.interopRequireDefault(_isFunction);

var _isElement = require('../../TypeChecks/isElement');

var _isElement2 = babelHelpers.interopRequireDefault(_isElement);

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

}).call(this,require("babel/external-helpers"))
},{"../../TypeChecks/isElement":114,"../../TypeChecks/isFunction":116,"babel/external-helpers":"babel/external-helpers"}],138:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = remove;
function remove() {
	delete this.pool[this.id];
}

},{}],139:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = removeAll;
function removeAll() {
	var _this = this;

	Object.keys(this.pool).forEach(function (eid) {
		delete _this.pool[eid];
	});
}

},{}],140:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = debounce;

var _isFunction = require('../../TypeChecks/isFunction');

var _isFunction2 = babelHelpers.interopRequireDefault(_isFunction);

function debounce(fn, time) {
	if ((0, _isFunction2.default)(fn)) {
		var dbcTimer;
		return function () {
			clearTimeout(dbcTimer);
			dbcTimer = setTimeout(fn, time);
		};
	}
}

}).call(this,require("babel/external-helpers"))
},{"../../TypeChecks/isFunction":116,"babel/external-helpers":"babel/external-helpers"}],141:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = uid;
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

},{}],142:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = get;

var _isString = require('../../TypeChecks/isString');

var _isString2 = babelHelpers.interopRequireDefault(_isString);

var _isArray = require('../../TypeChecks/isArray');

var _isArray2 = babelHelpers.interopRequireDefault(_isArray);

var _getter = require('./getter');

var _getter2 = babelHelpers.interopRequireDefault(_getter);

function get(obj, path) {
	if ((0, _isString2.default)(path)) {
		return path.substring(1).split('.').reduce(_getter2.default, obj);
	}
	if ((0, _isArray2.default)(path)) {
		return path.reduce(_getter2.default, obj);
	}
}

}).call(this,require("babel/external-helpers"))
},{"../../TypeChecks/isArray":113,"../../TypeChecks/isString":125,"./getter":144,"babel/external-helpers":"babel/external-helpers"}],143:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = getWithContext;

var _get = require('./get');

var _get2 = babelHelpers.interopRequireDefault(_get);

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

}).call(this,require("babel/external-helpers"))
},{"./get":142,"babel/external-helpers":"babel/external-helpers"}],144:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = getter;

var _isObject = require('../../TypeChecks/isObject');

var _isObject2 = babelHelpers.interopRequireDefault(_isObject);

function getter(obj, prop) {
	if (!(0, _isObject2.default)(obj)) {
		return;
	}
	return obj[prop];
}

}).call(this,require("babel/external-helpers"))
},{"../../TypeChecks/isObject":122,"babel/external-helpers":"babel/external-helpers"}],145:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = set;

var _setter = require('./setter');

var _setter2 = babelHelpers.interopRequireDefault(_setter);

function set(obj, path, value) {
	return (0, _setter2.default)(obj, path, value);
}

}).call(this,require("babel/external-helpers"))
},{"./setter":146,"babel/external-helpers":"babel/external-helpers"}],146:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = setter;

var _get = require('./get');

var _get2 = babelHelpers.interopRequireDefault(_get);

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

}).call(this,require("babel/external-helpers"))
},{"./get":142,"babel/external-helpers":"babel/external-helpers"}],147:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = add;
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

},{}],148:[function(require,module,exports){
(function (babelHelpers){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = doOrSet;

var _isFunction = require('../../TypeChecks/isFunction');

var _isFunction2 = babelHelpers.interopRequireDefault(_isFunction);

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

}).call(this,require("babel/external-helpers"))
},{"../../TypeChecks/isFunction":116,"babel/external-helpers":"babel/external-helpers"}],149:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = getAll;
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

},{}],150:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
function capitalize(text) {
	return text.charAt(0).toUpperCase() + text.slice(1);
}
exports.default = capitalize;

},{}],151:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
function uncapitalize(text) {
	return text.charAt(0).toLowerCase() + text.slice(1);
}
exports.default = uncapitalize;

},{}],"babel/external-helpers":[function(require,module,exports){
var global = {}; (function (global) {
  var babelHelpers = global.babelHelpers = {};
  babelHelpers.typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
  };

  babelHelpers.jsx = function () {
    var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7;
    return function createRawReactElement(type, props, key, children) {
      var defaultProps = type && type.defaultProps;
      var childrenLength = arguments.length - 3;

      if (!props && childrenLength !== 0) {
        props = {};
      }

      if (props && defaultProps) {
        for (var propName in defaultProps) {
          if (props[propName] === void 0) {
            props[propName] = defaultProps[propName];
          }
        }
      } else if (!props) {
        props = defaultProps || {};
      }

      if (childrenLength === 1) {
        props.children = children;
      } else if (childrenLength > 1) {
        var childArray = Array(childrenLength);

        for (var i = 0; i < childrenLength; i++) {
          childArray[i] = arguments[i + 3];
        }

        props.children = childArray;
      }

      return {
        $$typeof: REACT_ELEMENT_TYPE,
        type: type,
        key: key === undefined ? null : '' + key,
        ref: null,
        props: props,
        _owner: null
      };
    };
  }();

  babelHelpers.asyncToGenerator = function (fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              return step("next", value);
            }, function (err) {
              return step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  };

  babelHelpers.classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  babelHelpers.createClass = function () {
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

  babelHelpers.defineEnumerableProperties = function (obj, descs) {
    for (var key in descs) {
      var desc = descs[key];
      desc.configurable = desc.enumerable = true;
      if ("value" in desc) desc.writable = true;
      Object.defineProperty(obj, key, desc);
    }

    return obj;
  };

  babelHelpers.defaults = function (obj, defaults) {
    var keys = Object.getOwnPropertyNames(defaults);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var value = Object.getOwnPropertyDescriptor(defaults, key);

      if (value && value.configurable && obj[key] === undefined) {
        Object.defineProperty(obj, key, value);
      }
    }

    return obj;
  };

  babelHelpers.defineProperty = function (obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  };

  babelHelpers.extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  babelHelpers.get = function get(object, property, receiver) {
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

  babelHelpers.inherits = function (subClass, superClass) {
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

  babelHelpers.instanceof = function (left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
      return right[Symbol.hasInstance](left);
    } else {
      return left instanceof right;
    }
  };

  babelHelpers.interopRequireDefault = function (obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  };

  babelHelpers.interopRequireWildcard = function (obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  };

  babelHelpers.newArrowCheck = function (innerThis, boundThis) {
    if (innerThis !== boundThis) {
      throw new TypeError("Cannot instantiate an arrow function");
    }
  };

  babelHelpers.objectDestructuringEmpty = function (obj) {
    if (obj == null) throw new TypeError("Cannot destructure undefined");
  };

  babelHelpers.objectWithoutProperties = function (obj, keys) {
    var target = {};

    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }

    return target;
  };

  babelHelpers.possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };

  babelHelpers.selfGlobal = typeof global === "undefined" ? self : global;

  babelHelpers.set = function set(object, property, value, receiver) {
    var desc = Object.getOwnPropertyDescriptor(object, property);

    if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);

      if (parent !== null) {
        set(parent, property, value, receiver);
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

  babelHelpers.slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  babelHelpers.slicedToArrayLoose = function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      var _arr = [];

      for (var _iterator = arr[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
        _arr.push(_step.value);

        if (i && _arr.length === i) break;
      }

      return _arr;
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };

  babelHelpers.taggedTemplateLiteral = function (strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  };

  babelHelpers.taggedTemplateLiteralLoose = function (strings, raw) {
    strings.raw = raw;
    return strings;
  };

  babelHelpers.temporalRef = function (val, name, undef) {
    if (val === undef) {
      throw new ReferenceError(name + " is not defined - temporal dead zone");
    } else {
      return val;
    }
  };

  babelHelpers.temporalUndefined = {};

  babelHelpers.toArray = function (arr) {
    return Array.isArray(arr) ? arr : Array.from(arr);
  };

  babelHelpers.toConsumableArray = function (arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    } else {
      return Array.from(arr);
    }
  };
})(typeof global === "undefined" ? self : global); module.exports = global.babelHelpers;
},{}]},{},[90])


//# sourceMappingURL=JSUI.js.map
