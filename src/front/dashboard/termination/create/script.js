import getPropertyCard from "../card.js";

const cardContainer = document.getElementById("cardContainer");

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

console.log("ID do imóvel: " + id);

const properties = {
  id: 1,
  photoBase64:
    "https://projetaronline.com/wp-content/uploads/2022/11/casa-pequena-planta-baixa-0.png",
  type: "apartment",
  street: "123 Main St",
  owner: "Jose",
  renter: "Maria",
  missing: "Não",
  neighborhood: "Downtown",
  rentValue: 1500,
  condominiumFee: 300,
  iptuValue: 100,
  // label: "teste",
};

cardContainer.innerHTML = getPropertyCard(properties);