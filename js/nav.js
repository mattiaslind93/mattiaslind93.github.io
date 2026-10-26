document.addEventListener('DOMContentLoaded', (event) => {
    console.clear();
    
    const app = (() => {
        let body;
        let menu;
        let menuItems;
        let transitionElements;

        const init = () => {
            body = document.querySelector('body');
            menu = document.querySelector('.menu-icon');
            menuItems = document.querySelectorAll('.nav__list-item');
            transitionElements = document.querySelectorAll('.transition');
            
            applyListeners();
        };
        
        const applyListeners = () => {
            menu.addEventListener('click', () => toggleClass(body, 'nav-active'));

            menuItems.forEach(item => {
                item.addEventListener('click', () => {
                    toggleClass(body, 'nav-active');
                    toggleTransitionElements(); // Toggle visibility when nav item is clicked
                });
            });
        };
        
        const toggleClass = (element, stringClass) => {
            if (element.classList.contains(stringClass)) {
                element.classList.remove(stringClass);
            } else {
                element.classList.add(stringClass);
            }
        };

        const toggleTransitionElements = () => {
            transitionElements.forEach(el => {
                el.classList.toggle('hidden'); // Toggle the 'hidden' class
            });
        };
        
        init();
    })();
});
