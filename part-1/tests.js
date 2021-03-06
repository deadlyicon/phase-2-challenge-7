const {
  month,
  reverseSentence,
  nameProps,
  filterBetween
} = require('./functions')
const { expect } = require('chai')

describe('Month Function', () => {
  context('Expected Behavior', () => {
    it('Returns the month of a given Date', () => {
      let date = new Date(2017, 5, 19)
      expect(month(date)).to.equal("June")
    })
  })
  context('Fail Cases', () => {
    it('Throws an error if Date object is not passed through', () => {
      expect(() => month("10-30-2017"))
        .to.throw("Please pass in a Date object")
    })
  })
})

describe('Reverse A Sentence Function', () => {
  context('Expected Behavior', () => {
    it('Reverses a given sentence', () => {
      expect(reverseSentence("Hello, this is dog."))
        .to.equal("dog. is this Hello,")
    })
  })
  context('Fail Cases', () => {
    it('Throws an error if a string is not passed through', () => {
      expect(() => reverseSentence(new Date()))
        .to.throw("Please pass in a String")
    })
  })
})

describe('Names of Properties Function', () => {
  context('Expected Behavior', () => {
    it('Returns an array of an object\'s properties', () => {
      let friend = {
        name: 'Dominique',
        age: 30,
        phone: '555-555-5555'
      }
      expect(nameProps(friend)).to.eql(['age', 'name', 'phone'])
    })
  })
  context('Fail Cases', () => {
    it('Throws an error if an object is not passed through', () => {
      expect(() => nameProps("Here are some properties"))
        .to.throw("Please pass in an object")
    })
  })
})

describe('Filter Between Function', () => {
  context('Expected Behavior', () => {
    it('Filters an array of words that fit alphabetically in between two given words', () => {
      let arr = ['dog', 'cat', 'zebra', 'ape', 'lion', 'cow']
      expect(filterBetween(arr, 'deer', 'giraffe')).to.eql(['dog'])
      expect(filterBetween(arr, 'chimp', 'lobster')).to.eql(['dog', 'lion', 'cow'])
      expect(filterBetween(arr, 'chickadee', 'chimpanzee')).to.eql([])
    })
  })
  context('Fail Cases', () => {
    it('Throws an error if an object is not passed through', () => {
      expect(() => filterBetween("Here is an array"))
        .to.throw("Please pass in an array")
    })
  })
})
