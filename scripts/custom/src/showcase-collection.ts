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
      // Successfully resolved

      if (!this.isVisible())
        this.toggle()      
/* 
      PARENT NODE: #collection-detail-category-container

      Create Child to #collection-detail-category-container
       <img src="http://via.placeholder.com/241x316" width="241" height="316" alt="Banner">
*/

          /*<li class="no-bullets">
            <a href="#">Category {{ category }}</a>
          </li>*/

 /*
    CREATE CHILD TO #collection-detail-flavor-container (LAST ONE MUST BE SEE ALL)

            {% for i in (1..5) %}
              <div class="grid__item">
                <a href="collections/all">
                  <div class="section-showcase-collection__detail--flavor">
                    Flavor {{ i }}
                  </div>
                </a>
              </div>
            {% endfor %}
              <div class="grid__item">
                <a href="collections/all">
                <div class="section-showcase-collection__detail--flavor">
                    See All
                </div>
              </a>
              </div>
 */
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

