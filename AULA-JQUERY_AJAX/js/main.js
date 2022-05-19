function consultaCep() {

    var cep = document.getElementById('cep').value;
    if(cep.length != 8){
        alert("Informe um CEP Válido");
    }else{
        var url = "https://viacep.com.br/ws/" + cep + "/json/";
        //console.log(cep);
        $.ajax({
            url: url,
            type: "GET",
            success: function (response) {
                console.log(response);
              if(response.erro ){
                  alert("Informe um CEP Válido");
              }else{
               $("#logradouro").html(response.logradouro);
               $('#bairro').html(response.bairro);
               $('#localidade').html(response.localidade);
               $('#uf').html(response.uf);
    
              }
                
            }
        })
}
}
//Outra forma de enviar os dados para tela
// document.getElementById('cep').innerHTML = response.cep;
            // document.getElementById('logradouro').innerHTML = response.logradouro;
            // document.getElementById('bairro').innerHTML = response.bairro;
            // document.getElementById('localidade').innerHTML = response.localidade;
            // document.getElementById('uf').innerHTML = response.uf;