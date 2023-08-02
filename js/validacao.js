function validacao(){
    
   let nome = document.getElementById("i_nome");
   let sobrenome = document.getElementById("i_sobrenome");
   let email = document.getElementById("i_email");
   
   let cep = document.getElementById("i_cep");
   let rua = document.getElementById("i_rua");
   let bairro = document.getElementById("i_bairro");
   let cidade = document.getElementById("i_cidade");
   let estado = document.getElementById("i_estado");

   let sty_1 = "2px solid red";  //estilo em vermelho
   let sty_2 = "1px solid gray"; // estilo normal

   input_style(nome, sty_1, sty_2)
   input_style(sobrenome, sty_1, sty_2)
   input_style(email, sty_1, sty_2)
   input_style(cep, sty_1, sty_2)
   input_style(rua, sty_1, sty_2)
   input_style(bairro, sty_1, sty_2)
   input_style(cidade, sty_1, sty_2)
   input_style(estado, sty_1, sty_2)
}


function input_style(input, style_1, style_2){

    if(!input.checkValidity()){
        input.style.border = style_1;
        return input.style.border;

    }

    if(input.checkValidity()){
        input.style.border = style_2;
        return input.style.border;
    }
}