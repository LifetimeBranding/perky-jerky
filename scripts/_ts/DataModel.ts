/*
*   MOCK DATA
*   
*   TODO: 
*   - Refactor to make proper use of getter and setter methods
*   
*/
class DataModel {
  
  public products: any[] = 
  [
    {
      'product-name': 'Jerky',
      'theme-color': '#f00',
      'flavor-category': {
        'Beef': ['Beef 1', 'Beef 2', 'Beef 3', 'Beef 4', 'Beef 5'],
        'Pork': ['Pork 1', 'Pork 2', 'Pork 3', 'Pork 4' ,'Pork 5'],
        'Turkey': ['Turkey 1', 'Turkey 2', 'Turkey 3', 'Turkey 4', 'Turkey 5']
      }
    },
    {
      'product-name': 'Sticks',
      'theme-color': '#00f',
      'flavor-category': {
        'Beef': ['Flavor 1', 'Flavor 2', 'Flavor 3', 'Flavor 4', 'Flavor 5'],
        'Pork': ['Flavor 1', 'Flavor 2', 'Flavor 3', 'Flavor 4' ,'Flavor 5'],
        'Turkey': ['Flavor 1', 'Flavor 2', 'Flavor 3', 'Flavor 4', 'Flavor 5']
      }
    },
    {
      'product-name': 'Protein Pals',
      'theme-color': '#0f0',
      'flavor-category': {
        'Beef': ['Flavor 1', 'Flavor 2', 'Flavor 3', 'Flavor 4', 'Flavor 5'],
        'Pork': ['Flavor 1', 'Flavor 2', 'Flavor 3', 'Flavor 4' ,'Flavor 5'],
        'Turkey': ['Flavor 1', 'Flavor 2', 'Flavor 3', 'Flavor 4', 'Flavor 5']
      }
    }
  ]

  public get listOfProductNames(): string[] {
    let productNames: string[] = []
    for (let i = 0; i < this.products.length; i ++) {
      productNames.push(this.products[i]['product-name'])
    }
    return productNames;
  }

  public get numberOfProducts() {
    let count: number = 0
    // Loop through products array
    for (let i = 0; i < this.products.length; i++) {
      // Loop through flavor category array of each product array
      for (let j = 0; j < Object.keys(this.products[i]['flavor-category']).length; j ++) {
        let currentFlavor: string = Object.keys(this.products[i]['flavor-category'])[j]
        count += this.products[i]['flavor-category'][currentFlavor].length;
      }
    }
    return count
  }

  // TODO: Refactor this to use helper getIndexOfProduct helper method
  public getCategoryListOfProduct(product: string): any[] {
    // Find the product 
    for (let i = 0; i < this.products.length; i ++) {
      if (this.products[i]['product-name'] === product) {
        let categoryList: any[] = []
        // Push each flavor category to the array
        for (let j = 0; j < Object.keys(this.products[i]['flavor-category']).length; j++) {
          categoryList.push(Object.keys(this.products[i]['flavor-category'])[j])
        }
        return categoryList
      }
    }
  }

  public getProductAttribute(product: string, attribute: string) {
    // TODO: Refactor to use meta tags based on migration results? : [index][metatag][attribute]
    let indexOfProduct = this.getIndexOfProduct(product)
    return this.products[indexOfProduct][attribute]
  }

  public getProductThemeColor(product: string) {
    let indexOfProduct = this.getIndexOfProduct(product)
    return this.products[indexOfProduct]['theme-color']
  }

  public getFlavorsOfCategory(product: string, category: string) {
    let indexOfProduct = this.getIndexOfProduct(product)
    return this.products[indexOfProduct]['flavor-category'][category]
  }

  public getIndexOfProduct(product: string) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i]['product-name'] === product) {
        return i
      }
    }
  }
}