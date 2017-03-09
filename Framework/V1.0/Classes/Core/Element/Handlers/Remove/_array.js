
//Classes
import Collection from '/Framework/V1.0/Classes/Core/Collection';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function _array(collection){
	let results = new Collection();
	collection.forEach((item) => {
		results.push(this.remove(item));
	});
	return results;
}

exports(_array).as('/Framework/V1.0/Classes/Core/Element/Handlers/Remove/_array');