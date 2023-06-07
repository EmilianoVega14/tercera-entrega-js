// ACA CREO UN FORMULARIO PARA OBTENER LOS DATOS DE LOS NUEVOS PROMOTORES
const formularioContainer = document.getElementById('formularioContainer');

formularioContainer.innerHTML = `
  <form id="miFormulario">
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" required><br>

    <label for="apellido">Apellido:</label>
    <input type="text" id="apellido" required><br>

    <label for="email">Email:</label>
    <input type="email" id="email" required><br>

    <button type="submit">Submit</button>
  </form>
`;

// ACA CREO UN CONSTRUCTOR PARA EL FORMULARIO

class nuevoPromotor {
  constructor(nombre, apellido, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
  }
}

const formulario = document.getElementById('miFormulario');
const promotores = [];

formulario.addEventListener('submit', function(e) {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const email = document.getElementById('email').value;

  const nuevo = new nuevoPromotor(nombre, apellido, email);
  promotores.push(nuevo);

  formulario.reset();

  console.log(promotores);

  // Creo un elemento div para los datos
  const datosDiv = document.createElement('div');

  // Agregar los datos y estilos al div
  datosDiv.innerHTML = `
    <p>Nombre:${nombre}</p>
    <p>Apellido:${apellido}</p>
    <p>Email:${email}</p>
  `;
  datosDiv.style.border = '1px solid black';
  datosDiv.style.width = '250px';
  datosDiv.style.padding = '10px';
  datosDiv.style.marginBottom = '10px';

  // Agregar datosDiv al formularioContainer
  formularioContainer.appendChild(datosDiv);

  

// main js nuevos modelos

// Obtener los datos del localStorage
const promotoresData = localStorage.getItem('promotores');
const promotoresJson = JSON.parse(promotoresData);

// Obtener el contenedor de datos
const datosContainer = document.getElementById('datosContainer');

// Recorrer los promotores y agregar los datos al contenedor
promotoresJson.forEach(promotor => {
  const datosDiv = document.createElement('div');

  datosDiv.innerHTML = `
    <p><strong>Nombre:</strong> ${promotor.nombre}</p>
    <p><strong>Apellido:</strong> ${promotor.apellido}</p>
    <p><strong>Email:</strong> ${promotor.email}</p>
  `;
  datosDiv.style.border = '1px solid black';
  datosDiv.style.padding = '10px';
  datosDiv.style.marginBottom = '10px';

  datosContainer.appendChild(datosDiv);

});

// Guardar los datos en el localStorage
localStorage.setItem('promotores', JSON.stringify(promotores));
});

