$(function(){
    $("#resultado").hide();
});

function consultaCep() {
    var cep = document.getElementById('cep').value.replace(/\D/g, '');
    if (cep.length != 8) {
        alert("CEP inválido. Digite um CEP com 8 números.");
        $("#resultado").hide();
    } else {
        var url = "https://viacep.com.br/ws/" + cep + "/json/";
        $.ajax({
            url: url,
            type: "GET",
            success: function (response) {
                if (response.erro) {
                    alert("CEP não encontrado.");
                    $("#resultado").hide();
                    $("#logradouro").html("");
                    $('#bairro').html("");
                    $('#localidade').html("");
                    $('#uf').html("");
                } else {
                    $("#logradouro").html(response.logradouro);
                    $('#bairro').html(response.bairro);
                    $('#localidade').html(response.localidade);
                    $('#uf').html(response.uf);
                    $("#resultado").show();
                }
            },
            error: function(){
                alert("Erro ao consultar o serviço. Tente novamente mais tarde.");
                $("#resultado").hide();
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