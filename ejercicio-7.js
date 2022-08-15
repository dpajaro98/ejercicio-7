const datos = {
    nombre: "Darien",
    apellido: "Pajaro",
    edad: 23,
    altura: 175,
    eresDesarrollador: true
}

const edad = datos.edad
const lista = [
    {
        ...datos
    },{
        nombre: "Jason",
        apellido: "Amador",
        edad: 25,
        altura: 180,
        eresDesarrollador: false
    },{
        nombre: "Jesus",
        apellido: "Casas",
        edad: 24,
        altura: 170,
        eresDesarrollador: false
    }
]

const listaOrdenada = lista.sort((a, b) => b.edad - a.edad)

console.log(listaOrdenada)