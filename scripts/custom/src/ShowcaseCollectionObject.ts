/*
*   Showcase Collection Class
*   
*/

abstract class ShowcaseCollectionObject {

  productName: string
  themeColor: string[]
  flavorsOfCategory: any
 
  construcor(productName: string, themeColor: string[], flavorsOfCategory: any) {
    this.productName = productName
    this.themeColor = themeColor
    this.flavorsOfCategory
  }

}
