/* monta li's com os dados de cada membro */
function addMembrosNoRanking(membros) {
    for (var i = 0; i < membros.length; i++){
      var membro = membros[i];
      var li = criaElemento("li", membro.classe, "");
      var span = document.createElement("span");
  
      li.appendChild(criaElemento("p", "posicao", i+1));
      li.appendChild(criaElemento("p", "nome", membro.nome));
      li.appendChild(span);
      li.appendChild(criaElemento("p", "pontuacao", membro.pontuacao));
  
      document.querySelector("ul").appendChild(li);
    }
  }