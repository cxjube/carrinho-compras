let totalGeral = 0;
document.getElementById("lista-produtos").innerHTML = "";
document.getElementById("valor-total").textContent = "R$ 0";

function adicionar() {
  // recuperar valores: nome do prooduto, quantidade e valor
  let produto = document.getElementById("produto").value;
  let quantidade = document.getElementById("quantidade").value;

  // Verificar se o produto selecionado é válido
  if (!produto || produto.trim() === "") {
    alert("Selecione um produto válido.");
    return;
}


// Verificar se a quantidade inserida é válida
if (isNaN(quantidade) || quantidade <= 0) {
    alert("Insira uma quantidade válida.");
    return;
}


  let nomeProduto = produto.split("-")[0];
  let valorUnitario = produto.split("R$")[1];

  //calcular o preço, o nosso subtotal
  let preco = quantidade * valorUnitario;

  //adicionar no carrinho
  let carrinho = document.getElementById("lista-produtos");
  carrinho.innerHTML =
    carrinho.innerHTML +
    `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}</span> ${nomeProduto} <span class="texto-azul">${preco}</span>
        </section>`;

  //atualizar o valor total
  totalGeral = totalGeral + preco;
  let campoTotal = document.getElementById("valor-total");
  campoTotal.textContent = `R$ ${totalGeral}`;
  document.getElementById("quantidade").value = 1;
}


function limpar() {
  totalGeral = 0;
  document.getElementById("lista-produtos").innerHTML = "";
  document.getElementById("valor-total").textContent = "R$ 0";
}
