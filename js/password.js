function show_passaword(){

    var senha = document.getElementById("i_senha");

    if(senha.type === "password"){
        senha.type = "text";
    }else{
        senha.type = "password";
    }
}