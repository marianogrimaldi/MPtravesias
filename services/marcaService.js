const getMarcas = async () => {
    debugger;
    const response = await fetch("../marcas.json");
    const datos = await response.json();

    return datos;
}
