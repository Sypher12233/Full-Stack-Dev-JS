// Context: The company that you work for suspects that credit card distributors have been mailing out cards that have invalid numbers. In this project, you have the role of a clerk who checks if credit cards are valid. Every other clerk currently checks using pencil and paper, but you’ll be optimizing the verification process using your knowledge of functions and loops to handle multiple credit cards at a time. Unlike the other clerks, you can spend the rest of your time relaxing!

// As you progress through the steps, use the terminal and console.log() statements to check the output of your loops and functions.

const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
let totalInvalid = []
let nested = [
  [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8],
  [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9],
  [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5],
]

function validateCred(arr) {
  let sum = []
  for (let i = arr.length - 1; i >= 0; i--) {
    let sorter = []
    if (i % 2 !== 0) {
      sorter.push(arr[i])
    }
    if (i % 2 === 0) {
      if (arr[i] * 2 > 9) {
        sorter.push(arr[i] * 2 - 9)
      }
      if (arr[i] * 2 < 9) {
        sorter.push(arr[i] * 2)
      }
    }
    sum.push(sorter.sort())
  }
  let comp = sum.map((a) => {
    return a.join() && Number(a)
  })
  let complete = comp.reduce((num1, num2) => {
    return num1 + num2
  }, 0)
  let result = complete % 10 === 0 ? 'valid' : 'invalid'
  return result
}

function findInvalidCards(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (validateCred(arr[i]) === 'invalid') {
      totalInvalid.push(arr[i])
    }
  }
  return totalInvalid
}
function idInvalidCardCompanies(arr) {
  let companies = [{ Amex: 0 }, { Visa: 0 }, { Mastercard: 0 }, { Discover: 0 }]
  for (let i = 0; i < arr.length; i++) {
    if (validateCred(arr[i]) === 'valid') {
      return 'All credit card numbers are valid'
    } else if (validateCred(arr[i]) === 'invalid') {
      if (arr[i][0] === 3) {
        companies[0]['Amex']++
      }
      if (arr[i][0] === 4) {
        companies[1]['Visa']++
      }
      if (arr[i][0] === 5) {
        companies[2]['Mastercard']++
      }
      if (arr[i][0] === 6) {
        companies[3]['Discover']++
      }
      return `List of companies that have mailed cards with invalid numbers are: Amex ${companies[0].Amex}, Visa ${companies[1].Visa}, Mastercard ${companies[2].Mastercard} and Discover ${companies[3]['Discover']}.`
    }
  }
}
console.log(idInvalidCardCompanies(nested))
