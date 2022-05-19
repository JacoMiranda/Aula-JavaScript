function consultaCep() {

    var cep = document.getElementById('cep').value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";
    //console.log(cep);
    $.ajax({
        url: url,
        type: "GET",
        success: function (response) {
            console.log(response);
            document.getElementById('logradouro').innerHTML = response.logradouro;
            document.getElementById('bairro').innerHTML = response.bair;
            document.getElementById('localidade').innerHTML = response.localidade;
            document.getElementById('uf').innerHTML = response.uf;
            
        }
    })
}