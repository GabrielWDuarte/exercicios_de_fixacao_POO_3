// Implementa a forma de pagamento com cartão de crédito.
import { Payment } from "./Payment";

export class CreditCardPayment implements Payment {
  processPayment(amount: number): void {
    // Aqui você poderia ter a lógica para processar o pagamento com cartão.
    console.log(`[Cartão] Pagamento de R$${amount.toFixed(2)} realizado com sucesso!`);
  }
}
