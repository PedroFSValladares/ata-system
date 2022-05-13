$(document).ready(function () {
  const inputs = retornaDados([], "input");
  const assinaturas = retornaDados([], "ass");
  const detalhes = console.log(localStorage.getItem("detalhes").split(" "));
});

function retornaDados([], tipoKey){
  var arr = [];
  var dataFilter;

  for(let i = 0; i < localStorage.length; i++){
    arr.push(localStorage.getItem(tipoKey+i));
    dataFilter = arr.filter((el) => {
      return el != null;
    });
  }

  return console.log(dataFilter);

}