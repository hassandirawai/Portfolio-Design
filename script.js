const headerNav = document.querySelector(".header-nav");
const humburgerBtn = document.querySelector(".humburger-btn");

humburgerBtn.addEventListener(
    "click",
    () => {
        const visibility = headerNav.getAttribute("data-visible");
        
        if ( visibility == "false" ) {
            headerNav.setAttribute("data-visible", true);
            humburgerBtn.setAttribute("aria-expanded", true);
        } else {
            headerNav.setAttribute("data-visible", false);
            humburgerBtn.setAttribute("aria-expanded", false);
        }
    }
 );

const mainHeader = document.querySelector(".main-header");
const scrollWatcher = document.createElement('div');
scrollWatcher.setAttribute("data-scroll-watcher", "");
mainHeader.before(scrollWatcher);

const navObserver = new IntersectionObserver((entries) => {
        mainHeader.classList.toggle("sticking", !entries[0].isIntersecting);
    }
);

navObserver.observe(scrollWatcher);