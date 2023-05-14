let nombreDigimon = document.getElementById('digiName')
let nivelDigimon = document.getElementById('digiLevel')
let imagenDigimon = document.getElementById('imagen')
let buscadorDigimon = document.getElementById('digimons')

const digiArray = []


function traerDigimons() {

    let url = "https://digimon-api.vercel.app/api/digimon"
    fetch(url).then((response) => response.json())
        .then((digimons) => {
            let selects = ""
            digimons.forEach(digimon => {
                selects += `<option value="${digimon.name}">${digimon.name}</option>`
                digiArray.push(digimon)
            })
            buscadorDigimon.innerHTML += selects

        })
        .catch((error) => {
            alert(error.message)
        })

}

traerDigimons()


function buscar() {
    let nombre = buscadorDigimon.value
    if (nombre != 0) {
        const digimon = digiArray.find(digimon => digimon.name == nombre)
        nombreDigimon.innerText = digimon.name
        nivelDigimon.innerText = digimon.level
        imagenDigimon.setAttribute('src', digimon.img)
        var clientWidth = document.getElementById('contenedor').offsetWidth;
        var clientHeight = document.getElementById('contenedor').offsetHeight;
        console.log(clientHeight)
        console.log(clientWidth)
    } else {
        nombreDigimon.innerText = 'Nombre:'
        nivelDigimon.innerText = 'Nivel:'
        imagenDigimon.setAttribute('src', './assets/img/4-digimon-logo-SVG-betterstudio.com_.svg')
    }

}