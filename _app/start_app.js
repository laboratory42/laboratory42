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

}



document.addEventListener('click', function (event) {

    // If the clicked element doesn't have the right selector, bail
    if (!event.target.matches('.menu')) return;

    // Don't follow the link
    event.preventDefault();

    let path = event.target.getAttribute("href");
    fetchJSON('./_app/data/' + path + '.json', '_content');

    // Log the clicked element in the console
    console.log(event.target.getAttribute("href"));

}, false);




