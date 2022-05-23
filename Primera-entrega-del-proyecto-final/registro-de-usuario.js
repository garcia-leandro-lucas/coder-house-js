/* Login de Usuario para el registro a la página */
let registro_de_usuario = confirm("Desea registrarse en nuestro sitio");

if(registro_de_usuario) {

    let nombre = prompt("Ingrese su nombre:");
    let apellido = prompt("Ingrese su apellido:");
    let dni = prompt("Ingrese su D.N.I.:");
    let localidad = prompt("Ingrese su localidad:");
    let fecha_de_nacimiento = prompt("Ingrese su fecha de nacimiento:");
    let genero = prompt("Ingrese su género:");
    let email = prompt("Ingrese su email:");
    let contrasenia = prompt("Ingrese su contraseña:");
    let confirmacion_de_contrasenia = prompt("Ingrese nuevamente su contraseña:");

    if ( es_valido_dato(nombre) && es_valido_dato(apellido) && es_valido_dato(dni) && es_valido_dato(localidad) && es_valido_dato(fecha_de_nacimiento) && es_valido_dato(genero) && es_valido_dato(email) && es_valido_dato(contrasenia) && es_valido_dato(confirmacion_de_contrasenia)) {
            
            pedido_de_contraseña(contrasenia, confirmacion_de_contrasenia);
            // console.log("Aca llega el cod");
            let nuevo_usuario = new Usuario(nombre, apellido, dni, localidad, fecha_de_nacimiento, genero, email, contrasenia, confirmacion_de_contrasenia);
            let validacion_de_datos_usuario = mensaje_de_confirmacion(nuevo_usuario);
            let check = true;

            while(check){

                if(validacion_de_datos_usuario) {
                    nuevo_usuario.mostrar_bienvenida();
                    console.log(nuevo_usuario);
                    check = false;
                    
                }else {
                    
                    let datos = parseInt(prompt("¿Qué datos quisieras modificar?\nPor favor, seleccione un número según corresponda la opción a modificar:\n1) Nombre\n2) Apellido\n3) D.N.I.\n4) Localidad\n5) Fecha de nacimiento\n6) Género\n7) Email\n8) Ninguno. Los datos estan correctos."));
    
                    switch(datos){
                        case 1:
                            let nombre = prompt("Ingrese su nombre:");
                            nuevo_usuario.nombre = nombre;
                            break;
                        
                        case 2:
                            let apellido = prompt("Ingrese su apellido:");
                            nuevo_usuario.apellido = apellido;
                            break;
                        
                        case 3:
                            let dni = prompt("Ingrese su D.N.I.::");
                            nuevo_usuario.dni = dni;
                            break;
    
                        case 4:
                            let localidad = prompt("Ingrese su localidad:");
                            nuevo_usuario.localidad = localidad;
                            break;
    
                        case 5:
                            let fecha_de_nacimiento = prompt("Ingrese su fecha de nacimiento:");
                            nuevo_usuario.fecha_de_nacimiento = fecha_de_nacimiento;
                            break;
    
                        case 6:
                            let genero = prompt("Ingrese su género:");
                            nuevo_usuario.genero = genero;
                            break;
    
                        case 7:
                            let email = prompt("Ingrese su género:");
                            nuevo_usuario.email = email;
                            break;
                        
                        case 8:
                            validacion_de_datos_usuario = true;
                            nuevo_usuario.mostrar_bienvenida();
                            console.log(nuevo_usuario);
                            break
                    }

                    validacion_de_datos_usuario = mensaje_de_confirmacion(nuevo_usuario);
                }

            }
    }else {
        alert("Por favor, debés completar todos los datos que estan solicitados en el formulario");
    }
}


/* 
 * Mensaje de corroboración por parte del usuario.
 * true: si los datos corrobarados por el usuario son correctos.
 * false: si los datos corrobarados por el usuario son incorrectos.
 *
*/
function mensaje_de_confirmacion(usuario){

    let mensaje = "";
    
    mensaje = `${mensaje} Por favor, corroborar que los datos ingresados son correctos:`;
    mensaje = `${mensaje} \n Nombre: ${usuario.nombre}`;
    mensaje = `${mensaje} \n Apellido: ${usuario.apellido}`;
    mensaje = `${mensaje} \n D.N.I.: ${usuario.dni}`;
    mensaje = `${mensaje} \n Localidad: ${usuario.localidad}`;
    mensaje = `${mensaje} \n Fecha de Nacimiento: ${usuario.fecha_de_nacimiento}`;
    mensaje = `${mensaje} \n Género: ${usuario.genero}`;
    mensaje = `${mensaje} \n E-mail: ${usuario.email}`;

    let confirmacion = confirm(mensaje);
    return confirmacion
    
}

/* 
 * Valida true o false si los campos a llenar por el usuario esta completados.
 * true: si hay algo dentro del campo.
 * false: si no hay nada en el campo.
 *
*/
function es_valido_dato(dato_ingresados) {

    let datos = true;

    if( !dato_ingresados || dato_ingresados == "" ) {
        datos = false;
        return datos;
    }

    return datos;
}


function es_valida_las_contrasenias(contrasenia, confirmacion_de_contrasenia) {
    return contrasenia === confirmacion_de_contrasenia;
}


function pedido_de_contraseña(contrasenia, confirmacion_de_contrasenia) {
    while( !es_valida_las_contrasenias(contrasenia, confirmacion_de_contrasenia) ) {
        alert("Por favor, asegurese de que las contraseñas sean iguales!!")
        contrasenia = prompt("Ingrese su contraseña:");
        confirmacion_de_contrasenia = prompt("Ingrese nuevamente su contraseña:");
    }
}