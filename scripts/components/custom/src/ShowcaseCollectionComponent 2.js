/**
 *    Showcase Collection Component
 *
 *    TODO:
 *    - Change to Showcase Product Component after migration is complete?
 *
 */
class ShowcaseCollectionComponent {
    constructor(containerElement, model) {
        this.containerElement = document.getElementById(containerElement);
        this.dataModel = model;
    }
    show(category) {
        if (this.isVisible()) {
            // Close if the same category is clicked
            if (this.openedCategory === category)
                return this.close();
            this.switchTo(category);
        }
        else {
            this.switchTo(category);
            return;
        }
    }
    switchTo(category) {
        this.openedCategory = category;
        var dataLoaded = new Promise((resolve, reject) => {
            let result = this.getCollectionInfo(category);
            if (result)
                resolve(result);
            else
                reject(Error('Error'));
        });
        dataLoaded.then((data) => {
            // Successfully resolved
            if (!this.isVisible())
                this.toggle();
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
            console.log(data);
        }, (error) => {
            // if failed
            console.log(error);
        });
    }
    // Helper methods
    getCollectionInfo(collection) {
        return this.dataModel.getCategoryListOfProduct(collection);
    }
    toggle() {
        this.isVisible() ? this.close() : this.open();
    }
    isVisible() {
        return this.containerElement.style.visibility === 'visible';
    }
    close() {
        this.openedCategory = null;
        this.containerElement.style.visibility = 'hidden';
    }
    open() {
        this.containerElement.style.visibility = 'visible';
    }
}
