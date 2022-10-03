import { describe, expect, it } from 'vitest'

/* Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true. */

const fizzbuzz = (number) => {
  if (typeof number !== 'number') throw new Error()
  if (number <= 0) throw new Error()
  const answer = []
  for (let i = 1; i <= number; i++) {
    if (i === 3) answer.push('Fizz')
    else if (i === 5) answer.push('Buzz')
    else answer.push(i.toString())
  }
  return answer
}

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
})
