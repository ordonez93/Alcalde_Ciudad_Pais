
//variable global para utilizar los datos recorridos en otras funciones
let ciudades = [];

const listarciudaes = async (id_pais) => {
    try {
        const response = await fetch("./ciudades/"+id_pais);
        const data = await response.json();
        if (data.message === "Success") {
        ciudades = data.ciudades;
        let opciones = ``;
        ciudades.forEach((ciudad) => {
            opciones += `<option value='${ciudad.id}'>${ciudad.nombre} </option>`;
        });
        cbociudad.innerHTML = opciones;
        mostrarAlcalde(ciudades[0].id);
        }
    } catch (error) {
        console.log(error);
    }
}

//cargar paises a la lista desplegable
const listarpaises = async () => {
  try {
    const response = await fetch("./paises");
    const data = await response.json();
    if (data.message === "Success") {
      let opciones = ``;
      data.paises.forEach((pais) => {
        opciones += `<option value='${pais.id}'>${pais.nombre} </option>`;
      });
      cbopais.innerHTML = opciones;
      listarciudaes(data.paises[0].id);
    }
  } catch (error) {
    console.log(error);
  }
};

const mostrarAlcalde = (id_ciudad) =>{
    let ciudadelegida = ciudades.filter((ciudad)=>ciudad.id==id_ciudad)[0];
    let alcalde = ciudadelegida.alcalde;
    txtalcalde.innerText = `Alcalde: ${alcalde}`;
}



const cargarinicial = async () => {
  await listarpaises();
  cbopais.addEventListener("change",()=>{
    let id_pais = (cbopais.value);
    listarciudaes(id_pais);
  })

  cbociudad.addEventListener("change",()=>{
    let id_ciudad = (cbociudad.value);
    mostrarAlcalde(id_ciudad);
  });
};

window.addEventListener("load", async () => {
  await cargarinicial();
});
