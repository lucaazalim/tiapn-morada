document.addEventListener("DOMContentLoaded", function () {
    const enviarButton = document.querySelector('#enviarButton');
    const aprovarButton = document.querySelector('#aprovarButton');
    const rejeitarButton = document.querySelector('#rejeitarButton');

    if (enviarButton) {
        enviarButton.addEventListener('click', function () {
            alert('Aviso de pagamento do aluguel criado!');
        });
    }

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
    if (cancelarButton) {
        cancelarButton.addEventListener('click', function () {
            alert('Aviso de pagamento cancelado!');
        });
    }
});
