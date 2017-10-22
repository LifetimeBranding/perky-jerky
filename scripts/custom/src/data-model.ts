export class DataModel {

  // Mock Data for now
  public products: any[] = 
  [
    {
      'product-name': 'Jerky',
      'theme-color': '#f00',
      'flavor-category': {
        'Beef': ['Flavor 1', 'Flavor 2', 'Flavor 3', 'Flavor 4', 'Flavor 5'],
        'Pork': ['Flavor 1', 'Flavor 2', 'Flavor 3', 'Flavor 4' ,'Flavor 5'],
        'Turkey': ['Flavor 1', 'Flavor 2', 'Flavor 3', 'Flavor 4', 'Flavor 5']
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

  public getCategoryListOfProduct(product: string): any[] {
    for (let i = 0; i < this.products.length; i ++) {
      if (this.products[i]['product-name'] === product) {
        let categoryList: any[] = []

        for (let j = 0; j < Object.keys(this.products[i]['flavor-category']).length; j++) {
          categoryList.push(Object.keys(this.products[i]['flavor-category'])[j])
        }
        return categoryList
      }
    }
  }
}

export default DataModel