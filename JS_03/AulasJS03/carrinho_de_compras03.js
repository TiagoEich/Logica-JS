function adicionar(){ // começamos sempre pelo botão no html (onclick), nesse caso, são apresentados dois
    // recuperar valores: nome do produto, quantidade e valor
        let produto = document.getElementById("produto").value;
        let nomeProduto = produto.split ("-")[0]; //irá separar em dois, aí voce pode escolher a posição no array para ser a informada
        let ValorUnitario =produto.split("R$")[1];
        let quantidade = document.getElementById("quantidade").value;
       // calcular o preço, o subtotal
        let preco = quantidade * ValorUnitario;
            //adicionar produto no carrinho
        let carrinho = document.getElementById("lista-produtos");
        carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R${preco}</span>
  </section>`;
    
    
    //atualizar o valor total
    
    }
    
    function limpar(){
    
    }