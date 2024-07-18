function adicionar(){ // começamos sempre pelo botão no html (onclick), nesse caso, são apresentados dois
// recuperar valores: nome do produto, quantidade e valor
    let Produto = document.getElementById("produto").value;
    let nomeProduto = produto.split ("-")[0]; //irá separar em dois, aí voce pode escolher a posição no array para ser a informada
    let ValorUnitario =produto.split("R$")[1];
    let quantidade = document.getElementById("quantidade");
    alert(nomeProduto.value);
    alert(quantidade.value)
    alert(quantidade.value);
    let preco = quantidade.value * ValorUnitario;
    alert(preco);


// calcular o preço, o subtotal
//adicionar produto no carrinho
//atualizar o valor total

}

function limpar(){

}