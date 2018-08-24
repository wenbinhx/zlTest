(function (doc, win) {
	var docEl = doc.documentElement,
	    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
	    recalc = function () {
		var clientWidth = docEl.clientWidth;
		if (!clientWidth) {
			return;
		}
        doc.scale = clientWidth / 375;
		docEl.style.fontSize = (100 * doc.scale > 115 ? 115 : 100 * doc.scale < 88 ? 88 : 100 * doc.scale) + 'px' ;
        if(typeof onLoadPage === "function"){
            onLoadPage(doc.scale);
		}
	};	
	if (!doc.addEventListener) {
		return;
	}
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);