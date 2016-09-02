import isObject from '/Framework/TypeChecks/isObject';

export default function _object(macro, value){
	var result = (isObject(value) ? value : {});
	Object.keys(macro).forEach((attribute) => {
		results[attribute] = this.attribute(attribute, macro[attribute]);
	});
	return results;
}