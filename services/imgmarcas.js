class MarcaVehiculos {
  constructor(id, name, img, url, principal) {
    this.id = id;
    this.name = name;
    this.img = img;
    this.url = url;
    this.principal = principal;
  }
}

let marcasV = [];

const cargarMarcas = async () => {
  const response = await fetch("../marcaspages.json ");
  const datos = await response.json();
  console.log(datos);
  for (let marcaVehiculos of datos) {
    let marcaNueva = new MarcaVehiculos(marcaVehiculos.id, marcaVehiculos.name, marcaVehiculos.img, marcaVehiculos.url, marcaVehiculos.principal);
    marcasV.push(marcaNueva);
  }
  let marcas = document.getElementById("marcasVehiculos");

  //Para qué esta segunda iteración, si a esto ya lo podés hacer en el bucle de arriba?
  for (let marca of marcasV) {
    let marcaNueva = document.createElement("div");
    marcaNueva.innerHTML = `<a href="${marca.url}" ${marca.principal?"class='principal'":""}"target="blank_"><img src="${marca.img} " alt=" " /> </a>`;
    marcas.appendChild(marcaNueva);
  }
};

cargarMarcas();
