
var url=window.location.href;
var swlocation='/sound/sw.js';
if (navigator.serviceWorker){

	if(url.includes('localhost')){
		swlocation='/sw.js';
	}
	navigator.serviceWorker.register(swlocation);
}

