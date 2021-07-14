'use strict';
/**
 *
 * fetch json data or html partial from url or from local file
 *
 */
// https://basarat.gitbook.io/typescript/future-javascript/promise
class Payload {
    // const fetch = require("node-fetch");
    constructor(filename) {
        this.__json = filename;
    }
    fetchJson() {
        console.log(this.__json);
        const one = new Promise((resolve, reject) => {
            const response = fetch(this.__json);
            console.log(response);
            // fetch(this.__json).then(function (response) {
            // if (response.status == 200) {
            //     return response.json();
            // } else {
            //     return Promise.reject(response);
            // }
            // })
        }); // end promise
        one.then(value => {
            console.log('resolved', value);
        });
        one.catch(error => {
            console.log('rejected', error);
        });
    }
}
// let json = new Payload('json.file');
// json.fetchJson();
let json = new Payload('payload.json');
json.fetchJson();
