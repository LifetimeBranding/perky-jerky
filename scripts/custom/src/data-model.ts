export class DataModel {
  // Mock Data for now
  public products = 
  [
    {
      'product-name': 'Jerky',
      'theme-color': 'red',
      'flavors': {
        'Beef': ['Flavor 1', 'Flavor 2', 'Flavor 3', 'Flavor 4', 'Flavor 5'],
        'Pork': ['Flavor 1', 'Flavor 2', 'Flavor 3', 'Flavor 4' ,'Flavor 5'],
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
  ]

  public get numberOfProducts() {
    return 5
  }
}

export default DataModel