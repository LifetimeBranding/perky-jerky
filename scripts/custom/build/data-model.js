"use strict";
/*
* Role: Data Model
*/
Object.defineProperty(exports, "__esModule", { value: true });
// TODO: Refactor to make proper use of getter and setter methods
var DataModel = /** @class */ (function () {
    function DataModel() {
        // Mock Data for now
        this.products = [
            {
                'product-name': 'Jerky',
                'theme-color': '#f00',
                'flavor-category': {
                    'Beef': ['Flavor 1', 'Flavor 2', 'Flavor 3', 'Flavor 4', 'Flavor 5'],
                    'Pork': ['Flavor 1', 'Flavor 2', 'Flavor 3', 'Flavor 4', 'Flavor 5'],
                    'Turkey': ['Flavor 1', 'Flavor 2', 'Flavor 3', 'Flavor 4', 'Flavor 5']
                }
            },
            {
                'product-name': 'Sticks',
                'theme-color': '#00f',
                'flavor-category': {
                    'Beef': ['Flavor 1', 'Flavor 2', 'Flavor 3', 'Flavor 4', 'Flavor 5'],
                    'Pork': ['Flavor 1', 'Flavor 2', 'Flavor 3', 'Flavor 4', 'Flavor 5'],
                    'Turkey': ['Flavor 1', 'Flavor 2', 'Flavor 3', 'Flavor 4', 'Flavor 5']
                }
            },
            {
                'product-name': 'Protein Pals',
                'theme-color': '#0f0',
                'flavor-category': {
                    'Beef': ['Flavor 1', 'Flavor 2', 'Flavor 3', 'Flavor 4', 'Flavor 5'],
                    'Pork': ['Flavor 1', 'Flavor 2', 'Flavor 3', 'Flavor 4', 'Flavor 5'],
                    'Turkey': ['Flavor 1', 'Flavor 2', 'Flavor 3', 'Flavor 4', 'Flavor 5']
                }
            }
        ];
    }
    Object.defineProperty(DataModel.prototype, "listOfProductNames", {
        get: function () {
            var productNames = [];
            for (var i = 0; i < this.products.length; i++) {
                productNames.push(this.products[i]['product-name']);
            }
            return productNames;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataModel.prototype, "numberOfProducts", {
        get: function () {
            var count = 0;
            // Loop through products array
            for (var i = 0; i < this.products.length; i++) {
                // Loop through flavor category array of each product array
                for (var j = 0; j < Object.keys(this.products[i]['flavor-category']).length; j++) {
                    var currentFlavor = Object.keys(this.products[i]['flavor-category'])[j];
                    count += this.products[i]['flavor-category'][currentFlavor].length;
                }
            }
            return count;
        },
        enumerable: true,
        configurable: true
    });
    // TODO: Refactor this to use helper getIndexOfProduct helper method
    DataModel.prototype.getCategoryListOfProduct = function (product) {
        // Find the product 
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i]['product-name'] === product) {
                var categoryList = [];
                // Push each flavor category to the array
                for (var j = 0; j < Object.keys(this.products[i]['flavor-category']).length; j++) {
                    categoryList.push(Object.keys(this.products[i]['flavor-category'])[j]);
                }
                return categoryList;
            }
        }
    };
    DataModel.prototype.getProductThemeColor = function (product) {
        var indexOfProduct = this.getIndexOfProduct(product);
        return this.products[indexOfProduct]['theme-color'];
    };
    DataModel.prototype.getFlavorsOfCategory = function (product, category) {
        var indexOfProduct = this.getIndexOfProduct(product);
        return this.products[indexOfProduct]['flavor-category'][category];
    };
    DataModel.prototype.getIndexOfProduct = function (product) {
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i]['product-name'] === product) {
                return i;
            }
        }
    };
    return DataModel;
}());
exports.DataModel = DataModel;
exports.default = DataModel;
