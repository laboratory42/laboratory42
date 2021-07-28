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

    fetchJSONArticles('./_app/data/payload.json', '_content');

    //
    // repos.forEach((repo) => {
    //   console.log(`{$repo.name} has ${repo.stargazers_count} stars`);
    // });
    //

}




function fetchJSONArticles(json) {

    let payload = new Payload(json)
    payload.fetchJson().then(__result => {

        // let __body = document.getElementById(view);
        // __body.textContent = __result.payload.body;

        let article = __result.payload.articles;

        for (var i = 0; i < article.length; i++) {
            console.log(article[i]);
            console.log(article[i].slug);

            let node = document.createElement("p");
            var textnode = document.createTextNode(article[i].body);         // Create a text node
            node.appendChild(textnode);

        }


    });

}




////// 

///// 

let home = `<h1>I am home Page</h1>`;
let hire = `<h1>I am hire Page</h1>`;
let work = `<h1>I am work Page.</h1>`;

let _nav = document.getElementById('navigation');
// let _buttons = _nav.children;
// console.log(_buttons);

// _buttons.forEach( 
//     // function (_butt, index) {
//     //     console.log(index);
//     //     console.log(_butt);
//     // }
// );

console.log('_____');
// const _nav = document.getElementById('navigation');

const parent = _nav;

// console.log(parent);

[_nav.children].forEach(child => {
    console.log('X');
});

console.log('_____');

const routes = {
    '/home': home,
    '/hire': hire,
    '/work': work
};


document.addEventListener('click', function (event) {

    // If the clicked element doesn't have the right selector, bail
    if (!event.target.matches('.menu')) return;

    // Don't follow the link
    event.preventDefault();

    let path = event.target.getAttribute("href");

    //////
    const rootDiv2 = document.getElementById('_content');
    rootDiv2.innerHTML = routes[window.location.pathname];

    const onNavigate = (pathname) => {
        window.history.pushState(
            {},
            pathname,
            window.location.origin + pathname
        )
        rootDiv2.innerHTML = routes[pathname]
        console.log(routes[pathname]);
    }

    const onNavClick = (pathname) => {
        window.history.pushState({}, pathname, window.location.origin + pathname);
        rootDiv2.innerHTML = routes[pathname];
    }

    window.onpopstate = () => {
        rootDiv2.innerHTML = routes[window.location.pathname]
    }
    //////


    fetchJSON('./_app/data/' + path + '.json', '_content');

    // Log the clicked element in the console
    // console.log(event.target.getAttribute("href"));

}, false);




