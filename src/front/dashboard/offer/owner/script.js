
const cardData = [
    {
        property: "Casa na Praia",
        street: "Rua das Palmeiras, 123",
        value: 250000,
        imageSrc: "https://casademadeira.com.br/wp-content/uploads/2023/08/casa-de-madeira-argentina-5.jpg"
    },
    {
        property: "Apartamento no Centro",
        street: "Avenida Principal, 456",
        value: 150000,
        imageSrc: "https://example.com/apartment-image.jpg"
    },
    // Adicione mais objetos conforme necessário
];


    let offersRecived = document.getElementById("content")

    cardData.forEach((offers)=>{
    
    offersRecived.innerHTML += `
    <div class="row border roundeds w-auto p-3 m-2">
    <div class="col-1 d-flex justify-content-center align-content-center">
        <img class="" style="height: 12vh;" src="https://casademadeira.com.br/wp-content/uploads/2023/08/casa-de-madeira-argentina-5.jpg">
    </div>
    <div class="col-11">
        <div class="d-flex flex-row justify-content-between w-100">
            <div class="" id="dados">
                <div>${offers.property}</div>
                <div>${offers.street}</div>
                <div>${formatCurrency(offers.value)}</div>
            </div>
            <div id="buttons" class="col-2 d-flex flex-column text-end justify-content-around">
                <button class="btn btn-success btn-sm">Aceitar</button>
                <button class="btn btn-danger btn-sm">Recusar</button>
            </div>
        </div>
    </div>
</div>
    `
})


function formatCurrency(value) {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  }


