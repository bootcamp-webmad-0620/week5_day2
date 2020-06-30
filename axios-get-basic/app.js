// axios.get('https://restcountries.eu/rest/v2/lang/es')
//     .then(response => console.log('La respuesta del servidor es:', response))
//     .catch(err => console.log(err))



// Axios app
const axiosApp = axios.create({
    baseURL: 'https://restcountries.eu/rest/v2'
})

// Axios get call
axiosApp.get('/lang/es')
    .then(response => {
        let results = '<ul>'
        response.data.forEach(elm => results += `<li>${elm.name}</li>`)
        results += '</ul>'

        document.querySelector('#result').innerHTML = results
    })
    .catch(err => console.log(err))


// Additional get calls
axiosApp.get('/currency/eur')
    .then(response => console.log('Países del euro:', response.data))
    .catch(err => console.log(err))


axiosApp.get('name/spain')
    .then(response => console.log('Info de españa:', response.data))
    .catch(err => console.log(err))