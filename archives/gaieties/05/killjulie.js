// ImageReady Preload Script (main_page03.psd)

userAgent = window.navigator.userAgent;
browserVers = parseInt(userAgent.charAt(userAgent.indexOf("/")+1),10);
function newImage(arg) {
	if (document.images) {
		rslt = new Image();
		rslt.src = arg;
		return rslt;
	}
}

function findElement(n,ly) {
	if (browserVers < 4)		return document[n];
	var curDoc = ly ? ly.document : document;
	var elem = curDoc[n];
	if (!elem) {
		for (var i=0;i<curDoc.layers.length;i++) {
			elem = findElement(n,curDoc.layers[i]);
			if (elem) return elem;
		}
	}
	return elem;
}

function changeImages() {
	if (document.images && (preloadFlag == true)) {
		var img;
		for (var i=0; i<changeImages.arguments.length; i+=2) {
			img = null;
			if (document.layers) {
				img = findElement(changeImages.arguments[i],0);
			}
			else {
				img = document.images[changeImages.arguments[i]];
			}
			if (img) {
				img.src = changeImages.arguments[i+1];
			}
		}
	}
}

var preloadFlag = false;
function preloadImages() {
	if (document.images) {
		buy_over = newImage("images/buy-over.gif");
		dead_over = newImage("images/dead-over.gif");
		who_over = newImage("images/who-over.gif");
		better_over = newImage("images/better-over.gif");
		game_over = newImage("images/game-over.gif");
		history_over = newImage("images/history-over.gif");
		cast_over = newImage("images/cast-over.gif");
		contact_over = newImage("images/contact-over.gif");
		preloadFlag = true;
	}
}
