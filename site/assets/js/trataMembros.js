/* funcao que coloca apelidos e cores especiais em cada nome */
function trataMembros(membros) {
  membros.forEach(function(membro){
    membro.nome = membro.nome.normalize('NFD').replace(/[\u0300-\u036f]/g, ''); // remove acentos do nome
    membro.classe = undefined;
    if (membro.nome == "Fabiano") {
      membro.nome = "F";
      membro.classe = "emej";
    }
    else if(membro.nome == "Gabriel") {
      membro.nome = "Glock";
    }
    else if (membro.nome == "Guilherme Fonseca") {
      membro.nome = "Prefeito";
      membro.classe = "prefeito"
    }
    else if(membro.nome == "Guilherme Dias") {
      membro.nome = "Jack";
      membro.classe = "jack";
    }
    else if(membro.nome == "Guilherme Schultz") {
      membro.nome = "Espirro";
    }
    else if(membro.nome == "Henrique") {
      membro.classe = "emej";
    }
    else if(membro.nome == "Igor Cardoso") {
      membro.nome = "Soldier";
    }
    else if(membro.nome == "João") {
      membro.nome = "Jao";
    }
    else if(membro.nome == "Kleuber") {
      membro.nome = "Calebe";
      membro.classe = "emej";
    }
    else if(membro.nome == "Larissa Ribeiro") {
      membro.nome = "Larissa R";
    }
    else if(membro.nome == "Larissa Tonetto") {
      membro.nome = "Larissa T";
    }
    else if(membro.nome == "Levi") {
      membro.nome = "Ivo";
      membro.classe = "ivo";
    }
    else if(membro.nome == "Matheus Aguilar") {
      membro.nome = "Juninho";
      membro.classe = "juninho";
    }
    else if(membro.nome == "Mayke") {
      membro.nome = "Maykim";
      membro.classe = "maykim";
    }
    else if(membro.nome == "Nathan") {
      membro.nome = "Chek";
    }
    else if(membro.nome == "Nilson") {
      membro.nome = "Gilson";
      membro.classe = "emej";
    }
    else if(membro.nome == "Rafael Rocha") {
      membro.nome = "Rocha";
    }
    else if(membro.nome == "Sávio") {
      membro.classe = "emej";
    }
    else if(membro.nome == "Thiago") {
      membro.nome = "TH";
    }
    else if(membro.nome == "Tiago") {
      membro.nome = "Tiago";
      membro.classe = "tiago";
    }
  });
  return membros;
}

