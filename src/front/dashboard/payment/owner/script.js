document.addEventListener("DOMContentLoaded", function () {
    const aprovarButton = document.querySelector('#aprovarButton');
    const rejeitarButton = document.querySelector('#rejeitarButton');

    if (aprovarButton) {
        aprovarButton.addEventListener('click', function () {
            alert('Pagamento do aluguel aprovado!');
        });
    }

    if (rejeitarButton) {
        rejeitarButton.addEventListener('click', function () {
            alert('Pagamento do aluguel rejeitado!');
        });
    }

});
