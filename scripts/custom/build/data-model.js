"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    return DataModel;
}());
exports.DataModel = DataModel;
exports.default = DataModel;
