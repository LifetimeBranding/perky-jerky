var ShowcaseCollectionComponent = /** @class */ (function () {
    function ShowcaseCollectionComponent(container) {
        this.container = document.getElementById(container);
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
    // Helper methods
    ShowcaseCollectionComponent.prototype.toggle = function () {
        this.isVisible() ? this.close() : this.open();
    };
    ShowcaseCollectionComponent.prototype.switchTo = function (id) {
        this.openedCategory = id;
        if (this.isVisible()) {
            // transition to new category
        }
        else {
            // open if not already
            this.toggle();
        }
    };
    ShowcaseCollectionComponent.prototype.isVisible = function () {
        return this.container.style.visibility === 'visible';
    };
    ShowcaseCollectionComponent.prototype.close = function () {
        this.openedCategory = null;
        this.container.style.visibility = 'hidden';
        window.scrollBy(0, -500);
    };
    ShowcaseCollectionComponent.prototype.open = function () {
        this.container.style.visibility = 'visible';
        window.scrollBy(0, 500);
    };
    return ShowcaseCollectionComponent;
}());
