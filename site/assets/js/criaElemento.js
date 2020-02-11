/* cria elementos html */
function criaElemento(tipoElemento, classeElemento, conteudoElemento) {
    var elemento = document.createElement(tipoElemento);
    elemento.classList.add(classeElemento);
    
    if (classeElemento == "nome") {
      elemento.textContent = conteudoElemento;
    }
  
    else{
      elemento.textContent = conteudoElemento;
    }
  
    return elemento;
  }