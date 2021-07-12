//
// A P P  S T A R T U P
//

var should_debug = true;



// promise and listeners defined in _rsrc/ready.js
// documentReady.then(start_application);
Promise.all([documentResolve, windowResolve]).then(start_application);



function include_templates() {
    fetchPartial('_app/partials/_navigation.html', '#navigation');
    fetchPartial('_app/partials/_footer.html', '#footer');
    fetchPartial('_app/partials/_content.html', '#content');
}




function start_application() {

    include_templates();

    const logger = document.querySelector('#debug');
    logger.textContent = '!hello I am Lab42';
    // logger.textContent += logger.textContent + 'load\n';


    fetchJSON('./_app/data/payload.json', '_content');


    // let payload = new Payload(json)
    // payload.fetchJson().then(__result => {
    //     let __body = document.getElementById(view);
    //     __body.textContent = __result.payload.body;
    // });



    // page('/', () => {
    //     fetch('./resources/data/payload.json', 'body')
    // });

    // page('/mikka', () => {
    //     fetch('./resources/data/mikka.json', 'body')
    // });

    // page('/zorro', () => {
    //     fetch('./resources/data/zorro.json', 'body')
    // });

    // page('/kontakt', () => {
    //     fetch('./resources/data/kontakt.json', 'body')
    // });

    // page('*', () => {
    //     fetch('./resources/data/404.json', 'body')
    // });

    // // fetch payload and send it to a html #id


    //
    // page.start()

}

