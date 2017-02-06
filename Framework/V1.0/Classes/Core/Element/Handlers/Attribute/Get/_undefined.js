import nodeAttributes from '/Framework/V1.0/Utilities/Elements/nodeAttributes';

export default function _undefined() {
	let results = {};
	nodeAttributes(this.element, (attribute, value, ref) => {
		results[attribute] = value;
	});
	return results;
}