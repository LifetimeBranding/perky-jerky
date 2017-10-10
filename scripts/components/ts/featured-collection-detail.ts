class ShowcaseCollectionComponent {
    shown: boolean
    container: HTMLElement

    constructor (container: string) {
        this.container = document.getElementById(container)
    }

    // Display Methods
    public toggle () {
        let visibility = this.container.style.visibility
        visibility === 'hidden' ? this.show() : this.hide()
    }

    private hide() { this.container.style.visibility = 'hidden' }
    private show() { this.container.style.visibility = 'visible' }
}