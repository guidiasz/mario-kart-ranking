var xhr = new XMLHttpRequest();

/* json com os membros e as pontuacoes */
xhr.open("GET", "https://script.google.com/macros/s/AKfycbwiW2tondAcw1BnuOEPEpQ1eMgey32932mjNNkbXfYUijMK-jtR/exec");

/*quando carregar o json */
xhr.addEventListener("load", function(){
  if(xhr.status == 200) { //se carregar sem nenhum erro
    var membros = JSON.parse(xhr.responseText);
    membros = trataMembros(membros);
    addMembrosNoRanking(membros);
    
    var tela = 1; //tela que vai ser exibida
    exibeMembros(tela); //exibe membros pela primeira vez
    setTimeout(function(){//oculta membros 9 seg depois
      ocultaMembros(tela);
    }, 9000);

    /* a cada 10 segundos, realiza a sequencia de exibir membros e ocultar membros */
    setInterval(function(){
      tela ++;
      if (tela <= Math.trunc(membros.length/7)){
        exibeMembros(tela);
        setTimeout(function(){
          ocultaMembros(tela);
        }, 9000);
      }
      else { //se ja foram exibitas todas as telas, recomeça
        tela = 1;
        exibeMembros(tela);
        setTimeout(function(){
          ocultaMembros(tela);
        }, 9000);
      }
    }, 10135)
  }
  else
    console.log("ocorreu um erro :/");
});

xhr.send();

adicionaSemana();
