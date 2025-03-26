// Implementa o pagamento via PayPal.
import { Payment } from "./Payment";

export class PayPalPayment implements Payment {
  processPayment(amount: number): void {
    // Em um cenário real, poderia redirecionar para a página do PayPal.
    console.log(`[PayPal] Pagamento de R$${amount.toFixed(2)} processado com sucesso!`);
  }
}
