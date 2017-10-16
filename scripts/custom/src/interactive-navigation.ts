class InteractiveNavigationComponent {
    slideOutSelector: HTMLElement 

    constructor(slideOutSelector: string) {
        this.slideOutSelector = document.getElementById(slideOutSelector)
    }

    public toggle() {
        this.slideOutSelector.style.width == "0px" ? this.open() : this.close();
    }

    public open() {
        this.slideOutSelector.style.width = '100%'
    }

    public close() {
        this.slideOutSelector.style.width = '0px'
    }
}