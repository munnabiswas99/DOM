console.log("First JS file")

const allLi = document.getElementsByTagName('li');
console.log(allLi)
allLi[0].style.color = 'green'

const firstSec = document.getElementById('first-section')
console.log(firstSec)
firstSec.style.color = 'tomato'

const otherSec = document.getElementsByClassName('other-sections')
console.log(otherSec)
otherSec[0].style.color = 'blue'