const btn = document.getElementById('btn');
const lista = document.querySelector('.lista');
const pauta = document.getElementById('pauta');

var capturando = "";

btn.addEventListener("click", (e) => {

    // Não deixa executar o form
    e.preventDefault();

    // Adiciona o texto ao item
    capturando = pauta.value;

    // Loop caso vazio e com sem a classe is-invalid
    while(capturando === "" && !pauta.className.endsWith('is-invalid')){
        pauta.className += " is-invalid";
        pauta.focus();
    }

    // Se a variavel não estiver vazia
    if(capturando){
        // Cria a div com os itens como inputs
        var arrayItems = ['div'];
            arrayLenght = arrayItems.length;

        for(i = 0; i < arrayLenght; i++){
            $('<div class="input-group mb-2">'
                +'<input type="text" class="form-control" value="'+capturando+'">'
                +'<button class="btn btn-outline-danger btnExclui" type="button">Excluir</button>'
             +'</div>'
             ).appendTo(lista);
        }
        
        // Zera o campo e da o foco a ele
        pauta.value = "";
        pauta.focus();
    }

    const botoes = lista.querySelectorAll('.btnExclui');

    // Percorrendo botoes de excluir
    botoes.forEach(function(botao){
        botao.addEventListener("click", (e) =>{
            botaoAtual = e.target;
            divBotao = botaoAtual.parentNode;
            divBotao.remove();
        });
    });

});

pauta.addEventListener("keyup", (e) =>{
    // Verifica se o alvo é o pauta e se ele possui a classe 'is-invalid'
    if(e.target == pauta && pauta.className.endsWith('is-invalid')){
        pauta.classList.remove('is-invalid');
    }
});







