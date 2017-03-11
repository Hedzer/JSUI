
//Constants
import $private from '/Framework/V1.0/Constants/Keys/General/private';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function rules(a, b) {
	let importance = b.importance - a.importance;
	let created = b[$private].created - a[$private].created;
	if (!importance) {
		return created;
	}
	return importance;
}

exports(rules).as('/Framework/V1.0/Sorts/StyleSheet/rules');
