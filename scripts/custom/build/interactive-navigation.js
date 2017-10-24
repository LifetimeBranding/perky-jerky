/*
* @
*/
class InteractiveNavigationComponent {
    constructor(slideOutSelector) {
        this.slideOutSelector = document.getElementById(slideOutSelector);
    }
    toggle() {
        this.isOpen() ? this.close() : this.open();
    }
    isOpen() {
        return this.slideOutSelector.style.width !== "0px";
    }
    open() {
        this.slideOutSelector.style.width = '100%';
    }
    close() {
        this.slideOutSelector.style.width = '0px';
    }
}
