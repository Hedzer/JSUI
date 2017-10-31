
//Classes
import Collection from 'JSUI/Source/1.0.0/Classes/Core/Collection';

//Utilities
import exports from 'Parcello/exports';

export default function _array(collection) {
	let results = new Collection();
	
	collection.forEach((item) => {
		results.push(this.find(item));
	});
	
	return results;
}

exports(_array).as('JSUI/Source/1.0.0/Classes/Core/Element/Handlers/Find/_array');
