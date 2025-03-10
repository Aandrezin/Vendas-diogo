document.addEventListener('DOMContentLoaded', function () {
    // Seleciona o botão de acessibilidade e o menu de opções
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');

    // Alterna a visibilidade das opções de acessibilidade
    botaoDeAcessibilidade.addEventListener('click', function () {
        botaoDeAcessibilidade.classList.toggle('rotacao-botao');
        opcoesDeAcessibilidade.classList.toggle('apresenta-lista');
    });

    // Funcionalidade de ajuste de fonte
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');

    let tamanhoAtualFonte = 1; // Tamanho base da fonte em "rem"

    aumentaFonteBotao.addEventListener('click', function () {
        tamanhoAtualFonte += 0.1; // Incrementa o tamanho
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`; // Aplica ao corpo
    });

    diminuiFonteBotao.addEventListener('click', function () {
        tamanhoAtualFonte -= 0.1; // Decrementa o tamanho
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`; // Aplica ao corpo
    });
});
