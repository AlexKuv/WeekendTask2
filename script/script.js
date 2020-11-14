document.addEventListener('DOMContentLoaded' , () => {
'use strict';


const select = document.getElementById('heroes'),
filter = document.getElementById('filter');
const container = document.querySelector('.container');
const img = document.querySelector('img');
const cards = document.querySelector('.cards');

const request = new XMLHttpRequest();

request.open('GET', './dbHeroes.json');

request.setRequestHeader('Content-type', 'application/json');

request.send();

const renderCard = (item) => {
    img.src = item.photo;
    container.innerHTML = `
    ${item.name} <br>
    ${item.species} <br>
    ${item.gender} <br>
    ${item.status} <br>
    ${item.actors} <br>
    ${item.movies} <br>
    `;
};

request.addEventListener('readystatechange', () => {
    if(request.readyState === 4 && request.status === 200){
      const data = JSON.parse(request.responseText);
      data.forEach((item) => {
        let a = document.createElement('option');
        a.textContent = item.name;
        select.appendChild(a);

      select.addEventListener('change', (event) => {
          let target = event.target;
          if (target.value === item.name){
            renderCard(item);
          } 
         });

      filter.addEventListener('change', (event) => {
        let target = event.target;
        if(item.movies){
          let movies = item.movies;
          movies.filter(elem => {
          if(elem === target.value){
          console.log(item);
         
          }

        });
        }
       
      });

      });
    }
});












});
