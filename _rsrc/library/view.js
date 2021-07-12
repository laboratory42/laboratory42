'use strict';
/**
 * 
 * Siple templating
 * 
 * usage
 * View.fetchPartial('/_partials/_header.html', '#header')
 * 
 */
class View {
    constructor(partial, target) {
        this._partial = partial
        this._target = target
    }
    
    static fetchPartial(partial, target) {
        fetch(partial).then(function (response) {
            return response.text()
        }).then((html) => {
            let elem = document.querySelector(target)
            elem.innerHTML = html
        }).catch(function (e) {
            // console.log('Fetch problem: ' + e.message);
            console.warn('Something went wrong.', e)
        })
    }
}