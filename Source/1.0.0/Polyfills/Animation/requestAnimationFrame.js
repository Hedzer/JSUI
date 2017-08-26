
//Constants
import vendors from '/JSUI/Source/1.0.0/Constants/CSS/vendors';

//Utilities
import exports from '/JSUI/Source/1.0.0/Utilities/Dependencies/exports';


let hasAnimFrame = !!window.requestAnimationFrame;
if (!hasAnimFrame) {
	// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
	// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

	// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel

	// MIT license

	(function() {
		let lastTime = 0;
		for(let x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
			window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
			window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] 
									   || window[vendors[x]+'CancelRequestAnimationFrame'];
		}

		if (!window.requestAnimationFrame)
			window.requestAnimationFrame = function(callback, element) {
				let currTime = new Date().getTime();
				let timeToCall = Math.max(0, 16 - (currTime - lastTime));
				let id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
				  timeToCall);
				lastTime = currTime + timeToCall;
				return id;
			};

		if (!window.cancelAnimationFrame)
			window.cancelAnimationFrame = function(id) {
				clearTimeout(id);
			};
	}());
}

exports(!hasAnimFrame).as('/JSUI/Source/1.0.0/Polyfills/Animation/requestAnimationFrame');