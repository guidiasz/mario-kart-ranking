/*adiciona semana do ano no cabeçalho*/
function adicionaSemana() {
    let agora = new Date();
    let umDeJan = new Date(agora.getFullYear(), 0, 1);
    let semana = Math.ceil( (((agora.getTime() - umDeJan.getTime()) / 86400000) + umDeJan.getDay() + 1) / 7 );
    document.querySelector("#semana").textContent = semana;
  }