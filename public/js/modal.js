window.onload = function() {
    // Obtenemos el botón y el modal
    var btn = document.getElementById("myBtn");
    var modal = document.getElementById("myModal");
  
    // Mostramos y ocultamos el modal al hacer clic en el botón
    btn.onclick = function() {
      modal.style.display = "block";
    }
  
    // Ocultamos el modal al hacer clic en el botón de cerrar
    modal.getElementsByClassName("close")[0].onclick = function() {
      modal.style.display = "none";
    }

    
  
    // Ocultamos el modal al hacer clic fuera del modal
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
    
  };


//Calendar
const hoy = new Date();
const dia = hoy.getDate();
const mes = hoy.getMonth() + 1; // los meses en JavaScript van de 0 a 11
const año = hoy.getFullYear();

const fecha_actual = `${año}-${mes.toString().padStart(2, '0')}-${dia.toString().padStart(2, '0')}`;

document.getElementById('fecha_actual').value = fecha_actual;