function probarValidarNombre() {

    //casos negativos

  console.assert(
      validarNombre('') === 'Este campo debe tener al menos 1 caracter',
      'Validar nombre no validó que el nombre no sea vacío',
  );

  console.assert(
      validarNombre(
          '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
      'Este campo debe tener menos de 50 caracteres',
      'Validar nombre no validó que el nombre sea menor a 50 caracteres',
  );

    console.assert(
        validarNombre("asasas12121") === "el campo nombre solo acepta letras",
        "validar nombre no valido que el nombre solo tenga letras"
    );



        //casos positivos

    console.assert(
        validarNombre("jhosmar") === '',
        "validar nombre fallo con un nombre valido"
    );


}

function probarValidarCiudad(){
    console.assert(
        validarCiudad(
            'Buenos Aires') === '',
            'Validar ciudad no funciono con un nombre de ciudad valido'
    );

    console.assert(
        validarCiudad('') === 'el campo ciudad no puede estar vacio',
        'validar ciudad no mostro un error, cuando la ciudad es vacia'
    );
}

function probarValidarDescripcionRegalo(){

    console.assert(
        validarDescripcionRegalo('') === 'el campo descripcion no puede estar vacio',
        'la funcion validar descripcion regalo no valido que el campo no este vacio',
    );

    console.assert(
        validarDescripcionRegalo('sadsadsadassadasdfdgtrhrthbgfbvbvcbbvbnhgnhgnghsadsadsadassadasdfdgtrhrthbgfbvbvcbbvbnhgnhgnghsadsadsadassadasdfdgtrhrthbgfbvbvcbbvbnhgnhgngh') === 'el campo descripcion es muy largo',
        "la funcion validar descripcion regalo no valido que el campo sea muy largo"
    );

    console.assert(
        validarDescripcionRegalo('Regalo') === '',
        "la funcion validar descripcion regalo no funciono con una descripcion correcta"
    );

    console.assert(
        validarDescripcionRegalo(",.....,,") === 'el campo descripcion solo puede tener numeros y letras',
        "la funcion validar descripcion regalo no valido que fueran solo numeros y letras."
    );

}


probarValidarNombre();
probarValidarCiudad();
probarValidarDescripcionRegalo();

