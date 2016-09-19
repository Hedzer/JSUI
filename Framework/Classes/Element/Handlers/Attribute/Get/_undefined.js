import nodeAttributes from 'Framework/Utilities/Elements/nodeAttributes';

export default function _undefined() {
	var results = {};
	nodeAttributes(this.element, (attribute, value, ref) => {
		results[attribute] = value;
	});
	return results;
}