var FeaturedCollectionComponent = /** @class */ (function () {
    function FeaturedCollectionComponent(container) {
        this.container = document.getElementById(container);
        console.log(this.container.style);
    }
    FeaturedCollectionComponent.prototype.toggle = function () {
        if (this.container.style.visibility == 'hidden') {
            document.getElementById('');
        }
    };
    return FeaturedCollectionComponent;
}());
