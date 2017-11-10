/*
*   Showcase Collection Class
*
*/
class ShowcaseCollectionObject {
    construcor(productName, themeColor, flavorsOfCategory) {
        this.productName = productName;
        this.themeColor = themeColor;
        this.flavorsOfCategory;
    }
}
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
/*
*   MOCK DATA
*
*   TODO:
*   - Refactor to make proper use of getter and setter methods
*   - REDO DIRECTORY STRUCTURE
*
*/
class DataModel {
    constructor() {
        this.products = [
            {
                'product-name': 'Jerky',
                'theme-color': '#f00',
                'flavor-category': {
                    'Beef': ['Beef 1', 'Beef 2', 'Beef 3', 'Beef 4', 'Beef 5'],
                    'Pork': ['Pork 1', 'Pork 2', 'Pork 3', 'Pork 4', 'Pork 5'],
                    'Turkey': ['Turkey 1', 'Turkey 2', 'Turkey 3', 'Turkey 4', 'Turkey 5']
                }
            },
            {
                'product-name': 'Sticks',
                'theme-color': '#00f',
                'flavor-category': {
                    'Beef': ['Flavor 1', 'Flavor 2', 'Flavor 3', 'Flavor 4', 'Flavor 5'],
                    'Pork': ['Flavor 1', 'Flavor 2', 'Flavor 3', 'Flavor 4', 'Flavor 5'],
                    'Turkey': ['Flavor 1', 'Flavor 2', 'Flavor 3', 'Flavor 4', 'Flavor 5']
                }
            },
            {
                'product-name': 'Protein Pals',
                'theme-color': '#0f0',
                'flavor-category': {
                    'Beef': ['Flavor 1', 'Flavor 2', 'Flavor 3', 'Flavor 4', 'Flavor 5'],
                    'Pork': ['Flavor 1', 'Flavor 2', 'Flavor 3', 'Flavor 4', 'Flavor 5'],
                    'Turkey': ['Flavor 1', 'Flavor 2', 'Flavor 3', 'Flavor 4', 'Flavor 5']
                }
            }
        ];
    }
    get listOfProductNames() {
        let productNames = [];
        for (let i = 0; i < this.products.length; i++) {
            productNames.push(this.products[i]['product-name']);
        }
        return productNames;
    }
    get numberOfProducts() {
        let count = 0;
        // Loop through products array
        for (let i = 0; i < this.products.length; i++) {
            // Loop through flavor category array of each product array
            for (let j = 0; j < Object.keys(this.products[i]['flavor-category']).length; j++) {
                let currentFlavor = Object.keys(this.products[i]['flavor-category'])[j];
                count += this.products[i]['flavor-category'][currentFlavor].length;
            }
        }
        return count;
    }
    // TODO: Refactor this to use helper getIndexOfProduct helper method
    getCategoryListOfProduct(product) {
        // Find the product 
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i]['product-name'] === product) {
                let categoryList = [];
                // Push each flavor category to the array
                for (let j = 0; j < Object.keys(this.products[i]['flavor-category']).length; j++) {
                    categoryList.push(Object.keys(this.products[i]['flavor-category'])[j]);
                }
                return categoryList;
            }
        }
    }
    getProductAttribute(product, attribute) {
        // TODO: Refactor to use meta tags based on migration results? : [index][metatag][attribute]
        let indexOfProduct = this.getIndexOfProduct(product);
        return this.products[indexOfProduct][attribute];
    }
    getProductThemeColor(product) {
        let indexOfProduct = this.getIndexOfProduct(product);
        return this.products[indexOfProduct]['theme-color'];
    }
    getFlavorsOfCategory(product, category) {
        let indexOfProduct = this.getIndexOfProduct(product);
        return this.products[indexOfProduct]['flavor-category'][category];
    }
    getIndexOfProduct(product) {
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i]['product-name'] === product) {
                return i;
            }
        }
    }
}
