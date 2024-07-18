function sortear (){
    let quantidade =parseInt( document.getElementById("quantidade").value); 
    let de = parseInt(document.getElementById("de").value);
    let ate =parseInt(document.getElementById("ate").value);
    //a partir daqui, você puxa o que está escrito entre parênteses após o elemento ID na classe de HTML
    if (de >= ate) {
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
        return; // se o valor digitado em de for >= ao valor digitado no campo até, apresentará essa sinalização
      }
      if (quantidade > (ate - de + 1)) {
        alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
        return;
      }
    let sorteados = [];
    let numero; 

        
    for(let i = 0; i <quantidade; i ++){
        numero = obterNumeroAleatorio(de,ate);
        
        while(sorteados.includes(numero)){
            numero = obterNumeroAleatorio(de, ate);
            alert(`Tentando obter número inédito`)
        }
        
        sorteados.push(numero);
    }

    let resultado = document.getElementById("resultado");
    resultado.innerHTML =`<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
    //para colocar o elemento dentro do HTML, coloca o resultado na tela, não puxa como o
    
    alterarStatusBotao();
}

function obterNumeroAleatorio(minimo, maximo){
    return Math.floor(Math.random() * (maximo - minimo +1)) + minimo;
}

function alterarStatusBotao(){
    let botao = document.getElementById("btn-reiniciar");
    if(botao.classList.contains("container__botao-desabilitado")){ 
        botao.classList.remove("container__botao-desabilitado"); // se botão estiver desabilitado, remove para então estar habilitado
        botao.classList.add("container__botao"); //agora só precisa adicionar o botão para ele então funcionar
    }else{
        botao.classList.remove("container__botao"); // assim, o botão reiniciar será removido e continuará desativado.
        botao.classList.add("container__botao-desabilitado"); //adiciona a função de desabilitar o botão, deixando ele em cinza
    }
}

function reiniciar (){
    document.getElementById("quantidade").value = " "; // irá limpar o valor a partir de uma string vazia
    document.getElementById("de").value = " ";
    document.getElementById("ate").value = " ";
    document.getElementById("resultado").innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`
    alterarStatusBotao(); //chama esse método para fazer a dinâmica de após clicar em reiniciar, o botão ficar cinza dnv

}