var FeaturedCollectionComponent = /** @class */ (function () {
    function FeaturedCollectionComponent(container) {
        this.container = document.getElementById(container);
    }
    // Display Methods
    FeaturedCollectionComponent.prototype.toggle = function () {
        var visibility = this.container.style.visibility;
        visibility === 'hidden' ? this.show() : this.hide();
    };
    FeaturedCollectionComponent.prototype.hide = function () { this.container.style.visibility = 'hidden'; };
    FeaturedCollectionComponent.prototype.show = function () { this.container.style.visibility = 'visible'; };
    return FeaturedCollectionComponent;
}());
