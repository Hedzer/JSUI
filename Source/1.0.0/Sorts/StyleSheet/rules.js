
//Constants
import $private from 'JSUI/Source/1.0.0/Constants/Keys/General/private';

//Utilities
import exports from 'Parcello/exports';

export default function rules(a, b) {
	let importance = b.importance - a.importance;
	let created = b[$private].created - a[$private].created;
	if (!importance) {
		return created;
	}
	return importance;
}

exports(rules).as('JSUI/Source/1.0.0/Sorts/StyleSheet/rules');
