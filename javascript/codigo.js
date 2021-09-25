
checkPassword = function(){
    var contrasena = document.getElementById("contra").value;
    if (contrasena.length < 4) {
        alert("La contraseña debe poseer al menos 4 caracteres");
        return("too_short");
    }
    
    redireccion()
    
    
}

redireccion = function() {
    this.location = "paginaPrincipal.html";
}

function validaNumericos(event) {
    if(event.charCode >= 48 && event.charCode <= 57){
        return true;
    }
    return false;        
}

document.getElementById("botonaco").addEventListener("click", (ev)=>{
    ev.preventDefault()
    checkPassword()
})

var getUser = function(){
    var name = document.getElementById("usuario").value;
    console.log(name);
}