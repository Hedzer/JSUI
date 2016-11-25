export default function native(nativeClass){
    function Native(){
        nativeClass.apply(this, arguments);
    }
    Native.prototype = Object.create(nativeClass.prototype);
    Object.setPrototypeOf(Native, nativeClass);

    return Native;
}