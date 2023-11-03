// Aguarda pelo carregamento completo do DOM
document.addEventListener('DOMContentLoaded', () => {
    const aprovarButton = document.getElementById('aprovarButton');
    const rejeitarButton = document.getElementById('rejeitarButton');
    const apartamentoCheck = document.getElementById('apartamentoCheck');
    const contrapropostaValor = document.getElementById('contrapropostaValor');
    const propostaDefinitivaSwitch = document.getElementById('propostaDefinitivaSwitch');
  
    function handleAprovar() {
      if (apartamentoCheck.checked) {
        alert('O reajuste do valor do aluguel foi aprovado.');
      } else {
        alert('Selecione um imóvel antes de aprovar.');
      }
    }
  
    function handleRejeitar() {
      if (!apartamentoCheck.checked) {
        alert('Selecione um imóvel antes de rejeitar.');
        return;
      }
      const valor = parseFloat(contrapropostaValor.value);
      const propostaDefinitiva = propostaDefinitivaSwitch.checked;
      
      if (isNaN(valor) || valor <= 100) {
        alert('Por favor, insira um valor de contraproposta positivo e maior que 100.');
      } else {
        let mensagem = `A contraproposta de R$ ${valor.toFixed(2)} foi enviada como `;
        mensagem += propostaDefinitiva ? 'definitiva.' : 'não definitiva.';
        alert(mensagem);
      }
    }
    aprovarButton.addEventListener('click', handleAprovar);
    rejeitarButton.addEventListener('click', handleRejeitar);
  
  });
  