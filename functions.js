let editando = false;

function transformarEnEditable(nodo) {
  if (editando == false) {
    let nodoTd = nodo.parentNode;
    let nodoTr = nodoTd.parentNode;
    let nodoContenedorForm = document.getElementById('contenedorForm');
    let nodosEnTr = nodoTr.getElementsByTagName('td');

    let alimento = nodosEnTr[0].textContent;
    let calorias = nodosEnTr[1].textContent;
    let grasas = nodosEnTr[2].textContent;
    let proteina = nodosEnTr[3].textContent;
    let carbohidratos = nodosEnTr[4].textContent;
    let opciones = nodosEnTr[5].textContent;

    let nuevoCodigoHtml = '<td><input type="text" id="alimento" value="' + alimento + '" size="10"></td>' +
      '<td><input type="text" id="calorias" value="' + calorias + '" size="5"></td>' +
      '<td><input type="text" id="grasas" value="' + grasas + '" size="5"></td>' +
      '<td><input type="text" id="proteina" value="' + proteina + '" size="5"></td>' +
      '<td><input type="text" id="carbohidratos" value="' + carbohidratos + '" size="5"></td>' +
      '<td>En edición</td>';

    nodoTr.innerHTML = nuevoCodigoHtml;
    nodoContenedorForm.innerHTML = 'Pulse Aceptar para guardar los cambios o cancelar para anularlos' +
      '<form name="formulario" action="http://aprenderaprogramar.com" method="get" onsubmit="capturarEnvio(event)" onreset="anular()">' +
      '<input class="boton" type="submit" value="Aceptar"> <input class="boton" type="reset" value="Cancelar">';// a editar

    editando = true;
  } else {
    alert("Solo se puede editar una línea. Recargue la página para poder editar otra");
  }
}

function capturarEnvio(event) {
  event.preventDefault(); // Evita que la página se recargue

  let inputs = document.querySelectorAll('input[type="text"]');
  let valores = Array.from(inputs).map(input => input.value);
  console.log("Valores capturados:", valores);

  editando = false;
}

function anular() {
  editando = false;
}