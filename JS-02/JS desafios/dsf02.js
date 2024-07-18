
        function exibirMensagem(){
        console.log("Olá, mundo!");
    }exibirMensagem();

    function mostrarNome(nome){
        console.log(`Olá, ${nome}`)
    }mostrarNome(Tiago);

    function receberDobro(){
        return receberDobro * 2
    }
        let resultado = receberDobro(10);
    console.log(resultado);

    function calcularMedia(n1,n2,n3){
        return (n1 + n2 + n3)/3;
    }
        let media = calcularMedia(10,15,26);
    console.log(media);

    function maiorNumero(n1,n2){
        return n1 > n2 ? n1 : n2;
    }
    let receberNumero = maiorNumero(13,20);
        console.log(receberNumero);

    function multiplicação(n1){
        return n1 * n1;
    } let total = multiplicação(10);
        console.log(total);


/*Criar uma função que exibe "Olá, mundo!" no console.

Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

Criar uma função que recebe três números como parâmetros e retorna a média deles.

Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo */