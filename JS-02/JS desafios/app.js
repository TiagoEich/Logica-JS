
let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora do desafio.";

function exibirMensagemNoConsole(){
    console.log("O botão foi clicado");
}
function mensagemAlerta(){
    alert("Eu amo o Java Script");
}
function exibirPrompt(){
    let cidade = prompt("Digite o nome de uma cidade brasileira que você adora: ");
    alert(`Estive em ${cidade} e lembrei de você`);
}
function somaDoisNumeros(){
    let numero1 = parseInt(prompt("Informe o primeiro número: "));
    let numero2 = parseInt(prompt("Informe o segundo número: "));
    let resultado = numero1 + numero2
    alert(`A soma de ${n1} e ${n2} resulta em ${resultado}`)
}



/*Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.

Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.

Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.

Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, 
exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.

Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.*/