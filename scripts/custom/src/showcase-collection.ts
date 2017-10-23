/*
* Role: View Controller
*/

class ShowcaseCollectionComponent {
  containerElement: HTMLElement
  openedCategory: number

  constructor (containerElement: string) {
    this.containerElement = document.getElementById(containerElement)
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

  protected switchTo(id: number) {
    this.openedCategory = id
    
    // Get data from the Model

    if (this.isVisible()) {
      // Transition

    } else {
      // open if not already
      this.toggle()
    }
  }

  // Helper methods
  protected toggle () {
    this.isVisible() ? this.close() : this.open()
  }

  protected isVisible() {
    return this.containerElement.style.visibility === 'visible'
  }

  protected close() { 
    this.openedCategory = null
    this.containerElement.style.visibility = 'hidden'
  }
  
  protected open() { 
    this.containerElement.style.visibility = 'visible'
  }
}

