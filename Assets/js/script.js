function jugar(seleccionUsuario) {
    let eleccionJuego = Math.floor(Math.random() * 3);
    let eleccionJuegoTexto = '';
    if (eleccionJuego == 0) {
        eleccionJuegoTexto = 'piedra';
        }
    
    if (eleccionJuego == 1) {
        eleccionJuegoTexto = 'papel';
        }
      
    if (eleccionJuego == 2) {
        eleccionJuegoTexto = 'tijera';
    }

    var resultado = determinarGanador(seleccionUsuario, eleccionJuegoTexto);
    document.getElementById('resultado').innerHTML =
      'Tu seleccionaste: ' +
      seleccionUsuario +
      '.<br>La computadora selecciono: ' +
      eleccionJuegoTexto +
      '.<br>' +
      resultado;
  }
  
  function determinarGanador(usuario, juego) {
    if (usuario === juego) {
      return '<h1>Casi: <strong>Es un empate!!</strong></h1>';
    }

    if (
      (usuario === 'piedra' && juego === 'tijera') ||
      (usuario === 'papel' && juego === 'piedra') ||
      (usuario === 'tijera' && juego === 'papel')
    ) {
      return '<h1>Felicitaciones: <strong>Ganaste!</strong></h1>';
    } else {
      return '<h1>Mala Suerte: <strong>Perdiste!</strong></h1>';
    }
  }









    // Variables, ciclos, condicionales y funciones.