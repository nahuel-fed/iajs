/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar
     cómo en MDN).
*/



const $botonIngresar = document.querySelector("#ingresar")

$botonIngresar.onclick = function () {
     numeroDelGrupoFamiliar = Number(document.querySelector("#numeroDelGrupoFamiliar").value);
     let nodoPaginaTexto = document.querySelector('body')
     let nuevoDiv = document.createElement("div")
     nuevoDiv.id = "divFamilia"
     nuevoDiv.innerText = 'Ingresá las edades de tus familiares en el siguiente formulario:'
     nodoPaginaTexto.appendChild(nuevoDiv)

     for (i = 1; i <= numeroDelGrupoFamiliar; i++) {
          let nodoPaginaInput = document.querySelector('body')

          let nuevoFormulario = document.createElement("form")

          let nuevoInput = document.createElement("input")
          nuevoInput.id = "inputFamilia"
          nuevoInput.type = 'number'

          let nuevoLabel = document.createElement("label")
          nuevoLabel.innerText = ("Integrante " + i + ': ')

          nodoPaginaInput.appendChild(nuevoFormulario)
          nuevoFormulario.appendChild(nuevoLabel)
          nuevoFormulario.appendChild(nuevoInput)

          if (i == numeroDelGrupoFamiliar) {
               let $botonConfirmar = document.createElement("button")
               $botonConfirmar.id = 'botonConfirmar'
               $botonConfirmar.innerText = 'Confirmar'
               nodoPaginaInput.appendChild($botonConfirmar)
          }

     }


     return false
               if (i == numeroDelGrupoFamiliar) { 
                    let $botonConfirmar = document.createElement("button")
                    $botonConfirmar.id = 'botonConfirmar'
                    $botonConfirmar.innerText = 'Confirmar'
                    nodoPaginaInput.appendChild($botonConfirmar)*/
}


//return false


/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de
cada integrante de la familia que trabaje. Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario
anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/
