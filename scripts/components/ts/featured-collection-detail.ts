class FeaturedCollectionComponent {
    shown: boolean
    container: HTMLElement

    constructor (container: string) {
        this.container = document.getElementById(container)
    }

    public toggle () {
        if (this.container.style.visibility == 'hidden') {
           document.getElementById('');
        }
    }
}