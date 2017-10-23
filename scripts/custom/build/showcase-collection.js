/*
* Role: View Controller
*/
var ShowcaseCollectionComponent = /** @class */ (function () {
    function ShowcaseCollectionComponent(containerElement) {
        this.containerElement = document.getElementById(containerElement);
    }
    ShowcaseCollectionComponent.prototype.show = function (category) {
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
    };
    ShowcaseCollectionComponent.prototype.switchTo = function (id) {
        this.openedCategory = id;
        // Get data from the Model
        if (this.isVisible()) {
            // Transition
        }
        else {
            // open if not already
            this.toggle();
        }
    };
    // Helper methods
    ShowcaseCollectionComponent.prototype.toggle = function () {
        this.isVisible() ? this.close() : this.open();
    };
    ShowcaseCollectionComponent.prototype.isVisible = function () {
        return this.containerElement.style.visibility === 'visible';
    };
    ShowcaseCollectionComponent.prototype.close = function () {
        this.openedCategory = null;
        this.containerElement.style.visibility = 'hidden';
    };
    ShowcaseCollectionComponent.prototype.open = function () {
        this.containerElement.style.visibility = 'visible';
    };
    return ShowcaseCollectionComponent;
}());
