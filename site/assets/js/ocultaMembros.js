/* oculta membros para mudar de tela */
function ocultaMembros(tela) {
    var li = document.querySelectorAll("li");
    
    var i = 7*tela - 7;
    var cont = 7*tela - 7;
    
    if(tela*7 >=li.length){
      var fimLista = li.length;
    }
    else {
      var fimLista = 7*tela;
    }
  /* remove membros da tela a cada 0,15 segundos */
    var timer = setInterval(function(){
      if (i < fimLista) {
        li[i].classList.add("oculta");
        i++;
      }
  
  /* remove todas as classes adicionadas por js */
      else {
        for( cont; cont < fimLista; cont ++) {    
          li[cont].classList.remove("exibe");
          li[cont].classList.remove("oculta");
        }
        clearInterval(timer);
      }
    }, 150);
  }
  