const dresses = document.getElementById('dress-container')
const h3 = document.createElement('h3')
h3.innerText = "My Dresses"
dresses.appendChild(h3)

const ol = document.createElement('ol')
const li1 = document.createElement('li')
li1.innerText = 'T-Shirt'
ol.appendChild(li1)

const li2 = document.createElement('li')
li2.innerText = 'Shirt'
ol.appendChild(li2)

dresses.appendChild(ol)


const accessories = document.createElement('section')
accessories.innerHTML = `
<h3>My Accessories</h3>
<ol>
    <li>Umbrela</li>
    <li>Water Bottle</li>
    <li>Knife</li>
    <li>Watch</li>
</ol>
`
dresses.appendChild(accessories)