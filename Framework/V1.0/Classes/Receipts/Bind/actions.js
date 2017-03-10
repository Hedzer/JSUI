
//Constants
import $private from '/Framework/V1.0/Constants/Keys/General/private';
import $uid from '/Framework/V1.0/Constants/Keys/General/uid';

//TypeChecks
import isFunction from '/Framework/V1.0/TypeChecks/isFunction';

//Utilities
import define from '/Framework/V1.0/Utilities/Properties/addHiddenValue';
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';
import uid from '/Framework/V1.0/Utilities/General/uid';

let graph = {}; //prevent infinite loops

function getUID(obj) {
	let id = (obj.uid || obj[$uid] || (obj[$private] ? $obj[$private].uid : false) || (obj[$private] ? $obj[$private][$uid] : false));
	if (!id) {
		id = uid();
		define(obj, $uid, id);
	}
	return id;
}

function open(obj) {
	for (let i = arguments.length - 1; i >= 0; i--) {
		let obj = arguments[i];
		let id = getUID(obj);
		graph[id] = true;
	}
}

function close(obj) {
	for (let i = arguments.length - 1; i >= 0; i--) {
		let obj = arguments[i];
		let id = getUID(obj);
		graph[id] = false;
		delete graph[id];
	}
}

function isOpen(obj) {
	let result = true;
	for (let i = arguments.length - 1; i >= 0; i--) {
		let obj = arguments[i];
		let id = getUID(obj);
		result = result && !!(graph[id]);
	}
	return result;
}

function isClosed(obj) {
	let result = true;
	for (let i = arguments.length - 1; i >= 0; i--) {
		let obj = arguments[i];
		let id = getUID(obj);
		result = result && !(graph[id]);
	}
	return result;
}

let actions = {
	'->': function(objA, propA, objB, propB, data, normalizer) {
		if (!isClosed(objA, objB)) { return; }

		open(objA, objB);
		objB[propB] = normalizer(objA[propA]);
		close(objA, objB);
	},
	'<-': function(objA, propA, objB, propB, data, normalizer) {
		if (!isClosed(objA, objB)) { return; }

		open(objA, objB);
		objA[propA] = normalizer(objB[propB]);
		close(objA, objB);
	},
	'()->': function(objA, propA, objB, propB, data, normalizer) {
		if (!isClosed(objA, objB)) { return; }
		if (!isFunction(objA[propA])) { return; }

		open(objA, objB);
		objB[propB] = normalizer(objA[propA]());
		close(objA, objB);
	},
	'<-()': function(objA, propA, objB, propB, data, normalizer) {
		if (!isClosed(objA, objB)) { return; }
		if (!isFunction(objB[propB])) { return; }

		open(objA, objB);
		objA[propA] = normalizer(objB[propB]());
		close(objA, objB);
	},
	'->()': function(objA, propA, objB, propB, data, normalizer) {
		if (!isClosed(objA, objB)) { return; }
		if (!isFunction(objB[propB])) { return; }

		open(objA, objB);
		objB[propB](normalizer(objA[propA]));
		close(objA, objB);
	},
	'()<-': function(objA, propA, objB, propB, data, normalizer) {
		if (!isClosed(objA, objB)) { return; }
		if (!isFunction(objA[propA])) { return; }

		open(objA, objB);
		objA[propA](normalizer(objB[propB]));
		close(objA, objB);
	},
	'()->()': function(objA, propA, objB, propB, data, normalizer) {
		if (!isClosed(objA, objB)) { return; }
		if (!isFunction(objA[propA]) || !isFunction(objB[propB])) { return; }

		open(objA, objB);
		objB[propB](normalizer(objA[propA]()));
		close(objA, objB);
	},
	'()<-()': function(objA, propA, objB, propB, data, normalizer) {
		if (!isClosed(objA, objB)) { return; }
		if (!isFunction(objA[propA]) || !isFunction(objB[propB])) { return; }

		open(objA, objB);
		objA[propA](normalizer(objB[propB]()));
		close(objA, objB);
	},
};

export default actions;

exports(actions).as('/Framework/V1.0/Classes/Receipts/Bind/actions');
