/* mostra os membros na tela de 7 em 7 */
function exibeMembros(tela) {
    var li = document.querySelectorAll("li");
    
    var i = 7*tela - 7; //elemento inicial
  
    if(tela*7 >=li.length){//verifica se é a ultmia tela
      var fimLista = li.length;//se for, o ultimo membro a aparecer é o ultimo da lista
    }
    else {
      var fimLista = 7*tela; //caso contrario, o ultimo membro a aparecer é tela*7
    }
  /* cada membro aparece a cada 0,15 segundos */
    var timer = setInterval(function(){
      if (i < fimLista) {
        li[i].classList.add("exibe");
        i++;
      }
      else {
        clearInterval(timer); //interrompe exibicao quando atinge 7 membros
      }
    }, 150);
  
  }