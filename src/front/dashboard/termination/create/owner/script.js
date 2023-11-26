import getPropertyCard from "../../../../assets/components/property-card.js";
import * as API from "../../../../assets/script/api.js";
import * as Alert from "../../../../assets/script/alert.js";

const cardContainer = document.getElementById("cardContainer");

const urlParams = new URLSearchParams(window.location.search);
const propertyId = urlParams.get('propertyId');
const rentalId = urlParams.get('id')

API.get(`properties/` + propertyId)
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
    console.log(property)
    cardContainer.innerHTML = getPropertyCard(property);

})

document.getElementById("confirm").addEventListener("click", ()=>{

  const message = document.getElementById("message").value;


  API.put(`rentals/` + rentalId, {
    terminated: 1
  })
    .then(response => {
      if(response.status == 201){
        window.location.href = "/dashboard";
      }else{
        let data = response.json();
        Alert.alert(data.message, "danger")
      }
  })

  API.post(`terminations`, {
    rentalId,
    initiatedByOwner: 1,
    message
  })
    .then(response => {
      if(response.status == 201){
        window.location.href = "/dashboard" 
      }else{
        let data = response.json();
        Alert.alert(data.message, "danger")
      }
    })
  })
