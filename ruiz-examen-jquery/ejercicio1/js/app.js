function validar(){
    var nombre = document.forms["registro"]["nombre"];
    var apellido = document.forms["registro"]["apellido"];
    var nacimiento = document.forms["registro"]["nacimiento"];
    var resultado = document.getElementById("resultado");
    if(nombre.value==""){
        alert("El campo nombre está vacío");
        return false;
    } else if(email.value==""){
        alert("El campo E-mail está vacío");
        return false;
    } else if(email.value=="admin@sagradoc.es"){
        alert("Este email ya está registrado");
        return false;
    } else {
        resultado.innerHTML="<p>Formulario enviado</p>";
        return false;
    }
}