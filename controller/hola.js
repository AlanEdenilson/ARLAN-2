$(function () {

    
    function enviar(mensaje) {
     $.ajax({
         url: "/chat",
         type: 'POST',
          // URL del script que procesará la petición
         data: {
           mensaje: mensaje,
           
         },
     success: function(data) {
       // Maneja la respuesta del servidor aquí
       console.log(data); 
     },
     error: function(error) {
       // Maneja el error aquí
       console.error("Error:", error);
     }
   });
     
    }

    $('#enviar').on('click',()=>{

    var mensaje= $('#userInput').val()
    console.log(mensaje)

    })
 
})