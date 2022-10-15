//ubicar los elementos en el dom
const formulario = document.querySelector('#formulario');
// campos de texto para el usuario
const nombre = document.querySelector('input[name="nombre"]');
const email =document.querySelector('input[name= "email"]');
const comentarios =document.querySelector('textarea[name="message"]');
const apellido = document.querySelector('input[name="apellido"]');

//span para mensajes de validacion 
const txtNombre = document.querySelector('#txtNombre');
const txtEmail = document.querySelector('#txtEmail');
const txtComentarios = document.querySelector('#txtComentarios');
const txtApellido =document.querySelector('#txtApellido');

//funcion de validacion 
formulario.addEventListener(
    'submit', //para formulario el evento no es click
    function (evento)
    {        
        borrarMensajes();

        let check = true ;

        //validamos el dato en el campo nombre
        let datoNombre = nombre.value ;
        if (checkVacio(datoNombre)){
            check = false ;
            txtNombre.innerText = 'Complete el campo nombre'
        }
        //validamos el dato en el campo apellido
        
        let datoApellido = apellido.value ;
        if (checkVacio(datoApellido)){
            check = false ;
            txtApellido.innerText = 'Complete el campo apellido'
        }

       //validamos el dato email 
       let datoEmail = email.value;
       if ( !validarEmail(datoEmail)) {
        check =false;
        txtEmail.innerText = 'Complete el campo email'
       }

       // validamos el dato de comentarios 
       let datoComentarios =comentarios.value ;
       if (checkVacio(datoComentarios) || datoComentarios.length < 6){
        check = false ;
        txtComentarios.innerText = 'Complete el campo Comentarios';
       }

       /*si llega hasta aca  con flag con true check */
        //es que paso las pruebas
        //enviamos el form

        if (!check){
            evento.preventDefault(); //evitamos el envio
            
        }

    }

    
);

function checkVacio (dato)
{
    if (dato.length == 0 || dato == null ){ // dato=' ' tbn para vacio
        return true;
    }
    return false; 
}

function validarEmail (email) {
    let exp = /\S+@\S+\.\S+/; //expresion regular 
    return exp.test(email);
}

function borrarMensajes()
{
    txtNombre.innerText = '';
    txtEmail.innerText = '' ;
    txtComentarios.innerText = '';
    txtApellido.innerText = '' ;
}