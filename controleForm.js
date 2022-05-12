$("#form1").on( "submit", function( event ) {
  event.preventDefault();

  let visualizar = $('#visualizar');

  $(inputs[1]).prop("disabled", false);
  $(botoes[1]).prop("disabled", false);
  $(visualizar).prop("disabled", false);

  $(inputs[1]).focus();
});

$("#form2").on("submit", (e) => {

  e.preventDefault();

  let getForm1 = $("#form1").serialize();
  let getForm2 = $("#form2").serialize();
  let data = getForm1+ '&' +getForm2;

  const myArray = data.split("&");

  const objectificar = (string) => string.split(' ').reduce((obj, str) => {
    const [key, value] = str.split('=');
    return {
      ...obj,
      [key]: value
    }
  }, {});

  const dataComObjetos = myArray.map(objectificar);

  const vUrl = $("#form2").attr( "action" );

/*   dataComObjetos.forEach((objeto) => {
    for(var chave in objeto){
      console.log("Chave: " + chave + "; Valor: " + objeto[chave]);
    }
  }); */

  $.ajax({
    type: "POST",
    url: vUrl,
    data: dataComObjetos
  }).done((data) => {
    console.log(data);
  });

});