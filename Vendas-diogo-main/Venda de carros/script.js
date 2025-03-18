document.addEventListener('DOMContentLoaded', function() {
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');

    let tamanhoAtualFonte = 1;

    aumentaFonteBotao.addEventListener('click', function() {
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    });

    diminuiFonteBotao.addEventListener('click', function() {
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    });

    botaoDeAcessibilidade.addEventListener('click', function() {
        
        if (opcoesDeAcessibilidade.style.display === "none" || opcoesDeAcessibilidade.style.display === "") {
            opcoesDeAcessibilidade.style.display = "flex";
        } else {
            opcoesDeAcessibilidade.style.display = "none";
        }
    });
});

