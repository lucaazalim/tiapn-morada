import * as API from "../../../assets/script/api.js";
import * as Alert from '../../../assets/script/alert.js';

let paymentsReceived = document.getElementById("paymentsReceived");

window.updatePaymentStatus = function (paymentId, status) {

  API.put(`payments/${paymentId}`, { status })
    .then(() => {
      Alert.alert(`Status atualizado para: ${API.paymentStatusMap[status].label}!`, 'success');
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

        let buttons = payment.status === 'ALLEGEDLY_PAID' ? `
          <button class="btn btn-success" onclick="updatePaymentStatus(${payment.id}, 'CONFIRMED')">Confirmar</button>
          <button class="btn btn-danger" onclick="updatePaymentStatus(${payment.id}, 'REJECTED')">Rejeitar</button>
        ` : '';

        paymentsReceived.innerHTML += `
          <div class="card mb-3">
            <div class="card-header">
              Competência do Pagamento: ${payment.competenceMonth}/${payment.competenceYear}
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
              ${buttons}
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