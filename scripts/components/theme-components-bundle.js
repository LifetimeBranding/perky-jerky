var ShowcaseCollectionComponent = /** @class */ (function () {
    function ShowcaseCollectionComponent(container) {
        this.container = document.getElementById(container);
    }
    // Display Methods
    ShowcaseCollectionComponent.prototype.toggle = function () {
        var visibility = this.container.style.visibility;
        visibility === 'hidden' ? this.show() : this.hide();
    };
    ShowcaseCollectionComponent.prototype.hide = function () { this.container.style.visibility = 'hidden'; };
    ShowcaseCollectionComponent.prototype.show = function () { this.container.style.visibility = 'visible'; };
    return ShowcaseCollectionComponent;
}());
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    return HeaderComponent;
}());
