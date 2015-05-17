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
		pics.push(new Element('img', {src:picloc, id:picid, display:'none'}));
	}
	pics.sort(function() {return 0.5 - Math.random()});
	curpic = pics[0];
	nextpic = pics[1];
	Element.insert($('banner'),{top:curpic});
	setTimeout("flipPic()",timeout);
}

function flipPic(){
	Element.absolutize(curpic);
	Element.insert($('banner'),{top:nextpic});
	Effect.Fade(curpic.id, {duration: fade});
	Effect.Appear(nextpic.id, {duration: fade});
	curpic = nextpic;
	nextpic = pics[rotation%npics];
	rotation++;
	setTimeout("flipPic()",timeout);
};

Event.observe(window, 'load', init);