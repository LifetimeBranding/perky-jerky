import 'mocha'
import { expect } from 'chai'
import DataModel from '../src/data-model'


let data = new DataModel()

describe('Number of products', function() {
  it('Should return 45', function() {
    expect(data.numberOfProducts).to.equal(45)
  })
})

describe('getCategoryListOfProduct()', function() {
  it ('Should return an array', function() {
    expect(data.getCategoryListOfProduct('Sticks')).to.be.a('array')
  })
})