'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
//template
function renderCountry(data) {
  const html = `
    <article class="country">
      <img class="country__img" src="${data.flags.png}" alt="Flag of ${
    data.name.common
  }" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          data.population / 1000000
        ).toFixed(1)} million people</p>
        <p class="country__row"><span>🗣️</span>${Object.values(
          data.languages
        ).join(', ')}</p>
        <p class="country__row"><span>💰</span>${
          Object.values(data.currencies)[0].name
        }</p>
      </div>
    </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
}

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => renderCountry(data[0]));
  const neighbour = data[0].borders?.[0];
  if (!neighbour) return;
  fetch(`https://restcountries.com/v3.1/name/${neighbour}`);
};
getCountryData('portugal');
