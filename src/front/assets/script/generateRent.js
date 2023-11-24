import * as API from "./api.js"
import * as Alert from "./alert.js"

export default function generateContract(id){
let rental = "";
API.get("offers/" + id)
    .then((response) => {
      if (!response.ok) {
        Alert.alert("Não foi possivel realizar uma proposta", "danger");
        throw new Error("Unable to retrieve rent");
      }

      return response;
    })
    .then((response) => response.json())
    .then((offer) => {
    rental =
      `
            <h1>Assine o contrato</h1>
      <h5>Assine aqui o contrato.</h5>
      <hr />
      <div id="contract" class="border border-black rounded p-2">
        <h2>Contrato de locação residencial</h2>

        <!-- Identificação do Locador -->
        <div>
            <h5>LOCADOR(A)</h5>
            <p>${offer.property.user.name}, inscrito(a) no CPF sob o n° ${offer.property.user.cpf}</p>
        </div>

        <!-- Identificação do Locatario -->
        <div>
            <h5>LOCATARIO(A)</h5>
            <p>${offer.user.name}, inscrito(a) no CPF sob o n° ${offer.user.cpf}</p>
        </div>

        <!-- Objeto do contrato -->
        <div>
            <h5>OBJETO</h5>
            <div>
                <p><strong>Cláusula 1.</strong>O presente Contrato tem por objeto a locação do imovel residencial situano na <strong>${offer.property.street},${offer.property.neighborhood},${offer.property.number}, ${offer.property.complement}</strong>
                    com o total de <strong>${offer.property.area} metros quadrados</strong>.
                </p>
            </div>
        </div>

        <!-- Termos do valor de aluguel -->
        <div>
            <h5>Do valor do aluguel</h5>
            <div>
                <p>
                    <strong>Cláusula 2.</strong> O aluguel mensal, deverá ser pago até o dia <strong>30</strong> do mes subsequente ao vencido,
                    da maneira indicada e escolhida pelo(a) <strong>LOCADOR</strong>, no valor de R$${offer.rentValue} mensais
                </p>
                <p>
                    <strong>Cláusula 2.1.</strong> o pagamento sera realizado via <strong>PIX</strong>
                </p>
            </div>
        </div>

        <!-- Termos de recisão -->
        <div>
            <h5>DA RECISÃO DE CONTRATO</h5>
            <p>
                <strong>Cláusula 3</strong> A qualquer momento, poderão as Partes de comum acordo rescindir esse contrato, sendo que não
                incidirão quaiquer ônus, encargos ou penalidades, ressalvando o cumprimento das obrigações contratuais ainda pendentes. Não obstante, a outra parte deverá
                ser avisada previamente, no prazo de 60 dias.
            </p>
        </div>

        <!-- Assinaturas -->
        <div>
            <h5>LOCADOR(A)</h5>
            <div>
                <p>Assinatura</p>
            </div>
            <h5>LOCATARIO(A)</h5>
            <div>
                <p>Assinatura</p>
            </div>
        </div>
    </div>
        `

    API.post("rentals",{
        propertyId: offer.property.id,
        offerId: offer.id,
        rentValue: offer.rentValue,
        contractHtml: rental,
        contract_signed_by_owner: 0,
        contract_signed_by_renter: 0,
        terminated: 0,
        createdAt: new Date()
    })
        .then(response => {
            if(response.status === 201){
                alert("sucesso")
                window.location.href = `/dashboard/rentals/owner/?id=${offer.property.id}`
            } else{
                let data = response.json()
                Alert.alert(data.message, "danger")
            }
        })
    })  
}