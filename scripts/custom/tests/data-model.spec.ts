import 'mocha'
import { expect } from 'chai'
import DataModel from '../src/data-model'


let data = new DataModel()

describe('listOfProductNames', function() {
  it('Should return an array', function(){
    expect(data.listOfProductNames).to.be.a('array')
  })
})

describe('Number of products', function() {
  it('Should return 45', function() {
    expect(data.numberOfProducts).to.equal(45)
  })
})

describe('getCategoryListOfProduct()', function() {
  it('Should return an array', function() {
    expect(data.getCategoryListOfProduct('Protein Pals')).to.be.a('array')
  })
})

describe('getFlavorsOfCategory()', function() {
  it('Should return an array', function() {
    expect(data.getFlavorsOfCategory('Protein Pals', 'Beef')).to.be.a('array')
  })
})

describe('getIndexOfProduct(product: string)', function() {
  it('Should return a number', function() {
    expect(data.getIndexOfProduct('Protein Pals')).to.be.a('number')
  })
})

describe('getProductThemeColor(product: string)', function() {
  it('Should return a string', function() {
    expect(data.getProductThemeColor('Protein Pals')).to.be.a('string')
  })
})