const loadCountry = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => dispalyCountry(data))
}

const dispalyCountry = countris => {
    // for(const countris of country){
    //     console.log(countris);
    // }

    const countrisContainer = document.getElementById('country-conatiner');
    countris.forEach(country => {
        console.log(country);
        const countryDiv = document.createElement('div');
        countrisContainer.classList.add('country-style')
        countryDiv.classList.add('per-country')
        countryDiv.innerHTML = `
        <h3>Name: ${country.name.common} </h3>
        <p>Capital: ${country.capital ? country.capital[0] : 'No Capital'} </p>
        <button onclick="loadCountryDetails('${country.cca2}')">Details</button>
        `;
        countrisContainer.appendChild(countryDiv)
    });
}

const loadCountryDetails = (code) => {
   
    const url = `https://restcountries.com/v3.1/alpha/${code}`;
    
    // console.log('get contry code: ', url);

    fetch(url)
    .then(res => res.json())
    .then(data => dispalyCountryDetails(data[0]))

};

const dispalyCountryDetails = country =>{
    // console.log(country);
    const countryDetails = document.getElementById('country-details');
    countryDetails.innerHTML =  `
    <h3>Details: ${country.name.common} </h3>
    <img src="${country.flags.png}">
    `;
}

loadCountry();