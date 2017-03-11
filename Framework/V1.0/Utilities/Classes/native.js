
//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function native(nativeClass){
    function Native(){
        nativeClass.apply(this, arguments);
    }
    Native.prototype = Object.create(nativeClass.prototype);
    Object.setPrototypeOf(Native, nativeClass);

    return Native;
}

exports(native).as('/Framework/V1.0/Utilities/Classes/native');
