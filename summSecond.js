console.log("Second JS file")

const thirdList = document.getElementById('third-list');

const li = document.createElement('li')
li.innerText = 'Dynamic list Item'

thirdList.appendChild(li);

const main = document.getElementById('main-container');
const section4th = document.createElement('section')

section4th.innerHTML = `
    <h1>Dynamic Section</h1>
    <ul>
        <li>DM list item-1</li>
        <li>DM list item-2</li>
        <li>DM list item-3</li>
    </ul>
`

main.appendChild(section4th)