/**
 *     Interactive Navigation Component
 *
 *     TODO:
 *     - Have menu button switch to 'X' in open state (preferrebly animated)
 *
 */
class InteractiveNavigationComponent {
    constructor(slideOutSelector, toggleSelector) {
        this.slideOutSelector = document.getElementById(slideOutSelector);
        this.toggleSelectorContainers = document.getElementById(toggleSelector).querySelectorAll('div');
    }
    toggle() {
        this.isOpen() ? this.close() : this.open();
    }
    isOpen() {
        return this.slideOutSelector.style.width !== "0px";
    }
    open() {
        this.mutateToggleSelector('open');
        this.slideOutSelector.style.width = '100%';
    }
    close() {
        this.mutateToggleSelector('close');
        this.slideOutSelector.style.width = '0px';
    }
    mutateToggleSelector(action) {
        switch (action) {
            case 'open':
                this.toggleSelectorContainers[0].style.display = 'none';
                this.toggleSelectorContainers[1].style.display = 'block';
                break;
            case 'close':
                this.toggleSelectorContainers[1].style.display = 'none';
                this.toggleSelectorContainers[0].style.display = 'block';
                break;
        }
    }
}
