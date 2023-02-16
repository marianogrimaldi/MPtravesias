class MarcaVehiculos {
    constructor (id, name, img){
        this.id = id
        this.name = name
        this.img = img
    }
}

let marcasV = []

let marcas = document.getElementById("marcasVehiculos")
for(let marca of marcasV){
    let marcaNueva = document.createElement("div")
    marcaNueva.innerHTML = `<a href="https://www.icasamotos.com.ar/" 
    target="_blank"><img src="${marca.img}" alt=""></a>`
    marcas.appendChild(marcaNueva)
    
}


const cargarMarcas = async ()=> {
    const response = await fetch("marcas.json")
    const datos = await response.json()
    console.log(datos)
    for (let marcaVehiculos of datos){
    let marcaNueva = new MarcaVehiculos (marcaVehiculos.id, marcaVehiculos.name, marcaVehiculos.img)
    marcasV.push(marcaNueva)
    }
}

cargarMarcas()