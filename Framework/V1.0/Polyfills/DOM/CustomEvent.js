
//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

//from https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent
let hasCustomEvent = (typeof window.CustomEvent === "function");
if (!hasCustomEvent) {
	function CustomEvent ( event, params ) {
		params = params || { bubbles: false, cancelable: false, detail: undefined };
		let evt = document.createEvent( 'CustomEvent' );
		evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
		return evt;
	}
	CustomEvent.prototype = window.Event.prototype;
	window.CustomEvent = CustomEvent;	
}

export default !hasCustomEvent;

exports(!hasCustomEvent).as('/Framework/V1.0/Polyfills/DOM/CustomEvent');
