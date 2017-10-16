var InteractiveNavigationComponent = /** @class */ (function () {
    function InteractiveNavigationComponent(slideOutSelector) {
        this.slideOutSelector = document.getElementById(slideOutSelector);
    }
    InteractiveNavigationComponent.prototype.toggle = function () {
        this.slideOutSelector.style.width == "0px" ? this.open() : this.close();
    };
    InteractiveNavigationComponent.prototype.open = function () {
        this.slideOutSelector.style.width = '100%';
    };
    InteractiveNavigationComponent.prototype.close = function () {
        this.slideOutSelector.style.width = '0px';
    };
    return InteractiveNavigationComponent;
}());
