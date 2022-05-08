var campos;
var capturando = "";

$('.btn').click((e)=>{
  e.preventDefault();
  let btnAtual = e.currentTarget;
  
  if(btnAtual == $('.btn')[0]){
    campos = $(':input').slice(0,2);
  }else{
    campos = $(':input').slice(3,5);
  }

  let campo = campos[0];
  capturando = campo.value;

  while(capturando === "" && !campo.className.endsWith('is-invalid')){
    campo.className += " is-invalid";
    campo .focus();
  }

  function addItemsToDiv(lista){
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
    campo.value = "";
    campo.focus();
  }

  if(capturando && btnAtual == $('.btn')[0]){
    addItemsToDiv($('.lista')[0]);
  }else if(capturando && btnAtual == $('.btn')[1]){
    addItemsToDiv($('.lista')[1]);
  }


  $(campo).keyup((e) => {
    // Verifica se o alvo é o pauta e se ele possui a classe 'is-invalid'
    if(e.target == campo && campo.className.endsWith('is-invalid')){
      campo.classList.remove('is-invalid');
  }
  });

  const botoes = $('.btnExclui');
  
  $.each(botoes, function (k,v) { 
    $(v).click((e) =>{
      botaoAtual = e.currentTarget;
      divBotao = botaoAtual.parentNode;
      divBotao.remove();
    });
  });
  
});
