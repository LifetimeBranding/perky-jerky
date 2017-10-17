class ShowcaseCollectionComponent {
    container: HTMLElement
    openedCategory: number

    constructor (container: string) {
      this.container = document.getElementById(container)
    }

    public show(category: number) {
      if (this.isVisible()) {
        // Close if the same category is clicked
        if (this.openedCategory === category) 
          return this.close()

        this.switchTo(category)
      } else {
         this.switchTo(category)
        return
      }
    }

    // Helper methods
    protected toggle () {
      this.isVisible() ? this.close() : this.open()
    }

    protected switchTo(id: number) {
      // Open if closed
      if (!this.isVisible()) this.toggle()

      this.openedCategory = id
    }

    protected isVisible() {
      return this.container.style.visibility === 'visible'
    }

    protected close() { 
      this.openedCategory = null
      this.container.style.visibility = 'hidden' 
    }
    
    protected open() { 
      this.container.style.visibility = 'visible' 
    }
}
