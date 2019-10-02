function validar(){
    var nombre, apellidos, fono, email, mensaje, expresion;
    nombre = document.getElementById("nombre").value;
    apellidos = document.getElementById("apellidos").value;
    fono = document.getElementById("fono").value;
    email = document.getElementById("email").value;
    mensaje = document.getElementById("mensaje").value;
    expresion = /\w+@\w+\.+[a-z]/;
 
    if(nombre.length == 0 || apellidos.length == 0 || fono.length == 0 || email == 0 || mensaje == 0){
        alert("Todos los campos son obligatorios");
        return false;
    }

    else if (isNaN(fono)){
        alert ("El teléfono ingresado no es un número");
        return false;
    }
    else if (email.length>30){
        alert("El correo es muy largo");
        return false;        
    }
    else if (!expresion.test(email)){
        alert ("El correo no es valido");
        return false
    }
    else if (mensaje.length>300){
        alert("La consulta es demaciado larga");
        return false;

    }
}