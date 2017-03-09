import addProperty from '/Framework/V1.0/Utilities/Properties/add';
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function _string(prop){
	addProperty(this, prop);
}

exports(_string).as('/Framework/V1.0/Classes/Core/Element/Handlers/Add/_string');
