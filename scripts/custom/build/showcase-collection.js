var ShowcaseCollectionComponent = /** @class */ (function () {
    function ShowcaseCollectionComponent(container) {
        this.container = document.getElementById(container);
    }
    ShowcaseCollectionComponent.prototype.toggle = function () {
        this.container.style.visibility === 'hidden' ?
            this.show() : this.hide();
    };
    ShowcaseCollectionComponent.prototype.hide = function () {
        this.container.style.visibility = 'hidden';
    };
    ShowcaseCollectionComponent.prototype.show = function () {
        this.container.style.visibility = 'visible';
    };
    return ShowcaseCollectionComponent;
}());
