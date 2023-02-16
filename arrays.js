class marcaVehiculos {
    constructor (id, name, img){
        this.id = id
        this.name = name
        this.img = img
    }
}



let marcas = document.getElementById("marcasVehiculos")




let marcasV = []

const cargarMarcas = async ()=> {
    const response = await fetch("marcas.json")
    const datos = await response.json()
    console.log(datos)
    for (let marcaVehiculos of datos){
    let marcaNueva = new marcaVehiculos (marcaVehiculos.id, marcaVehiculos.name, marcaVehiculos.img)
    marcasV.push(marcaNueva)
    }
}

cargarMarcas()