// Context: You’re part of a research team that has found a new mysterious organism at the bottom of the ocean near hydrothermal vents. Your team names the organism, Pila aequor (P. aequor), and finds that it is only comprised of 15 DNA bases. The small DNA samples and frequency at which it mutates due to the hydrothermal vents make P. aequor an interesting specimen to study. However, P. aequor cannot survive above sea level and locating P. aequor in the deep sea is difficult and expensive. Your job is to create objects that simulate the DNA of P. aequor for your research team to study.

// As you progress through the steps, use the terminal and console.log() statements to check the output of your loops and functions.

// Global variables
let pAequorInstances = []
let stopper = 0
let percentage = 0
let similarities = []

// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)]
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

function pAequorFactory(specimenNum, dna) {
  pAequor = {
    specimenNum,
    dna,
    mutate() {
      for (let i = 0; i < this.dna.length; i++) {
        if (returnRandBase() !== dna[i]) {
          return (this.dna[i] = returnRandBase())
        } else {
          return returnRandBase()
          // Added this line just to avoid getting "undefined" in console.log
        }
      }
    },
    compareDNA(passedObj) {
      for (let i = 0; i < this.dna.length; i++) {
        if (passedObj.dna[i] === this.dna[i]) {
          similarities.push(dna[i])
        }
      }
      percentage =
        ((similarities.length / this.dna.length) * 100).toFixed() + '%'
      return `Specimen 1 and Specimen 2 have ${percentage} dna in common.`
    },
    willLikelySurvive() {
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === 'C' || this.dna[i] === 'G') {
          similarities.push(this.dna[i])
          // Checked for both because one was not making 60% of dna bases and would never return true;
        }
      }
      percentage = ((similarities.length / this.dna.length) * 100).toFixed()
      return percentage >= 60 ? true : false
    },
  }
  return pAequor
}
for (let i = 0; pAequorInstances.length < 30; i++) {
  let mock = pAequorFactory(i, mockUpStrand())
  if (mock.willLikelySurvive()) {
    pAequorInstances.push(mock)
  }
}
console.log(pAequorInstances)
