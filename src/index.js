import Navigo from 'navigo';

const router = new Navigo('/');

function loadPage(page, subpage = '') {
    const path = subpage ? `./pages/${page}/${subpage}/${subpage}.html` : `./pages/${page}/${page}.html`;
    import(${path}).then(module => {
        document.getElementById('content').innerHTML = module.default;
    }).catch(() => 
        router.notFound(() => loadPage('404')).resolve());
};


router.on({
    '/': () => loadPage('Main'),
    '/about': () => loadPage('About'),
    '/activity': () => loadPage('Activity'),
    '/career': () => loadPage('Career'),
    '/computers': () => loadPage('Computers'),
    '/configurations': () => loadPage('Configurations'),
    '/contacts': () => loadPage('Contacts'),
    '/directions': () => loadPage('Directions'),
    '/pressCenter': () => loadPage('PressCenter'),
    '/products': () => loadPage('Products'),
    '/projects': () => loadPage('Projects'),
    '/:page/:subpage': ({ data }) => loadPage(data.page, data.subpage),
}).resolve();

router.notFound(() => loadPage('404')).resolve();

router.updatePageLinks();

