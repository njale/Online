cordova.define("org.jshybugger.cordova.jsHybuggerLoader", function(require, exports, module) { var newLocation = typeof(JsHybuggerNI) !== 'undefined' ? JsHybuggerNI.getDebugUrl(window.location.toString()) : window.location.toString();
if (newLocation != window.location.toString()) {
	console.log('jsHybugger redirected to: ' + newLocation);
	window.location = newLocation;
}

});
