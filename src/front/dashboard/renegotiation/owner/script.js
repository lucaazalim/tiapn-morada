document.addEventListener('DOMContentLoaded', (event) => {
    const enviarButton = document.getElementById('enviarButton');

    function mostrarAvisoReajuste() {
        const valorAluguelInput = document.getElementById('ValorAluguel');
        const imovelSelect = document.getElementById('ImovelPagamento');

        const valorAluguel = valorAluguelInput.value;
        const imovelSelecionado = imovelSelect.options[imovelSelect.selectedIndex].text;

        if ((valorAluguel>100) && !isNaN(valorAluguel)) {
            const avisoReajuste = `O reajuste no valor de R$: ${Number(valorAluguel).toFixed(2)} do imóvel: "${imovelSelecionado}" foi enviado ao locatário para aprovação.`;

            alert(avisoReajuste);
        } else {
            alert("Insira um valor de aluguel positivo e acima de R$100,00.");
        }
    }

    enviarButton.addEventListener('click', mostrarAvisoReajuste);
});
