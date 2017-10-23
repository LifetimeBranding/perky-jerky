import 'mocha'
import { expect } from 'chai'
import { DataModel } from '../src/data-model'

let data = new DataModel()

describe('listOfProductNames', () => {
  it('Should return an array', () => {
    expect(data.listOfProductNames).to.be.a('array')
  })
})

describe('Number of products', () => {
  it('Should return 45', () => {
    expect(data.numberOfProducts).to.equal(45)
  })
})

describe('getCategoryListOfProduct("Protein Pals")', () => {
  it('Should return an array', () => {
    expect(data.getCategoryListOfProduct('Protein Pals')).to.be.a('array')
  })
})

describe('getFlavorsOfCategory("Protein Pals", "Beef")', () => {
  it('Should return an array', () => {
    expect(data.getFlavorsOfCategory('Protein Pals', 'Beef')).to.be.a('array')
  })
})

describe('getIndexOfProduct("Protein Paks:")', () => {
  it('Should return a number', () => {
    expect(data.getIndexOfProduct('Protein Pals')).to.be.a('number')
  })
})

describe('getProductThemeColor("Protein Pals")', () => {
  it('Should return a string', () => {
    expect(data.getProductThemeColor('Protein Pals')).to.be.a('string')
  })
})

describe('getProductAttribute("Jerky", "theme-color")', () => {
  it('Should return a string', () => {
    expect(data.getProductAttribute('Jerky', 'theme-color')).to.be.a('string')
  })
})