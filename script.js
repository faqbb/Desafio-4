/*
class Mascota {
 constructor(nombre, edad, raza, horas, dueño) {
    this.nombre = nombre
    this.edad = edad
    this.raza = raza 
    this.horas = parseFloat(horas)
    this.dueño = dueño
 }
}
const mascota1 = new Mascota("Paco", 3, "Bulldog", 8, "Jose Luis")
const mascota2 = new Mascota("Lucia", 5, "Golden", 12, "Maria")
const mascota3 = new Mascota("Milo", 1, "Caniche", 6, "Franco")
const mascota4 = new Mascota("Keyla", 2, "Dalmata", 4, "Carlos")
const mascota5= new Mascota("Nono", 7, "Silvestre", 3, "Maximo")
function total (horas) {
    if (horas => 8) {
        return horas * 100 + 200
    }
    else {
        return horas * 100
    }
}
const mascotas = [mascota1, mascota2, mascota3, mascota4, mascota5]

 let nombrem = prompt('Ingrese su nombre')
const buscado = mascotas.find(mascota => mascota.dueño === nombrem)
console.log(buscado)
    if (buscado === undefined) {
        console.log("Usted no tiene mascotas en nuestra guarderia")
        }
    else {
        alert("Hola "+ buscado.dueño + ", ya puede retirar a su perro/a, " + buscado.nombre + " el/la " + buscado.raza + " estuvo un total de " + buscado.horas + " horas con nosotros, por lo que usted debe " + total(buscado.horas) + " pesos")
        }
    
*/
let registrarse = document.getElementById('register')
let transicionUser = document.getElementById('fila')
        registrarse.addEventListener('submit', (e) => {
            e.preventDefault()
            let nombre = document.getElementById('name')
            let nombremascota = document.getElementById('petname')
            let raza = document.getElementById('race')
            let edad = document.getElementById('age')
            /*console.log(`${nombre.value} ${nombremascota.value} ${raza.value} ${edad.value}`)*/  
            if (nombre.value   == "" || nombremascota.value  == "" || raza.value  == "" || edad.value  == "") {
                transicionUser.innerHTML =
                `<div class="alert alert-danger mt-5 text-center" role="alert">
                        Hubo un error con los datos, por favor verifíquelos.
                </div>
                <div class="text-center">
                    <input type="button" value="Actualizar la pagina"  class= "btn btn-secondary col-lg-4" onClick="document.location.reload(true)">
                </div>`
            }
            else { 
                    transicionUser.innerHTML = `
                    <div class="alert alert-success mt-5 text-center" role="alert">
                        ¡Felicitaciones! logró registrarse con éxito.
                    </div>
                    <div>  
                        <div class="card">
                            <div class="card-header">Dueño registrado</div>
                            <div class="card-body">
                                <h5 class="card-title">${nombre.value}</h5>
                                <p class="card-text">${raza.value} llamado/a ${nombremascota.value} de ${edad.value} años</p>
                            </div>
                        </div>
                    </div>`
                }  
        })
            
