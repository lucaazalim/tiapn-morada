import getPropertyCard from "./card";

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
  let valor = valorDaPropostaInput.value;

  valor = valor.replace(/\D/g, "");

  valor = parseFloat(valor);
  valor = isNaN(valor) ? 0 : valor;

  valor = (valor / 100).toFixed(2);
  valor = `R$${valor}`;

  valorDaPropostaInput.value = valor;
});
