
//Utilities
import exports from 'Parcello/exports';

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

exports(!hasCustomEvent).as('JSUI/Source/1.0.0/Polyfills/DOM/CustomEvent');
