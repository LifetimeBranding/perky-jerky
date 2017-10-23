/*
* Role: View Controller
*/

class ShowcaseCollectionComponent {
  containerElement: HTMLElement
  dataModel: any
  openedCategory: string

  constructor (containerElement: string, model: any) {
    this.containerElement = document.getElementById(containerElement)
    this.dataModel = model
  }

  public show(category: string) {
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

  protected switchTo(category: string) {
    this.openedCategory = category

    var dataLoaded = new Promise((resolve, reject) => {
      let result = this.getCollectionInfo(category)

      if (result)
        resolve(result)
      else
        reject(Error('Error'))
    })

    dataLoaded.then((data) => {
      // if successfully resolved
      if (this.isVisible()) {
        // Transition

      } else {
        // open if not already
        this.toggle()
      }
      console.log(data)

    }, (error) => {

      // if failed
      console.log(error)

    })
  }

  // Helper methods
  protected getCollectionInfo(collection: string) {
    return this.dataModel.getCategoryListOfProduct(collection)
  }

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

