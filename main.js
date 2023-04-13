
let obj = undefined; //por qué pone undefined???

//No pude hacerlo con #marca, intenté con un getter pero no puedo 

let color = document.querySelector(`[name="color"]`);
let dimension = document.querySelector(`[name="dimension"]`);
let marcas = document.querySelectorAll(`[name="marca"]`);
let borrador = document.querySelectorAll(`[name="borrador"]`);
let material = document.querySelectorAll(`[name="material"]`);
let columna = document.querySelectorAll(`.columna`);
let tbody = document.querySelector(`#cuerpoTabla`)


class lapiz {
    #marca // me había faltado poner esto acá, por eso no funcionaba.
    constructor({ color = "#fff700",
        dimension = 19,
        marca = "Mongo",
        borrador = "Tiene",
        material = "Madera",
    }) {
        this.color = color;
        this.dimension = dimension;
        this.#marca = marca;
        this.borrador = borrador;
        this.material = material;
    }
    obtener(datos) {
        this.color = datos.color;
        this.#marca = datos.marca;
        this.material = datos.material;
        this.borrador = datos.borrador;
        this.dimension = datos.dimension;
    }
    getMarca(){return this.#marca};
}
addEventListener("DOMContentLoaded", (e) => {
    let obj = new lapiz({});
    color.value = obj.color;
    dimension.value = obj.dimension;
    const marcaPorDefecto = Array.from(marcas).find(marca => marca.value === obj.getMarca());//Crea un array con el nodelist de marcas creado arriba (con array.from), luego busca en ese array el elemento cuyo valor sea igual a la marca del objeto por defecto, y crea 
    if (marcaPorDefecto) { //si existe marcaPorDefecto, entonces la tilda.
        marcaPorDefecto.checked = true;
    }
    const borradorPorDefecto = Array.from(borrador).find(borrador => borrador.value === obj.borrador);
    if (borradorPorDefecto) {
        borradorPorDefecto.checked = true;
    }
    const materialPorDefecto = Array.from(material).find(material => material.value === obj.material);
    if (materialPorDefecto) {
        materialPorDefecto.checked = true;
    }
})


formulario.addEventListener("submit", (e) => {
    let obj = new lapiz({});
    e.preventDefault();
    let data = Object.fromEntries(new FormData(formulario));
    obj.obtener(data);
    console.log(data);

    let fila = document.createElement(`tr`);
    columna.forEach(element => {
        let columnitas = document.createElement(`td`);
        for (const dato in data) {
            if (dato == element.id) {
                if (dato=="color"){
                    console.log(`el dato es color: ${obj.color}`)
                    columnitas.style.backgroundColor=obj.color}
                else {
                columnitas.innerText = (data[dato])}
            };
        }
        fila.appendChild(columnitas)
    })
    tbody.appendChild(fila);
}
)



