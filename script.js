function corrigir(){

    let pontos = 0;
    
    let respostas = document.querySelectorAll("input[type=radio]:checked");
    
    respostas.forEach(function(item){
    
    if(item.value == "c"){
    pontos++;
    }
    
    });
    
    let mensagem = "";
    
    if(pontos == 4){
    
    mensagem = "🏆 Parabéns! Você acertou todas as perguntas!";
    
    }else if(pontos == 3){
    
    mensagem = "😊 Muito bem! Você conhece bastante sobre sustentabilidade.";
    
    }else if(pontos == 2){
    
    mensagem = "🌱 Bom trabalho! Continue aprendendo.";
    
    }else{
    
    mensagem = "📚 Continue estudando e ajudando a preservar o meio ambiente.";
    
    }
    
    document.getElementById("resultado").innerHTML =
    "Você acertou " + pontos + " de 4 perguntas.<br>" + mensagem;
    
    }
