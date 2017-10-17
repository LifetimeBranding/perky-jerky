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
        // Open if closed
        if (!this.isVisible())
            this.toggle();
        this.openedCategory = id;
    };
    ShowcaseCollectionComponent.prototype.isVisible = function () {
        return this.container.style.visibility === 'visible';
    };
    ShowcaseCollectionComponent.prototype.close = function () {
        this.openedCategory = null;
        this.container.style.visibility = 'hidden';
    };
    ShowcaseCollectionComponent.prototype.open = function () {
        this.container.style.visibility = 'visible';
    };
    return ShowcaseCollectionComponent;
}());
