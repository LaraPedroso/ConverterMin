function converterDuracao(){
    
// cria referencia aos elementos da pagina 
    var inTitulo = document.getElementById("inTitulo");
    var inDuracao = document.getElementById("inDuracao");
    var outTitulo = document.getElementById("outTitulo");
    var outResposta = document.getElementById("outResposta");

// obtem campo de entrada 
    var titulo = inTitulo.value;
    var duracao = Number(inDuracao.value);

// arredonda para baixo o resultado da divisao   
    var horas = Math.floor (duracao / 60);

// obtem o resto da divisao entre os numeros
    var min = duracao % 60; 

// altera o conteudo dos paragrafos de resposta
    outTitulo.textContent = titulo;
    outResposta.textContent = horas + "hora(s) e " + min + "minutos";
    
}
// cria uma referencia ao elemento btConverter (botao)
    var btConverter = document.getElementById("btConverter");

// registra um evento associado ao botao, para carregar uma função
    btConverter.addEventListener("click", converterDuracao);
