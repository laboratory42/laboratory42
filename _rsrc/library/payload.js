'use strict';
/**
 * 
 * fetch json data or html partial from url or from local file
 *  
 */
class Payload {

    constructor(__data) {
        this.__data = __data
    }

    // get json response
    fetchJson() {
        return new Promise((resolve, reject) => {
            fetch(this.__data)
                .then(function (response) {
                    if (response.status == 200) {
                        return response.json();
                    } else {
                        return Promise.reject(response);
                    }
                })
                .then(result => {
                    resolve(result);
                })
                .catch(function (e) {
                    console.warn('Sorry, there is an error.', e);
                    //return e;
                })
        })
    }
    // fetchJson



    // get text response
    fetchHtml(partial) {
        return new Promise((resolve, reject) => {
            fetch(this.__data)
                .then(function (response) {

                    credentials: 'same-origin' // ? https://github.com/github/fetch

                    if (response.status == 200) {
                        return response.text();
                    } else {
                        return Promise.reject(response);
                    }
                })
                .then(result => {
                    resolve(result);
                })
                .catch(function (e) {
                    console.warn('Sorry, there is an error.', e);
                })
        })
    }


}