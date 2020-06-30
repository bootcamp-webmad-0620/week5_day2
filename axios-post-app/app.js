// Axios app
const axiosApp = axios.create({
    baseURL: 'https://ih-crud-api.herokuapp.com/'
})


// Petición inicial de personajes
updateCharacters()


// Formulario nuevo personaje
document.querySelector('#newCharacter').onsubmit = e => {

    e.preventDefault()

    const inpunts = document.querySelectorAll('#newCharacter input')

    const character = {
        name: inpunts[0].value,
        occupation: inpunts[1].value,
        weapon: inpunts[2].value
    }

    axiosApp
        .post('/characters', character)
        .then(() => updateCharacters())
        .catch(err => console.log('err', err))
}


// Forulario de ID para edición de personaje
document.querySelector('#charaterId').onsubmit = e => {

    e.preventDefault()

    const id = document.querySelector('#charaterId input').value

    axiosApp
        .get(`/characters/${id}`)
        .then(response => fillEditForm(response.data))
        .catch(err => console.log('err', err))
}


// Relleno de formulario de edición
function fillEditForm(data) {

    document.querySelector('#characterEdit').style.display = 'block'

    const inputs = document.querySelectorAll('#characterEdit input')

    inputs[0].value = data.name
    inputs[1].value = data.occupation
    inputs[2].value = data.weapon
}


// Envío de formulario de edición
document.querySelector('#characterEdit').onsubmit = e => {

    e.preventDefault()

    const id = document.querySelector('#charaterId input').value

    const inpunts = document.querySelectorAll('#characterEdit input')
    const newCharacterData = {
        name: inpunts[0].value,
        occupation: inpunts[1].value,
        weapon: inpunts[2].value
    }

    axiosApp.put(`/characters/${id}`, newCharacterData)
        .then(() => {
            e.target.style.display = 'none'     // el target de un evento es el objeto que ha recibido el evento
            // document.querySelector('#characterEdit').style.display = 'none'

            updateCharacters()
        })
        .catch(err => console.log('err', err))
}


// Función de impresión de personajes
function updateCharacters() {

    axiosApp.get('/characters')
        .then(response => {

            let listHtml = ''
            response.data.forEach(elm => listHtml += `<li>${elm.name}</li>`)
            document.querySelector('#list').innerHTML = listHtml

            document.querySelector('#newCharacter').reset()
        })
        .catch(err => console.log('err', err))
}