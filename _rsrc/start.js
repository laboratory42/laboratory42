//
// S T A R T U P  S C R I P T
//

// check readyness of the html page and call startup script

// U S A G E
/**
 * 
 * var should_debug = true;
 * and debug with: log(message);
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */



 'use strict';



 // document readyness
 var documentResolve;
 var documentReady = new Promise(function (resolve) {
     // expose fulfilled state holder to outer scope
     documentResolve = resolve;
 });
 
 // add event listener and trigger resolve when ready
 document.addEventListener('DOMContentLoaded', documentResolve);
 
 // init app when ready
 // documentReady.then(___start_document);
 
 
 
 // window readyness
 var windowResolve;
 var windowReady = new Promise(function (resolve) {
     // expose fulfilled state holder to outer scope
     windowResolve = resolve;
 });
 
 // add event listener and trigger resolve when ready
 window.addEventListener('load', windowResolve);
 
 // init app when ready
 // windowReady.then(___start_window);
 
 
 
 //
 // S T A R T  A P P
 //
 // everything is ready, kick off!
 // Promise.all([documentResolve, windowResolve]).then(start_application);
 
 
 
 //
 // util functions
 //
 
 // Payload lib
 function fetchPartial(html, view) {
    let payload = new Payload(html)
    payload.fetchHtml().then(__result => {
        let __partial = document.querySelector(view);
        __partial.innerHTML = __result;
    });
}

function fetchJSON(json, view) {
    let payload = new Payload(json)
    payload.fetchJson().then(__result => {
        let __body = document.getElementById(view);
        __body.textContent = __result.payload.body;
    });
}

 // load external resources
 function loadScript(url, callback) {
 
     var script = document.createElement('script');
 
     script.async = true;
     script.src = url;
 
     if (typeof callback === 'function') {
         script.onload = callback;
     }
 
     document.head.appendChild(script);
 }
 
 // log to console
 function log(message) {
     console.log(message);
 }