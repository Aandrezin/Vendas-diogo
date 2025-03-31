document.addEventListener('DOMContentLoaded', function() {
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');
    const alternaContraste = document.getElementById('alterna-contraste');

    let tamanhoAtualFonte = 1;

    // Aumentar fonte
    aumentaFonteBotao.addEventListener('click', function() {
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    });

    // Diminuir fonte
    diminuiFonteBotao.addEventListener('click', function() {
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    });

    // Alternar menu de acessibilidade
    botaoDeAcessibilidade.addEventListener('click', function() {
        if (opcoesDeAcessibilidade.style.display === "none" || opcoesDeAcessibilidade.style.display === "") {
            opcoesDeAcessibilidade.style.display = "flex";
        } else {
            opcoesDeAcessibilidade.style.display = "none";
        }
    });

    // Alternar contraste
    alternaContraste.addEventListener('click', function() {
        document.body.classList.toggle('alto-contraste');
    });
});
