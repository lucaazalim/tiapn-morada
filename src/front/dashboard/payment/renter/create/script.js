import * as API from "../../../../assets/script/api.js";

let rentalsDropdown = document.getElementById("ImovelPagamento");
let submitButton = document.getElementById("enviarButton");
let rentValueInput = document.getElementById("ValorPagamento");
let monthDropdown = document.getElementById("MesPagamento");
let yearDropdown = document.getElementById("AnoPagamento");

// Função para carregar os aluguéis ativos do usuário
function loadRentals() {
    API.get("rentals/user")
        .then(response => response.json())
        .then(rentals => {
            // Limpa o dropdown antes de adicionar novas opções
            rentalsDropdown.innerHTML = '';
            rentals.forEach(rental => {
                let option = document.createElement("option");
                option.value = rental.id;
                option.textContent = `Imóvel ${rental.id}`;
                rentalsDropdown.appendChild(option);
            });
        })
        .catch(error => {
            console.error('Erro ao carregar aluguéis:', error);
        });
}

// Função para preencher os dropdowns de mês e ano
function populateDateDropdowns() {
    // Preenche o dropdown de meses
    const months = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];
    months.forEach((month, index) => {
        let option = document.createElement("option");
        option.value = index + 1; // Mês começa em 1, não 0
        option.textContent = month;
        monthDropdown.appendChild(option);
    });

    // Preenche o dropdown de anos, do ano atual até 2023
    const currentYear = new Date().getFullYear();
    for (let year = currentYear; year >= 2023; year--) {
        let option = document.createElement("option");
        option.value = year;
        option.textContent = year;
        yearDropdown.appendChild(option);
    }
}

// Função para submeter o pagamento
function submitPayment() {
    const rentalId = rentalsDropdown.value;
    const rentValue = rentValueInput.value;
    const competenceMonth = monthDropdown.value;
    const competenceYear = yearDropdown.value;

    const paymentData = {
        rentalId: rentalId,
        rentValue: parseFloat(rentValue), // Garante que o valor é um float
        competenceMonth: competenceMonth,
        competenceYear: competenceYear
    };

    API.post("payments", paymentData)
        .then(() => {
            alert('Pagamento registrado com sucesso.');
        })
        .catch(error => {
            console.error('Erro ao registrar pagamento:', error);
        });
}

// Adicionando evento de clique ao botão de enviar
submitButton.addEventListener("click", submitPayment);

// Carregar os aluguéis quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    loadRentals();
    populateDateDropdowns();
});
