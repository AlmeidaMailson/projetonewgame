// Contador de itens no carrinho
let carrinhoCount = 0;

// Função para atualizar o contador de itens no carrinho
function atualizarCarrinho() {
    document.getElementById('carrinho-count').textContent = carrinhoCount;
}

// Adiciona o evento de click aos botões "Adicionar ao Carrinho"
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        carrinhoCount++; // Incrementa o contador de itens
        atualizarCarrinho(); // Atualiza o contador do carrinho no ícone
    });
});

// Carrossel automático
const carrossel = document.getElementById('carrossel');
const totalItems = document.querySelectorAll('.carrossel .item').length; // Total de produtos
let currentIndex = 0; // Contador para a posição do carrossel

// Função para atualizar a posição do carrossel
function updateCarrossel() {
    const itemWidth = document.querySelector('.carrossel .item').offsetWidth + 20; // Largura do item + margem
    const newTransformValue = -(itemWidth * currentIndex); // Cálculo da posição do carrossel
    carrossel.style.transform = `translateX(${newTransformValue}px)`; // Atualiza a posição do carrossel
}

// Função para ir para o próximo item automaticamente
function nextItem() {
    if (currentIndex < totalItems - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Volta ao início do carrossel
    }
    updateCarrossel();
}

// Chama a função `nextItem` a cada 3 segundos para movimentar o carrossel automaticamente
setInterval(nextItem, 3000);

// Inicializa o carrossel
updateCarrossel();

// Inicialização dos ganhos de afiliados
let totalGanhos = 0;

// Função para atualizar os ganhos dos afiliados
function updateEarnings() {
    // Incrementa o valor dos ganhos simulados
    totalGanhos += 50; // Exemplo: cada vez que o botão for pressionado, os ganhos aumentam em R$50
    document.getElementById('affiliate-commission').textContent = `R$ ${totalGanhos.toFixed(2)}`;
}

// Evento de clique no botão "Ver mais detalhes"
document.querySelector('#affiliate-earnings button').addEventListener('click', updateEarnings);

// Função para atualizar o total do carrinho
function updateTotal() {
    let total = 0;
    document.querySelectorAll('.cart-item').forEach(item => {
        const price = parseFloat(item.querySelector('p').textContent.split('R$ ')[1]);
        const quantity = item.querySelector('.quantity').value;
        total += price * quantity;
    });
    document.getElementById('total-price').textContent = `Preço Total: R$ ${total.toFixed(2)}`;
}

// Função para remover um item do carrinho
function removeItem(event) {
    const item = event.target.closest('.cart-item');
    item.remove();
    updateTotal();
}

// Função para alterar a quantidade de um item
function changeQuantity(event) {
    updateTotal();
}

// Adiciona o evento de clique nos botões de remover
document.querySelectorAll('.remove-item').forEach(button => {
    button.addEventListener('click', removeItem);
});

// Adiciona o evento de mudança nas quantidades
document.querySelectorAll('.quantity').forEach(input => {
    input.addEventListener('input', changeQuantity);
});

// Função para continuar comprando
document.getElementById('continue-shopping-btn').addEventListener('click', function() {
    window.location.href = "loja.html";
});

// Inicializa o total ao carregar a página
updateTotal();
