import * as API from "../../../assets/script/api.js";
import generateContract from "../../../assets/script/generateRent.js";

let paymentsReceived = document.getElementById("paymentsReceived");

API.get("payments/renter") 
  .then((response) => response.json())
  .then((payments) => {
    console.log(payments);

    paymentsReceived.innerHTML = ''; 

    payments.forEach((payment) => {
      const createdAtDate = new Date(payment.createdAt).toLocaleDateString('pt-BR');
      paymentsReceived.innerHTML += `
        <div class="payment-card">
          <p>Payment ID: ${payment.id}</p>
          <p>Rental ID: ${payment.rentalId}</p>
          <p>Amount: R$ ${payment.rentValue.toFixed(2)}</p>
          <p>Month: ${payment.competenceMonth}/${payment.competenceYear}</p>
          <p>Status: ${payment.status}</p>
          <p>Date: ${createdAtDate}</p>
          <button id="generateContract${payment.id}" class="btn-generate-contract">Generate Contract</button>
        </div>
      `;

      let btnGenerateContract = document.getElementById(`generateContract${payment.id}`);
      btnGenerateContract.addEventListener("click", () => {
        console.log(payment);
        generateContract(payment.id);
      });
    });
  })
  .catch((error) => {
    console.error('Error fetching payment notice:', error);
    paymentsReceived.innerHTML = `<p class="text-center">Erro ao carregar os avisos de pagamento.</p>`;
  });
