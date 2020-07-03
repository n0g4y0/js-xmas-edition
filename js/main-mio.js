//const $form = document.querySelector('#carta-a-santa');

// las siguientes 3 lineas son equivalentes:

//nombre = document.querySelector('[name=nombre]')value;

//nombre = document.querySelector('#nombre').value;

//pero usaremos la siguiente porque es mas simple, y hace lo mismo.


//const nombre = $form.nombre.value;

//const ciudad = $form.ciudad.value;

//const comportamiento = $form.comportamiento.value;

// si la variable tiene un guion, se lo llama asi:
 //const descripcionRegalo = $form['descripcion-regalo'].value;
// pero mejor evitarnos esa linea demas con lo siguiente que tambien es equivalente: 
//const descripcionRegalo = $form.descripcionRegalo.value;

//console.log(nombre);
//console.log(ciudad);
//console.log(comportamiento);
//console.log(descripcionRegalo);


function validarNombre(nombre){
    if(nombre.length === 0){
        return 'Este campo debe tener al menos 1 caracter';
    }

    if(nombre.length >= 50){
        return 'Este campo debe tener menos de 50 caracteres';
    }

    // haciendo expresiones regulares:
    if(!/^[a-z]+$/i.test(nombre)){
        return "el campo nombre solo acepta letras";
    }


    return '';
}

function validarCiudad(nombreCiudad){


    if(nombreCiudad.length === 0 ){
        return 'el campo ciudad no puede estar vacio';
    }

    return '';

}

function validarDescripcionRegalo(descripcionRegalo){

    if (descripcionRegalo.length >= 100){
        return 'el campo descripcion es muy largo';
    }

    if(descripcionRegalo.length === 0){
        return 'el campo descripcion no puede estar vacio';

    // /[a-z0-9,\._ ]/ -> acepta todo, numeros, letras, puntos, espacios, etc.

    }else if(!/^[a-z0-9]+$/i.test(descripcionRegalo)){
        return 'el campo descripcion solo puede tener numeros y letras'
    }else{
        return '';
    }

}

function validarFormulario(event){
    const $form = document.querySelector("#carta-a-santa");

    const nombre = $form.nombre.value;
    const ciudad = $form.ciudad.value;
    const descripcionRegalo = $form["descripcion-regalo"].value;


    const errorNombre = validarNombre(nombre);
    const errorCiudad = validarCiudad(ciudad);
    const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);

    const errores = {
        nombre: errorNombre,
        ciudad: errorCiudad,
        'descripcion-regalo': errorDescripcionRegalo
    };

    

     const esExito = manejarErrores(errores) === 0;

     if(esExito){
         $form.className = 'oculto';
         document.querySelector("#exito").className = '';

        setTimeout(function(){

            let $listaDeseos = document.querySelector("#listaDeseos");
            window.location =  $listaDeseos.href; 
            console.log("enviado")} ,5000);
     }

    event.preventDefault();
}

function manejarErrores(errores){

    const keys = Object.keys(errores);
    const $errores = document.querySelector("#errores");
    console.log($errores);


    $errores.innerText = ''; // borra todo lo que hay dentro de errores.

    console.log($errores);

    //$errores.firstChild.remove();


    let cantidadErrores = 0;


    keys.forEach(function(key){
        const error = errores[key];

        if(error){
            
            cantidadErrores++;
            $form[key].className = "error";

            const $error = document.createElement('li');
            $error.className = "lineaDeError";
            $error.innerText = error;  //<li> dsadsadasd</li>


            $errores.appendChild($error);
        }
        else{
            
            
            
            $form[key].className = "";
        }


    });

    return cantidadErrores;
}

    const $form = document.querySelector("#carta-a-santa");
    $form.onsubmit = validarFormulario;




