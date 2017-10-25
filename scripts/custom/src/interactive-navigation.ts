/**
 *     Interactive Navigation Component
 *     
 *     TODO:
 *     - Have menu button switch to 'X' in open state (preferrebly animated)
 *     
 */
class InteractiveNavigationComponent {
    slideOutSelector: HTMLElement 

    constructor(slideOutSelector: string) {
        this.slideOutSelector = document.getElementById(slideOutSelector)
    }

    public toggle() {
        this.isOpen() ? this.close() : this.open();
    }

    public isOpen() {
        return this.slideOutSelector.style.width !== "0px"
    }

    public open() {
        this.slideOutSelector.style.width = '100%'
    }

    public close() {
        this.slideOutSelector.style.width = '0px'
    }
}