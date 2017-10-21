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

  public numberOfProducts() {
    var count: number = 0

    for (let i = 0; i < 5; i++) {
      count ++
    }

    return count
  }
}

export default DataModel