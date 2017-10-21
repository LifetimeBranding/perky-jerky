"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DataModel = /** @class */ (function () {
    function DataModel() {
        // Mock Data for now
        this.products = [
            {
                'product-name': 'Jerky',
                'theme-color': 'red',
                'flavors': {
                    'Beef': ['Flavor 1', 'Flavor 2', 'Flavor 3', 'Flavor 4', 'Flavor 5'],
                    'Pork': ['Flavor 1', 'Flavor 2', 'Flavor 3', 'Flavor 4', 'Flavor 5'],
                    'Turkey': ['Flavor 1', 'Flavor 2', 'Flavor 3', 'Flavor 4', 'Flavor 5']
                }
            },
            {
                'product-name': 'Sticks',
                'theme-color': 'blue',
                'flavors': {
                    'Beef': ['Flavor 1'],
                    'Pork': ['Flavor 1'],
                    'Turkey': ['Flavof 1']
                }
            },
            {
                'product-name': 'Protein Pals',
                'theme-color': 'orange',
                'flavors': {
                    'Beef': ['Flavor 1'],
                    'Pork': ['Flavor 1'],
                    'Turkey': ['Flavor 1']
                }
            }
        ];
    }
    Object.defineProperty(DataModel.prototype, "numberOfProducts", {
        get: function () {
            return this.products.length;
        },
        enumerable: true,
        configurable: true
    });
    return DataModel;
}());
exports.DataModel = DataModel;
exports.default = DataModel;
