/*
* Role: View Controller
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
            // if successfully resolved
            if (this.isVisible()) {
                // Transition
            }
            else {
                // open if not already
                this.toggle();
            }
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
