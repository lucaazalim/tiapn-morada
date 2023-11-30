document.addEventListener("DOMContentLoaded", function () {
    const enviarButton = document.querySelector('#enviarButton');
    const cancelarButton = document.querySelector('#cancelarButton');
    const imovelPagamentoSelect = document.querySelector('#ImovelPagamento');
    const mesPagamentoSelect = document.querySelector('#MesPagamento');
    const anoPagamentoSelect = document.querySelector('#AnoPagamento');

    if (enviarButton) {
        enviarButton.addEventListener('click', function () {
            const imovelSelecionado = imovelPagamentoSelect.options[imovelPagamentoSelect.selectedIndex].text;
            const mesPagamento = mesPagamentoSelect.options[mesPagamentoSelect.selectedIndex].text;
            const anoPagamento = anoPagamentoSelect.value;
            alert(`Aviso de pagamento do aluguel do imóvel ${imovelSelecionado} para ${mesPagamento} de ${anoPagamento} criado!`);
        });
    }
    
    if (cancelarButton) {
        cancelarButton.addEventListener('click', function () {
            alert('Aviso de pagamento cancelado!');
        });
    }
});
