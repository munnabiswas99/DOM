const liCollections = document.getElementsByTagName('li');
for(const li of liCollections){
    console.log(li.innerText);
}

const title = document.getElementById('fruitsTitle')
console.log(title.innerText)

const fruits = document.getElementsByClassName('fruits')
for(fruit of fruits){
    console.log(fruit.innerText)
}

const movies = document.querySelectorAll('movie-container li')
for(movie of movies){
    console.log(movie.innerText)
}

const headers = document.querySelectorAll('h4');
for(header of headers){
    header.style.backgroundColor = 'yellow'
    header.style.border = "5px solid green"
    header.style.borderRadius = '15px'
    header.style.padding = '10px'
}