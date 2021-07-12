'use strict';
/**
 * 
 * fetch json data from url or from local file
 *  
 */
class Payload {

    constructor(__data) {
        this.__data = __data
    }

    // get json response
    fetchJson() {
        return new Promise((resolve, reject) => {
            fetch(this.__data).then(function (response) {
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

                    // var errormessage = {
                    //     "payload": {
                    //         "status": "ERROR",
                    //         "message": e
                    //     }
                    // };

                    console.warn('Sorry, there is an error.', e);

                    //return e;

                })
        })
    }



    // get text response
    fetchHtml(partial) {
        return new Promise((resolve, reject) => {
            fetch(this.__data).then(function (response) {

                // ? https://github.com/github/fetch
                credentials: 'same-origin'

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



    // fetchPartial(partial, target) {
    //     fetch(partial).then(function (response) {
    //         return response.text()
    //     }).then((html) => {
    //         let elem = document.querySelector(target)
    //         elem.innerHTML = html
    //     }).catch(function (e) {
    //         // console.log('Fetch problem: ' + e.message);
    //         console.warn('Something went wrong.', e)
    //     })
    // }


}