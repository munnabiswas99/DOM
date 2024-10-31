console.log('JS connected successfully')

//important one
const blueBtn = document.getElementById('makeBlue')
function blue(){
    document.body.style.backgroundColor = 'blue'
}
blueBtn.onclick = blue;

function red(){
    document.body.style.backgroundColor = 'red'
}

const purpleBtn = document.getElementById('makePurple')
purpleBtn.onclick = function purple(){
    document.body.style.backgroundColor = 'purple'
}

const greenBtn = document.getElementById('makeGreen')
greenBtn.addEventListener('click', function green(){
    document.body.style.backgroundColor = 'green'
} )

//important one
document.getElementById('makeYellow').addEventListener('click', function yellow(){
    document.body.style.backgroundColor = 'yellow'
})