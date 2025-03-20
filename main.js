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

        // $.ajax(endpoint).done(function(resposta){
        //     const logradouro = resposta.logradouro;
        //     const bairro = resposta.bairro;
        //     const cidade = resposta.localidade;
        //     const estado = resposta.uf;
        //     const endereco = `${logradouro}-${bairro}-${cidade}-${estado}`;
        //     $('#btn-buscar-cep').find('span').addClass('d-none');
        //     $('#btn-buscar-cep').find('i').removeClass('d-none');

        //     $('#endereco').val(endereco);
        // })

        fetch(endpoint)
        .then(function(resposta){
            return resposta.json();
        })

        .then(function(json){
            const logradouro = json.logradouro;
            const bairro = json.bairro;
            const cidade = json.localidade;
            const estado = json.uf;
            if(cidade== undefined){
                throw new Error('CEP não encontrado');
            }
            const endereco = `${logradouro}-${bairro}-${cidade}-${estado}`;

            $('#endereco').val(endereco);
        })

        .catch(function(erro) {
            alert('Ocorreu um erro, por favor tente mais tarde.')
        })

        .finally(function(){
            setTimeout(function(){
                $('#btn-buscar-cep').find('span').addClass('d-none');
                $('#btn-buscar-cep').find('i').removeClass('d-none');
            }, 1000)
        })
    })

    $('#formulario-pedido').submit(function(evento){
        evento.preventDefault();
        if($('#nome').val().length== 0){
            throw new Error('Digite o nome');
        }
    })
    
})