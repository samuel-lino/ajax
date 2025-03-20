document.addEventListener('DOMContentLoaded', function(){
    const image = document.querySelector('.profile-avatar');
    const nome = document.querySelector('.profile-name');
    const user = document.querySelector('.profile-username');
    const repositorio = document.querySelector('#repositorio');
    const seguindo = document.querySelector('#seguindo');
    const seguidores = document.querySelector('#seguidores');
    const link = document.querySelector('.profile-link');


    fetch('https://api.github.com/users/samuel-lino')

    .then(function(resposta){
        return resposta.json();
    })

    .then(function(json){
        image.src = json.avatar_url;
        nome.innerText = json.name;
        user.innerText = json.login;
        repositorio.innerText = json.public_repos;
        seguindo.innerText = json.followers;
        seguidores.innerText = json.following;
        link.href = json.html_url;
    })
})