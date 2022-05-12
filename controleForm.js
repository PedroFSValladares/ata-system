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

  let vForm1 = $("#form1").serializeArray();
  let vForm2 = $("#form2").serializeArray();
  let arr = $.merge(vForm1, vForm2);

  const vUrl = $("#form2").attr( "action" );
  const vData = { arr };

  $.ajax({
    type: "POST",
    url: vUrl,
    data: vData,
    success:function(data){
      $('body').html(data);
    }
  });

});