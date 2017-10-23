import 'mocha'
import { expect } from 'chai'
import { DataModel } from '../src/data-model'

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

describe('getCategoryListOfProduct("Protein Pals")', function() {
  it('Should return an array', function() {
    expect(data.getCategoryListOfProduct('Protein Pals')).to.be.a('array')
  })
})

describe('getFlavorsOfCategory("Protein Pals", "Beef")', function() {
  it('Should return an array', function() {
    expect(data.getFlavorsOfCategory('Protein Pals', 'Beef')).to.be.a('array')
  })
})

describe('getIndexOfProduct("Protein Paks:")', function() {
  it('Should return a number', function() {
    expect(data.getIndexOfProduct('Protein Pals')).to.be.a('number')
  })
})

describe('getProductThemeColor("Protein Pals")', function() {
  it('Should return a string', function() {
    expect(data.getProductThemeColor('Protein Pals')).to.be.a('string')
  })
})

describe('getProductAttribute("Jerky", "theme-color")', function() {
  it('Should return a string', function() {
    expect(data.getProductAttribute('Jerky', 'theme-color')).to.be.a('string')
  })
})