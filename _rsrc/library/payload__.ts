'use strict';
/**
 * 
 * fetch json data or html partial from url or from local file
 *  
 */
// https://basarat.gitbook.io/typescript/future-javascript/promise
class Payload {

    private __json: string;
    result: string;
    number: number;

    // const fetch = require("node-fetch");

    constructor(filename: string) {
        this.__json = filename
    }

    fetchJson() {

        console.log(this.__json);

        const one = new Promise<string>((resolve, reject) => {

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






    // get json response
    // fetchJson() {
    //     return new Promise((resolve, reject) => {
    //         fetch(this.__json).then(function (response) {
    //             if (response.status == 200) {
    //                 return response.json();
    //             } else {
    //                 return Promise.reject(response);
    //             }
    //         })
    //             .then(result => {
    //                 resolve(result);
    //             })
    //             .catch(function (e) {
    //                 console.warn('Sorry, there is an error.', e);
    //             })
    //     })
    // }



}

// let json = new Payload('json.file');
// json.fetchJson();
let json = new Payload('payload.json');
json.fetchJson();




    // https://blog.bitsrc.io/keep-your-promises-in-typescript-using-async-await-7bdc57041308

    // get json response
    // fetchJson() {
    //     return new Promise((resolve, reject) => {
    //         fetch(this.__data).then(function (response) {
    //             if (response.status == 200) {
    //                 return response.json();
    //             } else {
    //                 return Promise.reject(response);
    //             }
    //         })
    //             .then(result => {
    //                 resolve(result);
    //             })
    //             .catch(function (e) {
    //                 console.warn('Sorry, there is an error.', e);
    //             })
    //     })
    // }



//
// class PayloadX {

//     __data: string;

//     constructor(data: string) {
//         this.__data = data;
//     }

//     greet() {
//         return "Hello, " + this.__data;
//     }
// }

// let greeter = new Greeter("world");


