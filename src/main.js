import  HomePage from "./pages/home.js"
import {Exercise1, Exercise1up} from "./pages/contact.js"
import userModule from "./pages/exercise2.js"
import Navigo from 'navigo'; // When using ES modules.


const render = (container, component) => {
    document.querySelector(container).innerHTML = component()
}

const router = new Navigo('/', { linksSelector: "a" });

router.on('/', function () {
    render("#app", HomePage)
});

router.on('/contact', function () {
    render("#app", Exercise1up)
    render("#target",Exercise1)
});
router.on('/exercise2', function () {
    render("#app", userModule)

});
router.resolve();

// document.querySelector("#app").innerHTML = HomePage()