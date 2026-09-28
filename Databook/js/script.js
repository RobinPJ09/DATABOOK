// Mensaje para el formulario de inicio de sesión.
    const formLogin = document.getElementById('formLogin');
    const mensajeLogin = document.getElementById('mensajeLogin');

    formLogin.addEventListener('submit', function (evento) {
      evento.preventDefault();

      const usuario = document.getElementById('loginUsuario').value.trim();
      const clave = document.getElementById('loginClave').value.trim();

      if (usuario === '' || clave === '') {
        mostrarMensaje(mensajeLogin, 'Debe completar el usuario y la contraseña.');
        return;
      }

      if (clave.length < 4) {
        mostrarMensaje(mensajeLogin, 'Usuario o contraseña incorrectos.');
        return;
      }

      mostrarMensaje(mensajeLogin, 'Acceso validado correctamente');
    });

    // Validar formulario de registro.
    const formRegistro = document.getElementById('formRegistro');
    const mensajeRegistro = document.getElementById('mensajeRegistro');

    formRegistro.addEventListener('submit', function (evento) {
      evento.preventDefault();

      const nombres = document.getElementById('nombres').value.trim();
      const apellidos = document.getElementById('apellidos').value.trim();
      const cedula = document.getElementById('cedula').value.trim();
      const fecha = document.getElementById('fechaNacimiento').value;
      const correo = document.getElementById('correo').value.trim();
      const clave = document.getElementById('clave').value;

      if (!nombres || !apellidos || !cedula || !fecha || !correo || !clave) {
        mostrarMensaje(mensajeRegistro, 'Debe completar los campos obligatorios.');
        return;
      }

      if (clave.length < 6) {
        mostrarMensaje(mensajeRegistro, 'La contraseña debe tener mínimo 6 caracteres.');
        return;
      }

      mostrarMensaje(mensajeRegistro, 'Usuario registrado correctamente.');
    });

    // Buscador visual de libros.
    const buscador = document.getElementById('buscador');
    const filas = document.querySelectorAll('#tablaLibros tr');

    buscador.addEventListener('input', function () {
      const texto = buscador.value.toLowerCase();

      filas.forEach(function (fila) {
        const contenido = fila.textContent.toLowerCase();
        fila.style.display = contenido.includes(texto) ? '' : 'none';
      });
    });

    // Botón de ejemplo para indicar que la opción existe en el prototipo.
    const nuevoLibro = document.getElementById('nuevoLibro');
    const mensajeCatalogo = document.getElementById('mensajeCatalogo');

    nuevoLibro.addEventListener('click', function () {
      mostrarMensaje(
        mensajeCatalogo,
        'Esta opcion aun no está disponible'
      );
    });

    // Los botones de detalles también funcionan como demostración visual.
    document.querySelectorAll('.accion').forEach(function (boton) {
      boton.addEventListener('click', function () {
        const fila = boton.closest('tr');
        const titulo = fila.children[1].textContent;
        mostrarMensaje(mensajeCatalogo, 'Libro seleccionado: ' + titulo + '.');
      });
    });

    function mostrarMensaje(elemento, texto) {
      elemento.textContent = texto;
      elemento.classList.add('visible');
    }
