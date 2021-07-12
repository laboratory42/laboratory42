//
// A P P  S T A R T U P
//

var should_debug = true;



// promise and listeners defined in _rsrc/ready.js
// documentReady.then(start_application);
Promise.all([documentResolve, windowResolve]).then(start_application);



function include_templates() {
    fetchPartial('resources/partials/_navigation.html', '#navigation');
    fetchPartial('resources/partials/_footer.html', '#footer');
    fetchPartial('resources/partials/_content.html', '#content');
}




function start_application() {

    include_templates();

    const logger = document.querySelector('#debug');
    logger.textContent = '! h e l l o !  I my name is L A B 4 2';
    // logger.textContent += logger.textContent + 'load\n';



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

