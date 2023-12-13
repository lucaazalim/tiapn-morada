import * as API from "../../../assets/script/api.js";

let paymentsReceived = document.getElementById("paymentsReceived");

API.get("payments/renter")
  .then((response) => response.json())
  .then((payments) => {
    console.log(payments);

    paymentsReceived.innerHTML = '';

    payments.forEach((payment) => {
      const createdAtDate = new Date(payment.createdAt).toLocaleDateString('pt-BR');
      paymentsReceived.innerHTML += `
      <div class="card mb-3">
        <div class="card-header">
          Data do Pagamento: ${payment.competenceMonth}/${payment.competenceYear}
        </div>
        <div class="card-body">
          <div class="d-flex justify-content-between">
            <h5 class="card-title">
              Valor: R$ ${payment.rentValue.toFixed(2)}
            </h5>
            <h5 class="card-title text-right">
              Aluguel: ${payment.rentalId}
            </h5>
          </div>
          <p class="card-text">Status: ${API.paymentStatusMap[payment.status].label}</p>
        </div>
      </div>
      `;
    });
  })
  .catch((error) => {
    console.error('Error fetching payment notice:', error);
    paymentsReceived.innerHTML = `<p class="text-center">Erro ao carregar os avisos de pagamento.</p>`;
  });
