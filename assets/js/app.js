
var url=window.location.href;
var swlocation='/sound1/sw.js';
if (navigator.serviceWorker){

	if(url.includes('localhost')){
		swlocation='/sound1/sw.js';
	}
	navigator.serviceWorker.register(swlocation);
}

