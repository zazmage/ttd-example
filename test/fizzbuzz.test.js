import { describe, expect, it } from 'vitest'
import { auxFizzbuzz, fizzbuzz } from '../fizzBuzz'

/* Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true. */

describe('fizzbuzz', () => {
  it('Sould be a function', () => {
    expect(typeof fizzbuzz).toBe('function')
  })

  it('Should recieve a parameter', () => {
    expect(() => fizzbuzz()).toThrow()
  })

  it('Should recieve a number as a parameter', () => {
    expect(() => fizzbuzz('a')).toThrow()
    expect(() => fizzbuzz(true)).toThrow()
    expect(() => fizzbuzz([])).toThrow()
  })

  it('Should recieve a positive number greater than 0 as a parameter', () => {
    expect(() => fizzbuzz(-1)).toThrow()
    expect(() => fizzbuzz(0)).toThrow()
  })

  it('Should return an array', () => {
    expect(Array.isArray(fizzbuzz(1))).toBe(true)
  })

  it('Should not return an empty array', () => {
    expect(fizzbuzz(1).length > 0).toBe(true)
  })

  it('Should return an array whose contents are strings.', () => {
    expect(new Set(fizzbuzz(1).filter(x => typeof x !== 'string')).size === 0).toBe(true)
  })

  it('Should return ["1"] if the parameter is 1', () => {
    expect(fizzbuzz(1)).toEqual(['1'])
  })

  it('Should return ["1", "2"] if the parameter is 2', () => {
    expect(fizzbuzz(2)).toEqual(['1', '2'])
  })

  it('Should return ["1", "2", "Fizz"] if the parameter is 3', () => {
    expect(fizzbuzz(3)).toEqual(['1', '2', 'Fizz'])
  })

  it('Should return ["1", "2", "Fizz", "4", "Buzz"] if the parameter is 5', () => {
    expect(fizzbuzz(5)).toEqual(['1', '2', 'Fizz', '4', 'Buzz'])
  })

  it('Should return ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"] if the parameter is 15', () => {
    expect(fizzbuzz(15)).toEqual(['1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz', '11', 'Fizz', '13', '14', 'FizzBuzz'])
  })
})

describe('auxFizzbuzz', () => {
  it('Should be a function', () => {
    expect(typeof auxFizzbuzz).toBe('function')
  })

  it('Should recieve a positive number greater than 0 as a parameter', () => {
    expect(() => auxFizzbuzz('a')).toThrow()
    expect(() => auxFizzbuzz('1')).toThrow()
    expect(() => auxFizzbuzz(true)).toThrow()
    expect(() => auxFizzbuzz([])).toThrow()
    expect(() => auxFizzbuzz(-1)).toThrow()
    expect(() => auxFizzbuzz(0)).toThrow()
  })

  it('Should return a string', () => {
    expect(typeof auxFizzbuzz(1) === 'string').toBe(true)
  })

  it('Should return "1" if parameter is 1', () => {
    expect(auxFizzbuzz(1)).toEqual('1')
  })

  it('Should return "2" if parameter is 2', () => {
    expect(auxFizzbuzz(2)).toEqual('2')
  })

  it('Should return "Fizz" if parameter is divisible by 3', () => {
    expect(auxFizzbuzz(3)).toEqual('Fizz')
  })

  it('Should return "4" if parameter is 4', () => {
    expect(auxFizzbuzz(4)).toEqual('4')
  })

  it('Should return "Buzz" if parameter is divisible by 5', () => {
    expect(auxFizzbuzz(5)).toEqual('Buzz')
  })

  it('Should return the parameter if it is not divisible by 3 or 5', () => {
    expect(auxFizzbuzz(7)).toEqual('7')
    expect(auxFizzbuzz(8)).toEqual('8')
    expect(auxFizzbuzz(11)).toEqual('11')
    expect(auxFizzbuzz(13)).toEqual('13')
    expect(auxFizzbuzz(14)).toEqual('14')
  })

  it('Should return "FizzBuzz" if parameter is divisible by 3 and 5', () => {
    expect(auxFizzbuzz(15)).toEqual('FizzBuzz')
    expect(auxFizzbuzz(30)).toEqual('FizzBuzz')
  })
})
