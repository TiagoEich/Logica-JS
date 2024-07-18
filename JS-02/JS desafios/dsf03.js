function CalculoIMC(altura, peso){
    let peso = peso*(altura*altura);
}


function calcularFatorial(numero) {
    let numero = 10;
    if (numero == 0 || numero == 1) {
      return 1;
    }
  
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
      fatorial *= i;
    }
  
    return fatorial;
  } let resultado = calcularFatorial(numero);
  console.log(`O fatorial de ${numero} é ${resultado}`);

 

function conversaoDolar(valorDolarEmReal){
   
   let valorDolarEmReal = 50/4.80;
   return valorDolarEmReal();
}console.log(`Você tem ${valorDolarEmReal} U$ na carteira!`);
    let carteira = 50;


    function calculoAreaEPerimetro(altura, largura) {
        let area = altura * largura;
        let perimetro = 2 * (altura + largura);
        console.log(`Essa sala tem ${area} metros quadrados`);
        console.log(`A sala tem ${perimetro} metros de perímetro`);
    }
    
    let altura = 15;
    let largura = 10; 
    calculoAreaEPerimetro(altura, largura);

   function calculoAreaEPerimetroCirculo(raio){
    let area = Math.PI * raio * raio;
    let perimetro = 2 * Math.PI * raio;
    console.log(`Essa sala tem ${area.toFixed(2)} metros quadrados`);
    console.log(`O perímetro dessa sala é de ${perimetro.toFixed(2)} metros`);
   }

   raio = 5;
   calculoAreaEPerimetroCirculo();


function tabuada(numero){
    for(i = 1; i <= 10; i ++){
        let calculo = numero*i;
        console.log(`${numero} x ${i} = ${resultado}`)
    }

}let numero = 5;
tabuada();




/* Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa,
 a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna
o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

Crie uma função que mostre na tela a área e o perímetro de uma sala retangular,
utilizando altura e largura que serão dadas como parâmetro.

Crie uma função que mostre na tela a área e o perímetro de uma sala circular,
utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

Crie uma função que mostre na tela a tabuada de um número dado como parâmetro. */