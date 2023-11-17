import getPropertyCard from "../../../../assets/components/property-card.js";
import * as API from "../../../../assets/script/api.js";
import * as Alert from "../../../../assets/script/alert.js";

const cardContainer = document.getElementById("cardContainer");

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

API.get(`properties/` + id)
  .then((response) =>{

    if(!response.ok){
      Alert.alert(
        "Não foi possivel iniciar uma recisão para essa propriedade",
        "dange",
        "default",
        0
      );
      throw new Error("Unable to retrive property")
    }

    return response.json();
  
  })
  .then((property) => {
    cardContainer.innerHTML = getPropertyCard(property);
  })


