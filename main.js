// document.addEventListener('DOMContentLoaded', function(){
//     document.getElementById('btn-buscar-cep').addEventListener('click', function(){
//         //ajax - assincroned javascript and XML
//         const xhttp = new XMLHttpRequest();
//         const cep = document.getElementById('cep').value;
//         const endpoint = `https://viacep.com.br/ws/${cep}/json`;
//         xhttp.open('GET', endpoint);
//         xhttp.send();

//        // https://viacep.com.br/ws/123123132/json
//     })
// })

$(document).ready(function(){
    $('#cep').mask('00000-000');
    $('#btn-buscar-cep').click(function(){
        const cep = $('#cep').val();
        const endpoint = `https://viacep.com.br/ws/${cep}/json`;
        $(this).find('i').addClass('d-none');
        $(this).find('span').removeClass('d-none');
        $.ajax(endpoint).done(function(resposta){
            const logradouro = resposta.logradouro;
            const bairro = resposta.bairro;
            const cidade = resposta.localidade;
            const estado = resposta.uf;
            const endereco = `${logradouro}-${bairro}-${cidade}-${estado}`;
            $('#btn-buscar-cep').find('span').addClass('d-none');
            $('#btn-buscar-cep').find('i').removeClass('d-none');

            $('#endereco').val(endereco);
        })
    })
    
})