const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth' });
        }

        newFunctiremoverSelecaoDoPersonagem();

        personagem.classList.add('selecionado');

        alterarImagemPersonagemSelecionado(personagem);

        alterarNomePersonagemSelecionado(personagem);

        alterarDescricaPersonagem(personagem);
    })
})

function alterarDescricaPersonagem(personagem) {
    const descricaopersonagem = document.getElementById('descricao-personagem');
    descricaopersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarNomePersonagemSelecionado(personagem) {
    const nomepersonagem = document.getElementById('nome-personagem');
    nomepersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagempersonagemgrande = document.querySelector('.personagem-grande');

    const idpersonagem = personagem.attributes.id.value;
    imagempersonagemgrande.src = `./src/imagens/card-${idpersonagem}.png`;
}

function newFunctiremoverSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}
//4palavra 