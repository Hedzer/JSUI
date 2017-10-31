
//Utilities
import exports from 'Parcello/exports';

export default function native(nativeClass){
	function Native(){
		nativeClass.apply(this, arguments);
	}
	Native.prototype = Object.create(nativeClass.prototype);
	Object.setPrototypeOf(Native, nativeClass);

	return Native;
}

exports(native).as('JSUI/Source/1.0.0/Utilities/Classes/native');
