import './setupCats';

const rootElement = document.getElementById('root');

const header = document.createElement('h1');
header.innerHTML = 'Hello world!';
rootElement.appendChild(header);

const catsElement = document.getElementById('cats');
const cats = document.createElement('img');
cats.setAttribute('src', 'https://lorempixel.com/150/150/cats/');
cats.classList.add('koti');
catsElement.appendChild(cats);
