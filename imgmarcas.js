class MarcaVehiculos {
    constructor (id, name, img){
        this.id = id
        this.name = name
        this.img = img
    }
}

let marcasV = []

const cargarMarcas = async ()=> {
    const response = await fetch("../marcaspages.json")
    const datos = await response.json()
    console.log(datos)
    for (let marcaVehiculos of datos){
    let marcaNueva = new MarcaVehiculos (marcaVehiculos.id, marcaVehiculos.name, marcaVehiculos.img)
    marcasV.push(marcaNueva)
    }
    let marcas = document.getElementById("marcasVehiculos")
for(let marca of marcasV){
    let marcaNueva = document.createElement("div")
    marcaNueva.innerHTML = `<img src="${marca.img}" alt="">`
    marcas.appendChild(marcaNueva) 
}
}

cargarMarcas()