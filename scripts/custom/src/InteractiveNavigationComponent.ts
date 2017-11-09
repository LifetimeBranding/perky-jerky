/**
 *     Interactive Navigation Component
 *     
 *     TODO:
 *     - Have menu button switch to 'X' in open state (preferrebly animated)
 *     
 */

class InteractiveNavigationComponent {
    slideOutSelector: HTMLElement
    toggleSelectorContainers: any

    constructor(slideOutSelector: string, toggleSelector: string) {
        this.slideOutSelector = document.getElementById(slideOutSelector)
        this.toggleSelectorContainers = document.getElementById(toggleSelector).querySelectorAll('div')
    }

    public toggle() {
        this.isOpen() ? this.close() : this.open();
    }

    public isOpen() {
        return this.slideOutSelector.style.width !== "0px"
    }

    public open() {
        this.mutateToggleSelector('open')
        this.slideOutSelector.style.width = '100%'

    }

    public close() {
        this.mutateToggleSelector('close')
        this.slideOutSelector.style.width = '0px'
    }

    public mutateToggleSelector(action: string) {
        switch (action) {
            case 'open':
                this.toggleSelectorContainers[0].style.display = 'none'
                this.toggleSelectorContainers[1].style.display = 'block'
            break;

            case 'close':
                this.toggleSelectorContainers[1].style.display = 'none'
                this.toggleSelectorContainers[0].style.display = 'block'
            break;
        }
    }
}