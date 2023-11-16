import getPropertyCard from "../../../../assets/components/property-card.js";
import * as API from "../../../../assets/script/api.js";
import * as Alert from "../../../../assets/script/alert.js";

const cardContainer = document.getElementById("cardContainer");

const urlParams = new URLSearchParams(window.location.search);

let id = urlParams.get("id");
let dados;

API.get(`properties/` + id)
  .then((response) => {
    if (!response.ok) {
      Alert.alert(
        "Não foi possivel realizar uma proposta para este imóvel.",
        "danger",
        "default",
        0
      );
      throw new Error("Unable to retrieve property");
    }

    return response.json();
  })
  .then((property) => {
    dados = property;
    cardContainer.innerHTML = getPropertyCard(property);

    console.log(property.rentValue.toString());

    let valorSugerido = document.getElementById("ValorSugerido");
    console.log(valorSugerido.value);
    if (valorSugerido) {
      valorSugerido.value = `R$${property.rentValue.toString()}`;
    }
  });

const valorDaPropostaInput = document.getElementById("proposalValue");
valorDaPropostaInput.value = "R$";
valorDaPropostaInput.addEventListener("input", () => {
  let inputValue = valorDaPropostaInput.value;

  inputValue = inputValue.replace(/\D/g, "");

  inputValue = parseFloat(inputValue);
  inputValue = isNaN(inputValue) ? 0 : inputValue;

  inputValue = (inputValue / 100).toFixed(2);
  inputValue = `R$${inputValue}`;

  valorDaPropostaInput.value = inputValue;
});

const btnSend = document.getElementById("btnSend");
const btnCancel = document.getElementById("btnCancel");

btnCancel.addEventListener("click", () => {
  // window.location.href = `/property/?id=${id}`;
  console.log(dados.user.id)
});

document.getElementById("formOffer").addEventListener("submit", async (event) => {
  event.preventDefault();

  const proposalValue = document.getElementById("proposalValue").value;

  try {
    const response = await API.post('offer',{
      rentValue: proposalValue,
      property_id: id
    });
    
    if(response.status === 201){
      window.location.href =  "/dashboard"
    }else{
      const data = await response.json();
      Alert.alert(data.message, "danger")
    }
  } catch (error) {
    console.error("Error on request", error)
  }


})
