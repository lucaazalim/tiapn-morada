export default function getPropertyCard(property) {
    let totalValue =
      property.rentValue + property.condominiumFee + property.iptuValue;
  
    return /*html*/ `
          <div class="card">
              <img src="${
                property.photoBase64
              }" class="card-img-top" style="width: 100%; height: 200px; object-fit: cover;">
              <div class="card-body">
                  <h5>${property.label ? property.label : ""}</h5>
                  <p class="text-truncate">${property.street}, ${
      property.neighborhood
    }</p>
                  <hr>
                  <div class="text-muted mb-3">
                      <div class="row">
                        <div class="col">Proprietário:</div>
                        <div class="col text-end">${property.owner}</div>
                      </div>
                      <div class="row">
                        <div class="col">Inquilino:</div>
                        <div class="col text-end">${property.renter}</div>
                      </div>
                      <div class="row">
                        <div class="col">Pendencia:</div>
                        <div class="col text-end">${property.missing}</div>
                      </div>
                  </div>
                  <div class="d-grid">
                      <a href="/property/?id=${
                        property.id
                      }" class="btn btn-primary">Visualizar Imóvel</a>
                  </div>
              </div>
          </div>
      `;
  }
  
  function formatCurrency(value) {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  }
  
const btnCancelar = document.getElementById("btnCancelar");
btnCancelar.addEventListener("click", async()=>{
    window.location.href = "/";
    alert("teste")
    console.log("teste")
})