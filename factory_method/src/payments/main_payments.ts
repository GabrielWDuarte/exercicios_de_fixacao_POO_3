// Arquivo principal para testar a plataforma de pagamentos.
import { PaymentFactory } from "./PaymentFactory";

function main() {
  try {
    // Mude esse valor para "paypal" ou "boleto" para testar as outras formas.
    const paymentMethod = "creditcard";

    // Cria a instância de pagamento com o método escolhido.
    const payment = PaymentFactory.createPayment(paymentMethod);

    // Processa um pagamento fictício.
    payment.processPayment(199.90);
  } catch (error) {
    console.error("Erro ao processar pagamento:", error);
  }
}

// Executa o teste.
main();
