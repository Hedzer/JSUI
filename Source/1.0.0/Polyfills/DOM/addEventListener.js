
//Utilities
import exports from 'Parcello/exports';

//from https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
let hasAddEventListener = !!Element.prototype.addEventListener;
if (!hasAddEventListener) {
	let eventListeners = [];

	let addEventListener = function(type, listener /*, useCapture (will be ignored) */ ) {
		let self = this;
		let wrapper = function(e) {
			e.target = e.srcElement;
			e.currentTarget = self;
			if (typeof listener.handleEvent != 'undefined') {
				listener.handleEvent(e);
			} else {
				listener.call(self, e);
			}
		};
		if (type == "DOMContentLoaded") {
			let wrapper2 = function(e) {
				if (document.readyState == "complete") {
					wrapper(e);
				}
			};
			document.attachEvent("onreadystatechange", wrapper2);
			eventListeners.push({
				object: this,
				type: type,
				listener: listener,
				wrapper: wrapper2
			});

			if (document.readyState == "complete") {
				let e = new Event();
				e.srcElement = window;
				wrapper2(e);
			}
		} else {
			this.attachEvent("on" + type, wrapper);
			eventListeners.push({
				object: this,
				type: type,
				listener: listener,
				wrapper: wrapper
			});
		}
	};
	let removeEventListener = function(type, listener /*, useCapture (will be ignored) */ ) {
		let counter = 0;
		while (counter < eventListeners.length) {
			let eventListener = eventListeners[counter];
			if (eventListener.object == this && eventListener.type == type && eventListener.listener == listener) {
				if (type == "DOMContentLoaded") {
					this.detachEvent("onreadystatechange", eventListener.wrapper);
				} else {
					this.detachEvent("on" + type, eventListener.wrapper);
				}
				eventListeners.splice(counter, 1);
				break;
			}
			++counter;
		}
	};

	Element.prototype.addEventListener = addEventListener;
	Element.prototype.removeEventListener = removeEventListener;
	
	if (HTMLDocument) {
		HTMLDocument.prototype.addEventListener = addEventListener;
		HTMLDocument.prototype.removeEventListener = removeEventListener;
	}
	if (Window) {
		Window.prototype.addEventListener = addEventListener;
		Window.prototype.removeEventListener = removeEventListener;
	}
	if (!Event.prototype.preventDefault) {
		Event.prototype.preventDefault = function() {
			this.returnValue = false;
		};
	}
	if (!Event.prototype.stopPropagation) {
		Event.prototype.stopPropagation = function() {
			this.cancelBubble = true;
		};
	}
}

export default !hasAddEventListener;

exports(!hasAddEventListener).as('JSUI/Source/1.0.0/Polyfills/DOM/addEventListener');
