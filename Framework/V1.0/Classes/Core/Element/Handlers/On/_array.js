
//Classes
import Collection from '/Framework/V1.0/Classes/Core/Collection';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function _array(collection, method){
	let results = new Collection();
	collection.forEach((item) => {
		results.push(this.on(item, method));
	});
	return results;
}

exports(_array).as('/Framework/V1.0/Classes/Core/Element/Handlers/On/_array');
