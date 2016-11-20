let graph = {}; //revent loops

let actions = {
	'->': function(objA, propA, objB, propB, data, normalizer) {
		objB[propB] = normalizer(objA[propA]);
	},
	'<-': function(objA, propA, objB, propB, data, normalizer) {
		objA[propA] = normalizer(objB[propB]);
	},
	'()->': function(objA, propA, objB, propB, data, normalizer) {
		objB[propB] = normalizer(objA[propA]());
	},
	'<-()': function(objA, propA, objB, propB, data, normalizer) {
		objA[propA] = normalizer(objB[propB]());
	},
	'()->()': function(objA, propA, objB, propB, data, normalizer) {
		objB[propB](normalizer(objA[propA]()));
	},
	'()<-()': function(objA, propA, objB, propB, data, normalizer) {
		objA[propA](normalizer(objB[propB]()));
	}
};

export default actions;