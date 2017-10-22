/*
* Role: View Controller
*/
var InteractiveNavigationComponent = /** @class */ (function () {
    function InteractiveNavigationComponent(slideOutSelector) {
        this.slideOutSelector = document.getElementById(slideOutSelector);
    }
    InteractiveNavigationComponent.prototype.toggle = function () {
        this.isOpen() ? this.close() : this.open();
    };
    InteractiveNavigationComponent.prototype.isOpen = function () {
        return this.slideOutSelector.style.width !== "0px";
    };
    InteractiveNavigationComponent.prototype.open = function () {
        this.slideOutSelector.style.width = '100%';
    };
    InteractiveNavigationComponent.prototype.close = function () {
        this.slideOutSelector.style.width = '0px';
    };
    return InteractiveNavigationComponent;
}());
