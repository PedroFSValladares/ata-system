let botoes = $('.botao');
let inputs = $('.campo');
var capturado = "";

$(inputs[1]).keypress(function (e) { 
  if (e.which == 13) {
    doSomething(e, 1);
  }
});

$.each(botoes, (key,value) =>{
  $(value).click(function (e) { 
    doSomething(e, key);
  });
});

function doSomething(e, key){
  /* Retira o padrão do botão */
  e.preventDefault();

  const input = inputs[key];
  const lista = $('.lista')[key];

  /* Responsável por capturar o dado */
  envioDeDados(input, lista);

  const btnExclui = $('.btnExclui');

  exclusaoItens(btnExclui);
}

function envioDeDados(input, lista) { 
  capturado= input.value;

  /* Verifica se dados podem ser adicionados */
  if(!capturado){
    $(input).addClass("is-invalid").focus();
  }else{
    // Cria a div com os itens como inputs
    var arrayItems = ['div'];
    arrayLenght = arrayItems.length;

    for(i = 0; i < arrayLenght; i++){
        $('<div class="input-group mb-2">'
            +'<input type="text" class="form-control" value="'+capturado+'">'
            +'<button class="btn btn-outline-danger btnExclui" type="button">Excluir</button>'
        +'</div>'
        ).appendTo(lista);
    }

    input.value = "";
    input.focus();
  }
}

function exclusaoItens(btnExclui) {
  $.each(btnExclui, function (k,v) { 
    $(v).click((e) =>{
      botaoAtual = e.currentTarget;
      divBotao = botaoAtual.parentNode;
      divBotao.remove();
    });
  });
}

$.each(inputs, function (i, v) { 
  $(v).keyup(function () { 
    if($(v).hasClass("is-invalid")){
      $(v).removeClass("is-invalid");
    }
  });
});
