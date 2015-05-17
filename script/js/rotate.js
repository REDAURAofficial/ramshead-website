var curpic = {};
var nextpic = {};
var timeout = 5000; //time each photo is displayed, in milliseconds
var fade = 2.0; //time it takes to fade between photos, in seconds
var npics = 31; //total number of photos to be displayed
var pics = new Array();
var rotation = 2;

function init() {
	dispBanner();
}

function dispBanner() {
	//initialize
	for(var pi=0; pi<npics; pi++) {
		var picloc = "./includes/image/banner/banner-"+pi+".jpg";
		var picid = "banner-"+pi;
		pics.push({src:picloc, id:picid, display:'none'});
	}
	pics.sort(function() {return 0.5 - Math.random()});
	curpic = getPic(0);
	nextpic = getPic(1);
	Element.insert($('banner'),{top:curpic});
	setTimeout("flipPic()",timeout);
}


/**
 * Return the pic element if it's already been fetched
 * Fetch it if not
 */
function getPic(id){
	var pic = pics[id];
	if(!pic.elem){
		var picElem = new Element('img', {src:pic.src, id:pic.id, display:pic.display});
		pic.elem = picElem;
	}
	return pic.elem;
}

function flipPic(){
	Element.absolutize(curpic);
	Element.insert($('banner'),{top:nextpic});
	Effect.Fade(curpic.id, {duration: fade});
	Effect.Appear(nextpic.id, {duration: fade});
	curpic = nextpic;
	nextpic = getPic(rotation%npics);
	rotation++;
	setTimeout("flipPic()",timeout);
};

Event.observe(window, 'load', init);