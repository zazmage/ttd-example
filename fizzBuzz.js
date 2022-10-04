export const auxFizzbuzz = (number) => {
  if (typeof number !== 'number') throw new Error()
  if (number <= 0) throw new Error()
  const dividers = { 3: 'Fizz', 5: 'Buzz' }
  let output = ''
  Object
    .entries(dividers)
    .forEach(([divider, result]) => {
      if (number % divider === 0) output += result
    })
  return output || number.toString()
}

export const fizzbuzz = (number) => {
  if (typeof number !== 'number') throw new Error()
  if (number <= 0) throw new Error()
  const answer = []
  for (let i = 1; i <= number; i++) {
    answer.push(auxFizzbuzz(i))
  }
  return answer
}
