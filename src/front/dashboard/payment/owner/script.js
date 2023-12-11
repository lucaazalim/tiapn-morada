import * as API from "../../../assets/script/api.js";

let paymentsReceived = document.getElementById("paymentsReceived");

window.updatePaymentStatus = function (paymentId, newStatus) {

  API.put(`payments/${paymentId}`, { status: PaymentStatus[newStatus] })
    .then(() => {
      alert(`Status atualizado para: ${newStatus}`);
      loadPayments();
    })
    .catch(error => {
      console.error('Erro ao atualizar o status do pagamento:', error);
    });
}

function loadPayments() {
  API.get("payments/owner")
    .then(response => response.json())
    .then(payments => {
      paymentsReceived.innerHTML = '';
      payments.forEach(payment => {
        paymentsReceived.innerHTML += `
          <div class="card mb-3">
            <div class="card-header">
              Competência do Pagamento: ${payment.competenceMonth}/${payment.competenceYear}
            </div>
            <div class="card-body">
              <h5 class="card-title">Valor: R$ ${payment.rentValue.toFixed(2)}</h5>
              <p class="card-text">Status: ${API.paymentStatusMap[payment.status].label}</p>
              <button class="btn btn-success" onclick="updatePaymentStatus(${payment.id}, 'CONFIRMED')">Confirmar</button>
              <button class="btn btn-danger" onclick="updatePaymentStatus(${payment.id}, 'REJECTED')">Rejeitar</button>
            </div>
          </div>
        `;
      });
    })
    .catch(error => {
      console.error('Erro ao carregar pagamentos:', error);
      paymentsReceived.innerHTML = `<p class="text-center">Erro ao carregar os pagamentos.</p>`;
    });
}

loadPayments();

const PaymentStatus = {
  CONFIRMED: 'CONFIRMED',
  REJECTED: 'REJECTED'
};
