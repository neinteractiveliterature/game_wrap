/*!
* FitText.js 1.0 jQuery free ES6 version
*
* Copyright 2011, Dave Rupert http://daverupert.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
* Modified by Slawomir Kolodziej http://slawekk.info
*
* Date: Tue Aug 09 2011 10:45:54 GMT+0200 (CEST)
*/
function css(el, prop) {
  return window.getComputedStyle ? getComputedStyle(el).getPropertyValue(prop) : el.currentStyle[prop];
}

function addEvent(el, type, fn) {
  if (el.addEventListener)
    el.addEventListener(type, fn, false);
	else
		el.attachEvent('on'+type, fn);
}

function extend(obj,ext) {
  for(var key in ext)
    if(ext.hasOwnProperty(key))
      obj[key] = ext[key];
  return obj;
}

export default function fitText(el, kompressor, options) {
  const settings = {
    minFontSize: -1/0,
    maxFontSize: 1/0
  };
  Object.assign(settings, options);

  const compressor = kompressor || 1;

  const fit = function fit(el) {
    const resizer = function resizer() {
      el.style.fontSize = Math.max(Math.min(el.clientWidth / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)) + 'px';
    };

    // Call once to set.
    resizer();

    // Bind events
    // If you have any js library which support Events, replace this part
    // and remove addEvent function (or use original jQuery version)
    addEvent(window, 'resize', resizer);
  };

  if (Array.isArray(el)) {
    for (var i=0; i<el.length; i++) {
      fit(el[i]);
    }
  } else {
    fit(el);
  }

  // return set of elements
  return el;
}
