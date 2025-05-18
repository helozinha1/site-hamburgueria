document.querySelectorAll('.btn-adicionar').forEach(btn => {
    btn.addEventListener('click', function(event) {
        alert('Item adicionado ao pedido!');
        // Se não quiser redirecionar para pedidos.html, descomente a linha abaixo:
        // event.preventDefault();
    });
});
