
import 'mocha'
import { expect } from 'chai'

import DataModel from '../src/data-model'


let model = new DataModel()

describe('Number of products', function() {
  it('Should return 21', function() {
    expect(model.numberOfProducts).to.equal(21)
  })
})