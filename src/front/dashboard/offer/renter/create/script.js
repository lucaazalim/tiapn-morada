import getPropertyCard from "./card.js";

const cardContainer = document.getElementById("cardContainer");

const properties = {
  id: 1,
  photoBase64:
    "https://projetaronline.com/wp-content/uploads/2022/11/casa-pequena-planta-baixa-0.png",
  type: "apartment",
  street: "123 Main St",
  neighborhood: "Downtown",
  rentValue: 1500,
  condominiumFee: 300,
  iptuValue: 100,
  label: "teste",
};

cardContainer.innerHTML = getPropertyCard(properties);

// const valorSugerido = document.getElementById("valorSugerido");
ValorSugerido.value = `R$${properties.rentValue}`;

ValorDaProposta.value = "R$";
const valorDaPropostaInput = document.getElementById("ValorDaProposta");
valorDaPropostaInput.addEventListener("input", () => {
  let inputValue = valorDaPropostaInput.value;

  inputValue = inputValue.replace(/\D/g, "");

  inputValue = parseFloat(inputValue);
  inputValue = isNaN(inputValue) ? 0 : inputValue;

  inputValue = (inputValue / 100).toFixed(2);
  inputValue = `R$${inputValue}`;

  valorDaPropostaInput.value = inputValue;
});
