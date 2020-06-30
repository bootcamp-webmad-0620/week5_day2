// Axios app
const axiosApp = axios.create({
    baseURL: 'https://restcountries.eu/rest/v2'
})


document.querySelector('form').onsubmit = e => {

    // Omitir envío
    e.preventDefault()

    const fieldValue = document.querySelector('input').value

    axiosApp
        .get(`/name/${fieldValue}`)
        .then(response => {
            console.log('La info del país', fieldValue, 'es', response.data)

            const { population, capital } = response.data[0]

            const html = `<p>El país <strong>${fieldValue}</strong> tiene ${population} habitantes y su capital es ${capital}.</p>`
            document.querySelector('#result').innerHTML = html
        })
        .catch(err => {
            let errorText

            err.response.status === 404 ? errorText = `<p style="color: red">El país ${fieldValue} no existe...</p>`
                :
                err.response.status === 500 ? errorText = `Error de servidor`
                    :
                    errorText = `Error desconocido`

            document.querySelector('#result').innerHTML = `<p style="color: red">${errorText}</p>`
        })
}


