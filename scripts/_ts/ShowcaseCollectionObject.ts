/*
*   Showcase Collection Class
*   
*/

abstract class ShowcaseCollectionObject {

  productName: string
  themeColor: string[]
  flavorsOfCategory: any
 
  constructor(productName: string, themeColor: string[], flavorsOfCategory: any) {
    this.productName = productName
    this.themeColor = themeColor
    this.flavorsOfCategory
  }

}
