'use strict';
/**
 *
 * fetch json data or html partial from url or from local file
 *
 */
var Payload = /** @class */ (function () {
    function Payload(filename) {
        this.__json = filename;
    }
    Payload.prototype.fetchJson = function () {
        console.log(this.__json);
        // one.then(value => {
        //     console.log('resolved', value);
        // });
        // one.catch(error => {
        //     console.log('rejected', error);
        // });
    };
    return Payload;
}());
var json = new Payload('json.file');
json.fetchJson();
